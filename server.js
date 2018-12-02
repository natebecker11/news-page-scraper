const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const cheerio = require('cheerio')



const databaseUrl = 'mongodb://localhost/news-scraper'

if (process.env.MONGODB_URI) mongoose.connect(process.env.MONGODB_URI)
else mongoose.connect(databaseUrl, { useNewUrlParser: true })



const db = mongoose.connection

db.on('error', err => console.error(`Mongoose Error: ${err}`))

db.once('open', _ => console.log('Mongoose connection successful.'))