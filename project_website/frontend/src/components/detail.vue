<template>
  <div class="detail_page">
    <div id="title">
      <img v-bind:src="getsrc(movie.class)" id = "ex_img">
    </div>

    <div id="detail">
        <br><br><p><strong style="text-align:center"><{{movie.name_Korean}}></strong></p>
        <p style="line-height:1.5em; font-size:150%;">{{movie.show_kor}}</p>
        <router-link :to="{name: 'detail2', params: {id: 2}}" id="link2"><p style="font-size:150%">상세 페이지(클릭)</p></router-link>
    </div>
  </div>

</template>
<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    var page = 1;
    //console.log(id);
    //console.log("id")
    //console.log(name);
    this.$http.get('/api/main/${id}')
        .then((response) => {
          this.movie = response.data[0];
          console.log(response);
        })
    
  },
  data: function () {
    return {
      movie: {}
    }
  },
  methods: {
    getsrc(name){
      var images = require.context('@/assets/', false, /\.jpg$/);
      return images('./' + name + ".jpg")
    }
  }
}
</script>

<style>
#ex_img{
  padding: 10px;
  width: 450px;
}
#title{
  margin-left: 18%;
  margin-top: 5%;
  display: inline-block;
  text-align: center;
}

#detail{
  display: inline-block;
  width: 450px;
  margin-left: 3%;
  margin-top: 5%;
}
#name{
  font-size: 100%;
  text-align: center;
}
.detail_page{
  align-content: center;
  font-family: 경기천년바탕_Regular;
  display: flex;
}
#link2{
  text-decoration: none;
}
</style>