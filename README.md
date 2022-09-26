# Construccion de Interfaces

*Parcial 1 - Construcción de Interfaces de usuarios.*

El objetivo del parcial es hacer una página WebApp prototipo para un restaurante.
El enfoque está en la usabilidad, navegación, ser responsive, y aplicar la buenas practicas de programacion. 
También buscamos aplicar lo aprendido hasta el momento en la cruzada.

Para el maquetado se utilizó Html , para darle estilo Css y agregando funcionalidades sumamos Jss.
Tenemos 3 tipos de archivos separados como es recomendado, separando las capas, para aplicar de manera correcta 
la implementación, de las distintas funcionalidades ofrecidas por los distintos lenguajes.
Se adjuntará una carpeta con las imágenes utilizadas para el proyecto en el repositorio de github junto con 
estos los archivos necesarios para la visualización de la WebApp.

*INTRODUCCIÓN AL PROYECTO*

HTML: 
Se puede observar en la etiqueta <head> de cada  archivo metadata como el título del archivo, autor,etc. Dentro 
de él la etiqueta <link> usada para referenciar “hojas de estilo” / archivo Css, una colección de Css externa (“bootstrap”) 
y una interna (“parcial_css”). Y Ruta de archivo Jss
Con el mismo tag exportamos fuentes para texto desde internet provistas por “google font”.

Tenemos una etiqueta <header> donde ubicamos una cabecera fija en todos los documentos html para tener acceso 
a los distintos menús y mejorar la navegación. Note que sus opciones varían según el documento el cual estemos navegando. 
Su enrutamiento y funciones están desarrollado en Jss (JavaScript)

En la etiqueta <body> está todo el cuerpo del documento html, y si se observa el código se puede ver el uso 
de diferentes tag del tipo block e inline, ejemplo: p - h1 - h2 - h3 - h4 - div - span - a - button - 
em - strong" - etc.

En la etiqueta >footer> podemos apreciar el pie de página de todos los documentos, el cual tiene las redes del 
restaurante y los derechos de autor.

Css:
Con esta herramienta le damos estilo al documento html, utilizando los distintos tag provistos por el framework de 
Bootstrap importandolo desde una librería de internet. 
La hoja de estilo desarrollada localmente sumada a está dan el estilo al documento html, para darle la una 
vista final más bonita y precisa. 
Dando así una mejor experiencia al usuario tanto visual como funcional.

Jss:
Con este lenguaje agregamos funcionalidad al documento. En este caso solo se usó para darle funcionalidad extra al header, redireccionamos a los distintos menús, 
y cambiamos la vista de la página de claro a oscuro.

*Universidad:* UnaHur (Universidad Nacional de Hurlingham)
*Alumno:* Robles Luciano Gabriel
*Turno:* Nocturno
