<template>
  <body>
    <h2>이미지를 업로드하면 찾아드립니다!</h2>
    <router-link :to="{name: 'detail', params: {id: 1}}">찾기</router-link>
    <p>※주의 사항: 건물이나 문화재의 전체 모습이 나오도록 찍어 주세요.</p>
    <div id="OX">
      <span>(O)</span>
      <span>(X)</span>
    </div>
    <div id="OXimg">
      <img id="O_img" src="../assets/12_Gyeongbokgung Palace.jpg">
      <img id="X_img" src="../assets/example(x).jpg">
    </div>
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

<style>
  @font-face {
    font-family: "경기천년바탕_Regular";
    font-style: normal;
    src: url("../assets/경기천년바탕_Regular.ttf");
  }
  h2{
    font-family: 경기천년바탕_Regular;
    text-align: center;
    width: 100%;
    height: 100%;
  }
  p{
    font-family: 경기천년바탕_Regular;
    text-align: center;
    width: 100%;
    height: 30%;
  }
  #OX{
    text-align: center;
  }
  #O_img, #X_img{
    width: 500px;
    height: 500px;
    margin: 20px;
  }
  #OXimg{
    text-align: center;
  }
  span{
    margin-left: 266px;
    margin-right: 266px;
  }
</style>