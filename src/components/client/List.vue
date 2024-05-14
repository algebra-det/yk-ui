<template>
  <div class="list-group">
    <a
      v-for="company in companies"
      :key="company.id"
      :class="[
        'list-group-item list-group-item-action',
        { active: activeId === company.id }
      ]"
      aria-current="true"
      @click.prevent="activeId = company.id"
    >
      <h3>
        <p class="fs-5 text-uppercase">{{ company.name }}</p>
      </h3>
      <p class="fs-6">{{ company.status }}</p>
      <p class="fs-6">CIN: {{ company.cin }}, PIN CODE: {{ company.pin_code }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'client-List',
  props: {
    msg: String
  },
  data() {
    return {
      companies: [],
      activeId: 0
    }
  },
  methods: {
    async fetchCompanyList() {
      try {
        const { data } = await this.$http.get('/')
        console.log('Res: ', data)
        this.companies = data.data.clients
      } catch (error) {
        console.log('Error: ', error)
      }
    }
  },
  mounted() {
    this.fetchCompanyList()
  }
}
</script>

<style scoped></style>
