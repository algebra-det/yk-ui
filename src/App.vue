<template>
  <div id="app" class="container">
    <div class="d-flex justify-content-around">
      <div class="w-50">
          <search class="mb-4" />
        <div class="client-list">
          <list></list>
        </div>
      </div>
      <div class="w-50">Hello</div>
      <!-- Content here -->
    </div>
  </div>
</template>

<script>
import List from './components/client/List'
import Search from './components/client/Search'

export default {
  name: 'App',
  components: {
    List,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.client-list {
  max-height: 80vh;
  overflow-y: scroll;
  border: 1px solid gray;
  border-radius: 30px;
}
.client-list::-webkit-scrollbar {
  /* display: none; */
}
::-webkit-scrollbar {
  width: 5px;
  margin-top: 50px;
  z-index: -10;
}

/* Track */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  /* background: rgba(255, 0, 0, 0.8); */
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.fs-6 {
  font-size: 0.75rem !important;
}
.fs-5 {
  font-size: 1rem !important;
}
p {
  margin-bottom: 0.25rem;
}
</style>
