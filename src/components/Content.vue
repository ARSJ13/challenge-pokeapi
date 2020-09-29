<template>
  <div class="body-container">
    <Header></Header>
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
    <main v-if="toogle" class="form-container">
      <section class="api-region">
        <h2>Região dessa geração: </h2>
       <h3>{{ region ? region.name : '' }}</h3>
      </section>
      <section class="api-body">
        <div class="api-abilities">
          <ul>
            <li>
            </li>
          </ul>
        </div>
        <div class="api-pokemons">

        </div>
      </section>
    </main>
  </div>
</template>

<script>

import Header from './Header'

export default {
  name: 'Content',
  components: {
    Header
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
}
</style>