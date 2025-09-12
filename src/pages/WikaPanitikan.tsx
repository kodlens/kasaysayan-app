import Title from "@/components/Title";
import { motion, type Variants } from "framer-motion";

const WikaPanitikan = () => {

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
    <div className="min-h-dvh max-w-5xl mx-4 md:mx-auto mt-10 border-8 border-[#d2b48c] rounded-xl shadow-2xl 
      bg-[#fffaf0] p-6">

      <motion.div>
        <Title title="Alamat ng Cavinti" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show">

        <motion.div variants={itemVariants}>
          <img src="/images/wika-panitikan.png" className="md:float-left md:mr-2 mx-auto" width={300} alt="" />
          <div className="mb-4">
            <p className="">
              Ang pangalan ng bayan ng Cavinti ay nagmula, di-umano, sa pangalan ng ilog na kung tawagin ay “kabit-sa-binta”. Noon daw ay may tribu ng mga Aetas na dito ay naninirahan, at mayroon silang ritwal sa pagpapakasal. Obligadong habulin ng lalaki ang babaeng mapapangasawa bago ipalagay na sila’y kasal na. May isang ikakasal na babae na sa ilog napagawi. At habang patalon-talon siya sa mga bato ay nahawakan siya ng lalaking ikakasal sa kanya sa kanyang binti. Nagsigawan ang mga manonood sa pampang ng ilog “kabit-sa-binti!” bilang hudyat na ang kasal ay naidaos na. Di nagtagal ay tinawag na “Kabit-sa-binti” ang ilog. Di naglaon ang bayan na nakasasakop sa ilog ay tinawag na <strong>Cavinti</strong>.
            </p>
          </div>
        </motion.div>{ /* motion div items */}

      </motion.div>

    </div>
  )
}

export default WikaPanitikan