<template>
  <div class=" flex justify-center items-center ">
    <div class="">
      <div class="text-center font-semibold">
        <h1 class="text-5xl">
          <span class="text-blue-700 tracking-wide">Pokemón </span>
          <span>Pokemón</span>
        </h1>

      </div>
      <div class="pt-24 flex items-center justify-center gap-4">
        <!-- Previous Button -->
        <router-link
          class="px-4 py-2 rounded bg-blue-400 text-white text-3xl hover:bg-blue-500"
          :to="{ name: 'pokemon', params: { id: id - 1 } }"
          id="previous-button"
          v-if="Number(id) > 1"
        >
          ←
        </router-link>

        <!-- Pokemon Card -->
        <div
          class="flex flex-col items-center w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125 w-[400] h-[500] object-contain">
          <h1 class="text-white font-semibold text-2xl">Pokemón Name</h1>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
            alt="pokemonImage">
        </div>

        <!-- Next Button -->
        <router-link
          class="px-4 py-2 rounded bg-blue-400 text-white text-3xl hover:bg-blue-500"
          id="next-button"
          :to="{ name: 'pokemon', params: { id: id + 1 } }"
        >
          →
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  id: number;
}

const props = defineProps<Props>();

if (isNaN(Number(props.id)) || Number(props.id) < 1) {
  throw new Error('ID must be a positive number');
}

</script>
