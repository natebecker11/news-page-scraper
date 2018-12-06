<template>

  <div>
    <a :href='this.article.link' target='_blank'> <h3> {{ article.title }} </h3> </a>
    <p> {{ article.description }} </p>
    <p style='font-weight: bold;'>By {{ article.author }} </p>
    <button :articleId='this.article._id' @click='selectArticle({articleId: article._id})'>See Comments</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['article'],
  methods: {
    ...mapActions([
      'selectArticle'
    ]),
    setA(articleId) {
      return this.$store.commit('setActiveArticle', articleId)
    }
  }
}
</script>

