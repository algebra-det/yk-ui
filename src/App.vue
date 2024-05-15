<template>
  <div id="app" class="mx-5 my-2" data-bs-theme="dark">
    <div class="d-flex justify-content-end mb-3">
      <elastic-search-dropdown @action="handleAction" />
    </div>
    <error :errors="errors" />
    <div class="d-flex justify-content-around gap-5">
      <div class="flex-grow-1">
        <div class="row">
          <div class="col col-sm-11">
            <search-field class="mb-4" @change="handleSearch" />
          </div>
          <div class="col col-sm-1">
            <div
              @click="handleAction()"
              class="form-control d-flex justify-content-center add-icon"
            >
              <i class="fa fa-plus text-white" />
            </div>
          </div>
        </div>
        <div>
          <list
            ref="list"
            :search-keyword="searchKeyword"
            @action="handleAction"
            @error="setError"
          />
        </div>
      </div>
      <div class="flex-shrink-1 main-client">
        <main-client
          ref="mainClient"
          @error="setError"
          @update="handleUpdate"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Error from './components/common/Error.vue'
import List from './components/client/List'
import SearchField from './components/common/SearchField.vue'
import ElasticSearchDropdown from './components/common/ElasticSearchDorpdown.vue'
import MainClient from './components/client/MainClient'

export default {
  name: 'App',
  components: {
    Error,
    List,
    SearchField,
    ElasticSearchDropdown,
    MainClient
  },
  data() {
    return {
      searchKeyword: '',
      errors: []
    }
  },
  methods: {
    emptyErrors() {
      this.errors = []
    },
    handleSearch(search) {
      this.searchKeyword = search
      this.emptyErrors()
    },
    handleAction(data) {
      let actionData = data
      this.emptyErrors()
      if (!data) actionData = { action: 'create' }
      this.$refs.mainClient.setComponentData(actionData)
    },
    setError(errors) {
      this.errors = errors
    },
    handleUpdate(data) {
      this.$refs.list.updateList(data)
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
.add-icon {
  padding: 0.6rem 1.5rem;
  cursor: pointer;
}
.main-client {
  width: 35%;
}
</style>
