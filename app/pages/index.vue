<script setup lang="ts">
// Importante: Ajuste a URL final do seu site aqui quando tiver o domínio
const siteUrl = 'https://www.quintasdumonte.com.br' 
const siteName = 'Quintas Dumonte'
const siteDescription = 'Terrenos de 1000m² em Domingos Martins (Paraju). Um refúgio seguro, com infraestrutura completa, lagoa e muito verde. Agende sua visita.'

// 1. CONFIGURAÇÃO DE METADADOS (O que o Google lê)
useSeoMeta({
  // Título que aparece na aba do navegador e no Google (Max 60 caracteres)
  title: 'Quintas Dumonte | Terrenos e Sítios em Domingos Martins - ES',
  
  // A descrição cinza que aparece embaixo do link no Google (Max 160 caracteres)
  description: 'Encontre seu refúgio em Domingos Martins. Terrenos cercados por segurança e silêncio absoluto. Viva o clima das montanhas. Agende sua visita.',
  
  // Configurações para Redes Sociais (WhatsApp, Instagram, Facebook)
  ogTitle: 'Quintas Dumonte - Seu Refúgio nas Montanhas',

  ogDescription: 'Encontre seu refúgio em Domingos Martins. Terrenos cercados por segurança e silêncio absoluto. Viva o clima das montanhas. Agende sua visita.',

  ogImage: `${siteUrl}/quintas-social.jpg`, // Crie uma imagem 1200x630px e coloque na pasta public
  ogUrl: siteUrl,
  ogType: 'website',
  ogLocale: 'pt_BR',
  
  // Configurações para Twitter/X
  twitterCard: 'summary_large_image',
  twitterTitle: 'Quintas Dumonte - Refúgio em Domingos Martins',
  twitterDescription: siteDescription,
  twitterImage: `${siteUrl}/quintas-social.jpg`,
})

// 2. DADOS ESTRUTURADOS (O Segredo dos Profissionais)
// Isso cria um JSON que diz ao Google: "Isso aqui é um Empreendimento Imobiliário"
useHead({
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  },
  script: [
    {
      type: 'application/ld+json',
      // AQUI ESTAVA O ERRO: Trocamos 'children' por 'innerHTML'
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": "Quintas Dumonte",
        "description": "Venda de terrenos de 1000m² em condomínio fechado na região de montanhas.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua Tijuco Preto",
          "addressLocality": "Paraju, Domingos Martins",
          "addressRegion": "ES",
          "addressCountry": "BR"
        },
        "url": siteUrl,
        "telephone": "+5527999999999",
        "priceRange": "$$$",
        "image": [
          `${siteUrl}/foto-hero.jpg`
        ]
      })
    }
  ]
})
</script>

<template>
  <div class="flex flex-col w-full">
    
    <SectionHero id="intro" />

    <SectionFeatures id="features" />

    <SectionLots id="lots" />

    <SectionGallery id="gallery" />

    <SectionLocation id="location" />

    <SectionContact id="contact" />

  </div>
</template>