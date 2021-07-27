<template>
    <div>
        <audio id="audio" loop src="../public/assets/radio/music.mp3">
            你咋还用IE浏览器嘞,加载不出来了/(ㄒoㄒ)/~~
        </audio>
        <img src="../public/assets/img/fan.jpg" :class="index==0?'stop':'move'" @click="change()"/> 
    </div>
</template>

<script>
    export default{
        name:"dome",
        data(){
            return{
                index:0
            }
        },
        methods:{
            change(){
                var audio = document.getElementById('audio');
                if (audio.paused) {
                    audio.play();
                    this.index=1
                }else{
                    audio.pause();
                    this.index=0
                }
            }
        } 
    }
    
</script>


<style scoped>
    @-webkit-keyframes change{
        from{
            transform: rotate(0);
        }to{
            transform: rotate(360deg);
        }
    }
    
    .stop{

    }

    .move{
        -webkit-animation: change 5s linear infinite;
    }

    img{
        border-radius: 50%;
        border: #EF93BA 3px solid;
        width: 214px;
        height: 214px;
    }
</style>