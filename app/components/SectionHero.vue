<script setup lang="ts">
/**
 * Componente: SectionHero (Venda)
 * Visual: Premium, com tipografia elegante e foco na venda.
 */
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#101010] min-h-[90vh] flex items-center justify-center">
    
    <!-- Imagem de Fundo com Parallax suave (scale) -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <img 
        src="/hero-sitio-terreno.jpg" 
        alt="Vista aérea do Quintas Dumonte" 
        class="h-full w-full object-cover object-center brightness-75 scale-105 animate-slow-zoom"
        fetchpriority="high"
      />
    </div>

    <!-- Gradiente Premium (fundo escuro embaixo para texto, claro em cima) -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
    
    <div class="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10 w-full">
      
      <!-- Badge de Exclusividade -->
      <div class="mb-8 flex justify-center animate-fade-in-down">
        <span class="rounded-full bg-[#CBBD93]/20 px-4 py-1.5 text-sm font-medium text-[#CBBD93] ring-1 ring-inset ring-[#CBBD93]/50 backdrop-blur-sm uppercase tracking-widest">
          O Refúgio da sua Família
        </span>
      </div>

      <h1 class="mx-auto max-w-5xl text-5xl font-bold tracking-tight text-white sm:text-7xl font-serif drop-shadow-lg leading-tight animate-fade-in-up">
        Seu Sítio em <br class="hidden sm:block" />
        <span class="text-[#CBBD93] italic">Condomínio Fechado</span>
      </h1>
      
      <p class="mx-auto mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-200 drop-shadow-md font-light animate-fade-in-up delay-100">
        Adquira seu terreno com infraestrutura completa em Domingos Martins.
        <br/>
        Parcelamento direto em até <span class="font-semibold text-white">60x</span>.
      </p>
      
      <div class="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-200">
        <a 
          href="#features" 
          class="rounded-full bg-[#CBBD93] px-8 py-4 text-base font-bold text-[#101010] shadow-[0_0_20px_rgba(203,189,147,0.3)] hover:bg-[#E3D38B] hover:shadow-[0_0_30px_rgba(203,189,147,0.5)] hover:-translate-y-1 transition-all duration-300"
        >
          Conhecer o Condomínio
        </a>
        <a href="#lots" class="text-base font-semibold text-white hover:text-[#CBBD93] transition-colors flex items-center gap-2 group">
          Ver Lotes Disponíveis 
          <span aria-hidden="true" class="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:flex flex-col items-center gap-2 opacity-70">
      <span class="text-[10px] uppercase tracking-widest text-white/80">Role para ver mais</span>
      <UIcon name="i-heroicons-chevron-down" class="w-6 h-6 text-white" />
    </div>

  </section>
</template>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}

/* Animações Personalizadas */
@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
.animate-slow-zoom {
  animation: slowZoom 20s ease-in-out infinite alternate;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out forwards;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
  animation: fadeInDown 1s ease-out forwards;
}

.delay-100 { animation-delay: 0.2s; animation-fill-mode: both; }
.delay-200 { animation-delay: 0.4s; animation-fill-mode: both; }
</style>