<template>
  <div class="about-container">
    <h1>SocialVue</h1>
    <div class="status-wrapper">
      <img class="status" src="../assets/status.svg" alt="status" />
    </div>
    
    <h3>Technology</h3>
    <div class="technology">
      <div>
        <ul>
          <li>HTML5</li>
          <li>CSS 3</li>
          <li>Javascript</li>
          <li>
            Vuejs 2 -
            <i>Javascript Framework</i>
          </li>
          <li>
            Vuex -
            <i>State Management</i>
          </li>
          <li>
            Vue Router -
            <i>Routing</i>
          </li>
          <li>
            Axios -
            <i>HTTP requests</i>
          </li>
          <li>
            JSONPlaceholder -
            <i
              >a free online REST API that you can use whenever you need some
              fake data.</i
            >
          </li>
          <li>
            SweetAlert2 -
            <i>
              A beautiful, responsive, customizable, accessible (WAI-ARIA)
              replacement for JavaScript's popup boxes</i
            >
          </li>
        </ul>
      </div>
      <img src="../assets/code.svg" alt="code" />
    </div>
    <section class="src">      
    </section>
  </div>
</template>
<style scoped>
.about-container {
  background: white;
  margin-top: 50px;
  padding: 50px 20px;
  min-height: 100vh;
  margin-bottom: auto;
}
h1 {
  margin-bottom: 20px;
}
h3 {
  margin: 10px 0;
}
h4 {
  margin-left: 30px;
  color: #41b883;
}
ul {
  padding: 5px 50px;
}
li {
  margin: 10px 0;
}
.src {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  width: 100%;
}
.status-wrapper {
  display: flex;
  justify-content: center;
}
.status {
  height: 400px;
}
.what-can {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.what-can .image img {
  width: 100%;
}
.technology {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.technology img {
  width: 100%;
  height: 300px;
}
</style>
