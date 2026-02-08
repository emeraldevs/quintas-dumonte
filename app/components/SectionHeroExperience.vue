<script setup lang="ts">
/**
 * Componente: SectionHeroExperience
 * Foco: Aluguel de Temporada / Turismo
 */
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#101010] min-h-[85vh] flex items-center">
    
    <!-- Imagem de Fundo (Pode ser a mesma ou uma mais focada em lazer/pousada) -->
    <img 
      src="/pousada1.jpg" 
      alt="Suítes confortáveis no Quintas Dumonte" 
      class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50"
      fetchpriority="high"
    />

    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-[#101010]/80 via-[#101010]/40 to-transparent"></div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center">
      
      <h1 class="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif drop-shadow-md">
        Hospedagem em <br class="hidden sm:block" />
        <span class="text-[#D8C67A]">Domingos Martins</span>
      </h1>
      
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200 drop-shadow-sm">
        Desconecte-se da rotina e venha viver a experiência do clima agradável das montanhas capixabas.
        Conforto, natureza e tranquilidade esperam por você.
      </p>
      
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a 
          href="#contact" 
          class="rounded-md bg-[#D8C67A] px-5 py-3 text-base font-semibold text-[#101010] shadow-sm hover:bg-[#E3D38B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8C67A] transition-all duration-300 transform hover:scale-105"
        >
          Reservar Estadia
        </a>
        <a href="#suites" class="text-sm font-semibold leading-6 text-white hover:text-[#D8C67A] transition-colors flex items-center gap-1">
          Ver Acomodações <span aria-hidden="true">→</span>
        </a>
      </div>

    </div>
  </section>
</template>
