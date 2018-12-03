<template>
  <div class='main-grid'>
    <section class='header'>
      <h1>News Page Scraper</h1>
      <h2>All The News That's Fit To Scrape</h2>
    </section>
    <section class="articles">
      <!-- <div v-for='(article, i) in articles' :key='i'>
        <h3> {{ article.title }} </h3>
      </div> -->
      <article-card  v-for='(article, i) in articles' :key='i' :article='article'></article-card>

    </section>
    <section class="comments">

    </section>
    <footer class="footer">
      <p>Copyright 2018 <a href='http://natebecker11.com' target='_blank'>Nate Becker</a></p>
    </footer>
  </div>
</template>


<script>
import articleCard from '../components/ArticleCard'
export default {
  computed: {
    articles() {
      return this.$store.getters.getCurrentArticles
    },
    comments() {
      return this.$store.getters.getCurrentComments
    },
    activeArticle() {
      return this.$store.getters.getActiveArticleId
    }
  },
  components: {
    articleCard
  }
}
</script>



<style scoped>

  .main-grid {
    display: grid;
    grid-template-columns: 5fr 2fr; 
    grid-gap: '20px';
    grid-template-areas: 
      'header header'
      'articles addcomment'
      'articles comments'
      'articles comments'
      'footer footer';
  }

  .header {
    grid-area: header;
  }

  .articles {
    grid-area: articles;
  }

  .comments {
    grid-area: comments;
  }

  .addcomment {
    grid-area: addcomment;
  }

  .footer {
    grid-area: footer;
  }
</style>
