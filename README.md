# Descripción del proyecto

[![N|Solid](https://media.giphy.com/media/l41JU9pUyosHzWyuQ/giphy.gif)](https://nodesource.com/products/nsolid)

La página web consiste en un buscardor por nombre de los personajes del universo Rick y Morty.
Todos los personajes tienen su propia tarjeta identificativa. En ella se recogen unos datos mínimos:

- Imagen
- Nombre
- Especie

Es un ejercicio propuesto como método de evaluación final tras aprender a usar Reactjs en en tercer módulo de Adalab.

# Características

- El proyecto está desarrollado con Reactjs
- La información de los personajes la obtenemos a partir de datos de un servidor externo
- Se puede obtener mas información sobre cada personaje clickando sobre ellos. Se inicia una nueva ruta donde aparecen los datos iniciales junto a otros datos mas específicos.
- Implementación y uso de React router
- Diseño responsive

# Estructura

Una vez limpiado el proyecto que se inicia por defecto, la estructura interna consiste en organizar componentes que se almacenan en carpetas, específicamente en la carpeta src.
La estructura inicial es la siguiente:

- Componentes principales (Components> App, List, ItemList y Filter)
- Componente complementario (Components> Detail)
- Componente de datos (Services> Api)
- Estilos SCSS (Stylesheets)

Vista de estructura en detalle:

![FireShot Capture 042 - componentes png (336×704) - ](https://user-images.githubusercontent.com/70572595/101982806-b7a84d80-3c76-11eb-9b87-d816ca8caa47.png)

### Mediaqueries

Muestra de la versión Mobile

![mobile-interface1](https://user-images.githubusercontent.com/70572595/101982552-0c4ac900-3c75-11eb-82a5-ddfba51983b3.png)
![mobile-InterfaceDetail](https://user-images.githubusercontent.com/70572595/101982488-8e86bd80-3c74-11eb-8027-3820fc6f9f02.png)

### Instalación

Intalar [React](https://reactjs.org/) para arrancar.

Instala las dependencias y devDependencies e iniciar el servicio. Si tienes problemas con la versión mas reciente intala la sugerida.

```sh
$ npm install create-react-app
$ npm install node-sass // npm install node-sass@4.14.1
```

Para propTypes..

```sh
npm install --save prop-types
```

Para React Router..

```sh
npm install --save react-router-dom
```

**Free Software! Wubba Lubba Dub Dub!**
