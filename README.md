<<<<<<< HEAD
## Guida passo passo per avviare il progetto senza errori

1. **Abilitare l'esecuzione degli script in PowerShell (solo Windows):**
  Se ricevi un errore simile a "Impossibile caricare il file npm.ps1. L'esecuzione di script è disabilitata", apri PowerShell e lancia questo comando:
   
  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```
  Conferma con "Sì" se richiesto.

2. **Installare le dipendenze del progetto:**
   
  ```bash
  npm install
  ```

3. **Correggere i percorsi delle immagini (già fatto in questa versione):**
  In alcune componenti React (About, Hero, Gallery) i percorsi delle immagini erano del tipo `figma:asset/...`. Sono stati sostituiti con percorsi relativi alla cartella `src/assets`, ad esempio:
   
  ```tsx
  import aboutImage from "../../assets/706496f93fd85c396be6c744fa0174df2bb047d6.png";
  ```
   
  Assicurati che tutti i file immagine necessari siano presenti in `src/assets`.

4. **Avviare il server di sviluppo:**
   
  ```bash
  npm run dev
  ```
   
  Se tutto è configurato correttamente, vedrai un messaggio simile a:
   
  ```
  VITE vX.X.X  ready in XXXX ms
  ➜  Local:   http://localhost:5173/
  ```

5. **Aprire il sito nel browser:**
  Vai su [http://localhost:5173/](http://localhost:5173/) per vedere la pagina web.

Seguendo questi passaggi, chiunque potrà avviare e visualizzare il progetto senza problemi.

  # Web Page for Marano Lagunare

  This is a code bundle for Web Page for Marano Lagunare. The original project is available at https://www.figma.com/design/Juad8kHCLQ0xu7YQTYoSBY/Web-Page-for-Marano-Lagunare.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
=======
# Progetto-pagina-Web-Marano-Lagunare
>>>>>>> eaf1db32a2bb4aa541bc13c5350cd24e2372ff2d
