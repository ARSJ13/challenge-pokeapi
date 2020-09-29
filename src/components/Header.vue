<template>
  <header class="header-container">
    <div class="logo">
      <img :src="img.logo" alt="pokedex">
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return {
      img: {
        logo: '/ball-poke.png',
      }
    }
  }
  
}
</script>

<style>
.header-container{
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to top, rgb(255,215,0) 40%, rgb(255,255,0) 50%, rgb(255,215,0) 60%);
  padding: 20px;
  display: flex;
  justify-content: center;
}
.logo>img{
  width: 100px;
  height: 100px;
}
.logo{
  position: relative;
  animation: ball 8000ms linear 1;
}

@keyframes ball {
  0%   {left:0px; top:0px;}
  25%  {transform: rotate(180deg); left: 40%; top: 0px;}
  50%  {transform: rotate(-180deg); left:-40%; top:0px;}
  75%  {transform: rotate(180deg); left: 40%; top: 0px;}
  100%  {transform: rotate(0deg); left:0px; top:0px;}
}
</style>