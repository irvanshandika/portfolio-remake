<template>
  <section id="about">
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div class="relative p-6 md:p-16">
        <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 class="text-2xl text-gray-900 lg:text-start text-center font-bold sm:text-3xl dark:text-gray-200">About Me</h2>
            <div class="grid gap-4 mt-5 md:mt-10">
              <p class="text-center lg:text-left mt-4 text-gray-900 dark:text-white">
                Hi, my name is <span class="font-semibold underline decoration-blue-500">Muhammad Irvan Shandika</span>. I am a student at the University of AMIKOM Yogyakarta. I am currently studying in the Informatic study program. I am a
                person who is very interested in the world of technology, especially in the field of web development.
              </p>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="relative">
              <div>
                <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1" class="bgimage">
                  <img
                    fetchpriority="low"
                    class="block shadow-xl rounded-xl shadow-gray-900/[.2]"
                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                    alt="Image Description" />
                </div>
              </div>

              <div class="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
          <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-200 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
        </div>
      </div>
    </div>
  </section>
</template>
