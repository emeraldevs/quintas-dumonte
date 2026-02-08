<script setup lang="ts">
/**
 * Página: Experiência (Aluguel/Turismo)
 * Objetivo: Atrair turistas e interessados em aluguel de temporada.
 * Estratégia: Funil "Try before you buy".
 */

// 1. SEO e Metadados Específicos para Aluguel
const siteUrl = 'https://quintosdomonte.com.br' // Ajuste conforme domínio final

useSeoMeta({
  title: 'Aluguel de Sítio e Suítes em Domingos Martins | Quintas Dumonte',
  description: 'Hospedagem em Domingos Martins com conforto e natureza. Aluguel de suítes e sítio para temporada. Piscina, lareira e trilhas. Reserve agora.',
  ogTitle: 'Aluguel de Sítio e Suítes em Domingos Martins | Quintas Dumonte',
  ogDescription: 'Hospedagem em Domingos Martins com conforto e natureza. Aluguel de suítes e sítio para temporada. Reserve agora.',
  ogImage: `${siteUrl}/pousada1.jpg`, // Imagem focada em hospedagem
  ogUrl: `${siteUrl}/experiencia`,
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Aluguel de Sítio e Suítes em Domingos Martins | Quintas Dumonte',
  twitterDescription: 'Hospedagem em Domingos Martins com conforto e natureza.',
  twitterImage: `${siteUrl}/pousada1.jpg`,
})

// Schema.org para Hospedagem (LodgingBusiness)
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "Quintas Dumonte - Hospedagem e Lazer",
        "image": [
          `${siteUrl}/pousada1.jpg`,
          `${siteUrl}/quintas-social.jpg`
        ],
        "@id": `${siteUrl}/experiencia`,
        "url": `${siteUrl}/experiencia`,
        "telephone": "+5527999720808",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Tijuco Preto",
          "addressLocality": "Domingos Martins",
          "addressRegion": "ES",
          "postalCode": "29260-000",
          "addressCountry": "BR"
        },
        "priceRange": "$$$"
      })
    }
  ]
})
</script>

<template>
  <div class="flex flex-col w-full">
    
    <!-- Hero Específico de Experiência -->
    <SectionHeroExperience id="intro" />

    <!-- Acomodações (Suítes) -->
    <SectionSuites id="suites" />

    <!-- Galeria de Lazer (Reutilizado) -->
    <SectionGallery id="gallery" />

    <!-- BANNER DE CONVERSÃO (O "Pulo do Gato") -->
    <section class="bg-[#101010] py-16 text-center">
      <div class="mx-auto max-w-4xl px-6">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif mb-4">
          Gostou da experiência?
        </h2>
        <p class="text-lg text-gray-300 mb-8">
          Você sabia que pode ter esse pedaço do paraíso para sempre? 
          <br class="hidden sm:block"/>
          Confira nossos <span class="text-[#D8C67A] font-semibold">lotes à venda</span> em condições especiais.
        </p>
        <NuxtLink 
          to="/#lots" 
          class="inline-block rounded-md border border-[#D8C67A] px-8 py-3 text-base font-semibold text-[#D8C67A] hover:bg-[#D8C67A] hover:text-[#101010] transition-all"
        >
          Ver Terrenos à Venda
        </NuxtLink>
      </div>
    </section>

    <!-- Localização (Reutilizado) -->
    <SectionLocation id="location" />

    <!-- Contato (Customizado para Reserva) -->
    <SectionContact 
      id="contact"
      title="Reserve sua estadia <br />e <span class='text-[#CBBD93]'>relaxe.</span>"
      subtitle="Entre em contato para verificar disponibilidade e valores para o seu fim de semana."
      whatsapp-message="Olá! Gostaria de verificar disponibilidade para hospedagem no Quintas Dumonte."
      cta-text="Reservar pelo WhatsApp"
    />

  </div>
</template>
