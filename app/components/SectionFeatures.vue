<script setup lang="ts">
/**
 * Componente: SectionFeatures (Diferenciais)
 * Foco: Ícones claros e benefícios diretos (sem "lorem ipsum").
 */

const features = [
  {
    title: 'Clima Diversificado',
    description: 'Chegando aos 5°C no inverno e com verões perfeitos para aproveitar piscina, sol e momentos ao ar livre.',
    icon: 'material-symbols-light:sunny-snowing'
  },
  {
    title: 'Privacidade Real',
    description: 'O Quintas Dumonte fica no final da estrada, garantindo privacidade total sem circulação de veículos ou pessoas que não sejam moradores.',
    icon: 'material-symbols-light:bookmark-check-outline'
  },
  {
    title: 'Contato Direto com a Natureza',
    description: 'Vista privilegiada para Pedra Azul, muito verde ao redor e silêncio natural para quem busca qualidade de vida.',
    icon: 'material-symbols-light:nature-people-outline-sharp' // ou 'i-lucide-leaf' se preferir
  },
  {
    title: 'Infraestrutura Completa',
    description: 'Água, luz, internet e a 1 km da cidadezinha: supermercado, farmácia, lanchonetes, postos de saúde, academia, lojas...',
    icon: 'i-heroicons-wifi'
  }
]
</script>

<template>
  <section class="py-24 sm:py-32 bg-white">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-[#D8C67A] uppercase tracking-wide">
          Venha para o Quintas Dumonte
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#101010] sm:text-4xl">
          Seu refúgio nas montanhas
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          O Quintas Dumonte foi pensado para você que busca sair da rotina do dia a dia.
        </p>
      </div>

      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
          
          <div v-for="feature in features" :key="feature.title" class="flex flex-col items-start">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#101010]">
              <UIcon :name="feature.icon" class="h-6 w-6 text-[#D8C67A]" aria-hidden="true" />
            </div>
            
            <dt class="text-base font-semibold leading-7 text-[#101010]">
              {{ feature.title }}
            </dt>
            
            <dd class="mt-1 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>

        </dl>
      </div>
      
    </div>
  </section>
</template>