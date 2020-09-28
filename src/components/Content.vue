<template>
  <div>{{ pokeapi }}</div>
</template>

<script>
export default {
  name: 'Content',
  data(){
    return{
      pokeapi: []
    }
  },
  methods:{
    feachApi(){
      this.pokeapi = fetch('http://localhost:3030/')
      .then( res => res.json())
      .then( res => {
        console.log(res)
      })
    }
  },
  created(){
    this.feachApi()
  }  
}
</script>

<style scoped>

</style>