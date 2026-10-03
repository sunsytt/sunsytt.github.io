---
title: "El SEO técnico que implementé en este blog con Astro"
description: "Meta tags, Open Graph, Schema.org y sitemap: cómo dejé configurado el SEO técnico de Frontend Diary desde la base."
pubDate: 2026-09-20
category: "SEO"
tags: ["astro", "seo"]
draft: false
---

## Un componente SEO, no meta tags sueltas

En vez de escribir las meta etiquetas en cada página, centralicé todo en un componente `SEO.astro`
que recibe `title`, `description` e `image` como props. Así ninguna página nueva puede publicarse
sin lo básico: title, description, canonical, Open Graph y Twitter Card.

## Schema.org según el tipo de contenido

Cada artículo del blog genera JSON-LD de tipo `BlogPosting`, mientras que el resto de páginas usa
`WebSite`. Es una decisión pequeña, pero le da a los buscadores contexto explícito sobre qué tipo
de contenido está viendo, en vez de dejarlo adivinar.

## Validar el largo de la descripción con Zod

El schema de Content Collections rechaza cualquier artículo cuya `description` supere 160
caracteres, que es aproximadamente lo que Google respeta en los resultados de búsqueda. Prefiero
que el build falle en mi máquina a descubrir en producción que una descripción se corta a la mitad.
