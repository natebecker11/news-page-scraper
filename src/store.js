import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentArticles: [],
    currentComments: [],
    activeArticleId: ''
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
        .then(({ scraped }) => {})
    }
  }
})
