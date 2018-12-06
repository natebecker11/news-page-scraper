<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=EB+Garamond|Oswald');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
    font-family: 'EB Garamond', serif;

}

h1, h2, h3, h4, h5 {
  font-family: 'Oswald', sans-serif;
}

h1 {
  font-size: 200%;
}
p {
  font-size: 14px;
}

a, a:visited {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

button {
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.3em 0.3em 0;
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'EB Garamond', serif;
  font-weight:300;
  color:#f6f930;
  background-color:#3d2645;
  text-align:center;
  transition: all 0.2s;
}
button:hover{
  background-color:#38233f;
}
button:disabled {
  background-color: #837488;
}

</style>
