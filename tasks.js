/* CONTENUTI DEI TASK — è l'unico file da modificare.
   Lo legge task-tabs.html.
   url / counter / title / scenario / activities / survey.

   Nel testo si può usare:
   <strong>…</strong>            grassetto
   <span class="caps">…</span>   maiuscolo (per le voci che sul sito
                                 compaiono in maiuscolo: Password, Utente…)

   activities accetta una sola attività o un elenco: con una sola
   l'etichetta resta "ATTIVITÀ", con due o più vengono numerate. */

const TASKS = {
  1: {
    url: "https://collaudo.ourbank.it/pwm-intranet/Home",
    counter: "1/5",
    title: "Task 1",
    scenario: " Immagina di aver accedere alla funzione che consente di visualizzare i documenti dei clienti presenti su Inbank o di una specifica banca, i documenti relativi, ad esempio, al bilancio consolidato e i dettagli delle fatture.",
    activities: [
      "Accedi al portale con <strong>UTENTE</strong> e <strong>PASSWORD</strong>.",
      "<strong> Cerca la funzionalità </strong> all’interno di Ourbank che ti consenta di visualizzare i documenti dei clienti presenti su Inbank o di una specifica banca, i documenti relativi, ad esempio, al bilancio consolidato e i dettagli delle fatture."
    ],
    survey: "https://forms.cloud.microsoft/e/gvvLh9YcWA"
  },

  2: {
    url: "https://collaudo.ourbank.it/pwm-documentsmanagement-docallitude/Infobanking",
    counter: "2/5",
    title: "Task 2",
    scenario: "Immagina di aver bisogno di verificare il contenuto di un documento. Durante la verifica ti accorgi che il documento non deve essere temporaneamente disponibile alla consultazione.",
    activities: [
      "Consulta la lista documenti della <strong>banca 03599</strong> e riferiti ai <strong>primi 10 giorni di Aprile 2026</strong>, appartenenti al <strong>gruppo rapporti ‘Investimenti’</strong> e <strong>tipologia ‘Disposizioni/Operazioni’</strong>.",
      "Blocca il documento con <strong>chiave 0359904CAD2600000134</strong> e <strong>UserID 59350202</strong>."
    ],
    survey: "https://forms.cloud.microsoft/e/TusY8v0SLt"
  },

  3: {
    url: "https://collaudo.ourbank.it/pwm-documentsmanagement-docallitude/Infobanking",
    counter: "3/5",
    title: "Task 3",
    scenario: "Immagina di aver bisogno di verificare i dettagli di fatturazione relativi ad una specifica banca.",
    activities: [
      "<strong>Scarica in formato .csv</strong> i dettagli fatture della <strong>banca 03599</strong> riferite a <strong>aprile 2017</strong>."
    ],
    survey: "https://forms.cloud.microsoft/e/JsJnewHRdW"
  },

  4: {
    url: "https://collaudo.ourbank.it/pwm-documentsmanagement-docallitude/Infobanking",
    counter: "4/5",
    title: "Task 4",
    scenario: "Immagina di dover verificare alcuni documenti di una specifica banca.",
    activities: [
      "Visualizza i documenti della <strong> banca 03599</strong>, associati alle <strong>chiavi 0359904VAR2600000130 e 0359912PORP005787740</strong>.",
      "<strong>Incolla nella chat</strong> di questa riunione il <strong>contenuto testuale</strong> della prima pagina del documento PDF."
    ],
    survey: "https://forms.cloud.microsoft/e/QDfPatyjWJ"
  },

  5: {
    url: "https://collaudo.ourbank.it/pwm-documentsmanagement-docallitude/Infobanking",
    counter: "5/5",
    title: "Task 5",
    scenario: " Immagina di dover controllare un documento condiviso tra due banche.",
    activities: [
      "Verifica il dettaglio del documento condiviso dalla <strong>banca proprietaria 03599</strong> alla <strong>banca 08304</strong>, associato alla <strong>chiave 0359901CAD5805910900</strong>."
    ],
    survey: "https://forms.cloud.microsoft/e/HYNpB0ubAs"
  }
};

/* QUESTIONARIO — fallback se un task non ha la voce survey.
   Si apre in una scheda accanto quando si apre un task.
   Stringa vuota per non aprire nessun questionario. */
const QUESTIONARIO_URL = "";

/* PROVA — sostituisce l’indirizzo di tutti i task.
   Rimetti la stringa vuota prima del test con i partecipanti. */
const OVERRIDE_URL = "";
