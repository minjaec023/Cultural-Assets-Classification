<template>
  <body>
    <div id="explain">
    <h2 style="font-size:200%">Q. 서울시 관광명소 찾기란?</h2>
    <p id="answer" style="line-height:1.5em">A. 서울시에 있는 문화재나 유적지를 보더라도 이름이나 설명이 없어 궁금하실 때, 사진을 업로드 해주시면 해당 문화재에 대한 설명을 보여드립니다.</p>
  </div>
<!--
  <form method="post" action="/" enctype="multipart/form-data">
  -->  
    <div class="dropbox">
      <input class="input-file" type="file" name="myfile" @change="upload($event.target.name, $event.target.files)"@drop="upload($event.target.name, $event.target.files)">
      
      <!--<input type="file" name="photo" id="photo"/>
      -->
      <h2 width="350px">파일을 드래그해서 드랍해주세요. 
      </h2>
    </div>
    <!--
    <input type="submit" id="upload" value="업로드">
    </form>-->
    
    <!--
    <form id="myForm" @submit.prevent="sendPost">
  <input type="file" name="photo" v-model="title"><br>
  <textarea name="body" v-model="body"></textarea><br>
  <button>Send</button>
</form>-->
    <br>
    <p id="alert"><분석 완료!>창이 나타날 때까지 잠시만 기다려 주세요.</p>
    <p id="find_section" class="ex">
      <router-link :to="{name: 'detail', params: {id: 1}}" id="link">
      <input type="button" id="find" value="상세보기">
      </router-link>
    </p>
    <br>
    <strong><p class="ex">※주의 사항: 건물이나 문화재의 전체 모습이 나오도록 찍어 주세요.</p>
    </strong>
    <div id="OXimg">
      <div id="O">
        <strong><p class="ox">(O)</p></strong>
        <img id="O_img" src="../assets/13.jpg">
      </div>
      <div id="X">
        <strong><p class="ox">(X)</p></strong>
        <img id="X_img" src="../assets/example(x).jpg">
      </div>
    </div>
  </body>
</template>
<script src="//unpkg.com/vue"></script>
<script src="//unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
  //var check2 = <%= check%>;
  //console.log(check2);
  //if(check2){
  //  alert("분석 완료!");
  //}
export default {
  created () {
    // 컴포넌트가 생성될 때, /api/main에 요청을 보냅니다.          
    this.$http.get('/api/main')
        .then((response) => {
          //this.movies = response.data
          console.log("kkkkkkk");
        })
  },
  data () {
    return {
      movies: []
    }
  },
  methods:{
    upload: function(name, files) {
          var mes = "";
          const formData = new FormData();
          formData.append(name, files[0], files[0].name);
          const url = "http://localhost:3000/eng";
          this.$http.post(url, formData).then(response => {
            console.log(response.data);
            document.write(response.data);
            document.location.href="http://localhost:3000";
          })
        }
  },
}
</script>

<style>
  @font-face {
    font-family: "경기천년바탕_Regular";
    font-style: normal;
    src: url("../assets/경기천년바탕_Regular.ttf");
  }
  body{
    font-family: 경기천년바탕_Regular;
  }
  h2{
    font-family: 경기천년바탕_Regular;
    text-align: center;
    width: 100%;
    height: 100%;
  }
  .ex{
    font-family: 경기천년바탕_Regular;
    text-align: center;
    width: 100%;
    height: 30%;
    color: red;
  }
  #O_img, #X_img{
    width: 500px;
    height: 350px;
    margin: 20px;
  }
  #OXimg{
    text-align: center;
    text-align: center;
    margin-bottom: 10%;
  }
  #O{
    text-align: center;
    display: inline-block;
  }
  #X{
    text-align: center; 
    display: inline-block;
  }
  .ox{
    font-size: 180%;
  }
  .dropbox {
    outline: 2px dashed #aaa;
    background: #eda3804d;
    width: 350px;
    height: 160px;
    position: relative; 
     margin: 0 auto;
  } 
  .dropbox > h2{
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 2;
  }
  .input-file{
    position: absolute;
    opacity: 0;
    width:100%;
    height:100%;
    top:0;
    left:0;
     z-index: 3;
  }
  #find{
    text-align: center;
    font-size: 100%;
    display: inline;
    font-family: 경기천년바탕_Regular;
  }
  #link{
    text-align: center;
    text-decoration: none;
  }
  #find_section{
    text-align: center;
  }
  #alert{
    text-align: center;
    font-size: 150%;
  }
  #answer{
    font-size: 150%;
    width: 60%;
    display: inline-block;
  }
  #explain{
    text-align: center;
  }
</style>