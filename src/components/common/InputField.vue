<template>
  <input
    class="form-control"
    type="text"
    placeholder="Search"
    aria-label="readonly input example"
    @input="handleChange"
  />
</template>

<script>
export default {
  name: 'input-field',
  methods: {
    handleChange(e) {
      this.$emit('input', e)
    }
  }
}
</script>
