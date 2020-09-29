<template>
  <header class="header-container">
    <div class="logo">
      <img :src="img.logo" alt="pokedex">
    </div>
    <div class="pokemon">
      <img :src="img.pokemon" alt="pokemon pikachu">
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
        pokemon: '/Pokemon.svg'
      }
    }
  }
  
}
</script>

<style>
.header-container{
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(to top, rgb(255,215,0) 30%, rgb(255,255,0));
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.pokemon>img, .logo>img{
  width: 100px;
  height: 100px;
}
.pokemon{
}
</style>