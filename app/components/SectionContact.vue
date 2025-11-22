<script setup lang="ts">
/**
 * Componente: SectionContact (Chamada Final)
 * Foco: Conversão direta para WhatsApp.
 */

// Substitua pelo seu número real (formato internacional: 55 + DDD + Numero)
const whatsappNumber = '5527999720808' 
const whatsappMessage = 'Olá! Gostaria de agendar uma visita ao Quintas Dumonte.'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
</script>

<template>
  <section id="contact" class="relative isolate overflow-hidden bg-[#101010] py-24 px-6 sm:py-32 lg:px-8">
    
    <div class="absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-20" aria-hidden="true">
      <div class="`aspect-[1/1]` `w-[40rem]` flex-none rounded-full bg-[#D8C67A]"></div>
    </div>

    <div class="mx-auto max-w-2xl text-center">
      
      <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        A melhor forma de entender <br />
        é <span class="text-[#D8C67A]">pisando na terra.</span>
      </h2>
      
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Fotos não transmitem o silêncio nem a brisa fresca do Quintas Dumonte. 
        Agende uma visita exclusiva, sem compromisso, e venha conhecer o seu futuro refúgio.
      </p>

      <div class="mt-10 flex flex-col items-center gap-6">
        
        <a 
          :href="whatsappLink" 
          target="_blank"
          class="group relative inline-flex items-center justify-center gap-3 rounded-full bg-[#D8C67A] px-8 py-4 text-lg font-bold text-[#101010] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8C67A] transition-all duration-300 hover:scale-105 hover:bg-[#E3D38B] shadow-[0_0_20px_rgba(216,198,122,0.3)] hover:shadow-[0_0_30px_rgba(216,198,122,0.5)]"
        >
          <UIcon name="i-lucide-message-circle" class="h-6 w-6" />
          Agendar Visita pelo WhatsApp
        </a>

      </div>

      <div class="mt-12 border-t border-white/10 pt-8">
        <p class="text-xs text-gray-500 uppercase tracking-widest">
          Atendimento personalizado • Sem pressa • Exclusivo
        </p>
      </div>

    </div>
  </section>
</template>