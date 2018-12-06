<template>
  <div>
    <h1>Medium.com Tech Scraper</h1>
    <button @click='$router.push({ path: "content/" })' :disabled='buttonActive'>Click Here To Begin</button>
    <div v-if='buttonActive'>
      <h3>Please wait while we gather the latest articles...</h3>
      <img src="../assets/loading.gif" alt="A spinning loading image.">
    </div>
  </div>
</template>

<script>
export default {
  computed: {    
    buttonActive() {
      return this.$store.getters.getFetching
    }    
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('setFetching')
    this.$store.dispatch('scrapeArticles')
      .then(({ data }) => {
        if (data.scraped) next()
    })
  }
}

</script>
