<template>
  <div v-if="errors.length">
    <div class="alert alert-danger" role="alert">
      <template v-if="Array.isArray(errors)">
        <p v-for="error in errors" :key="error">{{ error }}</p>
      </template>
      <p v-else>{{ errors }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: {
    errors: { type: [String, Array], default: () => [] }
  }
}
</script>