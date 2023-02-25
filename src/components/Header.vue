<script>

    export default{
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

    <!-- <div class="container-fluid fixed-top bg-dark">
        <nav class="container d-flex justify-content-between align-items-center px-3 py-2">
            <div class="my_logo">
                <a href="#">
                    <img class="rounded-circle" src="../assets/img/logo.jpg" alt="">
                </a>
            </div>
            <ul class="text-light d-flex gap-3 fw-bold fs-2">
                <li v-for="(link, index) in links" :key="index">
                    <a @click="linkSelect(index)" class="my_header_class" :href="'#' + link.url" :class="active === index ? 'my_active' : ''">{{ link.name }}</a>
                </li>
            </ul>
        </nav>
    </div> -->
    <div class="container-fluid fixed-top bg-dark">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">



                <!-- Logo -->
                <div class="my_logo">
                    <a href="#">
                        <img class="rounded-circle" src="../../public/img/logo.jpg" alt="">
                    </a>
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
.my_header_class{
    color: #fff;
}
.my_header_class:hover{
    color: $brand_primary;
}
.my_active{
    color: $brand_primary;
}
</style>