

  # Web Page for Marano Lagunare 

  Questo repository contiene il codice per la Web Page di Marano Lagunare. 

  ## Guida passo-passo per avviare il programma

  ### 1. Installazione di Python

  Se non hai Python installato sul tuo computer, segui questi passaggi:

  1. Vai sul sito ufficiale di Python: [https://www.python.org/downloads/](https://www.python.org/downloads/)
  2. Scarica la versione consigliata per il tuo sistema operativo (Windows, macOS, Linux).
  3. Avvia l'installer e **assicurati di selezionare la casella "Add Python to PATH"** prima di cliccare su "Install Now".
  4. Completa l'installazione seguendo le istruzioni a schermo.
  5. Per verificare che Python sia installato correttamente, apri il terminale (PowerShell su Windows) e digita:
    ```
    python --version
    ```
    Dovresti vedere la versione di Python installata.

  ### 2. Installazione delle dipendenze del progetto

  1. Apri il terminale nella cartella del progetto.
  2. Installa le dipendenze Node.js digitando:
    ```
    npm i
    ```

  ### 3. Avvio del server di sviluppo

  1. Sempre dal terminale, avvia il server digitando:
    ```
    npm run dev
    ```
  2. Apri il browser e vai all'indirizzo indicato nel terminale (di solito [http://localhost:5173](http://localhost:5173)).

  ### 4. Risoluzione dei problemi

  Se riscontri errori relativi a Python, assicurati che sia installato e che sia stato aggiunto al PATH. Se hai bisogno di installare altri pacchetti Python, puoi farlo con:
  ```
  pip install nome_pacchetto
  ```

  Per qualsiasi problema, consulta la documentazione ufficiale di Python o Node.js.
  