<template>
  <section id="contact" class="my-3">
    <!-- component -->
    <div class="flex min-h-screen items-center justify-start">
      <div class="mx-auto w-full max-w-lg">
        <h1 class="text-4xl font-medium dark:text-white">Contact us</h1>
        <p class="mt-3 dark:text-white">Email us at <span class="underline underline-offset-2 decoration-blue-500">contact@irvanshandika.my.id</span> or message us here:</p>

        <form action="https://api.web3forms.com/submit" method="post" class="mt-10">
          <input type="hidden" name="access_key" value="325b43fd-fe20-4701-8008-8ddc482abe76" />
          <div class="grid gap-6 sm:grid-cols-2">
            <div class="relative z-0">
              <input
                type="text"
                name="name"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 dark:text-white focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-50"
                placeholder=" " />
              <label
                for="name"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                >Your name</label
              >
            </div>
            <div class="relative z-0">
              <input
                type="text"
                name="email"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:border-gray-50"
                placeholder=" " />
              <label
                for="email"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                >Your email</label
              >
            </div>
            <div class="relative z-0 col-span-2">
              <textarea
                name="message"
                rows="5"
                class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:text-white dark:border-gray-50"
                placeholder=" "></textarea>
              <label
                for="message"
                class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
                >Your message</label
              >
            </div>
          </div>
          <button type="submit" class="mt-5 rounded-md bg-blue-500 hover:bg-blue-400 px-10 py-2 text-white">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>
