<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">CIN</th>
          <th scope="col">Pin Code</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="company in companies" :key="company.id">
          <td class="fs-6">{{ company.name }}</td>
          <td class="fs-6">{{ company.cin }}</td>
          <td class="fs-6">{{ company.pin_code }}</td>
          <td class="fs-6">
            <div class="d-flex gap-3">
              <span role="button">
                <i
                  class="fa fa-pencil"
                  @click="handleAction(company, 'update')"
              /></span>
              <span role="button"
                ><i class="fa fa-info" @click="handleAction(company, 'detail')"
              /></span>
              <span role="button"
                ><i
                  class="fa fa-trash"
                  @click="handleAction(company, 'delete')"
              /></span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination pagination-sm justify-content-end">
        <li :class="['page-item', { disabled: pagination.page === 1 }]">
          <a @click="fetchCompanyList(pagination.page-1)" class="page-link"><span aria-hidden="true">&laquo;</span></a>
        </li>
        <li @click="fetchCompanyList(idx)" :key="idx" v-for="idx in pagination.totalPages" :class="['page-item', {active: pagination.page === idx}]"><a class="page-link">{{ idx }}</a></li>
        <li
          :class="[
            'page-item',
            { disabled: pagination.page === pagination.totalPages }
          ]"
        >
          <a @click="fetchCompanyList(pagination.page+1)" class="page-link" href="#"
            ><span aria-hidden="true">&raquo;</span></a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'client-List',
  props: {
    searchKeyword: { type: String, default: '' }
  },
  data() {
    return {
      companies: [],
      activeId: 0,
      pagination: {
        limit: 10,
        offset: 0,
        page: 1,
        totalPages: 1
      }
    }
  },
  methods: {
    updateList(data) {
      if (data.update) {
        this.companies = this.companies.map(q =>
          data.data.id === q.id ? data.data : q
        )
      } else this.companies.push(data.data)
    },
    async fetchCompanyList(page=1) {
      try {
        this.pagination.page = page
        const { data } = await this.$http.get('/', {
          params: { ...this.pagination, q: this.searchKeyword }
        })
        this.companies = data.data.clients
        this.pagination.totalPages = data.data.totalPages
        const [first] = this.companies
        if (this.companies.length) this.handleAction(first, 'detail')
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    async deleteClient(companyId) {
      try {
        await this.$http.delete(`/${companyId}`)
        this.companies = this.companies.filter(q => q.id !== companyId)
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    handleAction(company, action) {
      if (action === 'delete') this.deleteClient(company.id)
      else this.$emit('action', { company, action })
    },
  },
  mounted() {
    this.fetchCompanyList()
  },
  watch: {
    searchKeyword() {
      this.fetchCompanyList()
    }
  }
}
</script>

<style scoped>
.pagination > li {
  cursor: pointer;
}
.page-link {
  color: azure
}
</style>
