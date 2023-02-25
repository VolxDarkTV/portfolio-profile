<script>
    import { defineComponent } from 'vue';
    import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel';
    import 'vue3-carousel/dist/carousel.css';
    export default defineComponent({
        name: 'Basic',
        components: {
            Carousel,
            Slide,
            Pagination,
            Navigation,
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
        }
    });
</script>

<template>

    <section id="works" class="container py-5">
        <h1 class="my_primary fw-bold pt-5">Works</h1>
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
                <Carousel :items-to-show="6" :wrap-around="true">
                    <Slide v-for="(slide, index) in myCarousel" :key="slide">
                        <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
                    </Slide>
                
                    <template #addons>
                      <Navigation/>
                    </template>
                </Carousel>
            </div>
        </div>
        <Carousel :items-to-show="1.5" :wrap-around="true" :autoplay="5000">
            <Slide v-for="(slide, index) in myCarousel" :key="slide">
                <img @click="setPreview(index)" :src="'./carousel/' + slide.img" alt="">
            </Slide>
        
            <template #addons>
              <Navigation/>
            </template>
        </Carousel>
    </section>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev{
    color: #fff;
    transform: rotateY(-10deg) scale(0.95);
}
.carousel__next {
  color: #fff;
  transform: rotateY(10deg) scale(0.95);
}

// preview
.preview-container {
  z-index: 99;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  border: 3px solid $brand_third;
  border-radius: 4px;
}

.preview-image {
  max-width: 1200px;
  max-height: 1200px;
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