# Componente Propio: MovieBanner

El componente **`MovieBanner`** es un elemento personalizado de **React Native** que muestra un banner de película o serie con información visual, un degradado y un botón interactivo. Se apoya en **FontAwesome5** para los íconos y **expo-linear-gradient** para los efectos visuales.

---

## Archivo

`components/MovieBanner.tsx`

---

## Estructura y Props

El componente recibe las siguientes propiedades:

```typescript
type MovieBannerProps = {
  path: ImageSourcePropType;  // Ruta o fuente de la imagen a mostrar
  FuncRandom: () => void;     // Función que se ejecuta al pulsar el botón
  style: StyleProp<TextStyle>; // Estilo opcional para personalizar el banner
};
```

Estas props permiten reutilizar el componente en distintas partes de la app, mostrando diferentes imágenes y comportamientos.

---

## Estructura visual del banner

### Imagen y superposiciones

```tsx
<View style={styles.imageContainer}>
  <Image source={path} style={styles.photoSize} />
  <LinearGradient
    colors={["transparent", "rgba(0,0,0.4)"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.gradient}
  />

  <FontAwesome5 name="check-circle" size={15} color="blue" style={styles.primeLogo} />
  <Text style={styles.primeText}>Included with Prime</Text>
</View>
```

🔹 **`Image`** muestra el banner recibido como prop (`path`).
🔹 **`LinearGradient`** añade un degradado inferior para mayor contraste visual.
🔹 **`FontAwesome5`** y **`Text`** muestran el icono de Prime y la etiqueta *“Included with Prime”*.

---

### Botón interactivo

```tsx
<View style={styles.buttonContainer}>
  <TouchableOpacity onPress={FuncRandom} style={styles.button}>
    <FontAwesome5 name="ellipsis-h" size={24} color="white" />
  </TouchableOpacity>
</View>
```

* **`TouchableOpacity`** crea un botón táctil.
* Al presionarlo, se ejecuta `FuncRandom`, cambiando la imagen del banner de forma aleatoria.

---

## Estilos principales

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  primeLogo: {
    position: "absolute",
    bottom: 0,
    left: 20,
  },

  primeText: {
    color: color.fontColor,
    position: "absolute",
    bottom: 0,
    left: 40,
    fontSize: 12,
    fontWeight: "bold",
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 9,
  },

  photoSize: {
    width: "100%",
    height: "100%",
  },

  gradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "30%",
  },

  buttonContainer: {
    backgroundColor: color.backgroundColor,
  },

  button: {
    alignItems: "center",
    width: 45,
    alignSelf: "center",
  },
});
```

Los estilos se enfocan en mantener el diseño tipo *Prime Video*, con texto superpuesto, icono flotante y botón centrado.

---

## Integración en la aplicación

El componente se usa dentro del archivo principal `App.tsx` de la siguiente forma:

```tsx
<MovieBanner
  path={randomPic}
  FuncRandom={randomizarImagen}
  style={styles.banner}
/>
```

Cada vez que el usuario presiona el botón, se ejecuta `randomizarImagen`, que selecciona una imagen aleatoria del array `imagenes`.

---

## Conclusión

El componente **MovieBanner**:

* Presenta un diseño visual atractivo con degradado y superposición de texto.
* Es **modular, reutilizable y dinámico**.
* Permite una interacción directa y simple con el usuario.
* Mantiene una estructura limpia y escalable dentro del diseño atómico del proyecto.

[📘 Volver al menú principal.](../readme.md)