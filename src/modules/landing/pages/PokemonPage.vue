<template>
  <div class=" flex justify-center items-center ">
    <div class="">
      <div class="text-center font-semibold">
        <h1 class="text-5xl">
          <span class="text-blue-700 tracking-wide">Pokemón </span>
          <span>Pokemón</span>
        </h1>

      </div>
      <div class="pt-24 flex flex-row">

        <!-- StartUp Card -->
        <div
          class=" flex flex-col items-center w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
          <h1 class="text-white font-semibold text-2xl">Pokemón Name</h1>
          <img
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
            alt="pokemonImage">

        </div>
        <!-- Enterprise Card -->

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  id: string;
}

const props = defineProps<Props>();
const { id } = props;
console.log(id);
console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);

</script>
