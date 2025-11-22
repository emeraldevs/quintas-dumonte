<script setup lang="ts">
/**
 * Componente: SectionLocation (Localização)
 * Função: Mostrar o mapa e reforçar a acessibilidade do local.
 */

// Endereço para exibir e usar nos links
const address = {
  street: 'Rua Tijuco Preto',
  district: 'Domingos Martins',
  city: 'Domingos Martins - ES',
  full: 'Rua Tijuco Preto, Paraju, Domingos Martins - ES'
}

// Links para abrir aplicativos de navegação direto
// (Substitua pelas coordenadas exatas depois para maior precisão se tiver)
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.full)}`
</script>

<template>
  <section class="bg-white py-24 sm:py-32" id="location">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div class="order-2 lg:order-1">
          <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
            Localização Privilegiada
          </h2>
          <h3 class="mt-2 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
            O clima das montanhas, <br />
            o sossego de Domingos Martins.
          </h3>
          
          <p class="mt-6 text-lg leading-relaxed text-gray-600">
            Localizado em uma das regiões mais valorizadas de Domingos Martins. 
            O Quintas Dumonte fica em um local estratégico que une o isolamento necessário para o descanso com o acesso facilitado.
          </p>

          <ul role="list" class="mt-8 space-y-4 text-gray-600">
            <li class="flex gap-x-3">
              <UIcon name="i-heroicons-check-circle" class="mt-1 h-5 w-5 flex-none text-[#D8C67A]" aria-hidden="true" />
              <span><strong class="font-semibold text-[#101010]">Região Segura:</strong> Vizinhança tranquila e familiar.</span>
            </li>
            <li class="flex gap-x-3">
              <UIcon name="i-heroicons-check-circle" class="mt-1 h-5 w-5 flex-none text-[#D8C67A]" aria-hidden="true" />
              <span><strong class="font-semibold text-[#101010]">Clima Ameno:</strong> A frescura das montanhas capixabas.</span>
            </li>
            <li class="flex gap-x-3">
              <UIcon name="i-heroicons-check-circle" class="mt-1 h-5 w-5 flex-none text-[#D8C67A]" aria-hidden="true" />
              <span><strong class="font-semibold text-[#101010]">Acesso:</strong> Estrada com boa conservação até a porta.</span>
            </li>
          </ul>
        </div>

        <div class="order-1 lg:order-2 h-full relative rounded-2xl overflow-hidden shadow-xl bg-gray-100">
          <img src="/quintas-social.jpg" alt="" loading="lazy" class="w-full h-full object-cover">
        </div>


      </div>
    </div>
  </section>
</template>