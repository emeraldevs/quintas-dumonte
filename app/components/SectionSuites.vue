<script setup lang="ts">
/**
 * Componente: SectionSuites (Acomodações)
 * Baseado no layout de Cards.
 */

const suites = [
  {
    id: 1,
    title: 'Suíte Casal Premium',
    capacity: '2 Pessoas',
    description: 'Conforto total com cama queen size, vista para as montanhas e frigobar.',
    image: '/pousada1.jpg', // Reutilizando imagem existente
    features: ['Wi-Fi', 'Frigobar', 'Vista Panorâmica', 'TV Smart']
  },
  {
    id: 2,
    title: 'Suíte Família',
    capacity: 'Até 4 Pessoas',
    description: 'Espaço ideal para pequenos grupos, com cama de casal e bicama solteiro.',
    image: '/quintas-social.jpg', // Reutilizando
    features: ['Wi-Fi', 'Espaço Amplo', 'Ventilador', 'TV Smart']
  },
  {
    id: 3,
    title: 'Chalé Rústico',
    capacity: 'Casal',
    description: 'Uma experiência mais privativa e aconchegante, ideal para momentos românticos.',
    image: '/lazer-lareira-externa.jpg', // Imagem ilustrativa de ambiente
    features: ['Lareira', 'Wi-Fi', 'Privacidade Total', 'Rede na Varanda']
  }
]
</script>

<template>
  <section class="py-24 bg-gray-50" id="suites">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
          Acomodações
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
          Conforto para seu descanso
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Escolha a opção ideal para seu fim de semana na serra.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        <div 
          v-for="suite in suites" 
          :key="suite.id" 
          class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
        >
          <!-- Imagem -->
          <div class="relative h-64 overflow-hidden bg-gray-200">
            <img 
              :src="suite.image" 
              :alt="suite.title" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          <!-- Conteúdo -->
          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold text-[#101010]">
              {{ suite.title }}
            </h3>
            
            <div class="mt-4 flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-users" class="h-4 w-4 text-[#D8C67A]" />
                <span>{{ suite.capacity }}</span>
              </div>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-gray-600 flex-grow">
              {{ suite.description }}
            </p>

            <ul class="mt-4 mb-6 space-y-2">
               <li v-for="feat in suite.features" :key="feat" class="flex gap-2 text-xs text-gray-500 font-medium">
                  <UIcon name="i-heroicons-check" class="w-4 h-4 text-[#D8C67A]" />
                  {{ feat }}
               </li>
            </ul>

            <div class="pt-4 mt-auto">
              <a 
                href="#contact" 
                class="flex w-full items-center justify-center rounded-md border border-[#101010] px-4 py-2 text-sm font-semibold text-[#101010] hover:bg-[#101010] hover:text-white transition-colors"
                aria-label="Consultar disponibilidade"
              >
                Consultar Disponibilidade
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
