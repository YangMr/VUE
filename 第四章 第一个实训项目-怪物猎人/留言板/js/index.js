new Vue({
    el : ".container",
    data : {
        array : [
            {name:"Tom",age:20,email:"tom@itany.com"},
            {name:"Jack",age:30,email:"Jack@itany.com"}
        ],
        user : {},
        nowIndex : -1
    },
    methods : {
        Add : function(){
            this.array.push(this.user);
            this.user = {};
        },
        Del : function(){
            if(this.nowIndex == -1){
                this.array = [];
            }else{
                this.array.splice(this.nowIndex,1);
            }
        }
    }
})
