<script setup lang="ts">
/**
 * Componente: SectionLots (Terrenos à Venda)
 * Estrutura: 5 Lotes com alinhamento centralizado (Flexbox).
 */

const lots = [
  {
    id: 1,
    title: 'Lote A',
    area: '1.678 m²',
    description: 'Com platô, área gramada, pomar formado, água disponível e ligação de energia pela EDP.',
    image: '/terreno-1678.jpg',
    status: 'Disponível'
  },
  {
    id: 2,
    title: 'Lote B',
    area: '1.443 m²',
    description: 'O terreno possui platô pronto, água instalada, luz disponível e área gramada.',
    image: '/terreno-1443.jpg',
    status: 'Disponível'
  },
  {
    id: 3,
    title: 'Lote C',
    area: '1.000 m²',
    description: 'Situado ao lado de uma bela área de mata, garantindo privacidade e contato direto com a natureza.',
    image: '/terreno-1000-mata.jpg',
    status: 'Disponível'
  },
  // Novos terrenos adicionados
  {
    id: 4,
    title: 'Lote D',
    area: '1.300 m²',
    description: 'O maior lote do condomínio. Isolado, no final da rua sem saída. Privacidade absoluta para sua família.',
    image: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1000&auto=format&fit=crop',
    status: 'Disponível'
  },
  {
    id: 5,
    title: 'Lote E',
    area: '1.000 m²',
    description: 'Face norte, recebe sol o dia todo. Topografia excelente que reduz custos de terraplanagem.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000&auto=format&fit=crop',
    status: 'Disponível'
  }
]

// Função auxiliar para cor do status
const getStatusColor = (status: string) => {
  if (status === 'Última Unidade') return 'bg-red-100 text-red-700 ring-red-600/20'
  if (status === 'Reservado') return 'bg-gray-100 text-gray-600 ring-gray-500/10'
  return 'bg-[#28A745]/40 text-[#FFFFFF] ring-[#28A745]/80' // Dourado suave
}
</script>

<template>
  <section class="py-24 bg-gray-50" id="lots">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="mx-auto max-w-2xl text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
          Disponibilidade
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
          Invista na sua qualidade de vida
        </p>
        <p class="mt-4 text-lg text-gray-600">
          Escolha o lugar perfeito para sua família viver momentos especiais:
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-8">
        
        <div 
          v-for="lot in lots" 
          :key="lot.id" 
          class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px]"
        >
          <div class="relative h-64 overflow-hidden bg-gray-200">
            <img 
              :src="lot.image" 
              :alt="lot.title" 
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4">
              <span 
                :class="['inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset', getStatusColor(lot.status)]"
              >
                {{ lot.status }}
              </span>
            </div>
          </div>

          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold text-[#101010]">
              {{ lot.title }}
            </h3>
            
            <div class="mt-4 flex items-center gap-4 text-sm text-gray-500 border-b border-gray-100 pb-4">
              <div class="flex items-center gap-1">
                <UIcon name="i-heroicons-arrows-pointing-out" class="h-4 w-4 text-[#D8C67A]" />
                <span>{{ lot.area }}</span>
              </div>
            </div>

            <p class="mt-4 text-sm leading-relaxed text-gray-600 flex-grow">
              {{ lot.description }}
            </p>

            <div class="mt-6 pt-4">
              <a 
                href="#contact" 
                class="flex w-full items-center justify-center rounded-md border border-[#101010] px-4 py-2 text-sm font-semibold text-[#101010] hover:bg-[#101010] hover:text-white transition-colors"
              >
                Consultar valor
              </a>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>