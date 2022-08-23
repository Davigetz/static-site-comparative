# Comparacion de sitios estaticos por NEXTJS, ASTROJS
## Introduccion
Es un proyecto individual el cual se realizo para comparar las dos frameworks uno se realizo con Nextjs React.
Y el otro con Astro-Solidjs

## Objetivos del Proyecto
- Mirar el Performance entre una tecnología y otra 
- comparar resultados
- concluciones.
---
## Tecnologias Utilizadas
### Caso Nextjs:
> HTML, CSS, Javascript, React, Nextjs
### Caso ASTrojS:
>  HTML, CSS, Javascript, Solidjs, Astrojs
- JSON con 107 datos de [jujutsu-kaisen.fandom](https://jujutsu-kaisen.fandom.com/es/wiki/Lista_de_Personajes)
- Todos los datos se cargan en el Home. Por lo que es un caso atipico ya que la mayoria evitan tener muchos productos en el misma Home

## Imagenes del Proyecto
- Portada
![portada static site](https://user-images.githubusercontent.com/19938780/186207442-8adbfa91-680a-4883-b420-f01a029c62b0.png)


- Performance con Nextjs
<img width="560" alt="Next_Static_result" src="https://user-images.githubusercontent.com/19938780/186071151-beab112a-10f3-485e-8ec3-7dd4bc53a4b3.png">

>  - Carga 508 ms 
<img width="1039" alt="slowCellPhoneNextjsPerformance" src="https://user-images.githubusercontent.com/19938780/186071735-1fe73e45-e915-4163-ac69-f50a34a12d2d.png">

> - Simulación en celular 3g con una lentitud de procesamiento de 4x de lento.
> - Carga para primera interacción 8.64s

- Performance con Astrojs
<img width="560" alt="Next_Static_result" src="https://user-images.githubusercontent.com/19938780/186071151-beab112a-10f3-485e-8ec3-7dd4bc53a4b3.png">

>  - Carga 105 ms 

<img width="1043" alt="soli-astro-slowpage-slowmobilephone" src="https://user-images.githubusercontent.com/19938780/186072069-b046e9d4-bc39-47bd-a7ef-b022bcef6cdd.png">

> - Simulación en celular 3g con una lentitud de procesamiento de 4x de lento.
> - Carga para primera interacción Carga 4.44 s

## Conclusiones
- Se estima que al dia de hoy agosto de 2022 astro es superior que Nextjs para cargar sitios Estáticos.
- Esta superioridad se debe a que Astro por defecto carga el HTML, CSS primero y aunque Nextjs hace esto el primero carga el JS y luego si carga HTML y CSS.
- Adicionalmente este video reporta una velocidad de estatico de astro-react de 10 ms vs 42ms nextjs-react por este gran video que: [static-nextjs-astro](https://www.youtube.com/watch?v=PSzCtdM20Fc&list=WL&index=65&t=7s).
- Debido a esto se utilizo solidjs con astro para ver su performance se concluye que con astro-solidjs es mas rapido que astro-react hasta la fecha de 2022.
