<template>
  <footer class="footer-container">
    <div class="pokemon">
      <img :src="img.pokemon" alt="pokedex">
      <span></span>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  animation: pokemon 300ms infinite ease;
}
span{
  margin-left: 1.5rem;
  max-width: 50px;
  height: 1px;
  box-shadow: 0px 4px 6px 0 rgba(0, 0, 0, 0.3), 0px 3px 15px 0 rgba(0, 0, 0, 0.3);
}

@keyframes pokemon {
  0%   {top: 0px;}
  50%  {top: -10px;}
  100% {top: 10px;}
}

</style>