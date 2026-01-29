

  # Web Page for Marano Lagunare


  Questa repository contiene solo la pagina principale (homepage) di un sito web dedicato al paese di Marano Lagunare, in Friuli Venezia Giulia. Il progetto è una demo statica e non rappresenta un sito completo, ma offre una panoramica grafica e informativa sulla località.


## Guida all'attivazione

Seguire questi passaggi in ordine per configurare l'ambiente e visualizzare la pagina sul proprio computer.

### Installazione di Node.js
Il progetto richiede l'ambiente Node.js per gestire le librerie e il server locale.

* **Windows:** Scaricare l'installer .msi (versione LTS) dal sito ufficiale nodejs.org. In alternativa, aprire PowerShell e digitare:
    ```powershell
    winget install OpenJS.NodeJS.LTS
    ```
* **macOS:** Scaricare l'installer .pkg dal sito ufficiale oppure utilizzare Homebrew:
    ```bash
    brew install node
    ```
* **Linux (Ubuntu/Debian):** Utilizzare il terminale per installare Node.js e npm:
    ```bash
    sudo apt update
    sudo apt install nodejs npm
    ```

**Verifica:** Digitare `node -v` nel terminale. Se appare una versione (es. v20.x.x), l'installazione è corretta.
  ## Avvio rapido del progetto

  **1. Abilita l’esecuzione degli script in PowerShell (solo Windows):**
  Se ricevi un errore come “Impossibile caricare il file npm.ps1. L’esecuzione di script è disabilitata”, oppure se su PowerShell appare l'errore "esecuzione di script disabilitata", eseguire questo comando per sbloccare npm:
```powershell:

  ```powershell
  Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
  ```
  Conferma con "Sì" se richiesto.

  **2. Installa le dipendenze del progetto:**
  ```bash
  npm install
  ```

  **3. Verifica le immagini:**
  Assicurati che tutti i file immagine necessari siano presenti nella cartella `src/assets`.

  **4. Avvia il server di sviluppo:**
  ```bash
  npm run dev
  ```
  Se tutto è configurato correttamente, vedrai un messaggio simile a:
  ```
  VITE vX.X.X  ready in XXXX ms
  ➜  Local:   http://localhost:5173/
  ```

  **5. Visualizza il sito:**
  Apri il browser e vai su [http://localhost:5173/](http://localhost:5173/) per vedere la pagina web.

  This is a code bundle for Web Page for Marano Lagunare. The original project is available at https://www.figma.com/design/Juad8kHCLQ0xu7YQTYoSBY/Web-Page-for-Marano-Lagunare.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
=======
# Progetto-pagina-Web-Marano-Lagunare
>>>>>>> eaf1db32a2bb4aa541bc13c5350cd24e2372ff2d
