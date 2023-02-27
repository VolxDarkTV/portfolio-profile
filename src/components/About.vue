<script>
    import Typed from 'typed.js';
    // Components
    import Cube from '../components/Cube.vue';

    export default{

        components:{
            Cube,
        },      

        data() {
            return{
                list: ['Full-Stack', 'Front-End', 'Back-End'],
                index: 0,
                text: '',
                speed: 2000
            }
        },
        methods: {
            getTextFromList() {
                
                this.text = this.list[this.index];
                this.index += 1;
                
                if (this.index >= this.list.length) {
                    this.index = 0;
                }
            }    
        },
        mounted() {
            this.text = this.list[this.index];
            setInterval(this.getTextFromList, this.speed);

            // Typed.js
            const options = {
              strings: ['Ciao, mondo!', 'Benvenuto nel mio sito web!'],
              typeSpeed: 80,
              loop: true
            };
            this.typed = new Typed(this.$refs.typed, options);
        },
    }
    
</script>

<template>

   <section id="about" class="container py-5">

        <div class="d-flex flex-column gap-5">

            <!-- Developer Roll -->
            <div class="mb-5">
                <h1 class="my_third mt-5 fw-bold animate__animated animate__bounce">Ciao.</h1>
                <h1 class="text-light">Sono Vincenzo</h1>
                <div class="d-flex justify-content-center fw-bold fs-1">
                    <span class="my_primary animate__animated animate__bounce">{{ text }}</span>
                    <span class="text-light">&nbsp; Developer.</span>
                </div>
            </div>

            <!-- About -->
            <div class="mt-5 d-flex flex-column flex-lg-row justify-content-start align-items-center gap-5">
                <!-- Add Profile Img & TypedJS -->
                <div class="my_photo d-flex flex-column align-items-center gap-3">
                    <img class="my_photo" src="./img/profile.jpg" alt="">
                    <div>
                        <span class="text-light fw-bold fs-5" ref="typed"></span>
                    </div>
                    
                </div>
                <!-- About Title -->
                <div>
                    <h1 v-on:scroll="" class="my_primary fw-bold">About</h1>
                    <p class="text-light lh-lg">
                        Ho deciso di intraprendere questa strada per potermi permettere una <span class="my_secondary_bg rounded p-1 fw-bold">futura laurea in informatica</span>. 
                        <br>
                        Ma allo stesso tempo <span class="my_primary_bg rounded p-1 fw-bold">imparare</span> sempre più sul mondo della <span class="my_primary_bg rounded p-1 fw-bold">programmazione</span>.
                    </p>
    
                </div>

                <!-- Add Cube Component -->
                <div>
                    <Cube/>
                </div>
            </div>

        </div>
        
    </section>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;

.my_photo{
    width: 300px;
    height: 300px;
    object-fit: cover;
    object-position: bottom;
    border-radius: 100%;
}
</style>