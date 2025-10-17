# 🧭 Iconos utilizados en el proyecto

| Icono           | Vista | Librería                              | Descripción / Uso                                                                                                 | Ejemplo de implementación                                                              | Explicación                                                                                                                                                                             |
| :-------------- | :---: | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `check-circle`  |   ✅   | **@expo/vector-icons / FontAwesome5** | Muestra el logotipo de “Prime” sobre el banner de la película.                                                    | `<FontAwesome5 name="check-circle" size={15} color="blue" style={styles.primeLogo} />` | Este icono se usa para indicar que el contenido está incluido con la suscripción Prime. Se importa desde `@expo/vector-icons` y se coloca de forma absoluta sobre la imagen del banner. |
| `ellipsis-h`    |   ⋯   | **@expo/vector-icons / FontAwesome5** | Representa un botón de acción o menú adicional dentro del banner.                                                 | `<FontAwesome5 name="ellipsis-h" size={24} color="white" />`                           | Implementado dentro de un `TouchableOpacity` para generar un botón interactivo que ejecuta la función `FuncRandom` al pulsarlo.                                                         |
| `chevron-right` |   ➡️  | **@expo/vector-icons / FontAwesome5** | Se usa en los títulos de secciones (“Top movies”, “Amazon Originals…”) para indicar navegación o más contenido.   | `<FontAwesome5 name="chevron-right" size={12} color="#a3a3a3ff" />`                    | Refuerza la jerarquía visual mostrando que las listas son desplazables hacia la derecha.                                                                                                |
| `chromecast`    |   📺  | **@expo/vector-icons / FontAwesome5** | Se usa en el header para la implementación del botón para conectarse remotamente a otros dispositivos de la casa. | `<FontAwesome5 name="chromecast" size={24} color={color.headerColor}  />`              | Permite representar la funcionalidad de conexión inalámbrica mediante el icono de transmisión.                                                                                          |

---

### 🧩 Implementación general de los iconos

Todos los iconos provienen de la misma librería:

```bash
@expo/vector-icons
```

Y se importan del siguiente modo:

```javascript
import { FontAwesome5 } from "@expo/vector-icons";
```

Luego se pueden insertar en cualquier parte del JSX como si fueran componentes:

```jsx
<FontAwesome5 name="check-circle" size={15} color="blue" />
```

Parámetros principales:

* **`name`** → nombre del icono dentro del set de FontAwesome5.
* **`size`** → tamaño del icono en píxeles.
* **`color`** → color del icono.
* **`style`** → permite posicionarlo o aplicarle márgenes personalizados.
