<template>
  <div id="app">
    <!-- <Navbar></Navbar> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    // Navbar,
    Footer,
  }
}
</script>

<style>
/* ENG: Merriweather sans, KOR: Noto Sans */
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;500;600;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
:root {
  --bg-black: #0E1B1D;
  --bg-blue: #A3B0C2;
}

body {
  background-color: var(--bg-black);
  margin: 0 auto;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Merriweather Sans', 'Noto Sans KR', sans-serif, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1680px;   /* Mobile(0~768), Tablet(769~1024), DeskTop(1024~1680) */
  margin: 0 auto;
}
</style>
