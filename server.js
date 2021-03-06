const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')

const db = require('./models')

const app = express()
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('./dist'))

const databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost/news-scraper'
mongoose.connect(databaseUrl, { useNewUrlParser: true })


// POST route for scraping CNN.com
app.post('/api/scrape', (req, res) => {
  axios.get('https://medium.com/topic/technology')
    .then(response => {
      // console.log('hi1')
      const $ = cheerio.load(response.data)
      const payload = []
      $('div.l.fm.q.s.fn').each(function(i, element) {         
        // console.log($(this).children('.fz.c').children('.o.s.cg').children('.c.fo').children('.s').children('.bj.b.bk.bl').children('a').text())
        let entry = {}
        entry.title = $(this).children('.fr.c.fq').children('.dv.dw').children('h3').text()
        entry.author = $(this).children('.fz.c').children('.o.s.cg').children('.c.fo').children('.s').children('.bj.b.bk.bl').children('a').text()
        entry.description = $(this).children('.fr.c.fq').children('.dv.dw').children('.eb.c').children('p').children('a').text()
        entry.link = `https://medium.com${$(this).children('.fr.c.fq').children('.dv.dw').children('h3').children('a').attr('href').slice(0, 15)}`
        payload.push(entry)
        // console.log(entry)
      })
      return db.Article.insertMany(payload)
    })
    .then(articlesInserted => {
      console.log(articlesInserted)
      res.json({ scraped: true, error: false })
    })
    .catch(err => {
      console.log(err)
      res.json({ scraped: true, error: true })
    })    
})

// POST route for grabbing all articles from the DB
app.post('/api/get/articles', (req, res) => {
  db.Article.find({})
    .then(dbArticle => {
      res.json(dbArticle)
    })
    .catch(err => res.json(err))
})

// POST route for grabbing an article and populating with comments
app.post('/api/get/articles/:id', (req, res) => {
  db.Article.findOne({ _id: req.params.id })
    .populate('comment')
    .then(dbArticle => res.json(dbArticle))
    .catch(err => res.json(err))
})

// POST route for saving a comment to an article
app.post('/api/post/articles/:id', (req, res) => {
  console.log(req.body)
  db.Comment.create(req.body)
    .then(dbComment => {
      console.log(dbComment)
      console.log(req)
      return db.Article.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { comment: dbComment._id } },
        { new: true }
      )
    })
    .then(dbArticle => {
      console.log(dbArticle)
      return res.json(dbArticle)
    })
    .catch(err => res.json(err))
})

// PUT route for updating a comment on an article
app.put('/api/put/comments/:id', (req, res) => {
  db.Comment.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  )
  .then(dbComment => res.json(dbComment))
  .catch(err => res.json(err))
})

// DELETE route for deleting a comment on an article
app.delete('/api/delete/comments/:id', (req, res) => {
  db.Comment.findOneAndDelete(
    { _id: req.params.id }
  )
  .then(response => res.json(response))
  .catch(err => res.json(err))
})



app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 8080;
app.listen(PORT);