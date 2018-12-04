<template>
  <div>
    <h3> {{ comment.title }} </h3>
    <p> {{ comment.body }} </p>
  </div>
</template>

<script>
export default {
  props: ['comment']  
}
</script>

