<script>
export default {
  methods: {
    debounce(func, delay) {
      let timerId
      return (...args) => {
        this.loading = true
        clearTimeout(timerId)
        timerId = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    }
  }
}
</script>
