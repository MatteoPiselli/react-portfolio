import React from 'react';
import openAI from './assets/images/veille/640x410_open-ai-logo-displayed-on-a-mobile-phone-screen-is-seen-in-this-illustration-photo.webp';
import openAI2 from './assets/images/veille/640x410_suqian-china-february-15-2023-an-internet-user-checks-chat-gpt-in-suqian-jiangsu-p.webp';
import bfm from './assets/images/veille/bfm.webp';

function Veille() {
  return(
    <div>
      <h1>Veille technologique</h1>
      <p>
        Dans le cadre du BTS SIO, j’ai été amené à mettre en place une veille technologique.
      </p>
      <p>
        Qu’est-ce que la veille technologique ?
      </p>
      <p>
      La veille technologique, élément de la veille stratégique, consiste à surveiller les évolutions techniques, les innovations dans un secteur d’activité donnée. La veille technologique comprend notamment la surveillance, la collecte, le partage et la diffusion d’information permettant d’anticiper ou de s’informer sur des changements en matière de recherche, développement, brevet, lancement de nouveaux produits, matériaux, processus, concepts, innovation de fabrication, etc…. Cela a pour but d’évaluer l’impact sur l’environnement et l’organisation.
      </p>
      <h1>Ma démarche</h1>
      <p>
        Pour effectuer ma veille, j’ai utilisé essentiellement :
      </p>
      <p>
        Feedly.com : ce service me permet de retrouver sur une même plateforme les informations des quotidiens les plus importants, les blogs, les chaînes YouTube. L'inscription à Feedly est gratuite via mon compte Google.
      </p>
      <p>
        Google Alertes : ce service gratuit me permet d’être tenu informé par mail des nouveautés mise en ligne qui concerne les mots clés choisis.
      </p>
      <p>
        J'ai également effectué des recherches personnelles.
      </p>
      <h1>Mon sujet de veille</h1>
      <p>
        Pour ma veille technologique, j'ai décidé d'aborder l'intelligence artificielle et plus précisement ChatGPT nous allons voir les différentes modifications/innovations les récentes actualités qu'à connu le logiciel développé par OpenAI
      </p>
      <p>
        Qu'est-ce que Chat GPT ?
      </p>
      <p>
        ChatGPT est une intelligence artificielle  développé par OpenAI, elle réponds aux questions et fournie des informations sur divers sujets en utilisant ses connaissances préalablement acquises à partir de grandes quantités de données textuelles.
      </p>
      <h2>Actualités</h2>
      <p>
        <li>Données personnelles : L’Italie bloque le robot conversationnel ChatGPT</li>
      </p>
      <p>
        31/03/23
      </p>
      <a href="https://www.20minutes.fr/monde/4030590-20230331-donnees-personnelles-italie-bloque-robot-conversationnel-chatgpt">https://www.20minutes.fr/monde/4030590-20230331-donnees-personnelles-italie-bloque-robot-conversationnel-chatgpt</a> 
      <br />     
      <img
        src={openAI2}
        alt="openAI"
        width="20%"
        heigh="auto"
      />
      <p>
        Les autorités italiennes ont annoncé vendredi leur décision de bloquer le robot conversationnel ChatGPT, accusé de ne pas respecter la législation sur les données personnelles et de ne pas avoir de système pour vérifier l’âge des usagers mineurs.<br />
        Cette décision « avec effet immédiat » aura pour conséquence « la limitation provisoire du traitement des données des utilisateurs italiens vis-à-vis d’OpenAI », créateur de ChatGPT, a indiqué dans un communiqué l’Autorité nationale de protection des données personnelles.
      </p>

      <p>
        <li>Voici ce dont est capable GPT-4, la nouvelle version affinée de ChatGPT</li>
      </p>
      <p>
        14/03/23
      </p>
      <a href="https://www.bfmtv.com/tech/intelligence-artificielle/voici-ce-dont-est-capable-gpt-4-la-nouvelle-version-affinee-de-chat-gpt_AV-202303140725.html">https://www.bfmtv.com/tech/intelligence-artificielle/voici-ce-dont-est-capable-gpt-4-la-nouvelle-version-affinee-de-chat-gpt_AV-202303140725.html</a>
      <br />
      <img 
        src={bfm}
        alt="bfm ChatGPT"
        width="20%"
        height="auto"
      />
      
      <p>
        <li>OpenAI lance une version de ChatGPT « aussi performante que les humains » pour certaines tâches</li>
      </p>
      <p>
        14/03/23
      </p>
      <a href="https://www.20minutes.fr/high-tech/4027948-20230314-openai-lance-version-chatgpt-aussi-performante-humains-certaines-taches">https://www.20minutes.fr/high-tech/4027948-20230314-openai-lance-version-chatgpt-aussi-performante-humains-certaines-taches</a>
      <br />
      <img 
        src={openAI}
        alt="openAI"
        width="20%"
        height="auto"
      />
      <p>
      L’entreprise californienne OpenAI, à l’origine du phénomène ChatGPT, a lancé mardi GPT-4, une nouvelle version de la technologie d’intelligence artificielle générative qui alimente le célèbre chatbot et constitue un pas de plus vers des programmes informatiques aussi « intelligents » que les humains.<br />
      Microsoft, qui a investi des milliards de dollars dans la start-up, a annoncé dans la foulée avoir intégré GPT-4 à Bing, son moteur de recherche déjà doté de fonctionnalités de ChatGPT depuis un mois.<br />
      « GPT-4 est un grand modèle multimédia, moins doué que les humains dans de nombreux scénarios de la vie réelle, mais aussi performant que les humains dans de nombreux contextes professionnels et académiques », a indiqué OpenAI dans un communiqué. « Par exemple, il réussit l’examen pour devenir avocat avec un score aussi bon que les meilleurs 10 %. La version précédente, GPT 3.5, était au niveau des 10 % les moins bons », a-t-elle précisé.
      </p>
    </div>
  );
    
}

export default Veille;
