<script>
import Sidebar from './components/Sidebar/Sidebar.vue';
import Header from './components/Header/Header.vue';

  export default{
    data(){
      return{
        toggle: true
      }
    },
    components:{
      Sidebar,
      Header
    },

    methods:{
      toggleMenu(){
        this.toggle =! this.toggle;
      }
    }
  };
</script>

<template>
  <Header :toggle="toggleMenu" />
  <main>
    <aside v-if="toggle" class="absolute top-0 bg-white">
      <Sidebar/>
    </aside>
    <section class="main max-w-full grow">
      <router-view></router-view>
    </section>
  </main>
</template>
<style lang="scss" scoped>
</style>