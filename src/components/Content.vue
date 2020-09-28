<template>
  <div>{{ pokeapi.results }}
    <ul>
      <li v-for="(item, index) in pokeapi" :key="index">
       <p>{{index+1}} {{item.name}}</p>
       <p>{{item.url}}</p>
       <div>
         
       </div>
      </li>
    </ul>
    <form>
      <select :input="feachGeneration(generation)" v-model="generation">
        <option v-for="(item, index) in pokeapi" :key="index" :value="index+1" :selected="index == 0">
          {{item.name}}
        </option>
      </select>
    </form>
    <p>
      {{ generation }}
      {{ bodyGeneration }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Content',
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
      const data = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
      .then( res => res.json())
      .then( res => {
        this.bodyGeneration = res
        console.log(this.bodyGeneration)
      })
      return data
    }
  },
  created(){
    this.feachApi()
  }  
}
</script>

<style scoped>

</style>