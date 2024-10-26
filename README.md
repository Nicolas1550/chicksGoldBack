
# Water Jug Challenge API

## Descripción del Proyecto

El **Water Jug Challenge** es un ejercicio clásico de algoritmos que consiste en medir exactamente Z galones usando dos jarras de capacidades X y Y. Este proyecto implementa una API RESTful que resuelve este desafío utilizando técnicas de búsqueda en anchura (BFS). 

El objetivo es devolver los pasos necesarios para medir exactamente Z galones o indicar que no hay solución posible. El proyecto está optimizado para manejar diferentes tamaños de jarras, tiene manejo eficiente de errores y utiliza caching para acelerar solicitudes repetidas.

## Tecnologías Usadas

Este proyecto utiliza las siguientes tecnologías:

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Node Cache](https://img.shields.io/badge/Node--Cache-339933?style=for-the-badge)

## Características

- **API RESTful** para recibir las capacidades de las jarras y el volumen objetivo.
- **Algoritmo optimizado** para calcular los pasos de solución utilizando BFS.
- **Manejo de caché** para mejorar la eficiencia con solicitudes repetidas.
- **Validación de entradas** para garantizar que X, Y, y Z sean enteros positivos.
- **Swagger UI** para la documentación y prueba de la API.
- **Pruebas unitarias** con Jest para garantizar la calidad del código.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto localmente:

1. Clonar el repositorio:

```bash
git clone https://github.com/Nicolas1550/chicksGoldBack
cd chicksGoldBack
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

4. Iniciar el servidor en modo producción:

```bash
npm run build
npm start
```

## Endpoints de la API

### `POST /api/solve`

Este endpoint calcula los pasos necesarios para resolver el problema de las jarras de agua.

#### Parámetros del cuerpo (JSON):
- `x_capacity`: Capacidad del primer jarrón (número entero positivo).
- `y_capacity`: Capacidad del segundo jarrón (número entero positivo).
- `z_amount_wanted`: Cantidad exacta que se quiere medir (número entero positivo).

#### Ejemplo de solicitud:

```bash
curl -X POST http://localhost:3000/api/solve      -H "Content-Type: application/json"      -d '{"x_capacity":3, "y_capacity":5, "z_amount_wanted":4}'
```

#### Ejemplo de respuesta:

```json
{
  "solution": [
    { "step": 1, "bucketX": 0, "bucketY": 5, "action": "Fill bucket Y" },
    { "step": 2, "bucketX": 3, "bucketY": 2, "action": "Transfer Y to X" },
    { "step": 3, "bucketX": 0, "bucketY": 2, "action": "Empty bucket X" },
    { "step": 4, "bucketX": 2, "bucketY": 0, "action": "Transfer Y to X" },
    { "step": 5, "bucketX": 2, "bucketY": 5, "action": "Fill bucket Y" },
    { "step": 6, "bucketX": 3, "bucketY": 4, "action": "Transfer Y to X" },
    { "step": 7, "bucketX": 3, "bucketY": 4, "action": "Solved" }
  ]
}
```

#### Código de respuesta:
- `200 OK`: La solución se ha encontrado.
- `400 Bad Request`: Parámetros inválidos o no hay solución posible.

## Pruebas

Ejecuta las pruebas unitarias con Jest utilizando:

```bash
npm run test
```

## Documentación Swagger

La API está completamente documentada usando **Swagger**. Para acceder a la documentación y probar la API, visita:

```
http://localhost:3000/api-docs
```

## Autor

- **Nicolás Luciuk**  
  [LinkedIn](https://www.linkedin.com/in/nicolas-luciuk/)  
  [GitHub](https://github.com/Nicolas1550)

## Licencia

Este proyecto está licenciado bajo los términos de la licencia ISC.
