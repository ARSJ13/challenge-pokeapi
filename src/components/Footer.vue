<template>
  <footer class="footer-container">
    <div class="pokemon">
      <img :src="img.pokemon" alt="pokedex">
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data(){
    return {
      img: {
        pokemon: '/Pokemon.png',
      }
    }
  }
  
}
</script>

<style>
.footer-container{
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to top, rgb(255,255,0) 40%, rgb(255,215,0) 40%, rgb(255,255,0) 50%, rgb(255,215,0) 60%);
  padding: 20px;
  display: flex;
  justify-content: center;
}
.pokemon>img{
  width: 100px;
  height: 100px;
}
.pokemon{
  position: relative;
  animation: pokemon 300ms infinite ease;
}

@keyframes pokemon {
  0%   {top: 0px;}
  50%  {top: -10px;}
  100% {top: 10px;}
}
</style>