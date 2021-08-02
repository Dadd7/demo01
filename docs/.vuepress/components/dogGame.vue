<template>
<div>
<div id="box">
<div id="content">
  <div id="shell">
    <audio src="../public/assets/radio/Fly162.mp3"  id="audio" ></audio>
    <audio src="../public/assets/radio/dog.mp3" loop id="BGM"></audio> 
    <div id="screenBox">
    <div id="screen">
      <button id="player"><img src="../public/assets/img/dog.png" id="imgDog"/></button>
      <button id="food1"></button>
      <button id="food2"></button>
      <button id="food3"></button>
    </div>
    </div>
    <div id="BGMbox"><button id="BGMbtn" @click="BGM()"><img src="../public/assets/img/raidio.png" id="imgBGM" /></button></div>
  <div id="handleBox">
  <div id="handle">
      <button @click="eat()" id="eatBtn"></button>
      <button @click="change('up')" id="upBtn"></button>
      <button @click="change('down')" id="downBtn"></button>
      <button @click="change('left')" id="leftBtn"></button>
      <button @click="change('right')" id="rightBtn"></button>
  </div>
  </div>
  </div>
</div>
<button @keydown="keychange" id="keychange">已消灭{{num}}个</button>
</div>
</div>
</template>

<script>
  export default{
    name:'HelloWorld',
    data(){
      return{
        direction:"aaa",
        num:0,
        time:200,
      }
    },
    watch:{
      direction: function(newV,oldV){
        if(newV!=oldV){
          let player = document.getElementById('player')
          if(this.direction=="up"){
          let intval = setInterval(()=>{
            if(!(player.style.top=="10px")){
              if(this.direction!=="up"){
                clearInterval(intval)
                return
              }
              player.style.top = player.offsetTop-20+"px";
              document.getElementById('keychange').focus()            
            }
          },this.time)          
          }else if(this.direction=="down"){
          let intval = setInterval(()=>{
            if(!(player.style.top=="330px")){
              if(this.direction!=="down"){
              clearInterval(intval)
              return   
            }
            player.style.top = player.offsetTop+20+"px";
            document.getElementById('keychange').focus()
            }
          },this.time)          
          }else if(this.direction=="left"){
          let intval = setInterval(()=>{
            if(!(player.style.left=="10px")){
              if(this.direction!=="left"){
              clearInterval(intval)
              return
            }
            player.style.left = player.offsetLeft-20+"px";
            document.getElementById('keychange').focus()
            }
          },this.time)          
          }else if(this.direction=="right"){
          let intval = setInterval(()=>{
            if(!(player.style.left=="270px")){
              if(this.direction!=="right"){
              clearInterval(intval)
              return
            }
            player.style.left = player.offsetLeft+20+"px";
            document.getElementById('keychange').focus()
            }
          },this.time)          
          }
        }
      }
    },
    methods:{
      BGM(){
        let audio = document.getElementById('BGM') 
          if (audio.paused) {
            audio.play()
            this.index=1
          }else{
              audio.pause()
              this.index=0
          }
      },
      change(dir){
        this.direction = dir+""
        document.getElementById('player').focus()
      },
      keychange(e){
        if(e.keyCode==65){
          this.direction = "left"
          document.getElementById('player').focus()
        }else if(e.keyCode==87){
          this.direction = "up"
          document.getElementById('player').focus()
        }else if(e.keyCode==68){
          this.direction = "right"
          document.getElementById('player').focus()
        }else if(e.keyCode==83){
          this.direction = "down"
          document.getElementById('player').focus()
        }else if(e.keyCode==75){
          this.eat()
        }
      },
      eat(){
        let player = document.getElementById('player')
        let food = [0,1,2]
        food[0] = document.getElementById('food1')
        food[1] = document.getElementById('food2')
        food[2] = document.getElementById('food3')
        for(let i=0; i<food.length; i++){
          if(player.style.top==food[i].style.top && player.style.left==food[i].style.left){
            let audio = document.getElementById('audio')
            if(audio.play){
              audio.load()
            }
            audio.play()
            this.num++
            setTimeout(()=>{
              food[i].style.left = 10 + parseInt(14*Math.random())*20 +"px"
              food[i].style.top = 10 + parseInt(17*Math.random())*20 +"px"
              let color = Math.ceil(Math.random()*11); // 1到10的随机整数 ，取0的概率极小。
              switch(color){
                case 0: food[i].style.background="burlywood"
                        break
                case 1: food[i].style.background="brown"
                        break
                case 2: food[i].style.background="saddlebrown"
                        break
                case 3: food[i].style.background="coral"
                        break
                case 4: food[i].style.background="hotpink"
                        break
                case 5: food[i].style.background="indigo"
                        break
                case 6: food[i].style.background="royalblue"
                        break
                case 7: food[i].style.background="darkgreen"
                        break
                case 8: food[i].style.background="darkgray"
                        break
                case 9: food[i].style.background="mediumpurple"
                        break
                case 10:food[i].style.background="burlywood"
                        break
              }
            },5000*Math.random())
          }
        }
        player.focus()
        document.getElementById('keychange').focus()
      },
  },
      mounted(){
        let food1 = document.getElementById('food1')
        food1.style.left = food1.offsetLeft + parseInt(14*Math.random())*20 +"px"
        food1.style.top = food1.offsetTop + parseInt(17*Math.random())*20 +"px"
        let food2 = document.getElementById('food2')
        food2.style.left = food2.offsetLeft + parseInt(14*Math.random())*20 +"px"
        food2.style.top = food2.offsetTop + parseInt(17*Math.random())*20 +"px"
        let food3 = document.getElementById('food3')
        food3.style.left = food3.offsetLeft + parseInt(14*Math.random())*20 +"px"
        food3.style.top = food3.offsetTop + parseInt(17*Math.random())*20 +"px"
    }
  }
