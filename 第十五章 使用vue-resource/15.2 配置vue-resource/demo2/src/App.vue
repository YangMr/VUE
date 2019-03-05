<template>
  <div id="app">
      <button @click="getData">Get  Data</button>
      <ul v-for="item in music">
          <li v-for="(value,key) in item">{{key}}: <strong>{{value}}</strong></li>
      </ul>
      <hr>
      <p>
          <input v-model="user.username" type="text" name="" value="">
      </p>
      <p>
          <input v-model="user.useremail" type="email" name="" value="">
      </p>
      <p>
          <button @click="submit">Send Data</button>
      </p>
      <hr>
      <p>
          <button @click="fetchData">Get Post Data</button>
      </p>
      <ul>
          <li v-for="item in users">{{item.username}}--{{item.useremail}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data : function(){
        return {
            music : "",
            user : {
                username : "",
                useremail : ""
            },
            users : []
        }
    },
    methods : {
        getData : function(){
            this.$http.get("https://api.imjad.cn/cloudmusic/",{params : {type:'song',id : '123412'}}).then(function(response){
                this.music = response.data.data;
                console.log(response.data.data)
            },function(error){
                console.log("错误信息:" + error);
            })
        },

        submit : function(){
            this.$http.post("user.json",this.user).then(function(response){
                console.log(response)
            },function(error){
                console.log("错误信息:" + error.message)
            })
        },

        fetchData : function(){
            this.$http.get("user.json").then(function(response){
                return response.json();
            },function(error){
                console.log("错误信息:" + error.message)
            }).then(data=>{
                const resultArray = [];
                for (let key in data){
                    resultArray.push(data[key])
                    console.log(data[key])
                }
                this.users = resultArray;
                console.log(data)
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
  display: block;
  margin: 10px 10px;
  border:1px solid #ccc;
}

a {
  color: #42b983;
}
</style>
