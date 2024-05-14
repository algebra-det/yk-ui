<template>
  <div>
    <input-field class="mb-4" @change="handleChange" />
  </div>
</template>

<script>
import InputField from '../common/InputField'

export default {
  name: 'client-search',
  components: {
    InputField
  },
  methods: {
    handleChange(search) {
      console.log('search: ', search)
    }
  }
}
</script>
