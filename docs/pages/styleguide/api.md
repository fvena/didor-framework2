api>

<!-- Bloque 1 -->
apiBlock>
# Tareas



apiBlock>
## Obtener todas las tareas

Devuelve un listado con todas las tareas.

```apiExample
{
  "url": "http://jsonplaceholder.typicode.com/todos",
  "method": "GET",
  "params": []
}
```


<!-- Bloque 2 -->
apiBlock>

## Obtener una tarea por :ID

Devuelve todos los datos de una tarea mediante su `:id`.

```apiExample
{
  "url": "http://jsonplaceholder.typicode.com/todos",
  "method": "GET",
  "params": [
    {
      "name": "id",
      "required": true,
      "type": "number",
      "description": "Id de la tarea",
      "default": null    
    },
    {
      "name": "userId",
      "required": false,
      "type": "text",
      "description": "Id del usuario",
      "default": null   
    },
    {
      "name": "content",
      "required": false,
      "type": "text",
      "description": "Contenido de la tarea",
      "default": null     
    }
  ]
}
```


<!-- Bloque 3 -->
apiBlock>

## Título 3

apiUrl[GET](http://jsonplaceholder.typicode.com/todos)

Este es un texto de ejemplo:

| field    | Type | Descripción                                                  |
| -------- | --- |  ------------------------------------------------------------ |
| `brand`  | `Integer` | Listado con los colores incluidos en el `$color-brand-map`.  |
| `gray`   | `Integer` | Listado con los colores incluidos en el `$color-gray-map`.   |
| `notify` | `String` | Listado con los colores incluidos en el `$color-notify-map`. |


```apiCode[html](Example Request)
<p>hola mundo</p>
<p>hola mundo</p>
<p>hola mundo</p>
```

```apiCode[json](Example Response)
{
  'key1': 'value1'
  key2: 3
}
```
