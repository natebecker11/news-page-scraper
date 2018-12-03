<template>
  <div>
    <a :href='this.article.link'> <h3> {{ article.title }} </h3> </a>
    <p> {{ article.description }} </p>
    <button :articleId='this.article._id' @click='setA(article._id)'>Add Comment</button>
    <p style='font-weight: bold;'>By {{ article.author }} </p>
  </div>
</template>

<script>
export default {
  props: ['article'],
  methods: {
    setA(articleId) {
      return this.$store.commit('setActiveArticle', articleId)
    }
  }
}
</script>

