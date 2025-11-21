<script setup lang="ts">
/**
 * Componente: Header (Cabeçalho)
 * Função: Navegação principal e CTA.
 * Comportamento: Fixo no topo com fundo translúcido.
 */

// Estado para controlar o menu mobile (aberto/fechado)
const isMenuOpen = ref(false)

// Função para fechar o menu ao clicar em um link (UX básica)
const closeMenu = () => {
  isMenuOpen.value = false
}

/**
 * ----------------------------------------------------------------
 * EXERCÍCIO DE FIXAÇÃO (Edite aqui):
 * Esta lista define os links do menu. 
 * Os 'hash' (#) devem corresponder aos IDs das seções que criaremos.
 * ----------------------------------------------------------------
 */
const navLinks = [
  { label: 'O Refúgio', hash: '#intro' },
  { label: 'Diferenciais', hash: '#features' },
  { label: 'Terrenos', hash: '#lots' }, // Sessão nova solicitada
  { label: 'Galeria', hash: '#gallery' },
  { label: 'Localização', hash: '#location' },
]
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all">
    
    <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      
      <div class="flex items-center -ml-3">
        <NuxtLink to="/" href="#intro" class="text-xl font-bold tracking-tight text-[#101010] hover:text-[#D8C67A] transition-colors" @click="closeMenu">
          <NuxtImg src="/logo-header.png" sizes="110px" />
        </NuxtLink>
      </div>

      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.hash" 
          :href="link.hash"
          class="text-sm font-medium text-gray-700 hover:text-[#D8C67A] transition-colors"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden md:flex">
        <a href="#contact" class="rounded-full border border-[#101010] px-5 py-2 text-sm font-semibold text-[#101010] hover:bg-[#101010] hover:text-white transition-colors duration-300">
          Agendar visita
        </a>
      </div>

      <div class="flex md:hidden">
        <button 
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Abrir menu principal"
          class="text-[#101010] focus:outline-none"
        >
          <UIcon 
            :name="isMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
            class="h-7 w-7" 
          />
        </button>
      </div>
    </div>

    <div v-if="isMenuOpen" class="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
      <div class="space-y-1 px-4 py-6">
        <a 
          v-for="link in navLinks" 
          :key="link.hash" 
          :href="link.hash"
          class="block border-l-4 border-transparent py-3 pl-3 text-base font-medium text-gray-600 hover:border-[#D8C67A] hover:bg-gray-50 hover:text-[#101010]"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        
        <div class="mt-6 pt-4 border-t border-gray-100">
          <a 
            href="#contact" 
            class="flex w-full items-center justify-center rounded-md bg-[#101010] px-4 py-3 text-base font-bold text-white hover:bg-[#D8C67A] transition-colors"
            @click="closeMenu"
          >
            Agendar visita agora
          </a>
        </div>
      </div>
    </div>

  </header>
</template>