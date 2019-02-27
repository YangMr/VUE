<template>
   <div class="container">
       <div class="row">
            <div class="col-xs-12">
                <button class="btn btn-primary" @click="selectedComponent = 'appRed'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent ='appBlue'">Load Green Template</button>
                <button class="btn btn-danger" @click=" selectedComponent ='appYellow'">Load Red Template</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <keep-alive>
                    <component :is="selectedComponent"></component>
                </keep-alive>



            </div>
        </div>
    </div>
   </div>
</template>

<script>
import Red from './components/Red.vue'
import Blue from './components/Blue.vue'
import Yellow from './components/Yellow.vue'

export default {
    components : {
        "appRed" : Red,
        "appBlue" : Blue,
        "appYellow" : Yellow
    },
  data : function(){
    return {
        selectedComponent : "appRed"
    }
  }

}
</script>

<style lang="css" >
    .component{
        height:80px;
        width:60%;

        border:2px solid purple;
        margin:30px auto;
    }
</style>
