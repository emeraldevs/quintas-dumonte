<script setup lang="ts">
/**
 * Componente: SectionGallery (Estrutura de Lazer)
 * Estilo: Carrossel horizontal (Slider) com fundo escuro.
 * Funcionalidade: Scroll suave com botões laterais e suporte a touch.
 */

// Referência para o container do scroll (para podermos controlar via botões)
const scrollContainer = ref<HTMLElement | null>(null)

const photos = [
  {
    title: 'Lagoas',
    description: 'Um espelho d’água para contemplação ou pesca esportiva.',
    src: '/lagoa-7anoes.jpg'
  },
  {
    title: 'Área de Festas',
    description: 'Espaço amplo e equipado para celebrar momentos especiais com a família.',
    src: '/area-festa.jpg'
  },
  {
    title: 'Lareira Interna',
    description: 'O charme do fogo de chão para as noites frias e conversas longas.',
    src: '/lareira-festa.jpg'
  },
  {
    title: 'Suítes',
    description: 'Suítes confortáveis para receber seus amigos com privacidade.',
    src: '/pousada1.jpg'
  },
  {
    title: 'Campo de Futebol',
    description: 'Gramado natural para o lazer do fim de semana.',
    src: '/campo-futebol.jpg'
  }
]

// Função para rolar para os lados
const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  
  // Tamanho do scroll = largura de um card + o gap (espaço)
  const scrollAmount = 420 
  
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section class="py-24 bg-[#101010] text-white overflow-hidden" id="gallery">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="max-w-2xl">
          <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
            Lazer e Conforto
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Estrutura pronta para você aproveitar
          </p>
          <p class="mt-4 text-gray-400">
            Além do seu terreno, o Quintas Dumonte oferece áreas comuns pensadas para o bem-estar coletivo e familiar.
          </p>
        </div>

        <div class="flex gap-4">
          <button 
            @click="scroll('left')"
            aria-label="Foto anterior"
            class="rounded-full border border-gray-700 p-3 hover:bg-[#D8C67A] hover:border-[#D8C67A] hover:text-[#101010] transition-all"
          >
            <UIcon name="i-heroicons-chevron-left" class="w-6 h-6" />
          </button>
          <button 
            @click="scroll('right')"
            aria-label="Próxima foto"
            class="rounded-full border border-gray-700 p-3 hover:bg-[#D8C67A] hover:border-[#D8C67A] hover:text-[#101010] transition-all"
          >
            <UIcon name="i-heroicons-chevron-right" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <div 
        ref="scrollContainer"
        class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="snap-center shrink-0 w-[85vw] md:w-[400px] group relative rounded-2xl overflow-hidden"
        >
          <div class="aspect-[4/5] w-full overflow-hidden">
            <img 
              :src="photo.src" 
              :alt="photo.title" 
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            />
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

          <div class="absolute bottom-0 left-0 p-6">
            <h3 class="text-xl font-bold text-white mb-2">
              {{ photo.title }}
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {{ photo.description }}
            </p>
          </div>
        </div>
        
        <div class="shrink-0 w-6 md:w-0"></div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* Utilitário para esconder a barra de rolagem 
  mas manter a funcionalidade de scroll.
*/
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}
</style>