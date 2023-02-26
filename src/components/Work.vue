<script>
    
    import { Navigation, A11y } from 'swiper';
    import { Swiper, SwiperSlide } from 'swiper/vue';

    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    
    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, A11y],
            };
        },
        data(){
            return{
                myCarousel:[
                    {
                        img: 'discord.jpg',
                    },
                    {
                        img: 'dropbox.jpg',
                    },
                    {
                        img: 'netflix.png',
                    },
                    {
                        img: 'spotify.jpg',
                    },
                    {
                        img: 'zalando.jpg',
                    },
                    {
                        img: 'whatsapp.jpg',
                    },
                ],
                preview: -1, 
            }
        },
        methods:{
            setPreview(index) {
                if(this.preview != index){
                    this.preview = index;
                }else{
                    this.preview = -1;
                }
            },  
            closePreview(){
                this.preview = -1;
            }
        },
        mounted(){
            
            
        }
    };
</script>

<template>

    <section id="works" class="container py-5">
        <h1 class="my_primary fw-bold pt-5">Works</h1>

        <div class="mt-5">

            <div class="preview-container d-flex flex-column" v-if="preview >= 0">
                <div class="my_close" @click="closePreview()">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </div>
                <img
                class="preview-image"
                :src="'./carousel/' + myCarousel[preview].img"
                :alt="myCarousel[preview].img"
                />
                <div>
                    <!-- <Carousel :items-to-show="6" :wrap-around="true">
                        <Slide v-for="(slide, index) in myCarousel" :key="slide">
                            <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
                        </Slide>
                    
                        <template #addons>
                          <Navigation class="my_navigation_preview"/>
                        </template>
                    </Carousel> -->
                </div>
            </div>

            <!-- <Carousel :items-to-show="1.5" :wrap-around="true" :autoplay="5000">
                <Slide v-for="(slide, index) in myCarousel" :key="slide">
                    <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
                    
                </Slide>
            
                <template #addons>
                  <Navigation />
                </template>
            </Carousel> -->

            <swiper
                :modules="modules"
                :slides-per-view="1.5"
                :space-between="20"
                navigation
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :centeredSlides="true"
            >
                <swiper-slide v-for="(slide, index) in myCarousel" :key="slide">
                    <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
                </swiper-slide>
                
            </swiper>

        </div>

    </section>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;
// .carousel__item {
//     min-height: 200px;
//     width: 100%;
//     background-color: var(--vc-clr-primary);
//     color: var(--vc-clr-white);
//     font-size: 20px;
//     border-radius: 8px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// }

// .carousel__slide {
//     padding: 0px 10px;
// }

// .carousel__prev{
//     transform: rotateY(-10deg) scale(0.95);

//     position: absolute;
//     top: 42%;
//     left: 5%;
//     padding: 10px;
//     border-radius: 50%;
//     background-color: $brand_third;
//     color: $brand_fourth;
// }
// .carousel__next {
//     transform: rotateY(10deg) scale(0.95);

//     position: absolute;
//     top: 42%;
//     right: 5%;
//     padding: 10px;
//     border-radius: 50%;
//     background-color: $brand_third;
//     color: $brand_fourth;
// }

.swiper {
  width: 100%;
  height: 100%;
}
// Prev & Next
.swiper-button-next{
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 50px;
    height: 50px;
    padding: 20px 20px;
    border-radius: 50%;
    color: $brand_fourth;
    background-color: $brand_third;
}
.swiper-button-next::after{
    font-size: 20px;
}
.swiper-button-prev{
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 50px;
    height: 50px;
    padding: 20px 20px;
    border-radius: 50%;
    color: $brand_fourth;
    background-color: $brand_third;
}
.swiper-button-prev::after{
    font-size: 20px;
}

// preview
.preview-container {
    z-index: 999;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    border: 3px solid $brand_third;
    border-radius: 4px;
}

.preview-image {
    width: 80vw;
    // max-height: 1200px;
}

.my_close{
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background-color: $brand_primary;
    border-radius: 30%;
    cursor: pointer;
}


// .preview-container:hover .my_close{
//     position: absolute;
//     top: -10px;
//     right: -10px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 20px;
//     height: 20px;
//     background-color: $brand_primary;
//     border-radius: 30%;
//     cursor: pointer;
// }
</style>