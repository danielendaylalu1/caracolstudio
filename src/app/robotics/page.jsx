import Card from "@/components/Card";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[100vh] max-h-[100vh] overflow-y-scroll no-scrollbar">
      <div className="h-full w-full">
        <div className="h-full bg-[#cdc8c9] flex flex-col space-y-8 justify-center px-4 py-16">
          <div className="flex justify-around">
            <div className="flex flex-col space-y-8">
              <h1 className="text-white text-[54px]">Robotic</h1>
              <p className="text-[25px] text-red-600 max-w-[750px]">
                Il nostro laboratorio ospita uno dei primi centri di ricerca
                basati su stampa 3D applicata a sistemi robotici antropomorfi.
              </p>
              <p className="text-[16px]  max-w-[750px]">
                Svolgendo un operazione di ricollocamento di una tecnologia nata
                in una dimensione prettamente industriale, abbiamo costituito un
                esclusivo strumento di fabbricazione che amplia ancor di più le
                frontiere applicative della manifattura additiva e degli stessi
                robot.
              </p>
              <p className="text-[16px]  max-w-[750px]">
                Sviluppiamo applicazioni in ambito manifatturiero, progettando e
                stampando in 3D su grandi volumi come ad esempio: arredi su
                misura, allestimenti per installazioni, strutture reticolari ad
                alte performance.
              </p>
              <div className="p-8 bg-white max-w-[750px] flex flex-col space-y-6">
                <Card
                  title="PRESENTAZIONE JAGUAR E-PACE"
                  date="21 Novembre 2017"
                  desc={`Movimenti ampi, armonici, calcolati, ripetuti con precisione,generano un 
                        effetto scenico senza eguali, giustificandol'antropomorfizzazione di un arto meccanico 
                        che diventa figura di intrattenimento, snaturandosi dalla sua dimensione rigida
                        ed industriale ma senza minare quello che é la figura umana alla quale vuole assomigliare.`}
                  showAuthor={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white px-4 min-h-[50vh] flex justify-center items-center">
          <p className="max-w-[1250px] text-center">
            {`"Connetti i punti della nebulosa post industriale e organicamente
            tessi la struttura sensibile della robotica applicata all'arte.
            Sinapsi digitali generano sistemi di crescita computazionale e
            vengono plasmati in espressioni materiche atipiche, inedite.
            Semplici codici subordinano meccaniscmi complessi che l'arto
            meccanico delicatamente esegue, obbediente nella sua danza
            programmata, esso disegno nello spazio. Supporti antropomorfi
            interpretano bit ed estrudono atomi. Metti a sistema il non
            standard, rinnega la serialità di massa alienante ed alienata L'era
            industriale è giunta al suo termine la robotica si fa umana ed
            artigianale."`}
          </p>
        </div>
        <div className="bg-[#f0f0f0] flex items-center justify-center px-4 py-16">
          <div className="max-w-[750px] flex flex-col space-y-12">
            <p className="text-base">
              {`"A flower: pure beauty need math to understand how beauty works
              need math to read beauty. A function is defined variables,
              parameters, digital synopsis and finally coordinates. Notes. Lost
              in translation, follow the path and get notes notes play music,
              magic. A machine is dancing: is beautiful and now sync it,
              translate it, observe it carefully and then listen everything is
              just happening"`}
            </p>

            <Card
              title="Rhodonea"
              date="Milano 2016"
              desc={`"Rhodonea" (dal greco "rhodon": rosa) è una performance artistica
              nata dalla collaborazione tra Caracol Studio e Ejtech.
              Trascendenza robotica audiovisiva. L'interazione tra l'uomo e la
              macchina e l'utilizzo di strumenti tecnologici oltre i canoni
              fittizi sono il cuore dell'esplorazione artistica di "Rhodonea".`}
              showAuthor={true}
            />

            <Card
              title="Sculture Informali"
              date="Studio Fotografico Gianni Rizzoti, Milano 4 — 9 Aprile 2017"
              desc="L'installazione preparata in occasione della Milano Design Week
              2017 vuole mostrare il processo creativo e produttivo che porta
              alla realizzazione di artefatti inediti in terracotta prodotti
              tramite manifattura additiva dal nostro braccio robotico a 6 assi.
              Il contesto in cui l'installazione si è calata, lo studio
              fotografico Gianni Rizzotti è parte integrante e fondamentale
              dell'intero processo."
              showAuthor={true}
            />
            <Card
              title="EXPO ASTANA 2017 “FUTURE ENERGY”"
              date="Astana, Kazakhstan 10 Giugno - 10 Settembre 2017"
              desc={`Caracol Design Studio ha avuto l'onore di partecipare ad un evento di 
              portata globale come EXPO Astana 2017, rappresentando in piccolo parte l'Italia attraverso 
              un'installazione artistica sul tema della "Future Energy" Quello messo in mostra nel Padiglione 
              Italia è un braccio meccanico industriale che svolge un'attività del tutto non convenzionale rispetto 
              allo standard: la sua natura viene rielaborata per essere trasformanto in uno 
              strumento al servizio della creatività.`}
              showAuthor={true}
            />
            <Card
              title="MAJORANA RELOADED"
              date="Teatro Sociale, Como, Italy 14 - 26 Settembre 2017"
              desc={`Il robot é nuovamente protagonista di una atto di rottura rispetto alla sua natura svolnegndo 
              una performance artistico-scenografica, questa volta in una delle location più insolite e nobili: il 
              foyer del Teatro Sociale di Como, affacciato sulla piazza del Duomo. Grazie all'intesa fra il Teatro ed il 
              parco tecnologico Como Next che ospita la nostra start-up, é stata curata una installazione che anticipa la 
              prima mondiale dell'opera "Ettore Majorana. Cronaca di infinite scomparse".`}
              showAuthor={false}
            />
            <p className="text-sm">
              {`Il braccio meccanico, tramite il suo sinuoso movimento
              nell'oscurita, simboleggia la ricerca perpetua di indizi che
              possano svelare il mistero che si cela dietro la scomparsa di
              Ettore Majorana, genio fisico Italiano dell'inizio del 900,
              compagno di Enrico Fermi ed ispiratore di generazioni di
              scienziati. Quello che permane, sono solo domande e lettere
              ambigue...`}
            </p>
            <Card
              title="MAKER FAIR ROME"
              date="Fiera di Roma, Roma, Italy 12 - 14 Ottobre 2016"
              desc={`Breve documentario sulla nostra esperienza alla Maker Faire Rome 2016, dove siamo stati 
              invitati a presentare ufficialmente il nostro progetto di ricerca sperimentale su stampa 3d e 
              robotica a seguito del bando "Big Bang Project" riguardo il potenziale della fabbricazione digitale su larga scala..`}
              showAuthor={false}
            />
            <Card
              title="FIERA METEF"
              date="Verona, Italy 21 - 24 Giugno 2017"
              desc={`In partnership con KUKA, Caracol Design Studio presenta una demo di manifattura additiva robotizzata alla fiera METEF di Verona.`}
              showAuthor={false}
            />
          </div>
        </div>
        <div className="bg-[#f0f0f0] flex min-h-[20vh] px-4 items-center justify-center space-x-16 border-2 border-white">
          <p className="text-xs">
            Via Cavour 2 | Lomazzo (CO) ITALY | CAP 22074
          </p>
          <p className="text-xs">Join our newsletter</p>
          <p className="text-xs">0039 | 3311128040 - 0039 | 3491027738</p>
        </div>
      </div>
    </div>
  );
};

export default page;
