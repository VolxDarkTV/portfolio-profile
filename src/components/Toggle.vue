<script>
    export default{
        props: ['mode'],
    }
</script>

<template>

    <div class="toggle-wrapper">
        <label class="toggle">
            <!-- <input 
            type="checkbox" 
            :checked="(mode === 'dark') ? 'checked' : false"
            @change="$emit('toggle')"
            >
            <span class="toggler round"></span> -->

            <font-awesome-icon class="fs-3" v-if="mode === 'light'" icon="fa-regular fa-sun" @click="$emit('toggle')"/>
            <font-awesome-icon class="fs-3" v-if="mode == 'dark'" icon="fa-regular fa-moon" @click="$emit('toggle')"/>
        </label>
    </div>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;


    // .toggle{
    //     position: relative;
    //     display: inline-block;
    //     width: 60px;
    //     height: 34px;
    // }
    // .toggle input{
    //     opacity: 0;
    //     width: 0;
    //     height: 0;
    // }

    // .toggler{
    //     position: absolute;
    //     cursor: pointer;
    //     top: 0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: black;
    //     -webkit-transition: 0.4s;
    //     transition: 0.4s;
    //     border-radius: 50px;
    // }

    // .toggler::before{
    //     position: absolute;
    //     content: '';
    //     width: 26px;
    //     height: 26px;
    //     left: 4px;
    //     bottom: 4px;
    //     background: #fff;
    //     border-radius: 50%;
    // }

    // input + .toggler{
    //     background: $brand_fourth;
    // }
    // input:checked + .toggler{
    //     background: $brand_third;
    // }
    
    // input:checked + .toggler::before{
    //     -webkit-transform: translateX(26px);
    //     -ms-transform: translateX(26px);
    //     transform: translateX(26px);
    // }


</style>