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
