# 🎸 Teoría del Bajo

App offline de teoría musical enfocada al bajo. Toda la información está dentro de la app:
fundamentos, intervalos, escalas y modos, acordes (mayor, menor, aumentado, disminuido y séptimas),
campo armónico, círculo de quintas y progresiones. Incluye mástil interactivo, explorador de
escalas/acordes con sonido y ejercicios.

No necesita internet una vez instalada.

---

## Cómo generar el APK (igual que tu proyecto anterior)

El APK se genera **solo** en GitHub con GitHub Actions. Pasos:

1. Crea un repositorio nuevo en GitHub (por ejemplo `teoria-bajo`).
2. Sube esta carpeta al repo (ver comandos abajo).
3. Entra en la pestaña **Actions** del repo. El workflow *"Construir APK"* se lanza solo al hacer
   push a `main`. Si no, pulsa **Run workflow** a mano.
4. Cuando termine (unos 3-5 min), abre la ejecución y descarga el artefacto
   **`TeoriaDelBajo-apk`**. Dentro está `app-debug.apk`.
5. Pasa ese `.apk` a tu tablet e instálalo (activa "instalar apps de orígenes desconocidos").

### Subir el proyecto a GitHub

```bash
git init
git add .
git commit -m "App de teoría musical para bajistas"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/teoria-bajo.git
git push -u origin main
```

---

## Estructura

```
www/                 ← la app (HTML/CSS/JS), 100% offline
  index.html
  css/styles.css
  js/theory.js       ← motor: calcula notas, escalas, acordes, círculo, mástil
  js/content.js      ← textos de las lecciones (el "porqué")
  js/app.js          ← navegación, herramientas interactivas y ejercicios
capacitor.config.json
package.json
.github/workflows/build-apk.yml   ← genera el APK automáticamente
```

## Probar en el ordenador (opcional)

Solo abre `www/index.html` en el navegador, o sirve la carpeta:

```bash
npx serve www
```

## Cambiar el nombre o el icono de la app

- Nombre: edita `"appName"` en `capacitor.config.json`.
- ID del paquete: `"appId"` (formato `com.tunombre.app`).
- Para un icono propio, dímelo y lo añadimos.
