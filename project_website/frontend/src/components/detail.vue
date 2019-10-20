<template>
  <div class="detail">
    <h1>세부 페이지</h1>
  </div>
</template>
<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    console.log(id);
    console.log("id")
    this.$http.get('/api/main/${id}')
        .then((response) => {
          this.movie = response.data[id-1]
        })
  },
  data: function () {
    return {
      movie: {}
    }
  }
}
</script>