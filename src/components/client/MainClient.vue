<template>
  <component
    v-bind:is="activeComponent"
    :client-data="clientData"
    @error="setErrors"
    @update="emitUpdate"
  />
</template>

<script>
import Form from './Create.vue'
import Detail from './Detail.vue'

const COMPONENT_MAP = {
  create: Form,
  update: Form,
  detail: Detail
}

export default {
  name: 'main-client',
  components: {
    Error,
    Form,
    Detail
  },
  data() {
    return {
      activeComponent: Detail,
      clientData: {}
    }
  },
  methods: {
    setErrors(errors) {
      this.$emit('error', errors)
    },
    setComponentData(data) {
      this.activeComponent = COMPONENT_MAP[data.action]
      this.clientData = data.company
    },
    emitUpdate(data) {
      this.setComponentData({company: data.data, action: 'detail'})
      this.$emit('update', data)
    }
  },
  mounted() {}
}
</script>

<style scoped></style>
