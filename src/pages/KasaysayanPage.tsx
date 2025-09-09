import { motion } from "framer-motion";
import { ArrowLeft, Landmark } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import VintagePaper from "@/components/custom/VIntagePaper";


export default function KasaysayanPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-[linear-gradient(135deg,#f1e6c8_0%,#e6d7b1_50%,#d9c79a_100%)] text-stone-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        
        {/* <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="flex justify-center mb-3 text-stone-700">
            <Book className="h-8 w-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif mb-3">
            Kasaysayan ng Cavinti
          </h1>
          <p className="text-stone-700 italic max-w-2xl mx-auto">
            Isang paglalakbay mula sa pinagmulan ng pangalan, pananakop, at
            pakikibaka ng bayan.
          </p>
        </motion.header> */}

        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-stone-700 mb-2">
            <Landmark className="h-5 w-5" />
            <span className="uppercase tracking-[0.25em] text-xs">KASAYSAYAN • CAVINTI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-wide">Kasaysayan ng Cavinti</h1>
          <p className="text-stone-700 mt-2 italic">Isang paglalakbay mula sa pinagmulan ng pangalan, pananakop, at pakikibaka ng bayan.</p>
        </motion.header>

        {/* Back button */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border-stone-400 bg-amber-100 hover:bg-amber-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Bumalik
          </Button>
        </div>

        <VintagePaper>
          <Card className="bg-amber-50/70 border-stone-400/40">
            <CardContent className="prose prose-stone max-w-none font-serif text-stone-800 leading-relaxed">
              <h1 className="font-bold text-center mb-4 text-2xl">Bayan ng Cavinti</h1>

              <h2 className="text-lg font-bold mb-4">Kasaysayan</h2>
              <p>
                Ang pangalan ng bayan ng Cavinti ay nagmula, di-umano, sa pangalan ng ilog na kung tawagin ay “kabit-sa-binta”. Noon daw ay may tribu ng mga Aetas na dito ay naninirahan, at mayroon silang ritwal sa pagpapakasal. Obligadong habulin ng lalaki ang babaeng mapapangasawa bago ipalagay na sila’y kasal na. May isang ikakasal na babae na sa ilog napagawi. At habang patalon-talon siya sa mga bato ay nahawakan siya ng lalaking ikakasal sa kanya sa kanyang binti. Nagsigawan ang mga manonood sa pampang ng ilog “kabit-sa-binti!” bilang hudyat na ang kasal ay naidaos na. Di nagtagal ay tinawag na “Kabit-sa-binti” ang ilog. Di naglaon ang bayan na nakasasakop sa ilog ay tinawag na Cavinti.
              </p>

              <h2 className="text-lg font-bold my-4">Kahirapan sa Kamay ng mga Kastila</h2>
              <p className="mb-2">
                Nagdulot ng ibayong paghihirap sa mga taga- Cavinti ang pananakop ng mga Kastila. Pinilit ang mga mamayang gumawa ng mga bahay para sa kanila. Maging ang paggawa ng simbahan hanggang ngayon ay nakatayo na sinasabing binayaran lamang ng maliit na halaga. Bukod pa dito ay binuwisan ng malaki ang mga taga Cavinti. Kung hindi naman sila naka sapat sa kanilang buwis ay kinukuhanan pa ang kanilang mga ani. Ito ang iba pang pang-aapi at kalabisan ang nag lagay sa mga taong bayan sa kahabag-habag na kalagayan. Ang pagnanasang labanan ang pang-aapi at ibalik ang kalayaan ng bayan ang nagbunsod sa marami na makilahok at umanib sa kilusang himagsikan sa lalawigan. Sa pagdating ng mga Amerikano ay muling nanumbalik ang katahimikan at kaayusan sa Cavinti. Maraming paaralang pambayan ang naitayo at pinamahalaan ng mga sundalong Amerikano. Hinirang pa ngang magturo dito ang ilang taga Cavinti. Namahagi rin ng libreng mga gamit pampaaralan sa mga bata ang mga Amerikano.
              </p>

              <p className="mb-2">
                Kasabay nito, nagpatayo din ng isang tulay patawid ng Ilog Cavinti ang mga Amerikano upang mapadali ang mga mamamayan sa pagpunta sa mga karatig bayan. Ang pagkakaroon naman ng mga sasakyan ang nagbigay ng paunang sulong sa pagunlad ng Cavinti. Simula rin noon ay Malaki ang iniunlad ng mga mamamayan ng Cavinti patunay dito ang pagdami ng malalaki at magagandang bahay dito nap ag mamay ari ng mga taga Cavinti.
              </p>

              <p className="mb-2">
                Makalipas pa ang ilang panahon ng pamamahala ng mga Amerikano, ang mga Pilipino ay binigyan ng pagkakataong mamahala sa bayan. Si Huwes Cirilo Villamin ay nahalal na Kagawad ng Sangguniang Panlalawigan ng Laguna noong 1928-1931. Siya ang unang taga Cavinti na humawak ng ganitong tungkuling panlalawigan.
              </p>

              <h2 className="mb-4 font-bold text-lg my-4">Panahon ng Hapon</h2>
              <p className="mb-2">
                Noong Mayo 25 1942, ilang panahon pagkadaong ng mga Hapones sa Pilipinas, nilusob ang Japanese Imperial Army sa Barangay Duhat. Madali nilang nasakop ang Poblacion dahil karamihan sa mga tao dito ay nagsilikas sa ligtas na lugar. Hiniling ng mga hapones na bumalik ang mga tao sa bayan sa loob ng labing limang araw, ngunit tinanggihan ito sa huli. Dahil dito ay sinunog ng mga banyaga ang bayan ng Cavinti noong Hunyo 1942. Pagkatapos nito ay itinatag nila ang pamahalaang militar ng mga Hapon sa bayan at itinalaga si G. Juan Oflaria bilang punong bayan. Ipinatupad nila ang pag paparami ng pagkain lalo na ng mga gulay. Nagbuo rin sila ng samahan sa buong paligid. Pinagbantay pa ang kalalakihan tuwing gabi. Sila rin ang namahala sa pamimigay ng “ration cards” para sa mga pangunahing pangangailangan tulad ng asukal at bigas. Sa kabila ng pagtupad ng mga mamamayan sa mga kautusan ng mga Hapones, lumala ang kahirapan ng mga Pilipino bunga ng ibat ibang pagpaparusa ng nanakop. Nagbunga ito ng pagkakatatag ng kilusang Guerillasa lalawigan. Si Col. Juan Villamin ang nanguna sa grupong ito na binubuo ng mga kawal na taga Cavinti at maging mula sa ibang bayan at Philippine Armed Forces, at ang mga nakatakas sa tinatawag na “Death March”.
              </p>
              <p className="mb-2">
                Marami ding matatapang na sibilyan ang nagdesisyong iwanan ang kanilang pamilya upang tumulong sa kilusang Guerilla. Kabilang sa kanila sina Col. Zosimo Ressureccion, Maj. Lisando Vakente, Marciano Villamin, Nicolas Lubuguin, at Capt. Melecio Duma.
              </p>
              <p className="mb-2">
                Nagkaroon ng katuparan ang mga natitirang pag asa ng mga Pilipino tungo sa kalayaan ng sa bansa ang mga amerikano noong Octobre 20, 1944. Dahil dito ay nanghina ang pwersang Hapones at tuluyan ng nilisan ang bayan ng Cavinti. Simula noon nagsibalik na muli sa bayan ang mga tao.
              </p>
              <p className="mb-2">
                Simula rin noon ang unti unti muling nabuo ang pamahalaan ng Bayan ng Cavinti gayon din ang muling pag unlad ng pamumuhay ng mga tao dito. Kabilang sa mga naghimagsik laban sa mananakop sina Andres Blanco, Juan Gallardo, Ladislao Linay, Mariano Olivares, Esteban Batas, Pedro Oblena, Juan Liwagan, Rafael Lubuguin, Nicasio Morales, at Francisco Morales.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4">
                <img src="/images/kasaysayan1.png" width={400} alt="pic1" />
                <img src="/images/kasaysayan2.png" width={200} alt="pic1" />
              </div>

              <p>
                Kilala rin ang Cavinti bilang tahanan ng pinakamalaking sambalilo sa buong mundo. Ito ay gawa sa hinabing dahon ng pandan. Naitala ito sa Guinness Book of World Records noong Agosto 2016.
              </p>
            </CardContent>
          </Card>
        </VintagePaper>

        <footer className="mt-12 text-center text-xs text-stone-600">
          <p>
            Ginawa para sa proyekto <span className="font-serif">Kasaysayan</span>.
          </p>
        </footer>
      </div>
    </div>
  );
}
