import Subtitle from "@/components/Subtitle"
import Title from "@/components/Title";
import { motion, type Variants } from "framer-motion";

const KasaysayanPinagmulan = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each child
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };


  return (
    <div className="max-w-5xl mx-4 md:mx-auto mt-10 border-8 border-[#d2b48c] rounded-xl shadow-2xl 
      bg-[#fffaf0] p-6">

      <motion.div>
        <Title title="Bayan ng Cavinti" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show">

        <motion.div variants={itemVariants}>
          <Subtitle subtitle="Kahirapan sa Kamay ng mga Kastila" />
          <div className="mb-4">
            <img src="/images/map.png" className="md:float-right h-[300px] md:ml-4" alt="map" />
            <p className="">
              Nagdulot ng ibayong paghihirap sa mga
              taga- Cavinti ang pananakop ng mga Kastila.
              Pinilit ang mga mamayang gumawa ng mga
              bahay para sa kanila. Maging ang paggawa
              ng simbahan hanggang ngayon ay nakatayo
              na sinasabing binayaran lamang ng maliit
              na halaga. Bukod pa dito ay binuwisan ng
              malaki ang mga taga Cavinti. Kung hindi
              naman sila naka sapat sa kanilang buwis
              ay kinukuhanan pa ang kanilang mga ani.
              Ito ang iba pang pang-aapi at kalabisan ang
              nag lagay sa mga taong bayan sa kahabag-habag na kalagayan. Ang pagnanasang labanan ang pang-aapi at ibalik ang kalayaan ng bayan ang nagbunsod sa marami na makilahok at umanib sa kilusang himagsikan sa lalawigan.
            </p>
          </div>
        </motion.div>{ /* motion div items */}

        <motion.div variants={itemVariants}>
          <div className="clear-both">
            <Subtitle subtitle="Panahon ng Amerikano" />
          </div>
          <p>
            Sa pagdating ng mga Amerikano ay muling nanumbalik ang katahimikan at kaayusan sa Cavinti. Maraming paaralang pambayan ang naitayo at pinamahalaan ng mga sundalong Amerikano. Hinirang pa ngang magturo dito ang ilang taga Cavinti. Namahagi rin ng libreng mga gamit pampaaralan sa mga bata ang mga Amerikano.
          </p>
          <p>
            Kasabay nito, nagpatayo din ng isang tulay patawid ng Ilog Cavinti ang mga Amerikano upang mapadali ang mga mamamayan sa pagpunta sa mga karatig bayan. Ang pagkakaroon naman ng mga sasakyan ang nagbigay ng paunang sulong sa pagunlad ng Cavinti. Simula rin noon ay Malaki ang iniunlad ng mga mamamayan ng Cavinti patunay dito ang pagdami ng malalaki at magagandang bahay dito nap ag mamay ari ng mga taga Cavinti.
          </p>
          <p>
            Makalipas pa ang ilang panahon ng pamamahala ng mga Amerikano, ang mga Pilipino ay binigyan ng pagkakataong mamahala sa bayan. Si Huwes Cirilo Villamin ay nahalal na Kagawad ng Sangguniang Panlalawigan ng Laguna noong 1928-1931. Siya ang unang taga Cavinti na humawak ng ganitong tungkuling panlalawigan.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div>
            <Subtitle subtitle="Panahon ng Hapon" />
          </div>

          <p>
            Noong Mayo 25 1942, ilang panahon pagkadaong ng mga Hapones sa Pilipinas, nilusob ang Japanese Imperial Army sa Barangay Duhat. Madali nilang nasakop ang Poblacion dahil karamihan sa mga tao dito ay nagsilikas sa ligtas na lugar. Hiniling ng mga hapones na bumalik ang mga tao sa bayan sa loob ng labing limang araw, ngunit tinanggihan ito sa huli. Dahil dito ay sinunog ng mga banyaga ang bayan ng Cavinti noong Hunyo 1942. Pagkatapos nito ay itinatag nila ang pamahalaang militar ng mga Hapon sa bayan at itinalaga si G. Juan Oflaria bilang punong bayan. Ipinatupad nila ang pag paparami ng pagkain lalo na ng mga gulay. Nagbuo rin sila ng samahan sa buong paligid. Pinagbantay pa ang kalalakihan tuwing gabi. Sila rin ang namahala sa pamimigay ng “ration cards” para sa mga pangunahing pangangailangan tulad ng asukal at bigas. Sa kabila ng pagtupad ng mga mamamayan sa mga kautusan ng mga Hapones, lumala ang kahirapan ng mga Pilipino bunga ng ibat ibang pagpaparusa ng nanakop. Nagbunga ito ng pagkakatatag ng kilusang Guerillasa lalawigan. Si Col. Juan Villamin ang nanguna sa grupong ito na binubuo ng mga kawal na taga Cavinti at maging mula sa ibang bayan at Philippine Armed Forces, at ang mga nakatakas sa tinatawag na “Death March”.
          </p>

          <p>
            Marami ding matatapang na sibilyan ang nagdesisyong iwanan ang kanilang pamilya upang tumulong sa kilusang Guerilla. Kabilang sa kanila sina Col. Zosimo Ressureccion, Maj. Lisando Vakente, Marciano Villamin, Nicolas Lubuguin, at Capt. Melecio Duma.
          </p>

          <p>Nagkaroon ng katuparan ang mga natitirang pag asa ng mga Pilipino tungo sa kalayaan ng sa bansa ang mga amerikano noong Octobre 20, 1944. Dahil dito ay nanghina ang pwersang Hapones at tuluyan ng nilisan ang bayan ng Cavinti. Simula noon nagsibalik na muli sa bayan ang mga tao.</p>

          <p>Simula rin noon ang unti unti muling nabuo ang pamahalaan ng Bayan ng Cavinti gayon din ang muling pag unlad ng pamumuhay ng mga tao dito. Kabilang sa mga naghimagsik laban sa mananakop sina Andres Blanco, Juan Gallardo, Ladislao Linay, Mariano Olivares, Esteban Batas, Pedro Oblena, Juan Liwagan, Rafael Lubuguin, Nicasio Morales, at Francisco Morales.</p>
        </motion.div>

      </motion.div> { /* motion div container */}

    </div>
  )
}

export default KasaysayanPinagmulan