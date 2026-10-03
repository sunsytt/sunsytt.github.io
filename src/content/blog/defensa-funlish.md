---
title: "Cómo preparé la defensa de Funlish a partir del código real"
description: "Notas sobre cómo reconstruí el esquema de base de datos y armé la guía de estudio de Funlish directamente desde el repositorio, no desde memoria."
pubDate: 2026-09-10
category: "Proyectos"
tags: ["funlish", "capstone", "javalin"]
draft: false
---

## Por qué partir del código y no de la memoria

Con un proyecto que lleva meses de desarrollo entre cuatro personas, es fácil que la documentación
mental de cada quien se desactualice. Para la defensa de Funlish, en vez de escribir de memoria
cómo funciona cada módulo, reconstruí el esquema completo de las 13 tablas directamente desde los
`INSERT` del repositorio.

## Puntos técnicos que vale la pena poder explicar

Algunos detalles del backend en Javalin que preparé para poder defender con seguridad:

- Una consulta con `RANK() OVER` para el ranking grupal.
- DTOs diseñados para no filtrar la respuesta correcta de una actividad al cliente.
- Un `GlobalExceptionHandler` centralizado en vez de manejo de errores disperso.

## Ser honesto sobre lo que falta

Parte de preparar una defensa es también poder señalar tú mismo los puntos débiles antes de que te
los pregunten: archivos de cliente Axios duplicados con distinto `baseURL`, ausencia de un
`schema.sql` versionado, y el logout con JWT sin estado, que tiene límites conocidos. Nombrarlos de
forma proactiva da más confianza que intentar que no se noten.
