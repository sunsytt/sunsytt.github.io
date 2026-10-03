---
title: "De diagramas UML a arreglos en Java: apuntes de Estructura de Datos"
description: "Cómo partir de un diagrama de clases UML me ayudó a implementar prácticas con arreglos en Java de forma más ordenada."
pubDate: 2026-09-17
category: "Estructura de Datos"
tags: ["java", "uml", "arreglos"]
draft: false
---

## Empezar por el diagrama, no por el código

En la materia de Estructura de Datos, cada práctica con arreglos en Java parte de un diagrama de
clases UML. Al principio se siente como un paso extra, pero terminó siendo lo que evitó que
reescribiera la misma clase tres veces: pensar primero en atributos, métodos y relaciones antes de
escribir una sola línea de Java.

## Lo que cambió en cómo escribo las clases

Traducir el diagrama a código obliga a decidir visibilidad (`private`, `public`), tipos de retorno
y firmas de métodos antes de implementarlos, en vez de irlos improvisando sobre la marcha. El
resultado son clases más pequeñas y con responsabilidades más claras, que es justo el tipo de
hábito que quiero que se traslade también a como estructuro componentes en Frontend.
