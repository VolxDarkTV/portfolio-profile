<script>
  // AOS
  import AOS from 'aos';
  import 'aos/dist/aos.css';

  import Header from './components/Header.vue';
  import About from './components/About.vue';
  import Experience from './components/Experience.vue';
  import Work from './components/Work.vue';
  import Skills from './components/Skills.vue';
  import Contact from './components/Contact.vue';

  export default{
   
    components:{
      Header,
      About,
      Experience,
      Work,
      Skills,
      Contact,
    },

    mounted() {
      // AOS
      this.$nextTick(() => {
        AOS.init();
      });
    },

  }
</script>

<template>

  <header class="container container-lg container-md container-sm">
    <Header/>
  </header>
  
  <main class="container container-lg container-md container-sm mt-5"> 

    <About data-aos="fade-right"/>

    <Experience/>

    <Work/>

    <Skills data-aos="fade-up"/>

    
  </main>

  <footer class="container container-lg container-md container-sm">
    <Contact data-aos="fade-in"/>
  </footer>

</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
