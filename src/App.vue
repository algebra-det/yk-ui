<template>
  <div id="app" class="container m-5" data-bs-theme="dark">
    <div class="d-flex justify-content-around">
      <error :errors="errors" />
      <div class="w-50">
        <search-field class="mb-4" @change="handleSearch" />
        <div>
          <list
            :search-keyword="searchKeyword"
            @action="handleAction"
            @error="setError"
          />
        </div>
      </div>
      <div class="w-50">
        <main-client ref="mainClient" @error="setError" />
      </div>
    </div>
  </div>
</template>

<script>
import Error from './components/common/Error.vue'
import List from './components/client/List'
import SearchField from './components/common/SearchField.vue'
import MainClient from './components/client/MainClient'

export default {
  name: 'App',
  components: {
    Error,
    List,
    SearchField,
    MainClient
  },
  data() {
    return {
      rightComponent: 'create',
      searchKeyword: '',
      errors: []
    }
  },
  methods: {
    handleSearch(search) {
      this.searchKeyword = search
    },
    handleAction(data) {
      this.$refs.mainClient.setComponentData(data)
    },
    setError(errors) {
      this.errors = errors
    }
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
