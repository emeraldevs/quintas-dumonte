<script setup lang="ts">
/**
 * Componente: SectionGallery (Estrutura de Lazer)
 * Estilo: Carrossel horizontal (Slider) com fundo claro e cards imersivos.
 * Funcionalidade: Scroll suave, dicas visuais e indicadores de paginação (bolinhas).
 */

// Referência para o container do scroll
const scrollContainer = ref<HTMLElement | null>(null)
// Estado para saber qual slide está ativo (0 = primeiro)
const activeIndex = ref(0)

const photos = [
  {
    title: 'Lagoas',
    description: 'Lagoas naturais com pesque e solte.',
    src: '/lagoa-7anoes.jpg'
  },
  {
    title: 'Área de Festas',
    description: 'Espaço amplo e equipado para celebrar momentos especiais com a família. Com som, karaoke...',
    src: '/area-festa.jpg'
  },
  {
    title: 'Lareira Interna',
    description: 'O charme do fogo suspenso para as noites frias e conversas longas.',
    src: '/lareira-festa.jpg'
  },
  {
    title: 'Suítes',
    description: 'Suítes confortáveis para passar os seus finais de semana.',
    src: '/pousada1.jpg'
  },
  {
    title: 'Campo de Futebol',
    description: 'Gramado natural para jogar futebol.',
    src: '/campo-futebol.jpg'
  },


  {
    title: 'Relaxar',
    description: 'Relaxar no embalo de uma rede num clima agradável.',
    src: '/lazer-relaxar.jpg'
  },{
    title: 'Lareira Externa',
    description: 'Queimar um marshmallow e tomar um vinho/suco na lareira.',
    src: '/lazer-lareira-externa.jpg'
  },
  {
    title: 'Parquinho',
    description: 'Parquinho para as crianças brincarem.',
    src: '/lazer-parquinho.jpg'
  },
  {
    title: 'Arco-íris',
    description: 'Arco-íris, nossa aliança.',
    src: '/sitio-arcoires.jpg'
  },
  {
    title: 'Entardecer',
    description: 'Entardecer perfeito.',
    src: '/sitio-entardecer.jpg'
  }
]

// Função para rolar com as setas (Desktop)
const scroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  const scrollAmount = 620 
  scrollContainer.value.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  })
}

// Função para rolar ao clicar na bolinha
const scrollToIndex = (index: number) => {
  if (!scrollContainer.value) return
  const container = scrollContainer.value
  const children = Array.from(container.children) as HTMLElement[]
  
  if (children[index]) {
    children[index].scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'center' 
    })
  }
}

// Função para detectar qual slide está visível durante o scroll
const onScroll = () => {
  if (!scrollContainer.value) return
  const container = scrollContainer.value
  const center = container.scrollLeft + container.clientWidth / 2
  
  const children = Array.from(container.children) as HTMLElement[]
  const photoCards = children.slice(0, photos.length)
  
  let closestIndex = 0
  let minDistance = Infinity

  photoCards.forEach((child, index) => {
    const childCenter = child.offsetLeft + child.offsetWidth / 2
    const distance = Math.abs(childCenter - center)
    
    if (distance < minDistance) {
      minDistance = distance
      closestIndex = index
    }
  })
  
  activeIndex.value = closestIndex
}
</script>

<template>
  <section class="py-16 bg-gradient-to-r from-white via-[#f7f4e4d3] to-white text-gray-900 overflow-hidden relative isolate" id="gallery">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
        <div class="max-w-2xl">
          <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
            Lazer e Conforto
          </h2>
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
            Estrutura pronta para você aproveitar
          </p>
          <p class="mt-4 text-gray-600">
            Além do seu terreno, o Quintas Dumonte oferece áreas comuns pensadas para o bem-estar coletivo e familiar.
          </p>
          
          <!-- Cabeçalho da Galeria com Dica Mobile -->
          <div class="flex items-center justify-between pt-8">
            <h3 class="text-black font-bold text-xl">GALERIA</h3>
            
            <!-- DICA VISUAL MOBILE -->
            <div class="md:hidden flex items-center gap-2 text-sm text-[#D8C67A] font-medium animate-pulse">
              <span>Deslize</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </div>

        <!-- Botões Desktop -->
        <div class="hidden md:flex gap-4">
          <button 
            @click="scroll('left')"
            aria-label="Foto anterior"
            class="rounded-full border border-gray-700 p-3 hover:bg-[#CBBD93] hover:border-[#CBBD93] text-black hover:text-[#101010] transition-all"
          >
            <UIcon name="i-heroicons-chevron-left" class="w-6 h-6" />
          </button>
          <button 
            @click="scroll('right')"
            aria-label="Próxima foto"
            class="rounded-full border border-gray-700 p-3 hover:bg-[#CBBD93] hover:border-[#CBBD93] text-black hover:text-[#101010] transition-all"
          >
            <UIcon name="i-heroicons-chevron-right" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- CARROSSEL -->
      <div 
        ref="scrollContainer"
        @scroll.passive="onScroll"
        class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
      >
        <div 
          v-for="(photo, index) in photos" 
          :key="index"
          class="snap-center snap-always shrink-0 w-[75vw] md:w-[600px] group relative rounded-2xl overflow-hidden"
        >
          <!-- 
             AJUSTE "UM POR VEZ":
             Adicionei a classe 'snap-always' acima.
             Isso força o navegador a parar em CADA item, impedindo que um "arrastão" pule fotos.
          -->
          <div class="aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden">
            <img 
              :src="photo.src" 
              :alt="photo.title" 
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
          </div>
          
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

          <div class="absolute bottom-0 left-0 p-6 md:p-8">
            <h3 class="text-xl md:text-2xl font-bold text-white mb-2">
              {{ photo.title }}
            </h3>
            <p class="text-sm md:text-base text-gray-300 leading-relaxed opacity-100 md:opacity-0 md:translate-y-4 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 max-w-md">
              {{ photo.description }}
            </p>
          </div>
        </div>
        
        <!-- Espaçador final -->
        <div class="shrink-0 w-6 md:w-0"></div>
      </div>

      <!-- INDICADORES (BOLINHAS) -->
      <div class="flex justify-center items-center gap-3 mt-2">
        <button 
          v-for="(_, index) in photos" 
          :key="index"
          @click="scrollToIndex(index)"
          :class="[
            'rounded-full transition-all duration-300',
            index === activeIndex 
              ? 'bg-[#D8C67A] w-8 h-2' 
              : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
          ]"
          :aria-label="`Ir para foto ${index + 1}`"
        />
      </div>

    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>