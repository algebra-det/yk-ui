<template>
  <div class="dropstart">
    <input
      type="text"
      placeholder="Elastic Search..."
      class="form-control dropdown-toggle"
      data-bs-toggle="dropdown"
      v-model="searchKeyword"
      aria-expanded="false"
      @input="querySearch"
    />
    <ul class="dropdown-menu">
      <li v-if="searchKeyword.length < 3">
        <button class="dropdown-item disabled" type="button">
          type at least 3 keywords
        </button>
      </li>
      <li v-else-if="loading">
        <button class="dropdown-item disabled" type="button">Loading...</button>
      </li>
      <li v-else-if="!fetchedList.length">
        <button class="dropdown-item disabled" type="button">
          No Results Found
        </button>
      </li>
      <template v-else>
        <li
          v-for="client in fetchedList"
          :key="client.id"
          @click="handleClick(client)"
        >
          <button class="dropdown-item" type="button">
            {{ client.name || client.email }} - {{ client.cin }}
          </button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import UtilityMixin from '@/mixins/UtilityMixin.vue'
export default {
  name: 'elastic-search-dropdown',
  data() {
    return {
      error: '',
      loading: false,
      querySearch: '',
      fetchedList: [],
      searchKeyword: ''
    }
  },
  mixins: [UtilityMixin],
  methods: {
    initializeQuerySearch() {
      this.querySearch = this.debounce(this.handleSearch, 1000)
    },
    async handleSearch() {
      try {
        this.fetchedList = []
        if (this.searchKeyword.length < 3) return
        const { data } = await this.$http.get('/', {
          params: {
            q: this.searchKeyword
          }
        })
        console.log('Res: ', data.data)
        this.fetchedList = data.data.clients
      } catch (error) {
        console.log('Error while searching: ', error)
      } finally {
        this.loading = false
      }
    },
    handleClick(client) {
      console.log('E: ', client)
      this.$emit('action', { action: 'detail', company: client })
    }
  },
  mounted() {
    this.initializeQuerySearch()
  }
}
</script>

<style scoped>
#basic-addon2 {
  cursor: pointer;
}
</style>
