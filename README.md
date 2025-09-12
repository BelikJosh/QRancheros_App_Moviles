# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Para empezar, despues de realizar un pull, o descargar el proyecto o clonar el proyecto

1. Instalar dependencias

   ```bash
   npm install
   ```

2. Iniciar la app

   ```bash
   npx expo start
   npm run start
   ```
# Guía de Instalación y Uso - Expo App

## 📱 Proyecto desarrollado con Expo

Este es un proyecto [Expo](https://expo.dev) creado con [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

---

## 🚀 Comenzar

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn
- Git

### 1. Instalar Expo CLI globalmente
```bash
npm install -g expo-cli
```

### 2. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd <nombre-del-directorio>
```

### 3. Instalar dependencias
```bash
npm install
```

### 4. Iniciar la aplicación
```bash
npx expo start
```

Esto abrirá la interfaz de Metro Bundler en tu navegador.

---

## 📲 Instalar Expo Go en tu móvil

### Para Android:
1. Ve a Google Play Store
2. Busca "Expo Go"
3. Instala la aplicación desarrollada por Expo

### Para iOS:
1. Ve a App Store
2. Busca "Expo Go"
3. Instala la aplicación desarrollada por Expo

---

## 🔄 Ejecutar la aplicación en tu dispositivo móvil

### Opción 1: Escaneando el código QR (Recomendado)
1. Abre la cámara de tu teléfono (Android) o la app de cámara (iOS)
2. Escanea el código QR que aparece en la terminal o en el navegador
3. Se abrirá automáticamente la app Expo Go con tu proyecto

### Opción 2: Desde la app Expo Go
1. Abre la app Expo Go en tu teléfono
2. Ve a la pestaña "Projects"
3. Tu proyecto debería aparecer en la lista si estás en la misma red WiFi
4. Toca para abrirlo

### Opción 3: Ingresando la URL manualmente
1. En Expo Go, ve a la pestaña "Profile"
2. Ingresa la URL que aparece en la terminal (similar a: exp://192.168.1.X:8081)

---

## 🖥️ Ejecutar en emulador

### Android Studio Emulator
```bash
# Después de tener expo iniciado, presiona 'a' en la terminal
npx expo start
# Luego presiona 'a' para abrir en Android emulator
```

### iOS Simulator (solo macOS)
```bash
# Después de tener expo iniciado, presiona 'i' en la terminal
npx expo start
# Luego presiona 'i' para abrir en iOS simulator
```

---

## 🛠️ Desarrollo

Puedes comenzar a desarrollar editando los archivos dentro del directorio **app**. Este proyecto utiliza [enrutamiento basado en archivos](https://docs.expo.dev/router/introduction).

### Estructura de carpetas:
```
├── app
│   ├── _layout.js
│   └── index.js
├── assets
│   ├── images
│   └── icons
└── components
```

---

## 🔧 Comandos útiles

```bash
# Iniciar en modo desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web

# Limpiar cache
npm start -- --clear
```

---

## 📚 Recursos de aprendizaje

Para aprender más sobre el desarrollo con Expo, consulta los siguientes recursos:

- [Documentación de Expo](https://docs.expo.dev/): Aprende los fundamentos o temas avanzados con nuestras [guías](https://docs.expo.dev/guides).
- [Tutorial de Learn Expo](https://docs.expo.dev/tutorial/introduction/): Sigue un tutorial paso a paso para crear un proyecto que funcione en Android, iOS y web.

---

## 🤝 Unirse a la comunidad

Únete a nuestra comunidad de desarrolladores creando aplicaciones universales.

- [Expo en GitHub](https://github.com/expo/expo): Ve nuestra plataforma de código abierto y contribuye.
- [Comunidad de Discord](https://chat.expo.dev): Chatea con usuarios de Expo y haz preguntas.

---

## ⚠️ Solución de problemas comunes

### Error: "Unable to resolve module"
```bash
# Ejecuta esto para reinstalar dependencias
npm install
```

### La app no se actualiza con cambios recientes
```bash
# Cierra completamente Expo Go y vuelve a abrir
# O reinicia el servidor con:
npm start -- --clear
```

### Problemas de conexión
- Asegúrate de que tu teléfono y computadora estén en la misma red WiFi
- Verifica que el firewall no esté bloqueando la conexión

---

¿Necesitas más ayuda? Revisa la [documentación de Expo](https://docs.expo.dev/) o pregunta en nuestra [comunidad de Discord](https://chat.expo.dev).