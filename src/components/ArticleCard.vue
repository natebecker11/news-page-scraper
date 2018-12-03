<template>
  <div>
    <a :href='this.article.link'> <h3> {{ article.title }} </h3> </a>
    <p>By {{ article.author }} </p>
  </div>
</template>

<script>
export default {
  props: ['article']
}
</script>

