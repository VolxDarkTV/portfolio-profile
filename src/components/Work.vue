<script>
    
    import { Navigation, A11y, EffectCoverflow, Autoplay } from 'swiper';
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
                modules: [Navigation, A11y, EffectCoverflow, Autoplay],
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                },
            };
        },
        data(){
            return{
                myCarousel:[
                    {
                        img: 'discord.jpg',
                        url: 'https://github.com/VolxDarkTV/htmlcss-discord',
                    },
                    {
                        img: 'dropbox.jpg',
                        url: 'https://github.com/VolxDarkTV/htmlcss-dropbox',
                    },
                    {
                        img: 'netflix.jpg',
                        url: 'https://github.com/VolxDarkTV/vite-boolflix',
                    },
                    {
                        img: 'spotify.jpg',
                        url: 'https://github.com/VolxDarkTV/html-css-spotifyweb',
                    },
                    {
                        img: 'zalando.jpg',
                        url: 'https://github.com/VolxDarkTV/html-css-boolando',
                    },
                    {
                        img: 'whatsapp.jpg',
                        url: 'https://github.com/VolxDarkTV/vue-boolzapp',
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
    };
</script>

<template>

    <section id="works" class="container py-5">
        <h1 class="my_primary fw-bold pt-5">Works</h1>

        <div class="mt-5">

            <!-- Preview Container -->
            <div class="preview-container d-flex flex-column" v-if="preview >= 0">

                <div class="my_close d-flex justify-content-center align-items-center" @click="closePreview()">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </div>
                <div>
                    <a class="my_link d-flex justify-content-between align-items-center gap-2" :href="myCarousel[preview].url">
                        <span>GitHub</span>
                        <font-awesome-icon icon="fa-brands fa-github-alt" />
                    </a>
                </div>
                <img
                class="preview-image"
                :src="'./carousel/' + myCarousel[preview].img"
                :alt="myCarousel[preview].img"
                />
                <!-- Preview Carousel Thumbs -->
                <div class="my_thumbs">
                    <swiper
                    :slides-per-view="10"
                    :watchSlidesVisibility="true"
                    :watchSlidesProgress="true"
                    :centeredSlides="true"
                    :slideToClickedSlide="true"
                    :space-between="5"
                    >
                    <swiper-slide v-for="(slide, index) in myCarousel" :key="slide">
                        <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
                    </swiper-slide>
                    </swiper>

                </div>

            </div>

            <swiper
                :effect="'coverflow'"
                :grabCursor="true"
                :modules="modules"
                :slides-per-view="1.5"
                :space-between="20"
                navigation
                :loop="true"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :centeredSlides="true"
                :coverflowEffect="{
                  rotate: 50,
                  stretch: 0,
                  depth: 30,
                  modifier: 1,
                  slideShadows: true,
                }"
                :autoplay="true"
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

.my_thumbs{
    position: absolute;
    top: 100%;
    width: 100%;
}



.my_link{
    position: absolute;
    top: -10px;
    left: -10px;
    padding: 0px 10px;
    background-color: $brand_fourth;
    border-radius: 5%;
    cursor: pointer;
}
.my_close{
    position: absolute;
    top: -10px;
    right: -10px;
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