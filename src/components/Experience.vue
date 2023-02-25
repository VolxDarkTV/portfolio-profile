<script>

</script>

<template>

    <section id="experience" class="container py-5 mt-5">
        <div>
            <h1 class="my_primary fw-bold pt-5">Experience</h1>

            <div class="container pt-4">
                <div class="row">
                    <div class="col-md-12">
                        <div class="main-timeline">
                            <!-- 2020 -->
                            <div class="timeline" data-aos="fade-right" data-aos-delay="100">
                                <a href="#" class="timeline-content">
                                    <div class="timeline-year">2020</div>
                                    <div class="timeline-icon">
                                        <font-awesome-icon icon="fa-solid fa-store" />
                                    </div>
                                    <h3 class="title fw-bold my_third">Ristorante</h3>
                                    <p class="description">
                                        A 16 anni ho lavorato in un ristorante come <span class="fw-bold">addetto sala</span> / <span class="fw-bold">addetto cucina</span> / <span class="fw-bold">addetto bar</span>. Le mie responsabilità crescevano sempre più con il passare del tempo, come le mie skills acquisite aumentavano con il passare del tempo. 
                                    </p>
                                </a>
                            </div>
                            <!-- 2021 -->
                            <div class="timeline" data-aos="fade-left" data-aos-delay="200">
                                <a href="#" class="timeline-content">
                                    <div class="timeline-year">2021</div>
                                    <div class="timeline-icon">
                                        <font-awesome-icon icon="fa-solid fa-store" />
                                    </div>
                                    <h3 class="title fw-bold my_third">Ristorante</h3>
                                    <p class="description">
                                        A 17 anni ho lavorato in un ristorante come <span class="fw-bold">addetto sala</span> / <span class="fw-bold">addetto cucina</span> / <span class="fw-bold">addetto bar</span>. Le mie responsabilità crescevano sempre più con il passare del tempo, come le mie skills acquisite aumentavano con il passare del tempo. 
                                    </p>
                                </a>
                            </div>
                            <!-- 2022 -->
                            <div class="timeline" data-aos="fade-right" data-aos-delay="300">
                                <a href="#" class="timeline-content">
                                    <div class="timeline-year">2022</div>
                                    <div class="timeline-icon">
                                        <font-awesome-icon icon="fa-solid fa-cow" />
                                    </div>
                                    <h3 class="title fw-bold my_third">Macelleria</h3>
                                    <p class="description">
                                        Ho lavorato in questa macelleria all'ingrosso, in cui avevo il compito di 
                                        <span class="fw-bold">assemblare</span> / <span class="fw-bold">porzionare i tagli</span> / <span class="fw-bold">confezionare</span> e <span class="fw-bold">spedire</span> in reparto vendita.
                                    </p>
                                </a>
                            </div>
                            <!-- 2023 -->
                            <div class="timeline" data-aos="fade-left" data-aos-delay="400">
                                <a href="#" class="timeline-content">
                                    <div class="timeline-year">2023</div>
                                    <div class="timeline-icon">
                                        <font-awesome-icon icon="fa-solid fa-laptop-code" />
                                    </div>
                                    <h3 class="title fw-bold my_third">Jr. Full Stack Web Developer Trainee</h3>
                                    <p class="description">
                                        Realizzazione partendo da zero, di complesse applicazioni Web ispirate ad alcuni dei più famosi successi.
                                        <br>
                                        <br>
                                        Come Netflix, Spotify, WhatsApp, Dropbox, Discord e Zalando. 
                                        <br>
                                        <br>
                                        Grazie a questi progetti ho affinato la parte Front-End e il funzionamento delle API.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<style lang="scss">
@use '../styles/general.scss' as *;
.main-timeline{ font-family: 'Poppins', sans-serif; }
.main-timeline:after{
    content: '';
    display: block;
    clear: both;
}
.main-timeline .timeline{
    width: calc(50% + 200px);
    margin: 0 0 25px 5px;
    float: right;
}
.main-timeline .timeline-content{
    color: #ffffff;
    background: #2c2c2c;
    padding: 15px 15px 15px 290px;
    border-radius: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
    display: block;
    position: relative;
}
.main-timeline .timeline-content:hover{ text-decoration: none; }
.main-timeline .timeline-content:before{
    content: '';
    background-color: #00A7FB;
    height: 100%;
    width: 120px;
    position: absolute;
    left: 140px;
    top: 0;
}
.main-timeline .timeline-year{
    color: #00A7FB;
    font-size: 40px;
    font-weight: 700;
    line-height: 43px;
    transform: translateY(-50%);
    position: absolute;
    left: 22px;
    top: 50%;
}
.main-timeline .timeline-icon{
    color: #fff;
    font-size: 50px;
    font-weight: 600;
    text-align: center;
    line-height: 50px;
    width: 120px;
    transform: translateY(-50%);
    position: absolute;
    left: 140px;
    top: 50%;
}
.main-timeline .title{
    font-size: 23px;
    font-weight: 500;
    text-transform: capitalize;
    margin: 0 0 7px;
}
.main-timeline .description{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 0;
}
.main-timeline .timeline:nth-child(even){
    margin: 0 5px 25px 0;
    float: left;
}
.main-timeline .timeline:nth-child(even) .timeline-content{ padding: 15px 280px 15px 20px; }
.main-timeline .timeline:nth-child(even) .timeline-content:before{
    left: auto;
    right: 139px;
}
.main-timeline .timeline:nth-child(even) .timeline-year{
    left: auto;
    right: 19px;
}
.main-timeline .timeline:nth-child(even) .timeline-icon{
    left: auto;
    right: 139px;
}
.main-timeline .timeline:nth-child(4n+2) .timeline-content:before{ background-color: $brand_primary; }
.main-timeline .timeline:nth-child(4n+2) .timeline-year{ color: $brand_primary; }
.main-timeline .timeline:nth-child(4n+3) .timeline-content:before{ background-color: $brand_secondary; }
.main-timeline .timeline:nth-child(4n+3) .timeline-year{ color: $brand_secondary; }
.main-timeline .timeline:nth-child(4n+4) .timeline-content:before{ background-color: $brand_fourth; }
.main-timeline .timeline:nth-child(4n+4) .timeline-year{ color: $brand_fourth; }
@media screen and (max-width:767px){
    .main-timeline .timeline,
    .main-timeline .timeline:nth-child(even){
        width: 100%;
        margin: 0 0 30px;
    }
    .main-timeline .timeline-content,
    .main-timeline .timeline:nth-child(even) .timeline-content{
        text-align: center;
        padding: 200px 15px 15px 15px;
    }
    .main-timeline .timeline-content:before,
    .main-timeline .timeline:nth-child(even) .timeline-content:before{
        width: 100%;
        height: 100px;
        transform: translateX(-50%) translateY(0);
        left: 50%;
        right: auto;
        top: 80px;
    }
    .main-timeline .timeline-year,
    .main-timeline .timeline:nth-child(even) .timeline-year{
        transform: translateY(0) translateX(-50%);
        left: 50%;
        right: auto;
        top: 20px;
    }
    .main-timeline .timeline-icon,
    .main-timeline .timeline:nth-child(even) .timeline-icon{
        width: auto;
        transform: translateY(0) translateX(-50%);
        left: 50%;
        right: auto;
        top: 105px;
    }
}
</style>