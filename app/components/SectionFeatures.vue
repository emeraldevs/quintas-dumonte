<script setup lang="ts">
/**
 * Componente: SectionFeatures (Nossa História / Diferenciais)
 * Layout: Grid com Cards e Ícones (Melhor legibilidade)
 */

const features = [
  {
    title: 'Família & Comunidade',
    description: 'Começamos chamando amigos para descansar. O grupo cresceu e virou uma grande família que valoriza o simples.',
    icon: 'i-heroicons-users'
  },
  {
    title: 'Natureza Preservada',
    description: 'Um lugar abençoado, rodeado por montanhas, clima agradável e ar puro de Domingos Martins.',
    icon: 'i-heroicons-sun'
  },
  {
    title: 'Desconexão Real',
    description: 'Criamos cada cantinho para proporcionar risadas, caminhadas e momentos de paz longe da correria.',
    icon: 'i-heroicons-sparkles'
  },
  {
    title: 'História do Café',
    description: 'Há 20 anos, era um sítio de café. Hoje, o café ainda faz parte, mas agora servido em prosa com os amigos.',
    icon: 'i-heroicons-star' // Ícone aproximado
  }
]
</script>

<template>
  <section class="py-24 bg-white relative overflow-hidden" id="features">
    
    <!-- Elemento decorativo de fundo -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#CBBD93]/10 rounded-full blur-3xl -z-10"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#CBBD93]/10 rounded-full blur-3xl -z-10"></div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="mx-auto max-w-2xl lg:text-center mb-16">
        <h2 class="text-base font-semibold leading-7 text-[#81785d] uppercase tracking-wide">
          Venha para o Quintas Dumonte
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl font-serif">
          Mais que um sítio de lazer, <br/> uma história de amizade.
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Não somos um grande empreendimento imobiliário impessoal. Somos uma família que decidiu compartilhar esse paraíso com outras famílias.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          
          <div v-for="feature in features" :key="feature.title" class="flex flex-col relative pl-10 group">
            
            <!-- Linha decorativa lateral -->
            <div class="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200 group-hover:bg-[#CBBD93] transition-colors duration-300"></div>

            <dt class="text-base font-semibold leading-7 text-[#101010] flex items-center gap-2">
              <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[#101010] group-hover:bg-[#CBBD93] transition-colors duration-300 mb-4">
                 <UIcon :name="feature.icon" class="h-6 w-6 text-white" />
              </div>
            </dt>
            
            <dd class="text-xl font-bold text-[#101010] mb-3 font-serif">
              {{ feature.title }}
            </dd>
            
            <dd class="text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>

        </dl>
      </div>
      
      <!-- Citação Final -->
      <div class="mt-20 text-center border-t border-gray-100 pt-10">
        <p class="text-xl italic font-serif text-gray-500">
          "Aproxime-se de quem você ama e viva a vida que você merece."
        </p>
      </div>

    </div>
  </section>
</template>

<style scoped>
.font-serif {
  font-family: 'Playfair Display', serif;
}
</style>