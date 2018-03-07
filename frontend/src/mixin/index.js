export default {
  beforeMount () {
    const { asyncData } = this.$options;
    if (asyncData) {
      // Assign the fetch operation to a promise
      // so that in components we can do `this.dataPromise.then(...)` to
      // perform other tasks after data is ready
      this.dataPromise = asyncData({
        route: this.$route
      })
    }
  }
}
