<template>
  <div class="body-container">
    <Header></Header>
    <div class="container">
      <form>
        <select @click="feachGeneration(generation)" v-model="generation">
          <option v-for="(item, index) in pokeapi" :key="index" :value="index+1">
            {{item.name}}
          </option>
        </select>
      </form>
      <div>
        {{ bodyGeneration }}
      </div>
    </div>
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
      pokeapi: [],
      item:'',
      generation:'',
      bodyGeneration: []
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

</style>