<template>
<body>
  <div class="test2">
    <div id="test">
        <p id="tt"><strong><{{movie.name_English}}></strong></p>
        <strong><li class="list">Detail Description</li></strong>
        <p class="info">: {{movie.info_English}}</p>
        <br><br><br>
        <strong><li class="list">Location and Open Time</li></strong>
        <p class="info">: {{movie.detail_English}}</p>
    </div>
  </div>
</body>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    console.log(id);
    console.log("id")
    this.$http.get('/api/main/${id}')
        .then((response) => {
          this.movie = response.data[0]
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
.info{
  font-size: 120%;
  line-height: 1.5em;
  text-align: left;
}
.list{
  text-align: left;
  font-size:150%;
}

#tt{
  text-align: center; 
  font-size: 250%;
}
#test{
  display: inline-block;
  width: 70%;
  margin-bottom:10%;
}
.test2{
  text-align: center;
  font-family: 경기천년바탕_Regular;
}
</style>