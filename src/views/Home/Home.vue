<script>
import { mainLinks } from '../../constatnts/mainLinks'
export default {
    name:'Home',
    data(){
            return{
                mainLinks: mainLinks
            }
        }
}
</script>

<template>
  <div class="flex">
    <div class="m-80 flex mt-40">
        <div class="card shadow w-[220px] h-[157px] ml-10 bg-purple-300 hover:bg-yellow-300 rounded-md focus:ring-2" v-for="el in mainLinks">
            <p class="text-center mt-2"><i :class="el.icon" class="text-5xl"></i></p>
            <p class="text-center mt-2">{{ el.title }}</p>
            <h1 class="text-3xl font-bold text-center">{{ el.number }}</h1>
        </div>
    </div>
    
  </div>
</template>

<style></style>