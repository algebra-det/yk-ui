<template>
  <div class="input-group mb-3">
    <input
      class="form-control"
      type="text"
      placeholder="Search"
      v-model="search"
      @keyup.enter="emitChange"
    />
    <span class="input-group-text" @click="emitChange" id="basic-addon2"
      ><i class="fa fa-search"></i
    ></span>
  </div>
</template>

<script>
export default {
  name: 'search-field',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    handleChange(e) {
      this.search = e
      this.emitChange()
    },
    emitChange() {
      this.$emit('change', this.search)
    },
    handleEnter(e) {
      console.log('Event: ', e)
    }
  }
}
</script>

<style scoped>
#basic-addon2 {
  cursor: pointer;
}
</style>
