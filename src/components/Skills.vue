<script>
export default {
  data() {
    return {
      frontEnd: [
        {
          name: "HTML5",
          img: "html5.png",
        },
        {
          name: "CSS",
          img: "css.png",
        },
        {
          name: "Bootstrap",
          img: "bootstrap.png",
        },
        {
          name: "Java Script",
          img: "js.png",
        },
        {
          name: "Vue",
          img: "Vue.png",
        },
        {
          name: "Axios",
          img: "axios.png",
        },
        {
          name: "Sass",
          img: "sass.png",
        },
        {
          name: "React Native",
          img: "react-native.png",
        },
      ],
      backEnd: [
        {
          name: "Node JS",
          img: "nodejs.webp",
        },
        {
          name: "MySql",
          img: "mysql.webp",
        },
        {
          name: "MAMP",
          img: "mamp.png",
        },
        {
          name: "PhpMyAdmin",
          img: "phpmyadmin.png",
        },
        {
          name: "PHP",
          img: "php.png",
        },
        {
          name: "Laravel",
          img: "laravel.png",
        },
        {
          name: "C#",
          img: "c-sharp.png",
        },
        {
          name: "SQL Server",
          img: "sql-server.png",
        },
        {
          name: ".Net",
          img: "dot-net.png",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="skills" class="container py-5">
    <h1 class="my_primary fw-bold pt-5">Skills</h1>

    <div class="row row-cols-1 row-cols-md-2 gap-5 gap-md-0">
      <!-- Front-End -->
      <div class="d-flex flex-column gap-4">
        <h3 class="fw-bold fs-3">Front-End</h3>

        <div class="d-flex gap-5">
          <ul class="d-flex flex-column gap-4">
            <li
              v-for="itemFront in frontEnd"
              class="d-flex align-items-center gap-3"
            >
              <div class="my_img">
                <img :src="'./img/' + itemFront.img" alt="HTML5" />
              </div>
              {{ itemFront.name }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Back-End -->
      <div class="d-flex flex-column gap-4">
        <h3 class="fw-bold fs-3">Back-End</h3>

        <div class="d-flex gap-5">
          <ul class="d-flex flex-column gap-4">
            <li
              v-for="itemBack in backEnd"
              class="d-flex align-items-center gap-3"
            >
              <div class="my_img">
                <img :src="'./img/' + itemBack.img" alt="HTML5" />
              </div>
              {{ itemBack.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../styles/general.scss" as *;
.my_img {
  width: 50px;
}
</style>
