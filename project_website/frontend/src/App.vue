<template>
<body>
  <div id="total">
  <!--
  <div>  
    <img src = "./assets/background.jpg" id = "bg">
  </div>-->
  <div id = "top">
    <h1>서울시 관광명소 찾기</h1>
    <input type = "text" v-model = "message" id = "text" placeholder="이미지 업로드">
    <img src = "./assets/search.png" id = "search">
  </div>
  <div>
    <hr>
  </div>
  <div id="title">
    
    <img src = "./assets/12_Gyeongbokgung Palace.jpg" id = "ex_img">
    <br><span id="name"> <경복궁(Gyeongbokgung)></span>
    <!--<span id="detail">-->
  </div>
  <div id="detail">
      <br><br><p>이름: 경복궁</p>
      <p>설명: 경복궁은 조선 왕조 제일의 법궁입니다. 북으로 북악산을 기대어 자리 잡았고 정문인 광화문 앞으로는 넓은 육조거리(지금의 세종로)가 펼쳐져, 왕도인 한양(서울) 도시 계획의 중심이기도 합니다.</p>
      <p>상세 페이지(클릭)</p>
    
  </div>  
    <main></main>
    <router-view></router-view>
  </div>
</body>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Yeon+Sung&display=swap&subset=korean');
html{
  background-image: url('./assets/background.jpg');
  font-family: 'Yeon Sung', cursive;
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#top{
  text-align: center;
  margin-top : 60px;
  font-size: 200%;
}
#text{
  position : relative;
  top : -35px;
  width : 50%;
  height : 35px;
  margin-top : 50px;
}
#search{
  position : relative;
  width : 42px;
  height : 42px;
  top : -16px;
  left : 3px;
}
hr{ 
  border: none;
  border-top: 2px dashed rgb(95, 92, 92);
  color: #fff;
  background-color: #fff;
  height: 1px;
  width: 60%;
}
#ex_img{
  
  padding: 10px;
  width: 500px;
}
#title{
  margin-left: 25%;
  margin-top: 80px;
  display: inline-block;
  text-align: center;
}
#name{
  font-size:150%;
  text-align: center;
}
#detail{
  display: inline-block;
  width: 500px;
  margin-left: 5%;
}
p{
  font-size: 200%;
}
#image{
  width: 500px;
}
</style>
