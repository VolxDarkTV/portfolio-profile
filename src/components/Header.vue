<script>
    // Dark/Light Mode
    import Toggle from '../components/Toggle.vue';
    export default{
        // Dark/Light Mode
        props: ['mode'],
        
        components:{
            Toggle,
        },

        data(){
            return{
                showMenu: false,
                active: -1,
                links:[
                    {
                        name: "ABOUT",
                        url: "about",
                        current: false,
                    },
                    {
                        name: "EXPERIENCE",
                        url: "experience",
                        current: false,
                    },
                    {
                        name: "WORKS",
                        url: "works",
                        current: false,
                    },
                    {
                        name: "SKILLS",
                        url: "skills",
                        current: false,
                    },
                    {
                        name: "CONTACT",
                        url: "contact",
                        current: false,
                    },
                ]
            }
        },
        methods:{
            showOfCanvasMenu(){
                this.showMenu ? this.showMenu = false : this.showMenu = true;
            },
            linkSelect (index) {    
                if(this.active != index){
                    this.active = index;
                }else{
                    this.active = -1;
                }
                
            },
        },
    }
</script>

<template>

    <div class="my_header_bg container-fluid fixed-top">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">


                <div class="d-flex gap-3 align-items-center">
                    <!-- Logo -->
                    <div class="my_logo">
                        <a @click="active = -1" href="#">
                            <img class="rounded-circle" src="../../public/img/logo.jpg" alt="">
                        </a>
                    </div>
    
                    <div>
                        <!-- <h1>{{ mode }} mode</h1> -->
                        <Toggle :mode="mode" @toggle="$emit('toggle')"/>
                    </div>
                </div>

                <!-- Button ON/OFF -->
                <button @click="showOfCanvasMenu" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <!-- Menu -->
                <div :class="showMenu ? 'show' : ''" class="collapse navbar-collapse justify-content-end" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-0 d-flex flex-column gap-3 flex-lg-row fs-2">

                        <li class="d-flex justify-content-end" v-for="(link, index) in links" :key="index">
                            <a @click="linkSelect(index), showOfCanvasMenu()" class="my_header_class" :href="'#' + link.url" :class="active === index ? 'my_active' : ''">{{ link.name }}</a>
                        </li>

                    </ul>
                </div>



            </div>
        </nav>
    </div> 
</template>

<style lang="scss">
@use '../styles/general.scss' as *;

.my_logo{
    width: 50px;
}
// .my_header_class{
//     color: #fff;
// }
.my_header_class:hover{
    color: $brand_primary !important;
}
.my_active{
    color: $brand_primary !important;
}
</style>