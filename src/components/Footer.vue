<script>
export default {
  data() {
    return {
      years: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="bg-gray-200 dark:bg-white/[.075]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
          <a href="/" class="flex items-center">
            <img src="../assets/logo.png" class="h-8 me-3" alt="Logo" />
          </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
            <ul class="text-gray-500 dark:text-gray-100 font-medium">
              <li class="mb-4">
                <a href="https://flowbite.com/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Flowbite</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Tailwind CSS</a>
              </li>
              <li class="mt-4">
                <a href="https://vuejs.org/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Vue JS</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
            <ul class="text-gray-500 dark:text-gray-100 font-medium">
              <li class="mb-4">
                <a href="https://github.com/irvanshandika/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Github</a>
              </li>
              <li>
                <a href="https://www.instagram.com/irvan_shandika/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Instagram</a>
              </li>
              <li class="mt-4">
                <a href="https://www.facebook.com/shandika.irvan/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-center">
        <span class="text-sm sm:text-center text-gray-950 dark:text-white">
          <span class="font-roboto">©</span> {{ years }} <a href="/" class="hover:underline decoration-blue-500 text-gray-950 dark:text-white" target="_blank">Muhammad Irvan Shandika</a>. All Rights Reserved.
        </span>
      </div>
    </div>
  </footer>
</template>
