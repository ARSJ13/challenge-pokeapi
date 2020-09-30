<template>
  <div class="body-container">
    <Header></Header>
    <header class="header-body">
      <div class="title-container">
        <h1>Escolha a geração POKEMON!</h1>
      </div>
      <form>
        <select @input="toogle=true" @click="feachGeneration(generation)" v-model="generation">
          <option v-for="(item, index) in pokeapi" :key="index" :value="index+1">
            {{item.name}}
          </option>
        </select>
      </form>
    </header>
    <main v-if="toogle" class="form-container">
      <section class="api-region">
        <h2>Região predominante: </h2>
       <h3>{{ region ? region.name : '' }}</h3>
      </section>
      <section class="api-body">
        <div class="api-abilities">
          <h2>Habilidades incluídas: </h2>
          <ul>
            <li class="list-abilities" v-for="(abilitie, index) in abilities" :key="index">
              <tr>
                <td>{{index+1}}</td>
                <td>{{abilitie.name}}</td>
              </tr> 
            </li>
          </ul>
        </div>
        <div class="api-pokemons">
          <h2>Pokemons incluídos: </h2>
          <ul>
            <li class="list-pokemons" v-for="(pokemon, index) in pokemons" :key="index">
              <tr>
                <td>{{index+1}}</td>
                <td>{{pokemon.name}}</td>
              </tr>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Content',
  components: {
    Header,
    Footer
  },
  data(){
    return{
      toogle: false,
      toogleAbilitie: false,
      pokeapi: [],
      item:'',
      generation:'',
      bodyGeneration: []
    }
  },
  computed:{
    region(){
      if(this.bodyGeneration.main_region===''){
        return ''
      }else{
        return this.bodyGeneration.main_region
      }
    },
    abilities(){
      if(this.bodyGeneration.abilities===''){
        return ''
      }else{
        return this.bodyGeneration.abilities
      }
    },
    pokemons(){
      if(this.bodyGeneration.pokemon_species===''){
        return ''
      }else{
        return this.bodyGeneration.pokemon_species
      }
    }
  },
  methods:{
    async feachApi(){
      const data = await fetch("https://pokeapi.co/api/v2/generation")
      .then( res => res.json())
      .then( res => {
      this.pokeapi = res.results
      })
      return data
    },
    async feachGeneration(id){
      if(id != null){
        const data = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
        .then( res => res.json())
        .then( res => {
          this.bodyGeneration = res;
        })
        return data
      }else{
        this.bodyGeneration = ''
      }
    }
  },
  created(){
    this.feachApi()
  }  
}
</script>

<style scoped>
.body-container{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title-container>h1{
  padding: 2rem 1rem;
  color: #633106;
  text-align: center;
}
form{
  display: flex;
  justify-content: center;
  margin: 2rem auto;
}
form>select{
  max-width: 500px;
  padding: 30px 30px;
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: center;
  font-family: 'Press Start 2P', cursive;
  color: #DF9300;
  background:  #633106;
  box-sizing: border-box;
  cursor: pointer;
}
option{
  padding: 30px;
  min-height: 2rem;
  white-space: normal;
  cursor: pointer;
}
.form-container{
  background: rgb(255,228,181);
}
.api-region{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4rem 1rem;
}
.api-region>h2{
  color: #633106;
}
.api-region>h3{
  padding-left: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
  animation: region 2000ms infinite ease-in-out alternate;
}
@keyframes region {
  to{
    color: #DF9300;
  }
  from{
    color: #FEF6A3;
    text-shadow: 2px 2px 5px #633106;
  }
}
.api-body{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem;
}
.api-body h2{
  color: #633106;
  margin: 3rem auto;
}
.list-abilities>tr{
  width: 100%;
  display: flex;
}
.list-abilities>tr>td{
  width: 50%;
  padding: 15px 10px;
  text-transform: uppercase;
}
.list-abilities>tr>td:nth-child(1){
  text-align: center;
}
.list-abilities:nth-child(odd){
  background: rgba(0,0,0,0.5);
  color: #FEF6A4;
}

.list-pokemons>tr{
  width: 100%;
  display: flex;
}
.list-pokemons>tr>td{
  width: 50%;
  padding: 15px 10px;
  text-transform: uppercase;
}
.list-pokemons>tr>td:nth-child(1){
  text-align: center;
}
.list-pokemons:nth-child(odd){
  background: rgba(0,0,0,0.5);
  color: #FEF6A4;
}
</style>