<script setup lang="ts">
/**
 * Componente: SectionHero - Versão Cores Diretas (Hardcoded)
 * Função: Primeira dobra do site. Deve impactar e resumir a proposta de valor.
 */
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#101010] py-24 sm:py-32 lg:pb-40 min-h-[93vh] flex items-center">
    
    <img 
      src="/hero.jpg" 
      alt="Vista aérea da pedra azul" 
      class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
    />

    <div class="absolute inset-0 -z-10 `bg-gradient-to-t` from-[#101010]/80 via-[#101010]/40 to-transparent"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">

      <h1 class="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl font-sans">
        Sítio de lazer  <br class="hidden sm:block" />
        <span class="text-[#D8C67A]">fechado e familiar</span>
      </h1>

      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
        Para quem busca qualidade de vida, segurança, natureza, tranquilidade e ar puro.
      </p>

      <div class="mt-10 flex items-center justify-center gap-x-6">
        
        <a 
          href="#contact" 
          class="rounded-md bg-[#D8C67A] px-5 py-3 text-base font-semibold text-[#101010] shadow-sm hover:bg-[#E3D38B] 'focus-visible:outline' focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8C67A] transition-all duration-300 transform hover:scale-105"
        >
          Agendar visita
        </a>

        <a href="#features" class="text-sm font-semibold leading-6 text-white hover:text-[#D8C67A] transition-colors flex items-center gap-1">
          Conhecer detalhes <span aria-hidden="true">→</span>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Animação simples de entrada */
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>