<template>
  <div class="container mx-auto px-4 py-12 max-w-6xl">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Vue SPA Project
        </span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Una Single Page Application moderna construida con Vue 3, TypeScript y las mejores prácticas de desarrollo.
      </p>
      <div class="flex justify-center gap-4">
        <a href="https://github.com/AndresGodinez"
           target="_blank"
           rel="noopener noreferrer"
           class="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
          <CodeBracketIcon class="w-5 h-5" />
          Mi GitHub
        </a>

        <a href="https://github.com/AndresGodinez/vue3Routes"
           target="_blank"
           rel="noopener noreferrer"
           class="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-500 transition">
          Repositorio
        </a>
      </div>
    </div>
    <!-- Testing Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      <div class="rounded-xl overflow-hidden shadow-lg">
        <div class="h-[300px] overflow-hidden">
          <img
            src="@/assets/testImages/console_test.png"
            alt="Console Test Results"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 bg-white">
          <h3 class="font-semibold text-lg mb-2">Resultados de Tests</h3>
          <p class="text-gray-600">Ejecución exitosa de pruebas unitarias y de integración</p>
        </div>
      </div>

      <div class="rounded-xl overflow-hidden shadow-lg">
        <div class="h-[300px] overflow-hidden">
          <img
            src="@/assets/testImages/coverage_report.png"
            alt="Coverage Report"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 bg-white">
          <h3 class="font-semibold text-lg mb-2">Reporte de Cobertura</h3>
          <p class="text-gray-600">Análisis detallado de la cobertura de código</p>
        </div>
      </div>
    </div>
    <div class="my-16">
      <h2 class="text-3xl font-bold text-center mb-8">Importancia del Testing</h2>
      <div class="max-w-4xl mx-auto">
        <!-- Beneficios del Testing -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div v-for="benefit in testingBenefits"
               :key="benefit"
               class="p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition">
            <div class="flex items-start gap-4">
              <div class="bg-green-100 rounded-full p-2 mt-1">
                <CheckIcon class="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ benefit }}</h3>
                <p class="text-gray-600 text-sm">
                  {{ getBenefitDescription(benefit) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Counter Section -->
    <section class="flex flex-col items-center mb-16">
      <h2 class="flex flex-col text-3xl font-semibold mt-8">Counter using Keep Alive</h2>
      <h3 class="flex flex-col text-xl font-bold">{{counter}}</h3>
      <button class="bg-blue-400 text-white text-3 rounded p-4 m3" @click="incrementCounter">+</button>
    </section>

    <!-- Tech Stack -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-8">Stack Tecnológico</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(stack, index) in techStack" :key="index"
             class="p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition">
          <h3 class="text-xl font-semibold mb-4 text-blue-600">{{ stack.category }}</h3>
          <ul class="space-y-2">
            <li v-for="(tech, techIndex) in stack.items" :key="techIndex"
                class="flex items-center gap-2">
              <CheckIcon class="w-5 h-5 text-green-500" />
              <span>{{ tech }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold text-center mb-12">Características Principales</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(feature, index) in features"
             :key="index"
             class="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div class="mb-6">
            <div class="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110 transition-transform duration-300">
              <component
                :is="feature.icon"
                class="w-7 h-7 text-white"
              />
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3 text-gray-800">{{ feature.title }}</h3>
          <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./HomePage.ts"></script>
