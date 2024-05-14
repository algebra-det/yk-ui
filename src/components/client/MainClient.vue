<template>
  <div>
    <component
      v-bind:is="activeComponent"
      :client-data="clientData"
      @error="setErrors"
    ></component>
  </div>
</template>

<script>
import Create from './Create.vue'
import Update from './Update.vue'
import Detail from './Detail.vue'

const COMPONENT_MAP = {
  create: Create,
  update: Update,
  detail: Detail
}

export default {
  name: 'client-List',
  components: {
    Error,
    Create,
    Update,
    Detail
  },
  data() {
    return {
      activeComponent: Create,
      clientData: {},
    }
  },
  methods: {
    setErrors(errors) {
      this.$emit('error', errors)
    },
    setComponentData(data) {
      console.log('Data: ', data);
      this.activeComponent = COMPONENT_MAP[data.action]
      this.clientData = data.company
    }
  },
  mounted() {}
}
</script>

<style scoped></style>
