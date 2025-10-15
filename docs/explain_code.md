# 🧩 Componente Propio: MovieBanner

El componente **`MovieBanner`** es un elemento personalizado desarrollado en React Native que muestra una imagen destacada (un banner de película o serie) junto con información visual y un botón interactivo.  
Fue implementado combinando componentes de React Native, íconos de **FontAwesome5** y efectos visuales de **expo-linear-gradient**.

---

## 📂 Archivo
`components/MovieBanner.js`

---

## 🏗️ Estructura y Props

El componente recibe dos propiedades principales:

```typescript
type MovieBannerProps = {
  path: ImageSourcePropType;  // Ruta o fuente de la imagen a mostrar
  FuncRandom: () => void;     // Función que se ejecuta al pulsar el botón
};
```

Esto permite que el banner sea **reutilizable**, ya que el componente padre puede cambiar tanto la imagen como la acción del botón.

---

## 🖼️ Contenido visual del banner

### 1️⃣ Imagen y superposiciones

```tsx
<View style={styles.imageContainer}>
  <Image source={path} style={styles.photoSize} />
  <LinearGradient
    colors={["transparent", "rgba(0,0,0,0.4)"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    style={styles.gradient}
  />
  <FontAwesome5 name="check-circle" size={15} color="blue" style={styles.primeLogo} />
  <Text style={styles.primeText}>Included with Prime</Text>
</View>
```

- **`Image`** muestra el banner recibido como prop (`path`).
- **`LinearGradient`** aplica un degradado a la foto.
- **`FontAwesome5`** y **`Text`** añaden el icono y el texto *“Included with Prime”*.

---

### 2️⃣ Botón interactivo

```tsx
<View style={styles.buttonContainer}>
  <TouchableOpacity onPress={FuncRandom} style={styles.button}>
    <FontAwesome5 name="ellipsis-h" size={24} color="white" />
  </TouchableOpacity>
</View>
```

- Usa **`TouchableOpacity`** para crear un botón táctil.
- Al pulsarlo, ejecuta la función `FuncRandom`, que cambia la imagen del banner de forma aleatoria.

---

## 🎨 Estilos principales

```js
const styles = StyleSheet.create({
  container: { flex: 1 },
  imageContainer: { justifyContent: "center", alignItems: "center", flex: 9 },
  photoSize: { width: "100%", height: "100%" },
  gradient: { position: "absolute", bottom: 0, left: 0, right: 0, height: "30%" },
  primeLogo: { position: "absolute", bottom: 0, left: 20 },
  primeText: { color: color.fontColor, position: "absolute", bottom: 0, left: 40, fontSize: 12, fontWeight: "bold" },
  buttonContainer: { backgroundColor: color.backgroundColor },
  button: { alignItems: "center", width: 45, alignSelf: "center" },
});
```

Estos estilos permiten una presentación con un degradado inferior tipo “Prime Video”, un texto superpuesto y un botón centrado.

---

## ⚙️ Integración en la aplicación

El componente se utiliza dentro del archivo principal (`App.js` o `HomeTemplate.js`) de la siguiente manera:

```tsx
<MovieBanner path={randomPic} FuncRandom={randomizarImagen} />
```

Cada vez que se pulsa el botón del banner, se ejecuta la función `randomizarImagen`, que selecciona una nueva imagen aleatoria.

---

## ✅ Conclusión

El componente **MovieBanner**:
- Encapsula toda la lógica visual del banner.  
- Es **modular y reutilizable**.  
- Añade una **interacción directa** con el usuario.  
- Sigue buenas prácticas de diseño visual y estructuración de código.
