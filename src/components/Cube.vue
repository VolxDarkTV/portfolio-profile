<script>

</script>

<template>

    <div>
        <!-- Cube -->
        <div class="my_cube">
            <div class="my_top">
                <img src="./img/logo.jpg" alt="">
            </div>
            <div>
                <span class="d-flex justify-content-center align-items-center" style="--i:0;">
                    <img src="../../public/img/logo.jpg" alt="">
                </span>

                <span class="d-flex justify-content-center align-items-center" style="--i:1;">
                    <img src="../../public/img/logo.jpg" alt="">
                </span>

                <span class="d-flex justify-content-center align-items-center" style="--i:2;">
                    <img src="../../public/img/logo.jpg" alt="">
                </span>

                <span class="d-flex justify-content-center align-items-center" style="--i:3;">
                    <img src="../../public/img/logo.jpg" alt="">
                </span>

            </div>
        </div>
    </div>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;

// Cube
.my_cube{
    position: relative;
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
}



@keyframes animate
{
    0%
    {
        transform: rotateX(-30deg) rotateY(0deg);
    }
    100%
    {
        transform: rotateX(-30deg) rotateY(360deg);
    }
}

.my_cube div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}
.my_cube div span{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(gray, $brand_primary 20%);
    transform: rotateY(calc(90deg * var(--i))) translateZ(50px) /* 100 / 2 = 55 */;

    color: $brand_third;
}

.my_top{
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: gray;
    transform: rotateX(90deg) translateZ(50px);
}
.my_top::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    background: $brand_primary;
    transform: translateZ(-130px);
    filter: blur(10px);
}
</style>