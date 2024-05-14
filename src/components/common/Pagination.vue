<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination pagination-sm justify-content-end">
      <li :class="['page-item', { disabled: page === 1 }]">
        <a @click="emitPageChange(page - 1)" class="page-link"
          ><span aria-hidden="true">&laquo;</span></a
        >
      </li>
      <li
        @click="emitPageChange(idx)"
        :key="idx"
        v-for="idx in totalPages"
        :class="['page-item', { active: page === idx }]"
      >
        <a class="page-link">{{ idx }}</a>
      </li>
      <li :class="['page-item', { disabled: page === totalPages }]">
        <a @click="emitPageChange(page + 1)" class="page-link" href="#"
          ><span aria-hidden="true">&raquo;</span></a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'client-update',
  props: {
    page: { type: Number, default: 1 },
    totalPages: { type: Number, default: 1 }
  },
  methods: {
    emitPageChange(number) {
      this.$emit('page-change', number)
    }
  }
}
</script>

<style scoped>
.pagination > li {
  cursor: pointer;
}
.page-link {
  color: azure;
}
</style>
