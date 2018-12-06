import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentArticles: [],
    currentComments: [
      {
        "title": "Hey brosef",
        "body": "Hey broooosef"
      },
      {
        "title": "Wubba",
        "body": "dubba lubba"
      }
    ],
    activeArticleId: '',
    fetching: false
  },
  getters: {
    getCurrentArticles: state => state.currentArticles,
    getCurrentComments: state => {
      return state.currentComments.slice().reverse()
    },
    getActiveArticleId: state => state.activeArticleId,
    getFetching: state => state.fetching
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
    },
    setFetching(state) {
      state.fetching = true
    }
  },
  actions: {
    scrapeArticles() {
      return axios.post('/api/scrape')
    },

    fetchArticles( {commit} ) {
      return axios.post('/api/get/articles')
        .then(response => {
          // console.log(response.data)
          commit('setCurrentArticles', response.data)
        })
    },

    postComment({ dispatch } , { id, postedComment }) {
      event.preventDefault()
      console.log('acticleId', id)
      // console.log('comment', postedComment)
      return axios.post(`/api/post/articles/${id}`, postedComment)
        // .then(({ status }) => status === 200)
        .then(response => {
          dispatch('selectArticle', { articleId: id })
        })
    },

    selectArticle({ commit }, { articleId }) {
      return axios.post(`/api/get/articles/${articleId}`)
        .then(({ data }) => {
          console.log(data)
          commit('setCurrentComments', data.comment)
          commit('setActiveArticle', data._id)
        })
    }
  }
})
