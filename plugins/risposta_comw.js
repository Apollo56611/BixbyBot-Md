const handler = async (m, { command, text }) => {
  const responses = [
    `non lo so`,
    `e io che cavolo ne so`,
    `prova a cercarlo su Google, coglione`,
    `pornhub.com, tieni, ti servirà`,
    `sei proprio inutile`,
    `neanche perdo tempo a risponderti`,
    `ma quanto sei stupido?`,
    `ma quanto sei stupida?`,
    `non chiederlo a me`,
    `sei inutile`,
    `non sai fare proprio un cavolo, eh?`,
    `non mi va di risponderti`,
    `non hai altro da fare?`,
    `continua pure a chiedere, tanto non ti risponderò`,
    `non ho tempo per queste cose`,
    `non mi rompere le scatole`,
    `ti sei già guardato allo specchio oggi?`,
    `non ho voglia di parlare con te`,
    `vai a farti un giro`,
    `mi stai stancando`,
    `non vedo l'ora di smettere di risponderti`,
    `vorrei poter ignorarti`,
    `mi hai fatto perdere tempo`,
    `trova qualcos'altro su cui rompere le scatole`,
    `non meriti nemmeno una risposta`,
    `vai a leggere un libro, forse impari qualcosa`,
    `pensi di essere intelligente?`,
    `spero che stai scherzando`,
    `non posso credere che tu abbia chiesto questo`,
    `sei patetico`,
    `non ho tempo per la tua stupidità`,
    `forse dovresti chiamare un esorcista`,
    `se tu sei intelligente, io sono Einstein`,
    `prova a fare qualcosa di utile per una volta`,
    `non mi aspettavo di dover rispondere a questo`,
    `davvero? chiedi sul serio questo?`,
    `non ti darò nemmeno il piacere di una risposta`,
    `non ti meriti nemmeno il mio tempo`,
    `impara a pensare prima di chiedere`,
    `non posso credere che tu abbia mandato questo messaggio`,
    `vai a fare qualcosa di costruttivo`,
    `mi dispiace, sono impegnato a non risponderti`,
    `non ho nulla da dirti`,
    `dovresti vergognarti di te stesso`,
    `vai a chiedere aiuto a qualcun altro`,
    `che peccato che tu abbia chiesto proprio a me`,
    `spero che tu non sia serio`,
    `mi stai facendo perdere la pazienza`,
    `spero che questa sia una battuta`,
    `hai provato a leggere le istruzioni?`,
    `non mi aspettavo di dover spiegare questo`,
    `sei fuori strada`,
    `dovresti provare a usare il cervello`,
    `cosa ti aspetti da me?`,
    `non hai davvero idea di come funzioni il mondo, vero?`,
    `spero che tu stia scherzando, altrimenti mi dispiace per te`,
    `prova a usare il cervello per una volta`,
    `potresti cercare una risposta da solo, sai?`,
    `sembri un caso disperato`,
    `ti consiglio una vacanza dalla tua intelligenza`,
    `ho visto pesci con una maggiore capacità di pensiero`,
    `non ho le risposte a tutto, ma tu sembri non averne a niente`,
    `se solo potessi capire quanto poco mi importa`,
    `dovresti investire in un corso di logica`,
    `mi stai facendo perdere le speranze nell'umanità`,
    `potrebbe essere utile avere aspettative più basse da te`,
    `prova a ragionare, potrebbe aiutarti`,
    `spero che tu stia trollando, altrimenti è imbarazzante`,
    `mi chiedo come hai fatto a fare questa domanda`,
    `sei il motivo per cui alcuni animali mangiano i loro piccoli`,
    `hai provato a cercare su Wikipedia? No? Mi stupisce`,
    `forse dovresti pensare a cambiare mestiere`,
    `non so se ridere o piangere per la tua domanda`,
    `sembri essere sceso direttamente dalla scogliera dell'intelligenza`,
    `hai mai considerato l'opzione di smettere di fare domande?`,
    `forse dovresti iscriverti a un corso di pensiero critico`,
    `sei la dimostrazione vivente che l'evoluzione può sbagliarsi`,
    `il tuo IQ deve essere un numero negativo`,
    `le tue domande sono come un buco nero di intelligenza`,
    `sei così fuori pista che hai bisogno di un GPS per tornare alla realtà`,
    `probabilmente persino una pianta ha una comprensione migliore del mondo rispetto a te`,
  ];

  const uniqueResponses = [...new Set(responses)];
  const randomResponse = uniqueResponses[Math.floor(Math.random() * uniqueResponses.length)];

  m.reply(randomResponse.trim(), null, m.mentionedJid ? { mentions: m.mentionedJid } : {});
};

handler.customPrefix = /come/i;
handler.command = new RegExp;

export default handler;