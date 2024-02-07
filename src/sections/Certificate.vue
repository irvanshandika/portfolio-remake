<template>
  <section id="certificate">
    <div class="block max-w-7xl py-20 mx-auto lg:text-xl">
      <div class="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div class="space-y-3">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">My Certificates</h2>
          <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">View and learn more about my certificates.</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3 md:grid-cols-1">
      <div v-for="item in sertifikat" class="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-lg my-4 lg:mx-4 sm:mx-10 md:mx-[200px] dark:bg-white/[.075]">
        <img :class="item.class" :src="item.imageUrl" :alt="item.alt" class="rounded-md" />
        <h1 class="mt-4 text-xl font-semibold text-center dark:text-white capitalize lg:text-2xl">{{ item.title }}</h1>
        <p class="mt-2 text-center dark:text-white">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sertifikat: [
        {
          title: "AMCC Backend Developer Junior",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704006766/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/Screenshot_2023-12-31_141213_uivn8g.png",
          description: "This is the first certificate I got. By attending training from AMIKOM campus, namely AMCC Web Programming from the Backend Programming Division.",
          class: "lg:w-[500px] w-[200px]",
        },
        {
          title: "Junior Web Developer by KOMINFO",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704004749/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/Screenshot_2023-12-31_133823_ro2auf.png",
          description:
            "And this is the second certificate that I got during the training organized by KEMKOMINFO called Junior Web Developer in the Frontend Web Developer division. Which uses the frontend using the PHP language and uses the MySQL database.",
          class: "lg:w-[998px] w-[250px]",
        },
        {
          title: "AMCC Frontend Developer Intermediate",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704006766/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/Screenshot_2023-12-31_141130_nsi8j9.png",
          description:
            "And this is the third certificate after I participated in the Mini Bootcamp activity from the campus, namely AMCC Web Programming Intermediate Class. Which learned about the React JS framework and learned the REST API using the API from FAKE STORE.",
          class: "lg:w-[500px] w-[200px]",
        },
      ],
    };
  },
};
</script>
