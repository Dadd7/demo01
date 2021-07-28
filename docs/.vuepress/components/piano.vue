<template>
  <div>
    <audio src="../public/assets/radio/piano/1 C.mp3"  id="a" ></audio>
    <audio src="../public/assets/radio/piano/2 D.mp3"  id="s" ></audio>
    <audio src="../public/assets/radio/piano/3 E.mp3"  id="d" ></audio>
    <audio src="../public/assets/radio/piano/4 F.mp3"  id="f" ></audio>
    <audio src="../public/assets/radio/piano/5 G.mp3"  id="g" ></audio>
    <audio src="../public/assets/radio/piano/6 A.mp3"  id="h" ></audio>
    <audio src="../public/assets/radio/piano/7 B.mp3"  id="j" ></audio>
    <div>
    <button class="piano-key" @click="Note('a')" :class="index=='a'?'light':''" >Do</button>
    <button class="piano-key" @click="Note('s')" :class="index=='s'?'light':''">Re</button>
    <button class="piano-key" @click="Note('d')" :class="index=='d'?'light':''">Mi</button>
    <button class="piano-key" @click="Note('f')" :class="index=='f'?'light':''">Fa</button>
    <button class="piano-key" @click="Note('g')" :class="index=='g'?'light':''">So</button>
    <button class="piano-key" @click="Note('h')" :class="index=='h'?'light':''">La</button>
    <button class="piano-key" @click="Note('j')" :class="index=='j'?'light':''">Ti</button>
    <button id="pinao-child" @keydown="keyDown"><img src="../public/assets/img/piano-child.jpg" /></button>
    </div>
  </div>
  
</template>

<script>
  export default{
    name:'piano',
    data(){
            return{
                index:""
            }
        },
    methods:{
      Note(note){
        let audio = document.getElementById(""+note)
        if(audio.play){
          audio.load()
        }
        audio.play()
        document.getElementById("pinao-child").focus()
      },
      keyDown(e){
        if(e.key=="a"||e.key=="s"||e.key=="d"||e.key=="f"||e.key=="g"||e.key=="h"||e.key=="j"){
            this.index=e.key
            let audio = document.getElementById(""+e.key) 
            if(audio.play){
                audio.load()
            }
            audio.play()
            setTimeout(()=>{
                this.index=""
            },200)
        }
      },
    },
  }
</script>

<style scoped>
    .piano-key{
        outline: none;
        border: none;
        height: 300px;
        width: 80px;
        margin: 3px;
        border-radius: 0px 40px 40px 40px;
        background-color: rgb(226, 226, 226);
    }
    .piano-key:hover{
        filter:brightness(1.1);
        background-color: rgb(218, 218, 218);
    }
    #pinao-child{
        outline: none;
        border: none;
    }
    .piano-child:hover{
        filter:brightness(1.1);
    }

    .light{
        filter:brightness(1.1);
        background-color: rgb(218, 218, 218);
    }

</style>
