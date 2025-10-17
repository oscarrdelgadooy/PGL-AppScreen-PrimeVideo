# Atomic Design en PGL-AppScreen-PrimeVideo

## Introducción

El proyecto **PGL-AppScreen-PrimeVideo** sigue el principio de **Atomic Design**, que permite estructurar los componentes de interfaz desde los más simples hasta las pantallas completas. Este enfoque mejora la **reutilización**, **mantenibilidad** y **coherencia visual** del diseño.

---

## Átomos

Los **átomos** son los elementos más pequeños e independientes de la interfaz. En este proyecto se usan tanto componentes nativos de React Native como elementos propios.

### Componentes core usados como átomos:

* `View` → contenedor base de layout.
* `Text` → texto para títulos o etiquetas.
* `Image` → representación de películas o banners.
* `TouchableOpacity` → zonas clicables o botones.
* `ScrollView` → listas con desplazamiento.
* `FontAwesome5` → iconos visuales.

### Átomos personalizados:

* **`theme/color.ts`** → define la paleta de colores global.
* **`data/images.ts`** → contiene las rutas de las imágenes de las películas.
* **`data/categories.ts`** → define las categorías disponibles en la app.

---

## Moléculas

Las **moléculas** combinan varios átomos para formar bloques funcionales.

### Ejemplos:

* **`Header`**
  Combina `Image` (logo Prime) y `FontAwesome5` (iconos de búsqueda o usuario) para mostrar la cabecera principal.

* **`MovieBanner`**
  Combina `Image`, `LinearGradient`, `FontAwesome5` y `Text` para mostrar un banner con una película destacada y un botón para cambiarla aleatoriamente.
  **Props:**

  * `path`: ruta de imagen del banner.
  * `FuncRandom`: función para cambiar la imagen aleatoriamente.

* **`Footer`**
  Usa `FontAwesome5` y `Text` para mostrar el menú inferior de navegación.

---

## Organismos

Los **organismos** combinan varias moléculas para crear secciones completas de la interfaz.

### Ejemplos:

* **`ListActivities`**
  Muestra varias categorías (moléculas) obtenidas de `categoriesList`.
  Usa desplazamiento horizontal (`ScrollView`).

* **`ListMovies`**
  Incluye un título (`Text`) y una lista de películas (`Image` + `TouchableOpacity`) con desplazamiento horizontal.

* **`ListMoviesExclusive`**
  Variante del anterior con la sección **"Amazon Originals and Exclusives"**.

---

## Plantillas

Las **plantillas** definen la estructura general de una pantalla, combinando diferentes organismos dentro de un layout coherente.

### Ejemplo principal:

El componente **`App.tsx`** actúa como la plantilla base y estructura la pantalla principal de la app:

```jsx
Header
ListActivities
MovieBanner
ListMovies
ListMoviesExclusive
Footer
```

Esta jerarquía define la vista principal tipo *Prime Video*.

---

## Páginas

Las **páginas** son instancias concretas de las plantillas, que incluyen datos y lógica de estado.

### Ejemplo:

* **`App`** (página principal)
  Gestiona el estado local (`useState`) para cambiar el banner aleatoriamente y renderiza todos los componentes según la plantilla.

---

## Resumen jerárquico

```
Átomos:
├── Text
├── Image
├── View
├── ScrollView
├── TouchableOpacity
├── FontAwesome5
├── color (theme)
├── images (data)
└── categories (data)

Moléculas:
├── Header
├── MovieBanner
└── Footer

Organismos:
├── ListActivities
├── ListMovies
└── ListMoviesExclusive

Plantilla:
└── App (estructura base de pantalla)

Página:
└── App (instancia con estado dinámico)
```

[📘 Volver al menú principal.](../readme.md)