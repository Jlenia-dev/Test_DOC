# Test di usabilità — pagina di smistamento dei task

Tre pagine statiche per condurre test di usabilità moderati su un sito
esistente: una home che elenca i task e due varianti della schermata di
istruzioni, da scegliere in base a come si comporta il sito da testare.
Nessuna dipendenza, nessuna build: sono file HTML da caricare così come
sono su GitHub Pages.

## File

| File | A cosa serve |
| --- | --- |
| `index.html` | Home del test: introduzione e le quattro tessere dei task |
| `tasks.js` | Contenuti dei task: indirizzi, titoli, scenari, attività |
| `task-overlay.html` | Variante A: il sito dentro la pagina, istruzioni in overlay |
| `task-tabs.html` | Variante B: istruzioni in una scheda, sito in un'altra |

## Le due varianti

**Variante A — `task-overlay.html`.** Il sito da testare occupa tutta la
scheda dentro un `iframe`. Sopra galleggia un bottone "Istruzioni Task";
al clic si apre il pannello con le istruzioni, che si chiude con la X,
con "Torna al task" o con Esc. Il bottone si trascina, così se copre un
elemento che serve alla persona non resta bloccato lì.

Funziona solo se il sito si lascia incorporare. Un sito che risponde con
`X-Frame-Options: DENY` o `SAMEORIGIN`, oppure con
`Content-Security-Policy: frame-ancestors`, verrà rifiutato dal browser e
l'area resterà bianca. Va verificato prima: strumenti per sviluppatori →
scheda Network → prima richiesta → Response Headers. Da tenere presente
anche che dentro un `iframe` cross-site i cookie di sessione con
`SameSite=Lax` non vengono inviati, quindi il login del sito potrebbe non
reggere: conviene provare un giro completo, non solo la prima schermata.

**Variante B — `task-tabs.html`.** Le istruzioni restano nella loro
scheda e "Inizia il task" apre il sito in una scheda accanto: la persona
fa avanti e indietro tra le due. Funziona sempre, con qualunque sito.

Si sceglie quale usare da `index.html`, in fondo al file:

```js
const TASK_PAGE = "task-tabs.html";
```

## Preparare un test

1. Apri `tasks.js` e sostituisci indirizzi, scenari e attività dei
   quattro task. Per averne di più o di meno, aggiungi o togli voci
   dall'oggetto `TASKS` e aggiorna `counter` (`1/5`, `2/5`, e così via).
2. Svuota `OVERRIDE_URL` riportandolo a `""`: finché contiene un
   indirizzo, tutti i task puntano lì. Serve solo per le prove.
3. Scegli la variante in `index.html`.
4. Nella variante A, se il bottone finisce sopra un elemento importante,
   spostane la posizione di partenza con `--fab-top` e `--fab-left` in
   cima al CSS di `task-overlay.html`.

## Pubblicare su GitHub Pages

Carica i file nella radice del repository, poi Settings → Pages → Source:
"Deploy from a branch", ramo `main`, cartella `/root`. La home sarà
`https://<utente>.github.io/<repo>/`.

Le pagine hanno `<meta name="robots" content="noindex, nofollow">`, quindi
non finiscono nei motori di ricerca, ma **restano leggibili da chiunque
abbia l'indirizzo**. Se gli scenari o gli indirizzi dell'ambiente di test
sono riservati, usa un repository privato con GitHub Pages su piano a
pagamento, oppure inserisci i contenuti reali solo in locale e non
committarli.

## Provare senza avere il sito a disposizione

`OVERRIDE_URL` in `tasks.js` è impostato su un video YouTube incorporabile:
apri `task-overlay.html?task=1` e vedi il bottone sopra un sito vero, con
il pannello che si apre al clic. Per una prova con contenuti più simili a
un'applicazione va bene anche
`https://www.openstreetmap.org/export/embed.html?bbox=9.15,45.44,9.22,45.49`.
Un sito che invece rifiuta l'incorporamento, utile per vedere come si
presenta il caso negativo, è `https://www.google.com`.

Si può anche passare l'indirizzo direttamente nella barra del browser:
`task-overlay.html?task=1&url=https://esempio.it`.
