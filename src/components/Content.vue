<template>
  <div class="body-container">
    <Header></Header>
    <header class="header-body">
      <div class="title-container">
        <h1>Escolha a geração POKEMON!</h1>
      </div>
      <form @click="toogle=true">
        <select @click="feachGeneration(generation)" v-model="generation">
          <option v-for="(item, index) in pokeapi" :key="index" :value="index+1">
            {{item.name}}
          </option>
        </select>
      </form>
    </header>
    <main v-if="toogle" class="form-container">
      <section class="api-region">
        <h2>Região dessa geração: </h2>
       <h3>{{ region ? region.name : '' }}</h3>
      </section>
      <section class="api-body">
        <div v-if="abilities.length!==0" class="api-abilities">
          <h2>Habilidades incluídas: </h2>
          <ul>
            <li v-for="(abilitie, index) in abilities" :key="index">
              {{index+1}} | {{abilitie.name}}
            </li>
          </ul>
        </div>
        <div class="api-pokemons">
          <h2>Pokemons incluídos: </h2>
          <ul>
            <li v-for="(pokemon, index) in pokemons" :key="index">
              {{index+1}} | {{pokemon.name}}
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
        console.log(res.results)
      this.pokeapi = res.results
      })
      return data
    },
    async feachGeneration(id){
      if(id != null){
        const data = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
        .then( res => res.json())
        .then( res => {
          this.bodyGeneration = res
          console.log(this.bodyGeneration)
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
.api-body{
  display: flex;
  justify-content: space-around;
}
</style>