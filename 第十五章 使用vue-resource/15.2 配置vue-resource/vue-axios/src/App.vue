<template>
  <div id="app">
     <button @click="getPositionCity">获取定位城市</button>
     <p>当前定位城市: </p>
     <button @click="getHotCity">获取热门城市</button>
     <div class="hotcity">
         <ul v-for="item in hotCity">
             <li>{{item.name}}</li>
         </ul>
     </div>
     <button @click="getAllCity">获取所有城市</button>
     <div class="allCity">
         <ul v-for="(value,key) in allCity">
             <li v-for="item in value">
                 {{item.name}}
             </li>
         </ul>
     </div>
     <hr>

     <div class="search">
         <input v-model="searchID" type="text" name="" value="">
         <input v-model="searchKey" @input="searchData" type="text" name="" value="">
         <button >搜索</button>
     </div>
     <hr>
     <div class="address">
         <ul>
             <li v-for="item in address">
                 <strong>{{item.name}}</strong>
                 <span>{{item.address}}</span>
             </li>
         </ul>
     </div>

     <hr>

     <div class="form">
         <p>
             <input v-model="user.name" type="text" name="" value="">
         </p>
         <p>
             <input v-model="user.pass" type="text" name="" value="">
         </p>
         <p>
             <button @click="send">Send Data</button>
         </p>
     </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data : function(){
        return {
            positionCity : "",
            hotCity : [],
            allCity : {},
            searchID : "",
            searchKey : "",
            address : [],
            user : {
                name : "",
                pass : ""
            }
        }
    },
  methods : {

      send : function(){
          axios({
              type : "post",
              url : "https://vue-http-f8e45.firebaseio.com/user.json",
              data : {
                  name : this.user.name,
                  pass : this.user.pass
              }
          }).then(response=>{
              console.log(response)
          })
          // axios.post('/user.json',this.user).then(response=>{
          //     console.log(response);
          // },error => {
          //     console.log("错误信息:" + error.message)
          // })
      },
      searchData : function(){
          axios.get("/pois",{params : {city_id : 3, keyword : this.searchKey}}).then(response=>{
              this.address = response.data;
              console.log(response)
          },error=>{
              console.log("错误信息:" + error.message)
          })
      },
      getPositionCity : function(){
          axios.get("/cities/?type=guess").then(response=>{
             console.log(resposne);
          },error=>{
              console.log("错误信息:" + error.message)
          })
      },
      getHotCity : function(){
          axios.get("/cities/?type=hot").then(response=>{
             this.hotCity = response.data;
             console.log(response.data);
          },error=>{
              console.log("错误信息:" + error.message)
          })
      },
      getAllCity : function(){
          axios.get("https://elm.cangdu.org/v1/cities/?type=group").then(response=>{
             this.allCity = response.data;
             console.log(response.data);
          },error=>{
              console.log("错误信息:" + error.message)
          })
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
