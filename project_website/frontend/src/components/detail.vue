<template>
  <div class="detail_page">
    <div id="title">
      <img src = "@/assets/12_Gyeongbokgung Palace.jpg" id = "ex_img">
      <br><span id="name"> <경복궁(Gyeongbokgung)></span> 
    </div>

    <div id="detail">
        <br><br><p>이름: 경복궁</p>
        <p>설명: 경복궁은 조선 왕조 제일의 법궁입니다. 북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 합니다.</p>
        <router-link :to="{name: 'detail2', params: {id: 2}}">상세 페이지(클릭)</router-link>
    </div>
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