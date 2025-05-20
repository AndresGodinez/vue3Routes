<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
      Bienvenido a nuestro sitio web
    </h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <section>
      <h2 class="flex flex-col text-3xl font-semibold mt-8">Counter</h2>
      <h3 class="flex flex-col text-xl font-bold">{{counter}}</h3>
      <button class="bg-blue-400 text-white text-3 rounded p-4 m3" @click="incrementCounter">+</button>
    </section>
  </div>
</template>
<script lang="ts" src="./HomePage.ts"></script>
