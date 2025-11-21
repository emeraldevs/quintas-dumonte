<script setup lang="ts">
/**
 * Componente: Footer (Rodapé)
 * Função: Informações finais, links rápidos e reforço de marca.
 * Estilo: Fundo escuro para contraste e elegância ("Dark Mode" local).
 */

// Pega o ano atual automaticamente (ex: 2025)
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#101010] text-gray-300 py-12 border-t border-gray-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        
        <div class="space-y-4">
          <h3 class="text-xl font-bold text-white tracking-tight">Quintas Dumonte</h3>
          <p class="text-sm leading-relaxed max-w-xs">
            Refúgio de 1000 m², onde o silêncio encontra a segurança.
          </p>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Explorar</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#intro" class="hover:text-[#D8C67A] transition-colors">O Refúgio</a></li>
            <li><a href="#features" class="hover:text-[#D8C67A] transition-colors">Diferenciais</a></li>
            <li><a href="#lots" class="hover:text-[#D8C67A] transition-colors">Terrenos à Venda</a></li>
            <li><a href="#location" class="hover:text-[#D8C67A] transition-colors">Localização</a></li>
          </ul>
        </div>

        <div class="space-y-4">
          <h4 class="text-sm font-semibold text-white uppercase tracking-wider">Contato</h4>
          <div class="space-y-2 text-sm">
            <p class="flex items-center gap-2">
              <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-[#D8C67A]" />
              <span>(27) 99972-0808</span>
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        
        <p>&copy; {{ currentYear }} Quintas Dumonte. Todos os direitos reservados.</p>
        
        <p class="flex items-center gap-1">
          Desenvolvido por 
          <a 
            href="https://landing-page.emeraldevs.workers.dev/" 
            target="_blank" 
            class="font-semibold text-gray-400 hover:text-[#00FFaa] transition-colors"
          >
            EMERALD DEVS
          </a>
        </p>

      </div>

    </div>
  </footer>
</template>