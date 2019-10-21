<template>
<body>
  <h1>이미지를 업로드하면 찾아드립니다!</h1>
  <router-link :to="{name: 'detail', params: {id: 1}}">찾기</router-link>
  <p>※주의 사항</p>
  <p>이미지를 요래요래 업로드하세요~</p>
</body>
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
