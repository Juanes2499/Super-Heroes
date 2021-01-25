# Para comenzar con el sitio web Heroes
1. Abrir una consola o terminal en su pc.
2. Dirigirse al directorio donde esta clonado este repositorio.
3. Escbir el comando `npm install`
4. Una vez terminado el proceso de instalación de los paquetes necesario escribir el comando `npm start`

# Explicación de la implemetación faltante. 
Se formo un JSON de 5 heroes, cada uno tenía como parámetros ciertos datos que fijaban la información en el sitio, como es la ruta o url de la imagen, el título, la reseña, información, entre otros dato. mediante componentes se realiza las partes del sitio web como es la portada, que se puede votar, se muestra la barra de cantidad de votos positivos y negativos, seguido a la portada se encuetran las demás películas con los misms datos, si se da click en el botón ver detalles la película pasa a la portada para que se pueda votar.

1. Para mantener los datos del sitio web se hace uso de los state y props para mantener los datos o para modificarlo sin tener que recargar la página consantemente, los datos se pueden envíar mediante una petición o un endpoint al servidor, se pueden usar librerías par como axios para consumir endpoint de un servidor Rest. 
2. Queda pendiente que la imágen que esta de primero en la portada pase a las zona de otras películas, también se puede realizar mediantes state, hooks y funciones para alterar la data y estar cambiando según el usuario lo desee. 
3. Para dar un plus, se puede combinar react con redux y nos daría la posibilidad de almacenar la data en un especie de storage para que pueda ser usado en diferentes partes y haríamos menos usos de los state y props. se usa el modelo action -> reducer -> storage para manejar la data del sitio.
