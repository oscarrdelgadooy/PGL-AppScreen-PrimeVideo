# ⚛️ Atomic Design en PGL-AppScreen-PrimeVideo

Para organizar los elementos visuales de la app, hemos seguido el **principio de Atomic Design**, que permite estructurar los componentes desde los más básicos hasta las pantallas completas, asegurando **reutilización y mantenimiento fácil**.

---

## 🧬 Átomos
Los **átomos** son los elementos más simples de la interfaz. En nuestra app, usamos tanto componentes core de React Native como nuestros propios átomos.

### Componentes core:
- `View` → contenedores de layout.  
- `Text` → textos de cualquier tipo.  
- `Image` → imágenes.  
- `TouchableOpacity`→ botones y zonas clicables.  
- `ScrollView` → listas y desplazamiento.
- `FontAwesome5` → iconos

---

## ⚗️ Moléculas
Las **moléculas** combinan varios átomos para crear bloques funcionales.

### Ejemplos:
- `MovieBanner` → combina `Image`, `LinearGradient`, `FontAwesome5` y `Text` para mostrar un banner de película con logo de Prime y botón de opciones.  
- `Header` → combina `Image` y `FontAwesome5` para mostrar el logo de la aplicación.  
- `Footer` → combina `FontAwesome5` + `Text` para desglosar las vistas/pantallas de la aplicación.

---

## 🧫 Organismos
Los **organismos** son secciones completas que contienen varias moléculas.

### Ejemplos:
- `View` → lista de películas en el App.tsx mediante un mapeo de una lista de películas
---

## 📱 Páginas
Las **páginas** son las pantallas finales de la app, donde los datos reales se combinan con la plantilla y los organismos.

### Ejemplos:
- `App` → contiene todos los componentes(moléculas) de mi aplicación.