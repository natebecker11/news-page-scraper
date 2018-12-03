import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentArticles: [
      {
          "comment": [
              "5c04921cc8e51d675c281693",
              "5c049224c8e51d675c281694"
          ],
          "_id": "5c0491dbc8e51d675c281689",
          "title": "Technology Is Not The Solution To Everything!",
          "author": "Chris Yates",
          "description": "I’m a tech guy, I work in tech, and for as long as I can remember I have championed the tech movement in all areas of work and play.",
          "link": "https://medium.com/p/4b1655a7f80e",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168a",
          "title": "You Are Transhuman Already",
          "author": "Doug",
          "description": "In 1945 an American military airplane crashed in the jungle of Papua New Guinea. Three of the passengers, including one woman, survived…",
          "link": "https://medium.com/p/2b69042897fd",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168b",
          "title": "Building relationships in the Age Of Screens",
          "author": "Barry de Waal",
          "description": "",
          "link": "https://medium.com/p/eecd4816250f",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168c",
          "title": "AirPods Disappoint Me",
          "author": "Noah Tesfaye",
          "description": "I love technology.",
          "link": "https://medium.com/p/e28925e8f629",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168d",
          "title": "Amazing Medical Advances",
          "author": "Tony Deller in Predict",
          "description": "These wonders of modern medicine would be considered magic 100 years ago.",
          "link": "https://medium.com/p/c2ac1ff3dc5d",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168e",
          "title": "Who is the Employer?",
          "author": "Andreï B. Sterescu",
          "description": "Reclassifying Work Relations to Prevent Uberisation",
          "link": "https://medium.com/p/a3880f5639a3",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c28168f",
          "title": "It’s Time to Revisit the Infamous ‘Google Memo’",
          "author": "Emily J. Smith",
          "description": "Yes, women are less interested in tech, and that’s why we need diversity more than ever",
          "link": "https://medium.com/p/367e3b9c3a29",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c281690",
          "title": "In Science Fiction, We Are Never Home",
          "author": "Nautilus",
          "description": "Where technology leads to exile and yearning",
          "link": "https://medium.com/p/d66dd7700fdc",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c281691",
          "title": "5 Key Insights on Facebook’s AR Strategy",
          "author": "Mark Persaud",
          "description": "Recently Facebook confirmed that the world’s largest social media platform is building augmented reality glasses, a move that extends…",
          "link": "https://medium.com/p/7c9055d3b9af",
          "__v": 0
      },
      {
          "comment": [],
          "_id": "5c0491dbc8e51d675c281692",
          "title": "WIRED Magazine: A look inside the tech icon’s potential for more tech",
          "author": "Ben Szabo",
          "description": "WIRED Magazine has been a leader in the technology industry since the early 1990s. WIRED helped cover the start of the personal computing…",
          "link": "https://medium.com/p/27b8e48b7bcf",
          "__v": 0
      }
  ],
    currentComments: [],
    activeArticleId: ''
  },
  getters: {
    getCurrentArticles: state => state.currentArticles,
    getCurrentComments: state => state.currentComments,
    getActiveArticleId: state => state.activeArticleId
  },
  mutations: {
    setCurrentArticles(state, articles) {
      state.currentArticles = articles
    },
    setCurrentComments(state, comments) {
      state.currentComments = comments
    },
    setActiveArticle(state, articleId) {
      state.activeArticleId = articleId
    }
  },
  actions: {
    scrapeArticles() {
      return axios.post('/api/scrape')
        .then(({ scraped }) => {
          if (scraped) {
            // load the page
          }
        })
    },

    fetchArticles() {
      return axios.post('/api/get/articles')
        .then(response => {
          console.log(response)
        })
    }
  }
})