</script>

<style scoped>
    #box{
      margin: auto;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 420px;
      height: 730px;
    }
    #content{
      margin: auto;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 420px;
      height: 620px;
      background-color: rgb(61, 15, 15);
      border-radius: 15px;
    }

    #shell{
      text-align: center;
      margin: auto;
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: brown;
      width: 400px;
      height: 600px;
      float: left;
      border-radius: 10px;
      border: 3px solid rgb(187, 45, 45);
    }
    #screenBox{
      margin: auto;
      position: absolute;
      top:-145px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 344px;
      height: 404px;
      background-color: rgb(187, 45, 45);
    }
    #screen{

      margin: auto;
      position: absolute;
      top: 0px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 320px;
      height: 380px;
      background-color: rgb(63, 83, 68);
      border: 10px solid rgb(21, 29, 23);
    }
    #BGMbox{
      margin: auto;
      position: absolute;
      top:300px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 140px;
      height: 30px;
      background: brown;
      border: 2px solid rgb(187, 45, 45);
      border-radius: 11px;
    }
    #BGMbtn{
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 140px;
      height: 30px;
      background: brown;
      border-radius: 10px;
      border: 2px solid rgb(21, 29, 23);
      outline: none;
    }
    #handleBox{
      margin: auto;
      position: absolute;
      background: transparent;
      top:460px;
      left: 0;
      right: 0;
      bottom: 0;
      width: 324px;
      height: 114px;
      background: rgb(41,41,41);
      border-radius: 12px;
      border: 2px solid rgb(187, 45, 45);
    }
    #handle{
      margin: auto;
      position: absolute;
      background: transparent;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 320px;
      height: 110px;
      background: brown;
      border-radius: 10px;
      border: 2px solid rgb(41,41,41);
    }
    #player{
      background-color: rgb(63, 83, 68);
      outline: none;
      border: none;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 30px;
      left: 30px;
      padding: 0px;
    }
    #imgDog{
      width: 40px;
      height: 40px;
      margin: -5px;
    }
    #imgBGM{
      width: 90%;
      height: 70%;
    }
    #food1{
      background:burlywood;
      outline: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 10px;
      border: 2px solid rgb(41,41,41);
    }
    #food2{
      background:brown;
      outline: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 10px;
      border: 2px solid rgb(41,41,41);
    }
    #food3{
      background:royalblue;
      outline: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      top: 10px;
      left: 10px;
      border: 2px solid rgb(41,41,41);
    }
    #eatBtn{
      width: 40px;
      height: 40px;
      border-radius: 15px 15px 15px 15px;
      margin: auto;
      position: absolute;
      top:0;
      left: 150px;
      right: 300px;
      bottom: 50px;
      outline: none;
      background-color: brown;
      /* border: 3px wheat solid; */
    }
    #upBtn{
      width: 80px;
      height: 40px;
      border-radius: 30px 30px 10px 10px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
      right: 200px;
      bottom: 50px;
      outline: none;
      background-color: brown;
    }
    #downBtn{
      width: 80px;
      height: 40px;
      border-radius: 10px 10px 30px 30px;
      margin: auto;
      position: absolute;
      top: 50px;
      left: 0px;
      right: 200px;
      bottom: 0;
      outline: none;
      background-color: brown;
    }
    #leftBtn{
      width: 40px;
      height: 80px;
      border-radius: 30px 10px 10px 30px;
      margin: auto;
      position: absolute;
      top:0;
      left: 130px;
      right: 0;
      bottom: 0;
      outline: none;
      background-color: brown;
    }
    #rightBtn{
      width: 40px;
      height: 80px;
      border-radius: 10px 30px 30px 10px;
      margin: auto;
      position: absolute;
      top:0;
      left: 230px;
      right: 0;
      bottom: 0;
      outline: none;
      background-color: brown;
    }
    #keychange{
      background:white;
      outline: none;
      width: 120px;
      height: 40px;
      border-radius: 6px;
      border: 3px solid rgb(41,41,41);
    }

</style>