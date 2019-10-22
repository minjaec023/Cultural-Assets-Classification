<template>
  <div class="detail_page2">
    <p>상세 페이지닷~</p>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    console.log(id);
    console.log("id")
    this.$http.get('/api/main/${page}')
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

<style>
#ex_img{
  padding: 10px;
  width: 60%;
}
#title{
  margin-left: 5%;
  margin-top: 80px;
  display: inline-block;
  text-align: center;
}

#detail{
  display: inline-block;
  width: 450px;
}
</style>