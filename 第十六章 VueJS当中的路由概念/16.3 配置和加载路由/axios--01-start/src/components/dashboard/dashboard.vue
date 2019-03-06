<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email address : {{email}}</p>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data: function(){
            return {
                email : ""
            }
        },
        created(){
            axios.get("").then(response=>{
                console.log(response);

                const data = res.data;
                const users = [];
                for(let key in data){
                    const user = data[key];
                    user.id = key;
                    user.push(user);
                }
                console.log(users);
                this.email = users[0].email;
            }).catch(error=>{
                console.log(error)
            })
        }
    }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
