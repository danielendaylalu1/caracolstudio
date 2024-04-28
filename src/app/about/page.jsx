import AboutCard from "@/components/AboutCard";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import React from "react";

const About = () => {
  return (
    <div className="min-h-[100vh] max-h-[100vh] overflow-y-scroll no-scrollbar bg-[#cdc8c9]">
      <div className="min-h-[100vh] flex flex-col py-16 items-center">
        <div className="p-4 max-w-[800px] space-y-8 mt-8">
          <h1 className="text-white text-[54px] font-bold">ABOUT</h1>

          <AboutCard
            title={`Ci occupiamo di:`}
            desc={`stampa 3D; produzione; prototipazione; ricerca; robotica; stampa
              3D`}
          />
          <AboutCard
            title={`Ci rivolgiamo a:`}
            desc={`Aereospazio; forze di difesa; apparecchiature elettriche ed elettroniche; industria; 
            manifattura; autoveicoli, loro parti e rimorchi; settore nautico; Oil&Gas; apparecchiature 
            di misura ottiche, elettromedicali, biomedicali e chimiche.`}
          />
          <p className="text-sm">
            Caracol Design Studio è un Polo di Additive Manufacturing 4.0: una
            realtà che esplora le nuove possibilità produttive derivanti dal
            pieno accesso alle più sofisticate tecnologie di stampa 3D e di
            fabbricazione digitale.
          </p>
          <p className="text-sm">{`Consideriamo queste nuove tecnologie come uno strumento innovativo e sostenibile per 
          potenziare le possibilità progettuali esistenti, definendo un nuovo modo 
          "post-industriale" di fare design.`}</p>
          <p className="text-sm">Le nostre attività si dividono in:</p>
          <AboutCard
            title={`DESIGN`}
            desc={`Progettiamo e realizziamo prodotti Made in Italy con le più avanzate tecniche di stampa 3D, 
            lavorando con diversi materiali e creando una dialettica rivoluzionaria ed esclusiva ai limiti delle 
            possibilità formali, qualitative e prestazionali.`}
          />
          <p className="text-sm">
            A queste produzioni affianchiamo un servizio di consulenza e
            sviluppo di design personalizzato, ottimizzato in termini di qualità
            estetica, prestazioni meccaniche, funzionalità e convenienza, a
            stretto contatto con il cliente dalle prime fasi di ideazione alla
            fase di produzione.
          </p>
          <AboutCard
            title={`ROBOTICA`}
            desc={`Il nostro laboratorio ospita il primo polo di produzione basato sulla stampa 3D applicato 
            a sistemi robotici antropomorfi.`}
          />
          <p className="text-sm">
            Sviluppiamo applicazioni in ambito manifatturiero, lavorando con una
            vasta gamma di materiali, realizzando arredi personalizzati,
            attrezzature per installazioni e strutture caratterizzate da un
            codice identificativo esclusivo ed estetico-funzionale.
          </p>
          <p className="text-sm">
            Utilizziamo i robot anche come strumento performativo: sviluppiamo
            installazioni artistiche e scenografiche per mostre, fiere,
            esposizioni e per il mondo dello spettacolo.
          </p>
          <AboutCard
            title={`FABBRICA`}
            desc={`Non offriamo solo un servizio di progettazione e sviluppo prototipale basato sulla stampa 3D, 
            ma un vero e proprio servizio di produzione non convenzionale in Italia.
            `}
          />
          <AboutCard
            title={`FABBRICA`}
            desc={`Non offriamo solo un servizio di progettazione e sviluppo prototipale basato sulla stampa 3D, 
            ma un vero e proprio servizio di produzione non convenzionale in Italia.
            `}
          />
          <h2 className="font-bold text-xl">
            Questo innovativo metodo di produzione garantisce molti vantaggi,
            tra cui:
          </h2>
          <div className="flex flex-col space-y-2">
            <p className="text-sm">
              {`L'eliminazione degli stampi come barriera produttiva.`}
            </p>
            <p className="text-sm">
              La possibilità di condurre un flusso produttivo on demand.
            </p>
            <p className="text-sm">
              {`L'infinita possibilità di personalizzare i prodotti.`}
            </p>
            <p className="text-sm">
              La generazione di geometrie complesse che si traduce in un
              miglioramento delle prestazioni meccaniche.
            </p>
            <p className="text-sm">
              Queste caratteristiche consentono di abbattere drasticamente i
              costi delle produzioni di media/piccola serie, offrendo un
              servizio senza precedenti per aziende e privati, in linea con le
              più sofisticate tecniche produttive oggi presenti.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
