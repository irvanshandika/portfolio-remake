<script>
export default {
  name: "Project",
  data() {
    return {
      projects: [
        {
          name: "First Portfolio HTML, CSS, Javascript, and Using Bootstrap Framework",
          description: "This is my first project portfolio using HTML, CSS, Javascript, and Using Bootstrap Framework",
          alt: "First Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704043897/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/foto1_yc8plg.png",
          url: "https://irvanshandika.netlify.app/",
        },
        {
          name: "May Beauty Skin",
          description: "Here is my second project in learning frontend web developer. Here I use the JavaScript framework React JS and Bootstrap 5.",
          alt: "Second Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704043898/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/foto2_wbodpu.png",
          url: "https://maybeautyskin.vercel.app/",
        },
        {
          name: "Digital Library",
          description: "This project is the first project that I made with my friends for the final project in the Advanced Programming course.",
          alt: "Third Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704043898/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/foto3_k9rwdz.png",
          url: "https://perpustakaandigital.vercel.app/",
        },
        {
          name: "Memories Album",
          description: "This Memories Album is my lesson in learning full stack using Next JS and Cloudinary for save images.",
          alt: "Fourth Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704043900/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/foto5_tu8msy.png",
          url: "https://albumif07.vercel.app/",
        },
        {
          name: "Votely APP",
          description: "Votely APP is my second final project with my friend in completing the final project of the Web Programming course. And I became the frontend developer.",
          alt: "Fifth Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1704043897/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/foto4_smpa30.png",
          url: "https://lets-votely.com/",
        },
        {
          name: "May Beauty Skin 2.0",
          description: "And May Beauty Skin 2.0 is the latest change after my second project was completed. Here I try to use Angular Typescript and Tailwindcss.",
          alt: "Sixth Project",
          imageUrl: "https://res.cloudinary.com/dszhlpm81/image/upload/v1705938430/assets/UFPMOvuUtfuMxUpG2yy%2BnF743hBOeLEzqjNEDiHixcQ%3D/Screenshot_2024-01-22_224613_eyql8e.png",
          url: "https://www.maybeautyskin.my.id/",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block max-w-7xl py-28 mx-auto lg:text-xl">
    <h2 class="text-2xl font-bold mb-4 text-center text-blue-500">My Project</h2>
    <p class="text-center dark:text-white">Here is my portfolio</p>
    <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="item in projects" class="bg-gray-100 shadow-lg rounded-lg overflow-hidden dark:bg-white/[.075]">
        <img class="w-full h-56 object-cover object-center" :src="item.imageUrl" :alt="item.alt" fetchpriority="low" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 dark:text-white">{{ item.name }}</h3>
          <p class="text-gray-600 dark:text-gray-100">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
