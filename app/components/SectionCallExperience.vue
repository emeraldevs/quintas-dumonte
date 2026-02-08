<script setup lang="ts">
/**
 * Componente: SectionCallExperience (Chamada para Experiência)
 * Objetivo: Levar o usuário da Home (Venda) para a página de Aluguel (Experiência).
 */
</script>

<template>
  <section class="relative py-24 bg-[#101010] overflow-hidden">
    
    <!-- Imagem de Fundo (Escura/Mood) -->
    <div class="absolute inset-0 opacity-40">
      <img src="/lazer-lareira-externa.jpg" class="w-full h-full object-cover grayscale" alt="" />
    </div>
    
    <!-- Gradiente -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#101010] via-[#101010]/90 to-transparent"></div>

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div class="max-w-xl">
        <h2 class="text-base font-semibold leading-7 text-[#CBBD93] uppercase tracking-wide mb-2">
          Test-Drive do seu Sonho
        </h2>
        <h3 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
          Que tal passar um fim de semana aqui antes de decidir?
        </h3>
        <p class="mt-4 text-lg text-gray-400 leading-relaxed">
          Entendemos que comprar um terreno é uma grande decisão. Por isso, convidamos você a se hospedar em nossas suítes e sentir na pele a paz e o clima do Quintas Dumonte.
        </p>
      </div>

      <div class="flex-shrink-0">
        <NuxtLink 
          to="/experiencia" 
          class="inline-flex items-center gap-2 rounded-full border border-[#CBBD93] px-8 py-4 text-base font-bold text-[#CBBD93] hover:bg-[#CBBD93] hover:text-[#101010] transition-all duration-300 transform hover:scale-105"
        >
          <span>Conhecer a Experiência</span>
          <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </div>

    </div>
  </section>
</template>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>
