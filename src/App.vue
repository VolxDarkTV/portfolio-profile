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

    data(){
      return{
        mode: 'dark',
      }
    },

    methods:{
      toggle(){
        if(this.mode === 'dark'){
          this.mode = 'light'
        }else{
          this.mode = 'dark'
        }
      }
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

  <section class="app" :class="mode">
    <header class="container container-lg container-md container-sm">
      <Header :mode="mode" @toggle="toggle"/>
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
  </section>

</template>

<style lang="scss">
@use './styles/general.scss' as *;

.app{
  background: #151414;
  color: #fff;
}
.dark{
  background: #151414;
  color: #fff;
  a{
    color: #fff;
  }
  .my_header_bg{
    background: #212529;
  }
  .main-timeline .timeline-content{
    color: #ffffff;
    background: #2c2c2c;
  }
}
.light{
  background: #fff;
  color: #000;
  a{
    color: #000;
  }
  .my_header_bg{
    background: #ededed;
  }
  .main-timeline .timeline-content{
    color: #2c2c2c;
    background: #ffffff;
  }

}
</style>
