<template>
</template>
<script>
export default {
  created () {
    // 컴포넌트가 생성될 때, /api/main에 요청을 보냅니다.          
    this.$http.get('/api/main')
        .then((response) => {
          this.movies = response.data
          console.log("kkkkkkk");
        })
  },
  data () {
    return {
      movies: []
    }
  }
}
</script>
