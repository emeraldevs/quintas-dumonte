<script setup lang="ts">
/**
 * Página: Home (Index)
 * Função: Orquestrar a exibição de todas as seções da Landing Page.
 */

// URL Final do Site (Com www, conforme seu snippet)
const siteUrl = 'https://www.quintasdumonte.com.br' 
const siteName = 'Quintas Dumonte'

// 1. SEO e Metadados
useSeoMeta({
  title: 'Venda de Terrenos e Sítios em Domingos Martins | Quintas Dumonte',
  description: 'Terrenos à venda em condomínio fechado em Domingos Martins - ES. Sítios de lazer com infraestrutura completa: segurança, água, luz e natureza. Agende sua visita.',
  ogTitle: 'Venda de Terrenos e Sítios em Domingos Martins | Quintas Dumonte',
  ogDescription: 'Terrenos à venda em condomínio fechado em Domingos Martins - ES. Sítios de lazer com infraestrutura completa. Agende sua visita.',
  ogImage: `${siteUrl}/quintas-social.jpg`,
  ogUrl: siteUrl,
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Venda de Terrenos e Sítios em Domingos Martins | Quintas Dumonte',
  twitterDescription: 'Terrenos à venda em condomínio fechado em Domingos Martins - ES.',
  twitterImage: `${siteUrl}/quintas-social.jpg`,
})

// 2. Dados Estruturados e Otimizações
useHead({
  meta: [
    { name: 'google-site-verification', content: 'Mld7rqhhKlkWPw75sjlUth6kVveFqxTIpb3ZF6tk8zQ' }
  ],
  link: [
    { rel: 'canonical', href: siteUrl },
    { rel: 'icon', type: 'image/png', href: '/favicon.png' },
    // Preload da imagem Hero para carregamento instantâneo (Melhora LCP)
    { 
      rel: 'preload', 
      as: 'image', 
      href: '/hero-sitio-terreno.jpg', 
      fetchpriority: 'high'
    }
  ],
  htmlAttrs: {
    lang: 'pt-BR'
  },
  script: [
    {
      type: 'application/ld+json',
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
          `${siteUrl}/foto-hero.webp`
        ],
        "offers": {
          "@type": "Offer",
          "price": "Sob consulta",
          "priceCurrency": "BRL",
          "availability": "https://schema.org/InStock"
        }
      })
    }
  ]
})
</script>

<template>
  <div class="bg-white flex flex-col w-full">
    
    <!-- 
      Seção Hero:
      Não precisa de margem pois é o topo absoluto da página.
    -->
    <SectionHero id="intro" />

    <!-- 
      AQUI ESTÁ O SEGREDO DO SCROLL:
      Adicionei a classe 'scroll-mt-24' em todas as seções abaixo.
      
      O que ela faz: Cria uma margem invisível de ~100px no topo da seção
      APENAS quando o navegador rola até ela via âncora (#id).
      Isso impede que o Header fixo fique por cima do título.
    -->

    <SectionFeatures id="features" class="scroll-mt-16" />

    <SectionLots id="lots" class="scroll-mt-16" />

    <SectionGallery id="gallery" class="scroll-mt-16" />

    <SectionCallExperience />

    <SectionLocation id="location" class="scroll-mt-16" />

    <SectionContact id="contact" class="scroll-mt-16" />

  </div>
</template>