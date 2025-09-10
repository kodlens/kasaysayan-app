import { motion, type Variants } from "framer-motion";
import { Landmark } from "lucide-react";

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


export default function HomePage() {
  return (
    <>

      {/* <div className="relative min-h-dvh bg-[linear-gradient(135deg,#f1e6c8_0%,#e6d7b1_50%,#d9c79a_100%)] text-stone-900"> */}
      <div className="relative min-h-dvh text-stone-900 bg-[linear-gradient(135deg,#f1e6c8_0%,#e6d7b1_50%,#d9c79a_100%)] ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14 z-10">
          <motion.header
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 sm:mb-16 text-center">
            <div className="flex justify-center mb-3 text-stone-700">
              <Landmark className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-sans font-bold text-primary sm:text-5xl tracking-wide mb-3">
              KULTURANG CAVINTIIN
            </h1>
            <p className="text-stone-700 italic max-w-2xl mx-auto">
              Ang Kultura ng Cavinti: Gabay sa Pagkilala, Ugat ng Pagkakakilanlan, at Pamana sa Susunod na Henerasyon.
            </p>
          </motion.header>

          <div className="z-[100px]">
            <motion.div
              className="flex flex-col gap-4 items-center"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={itemVariants} className="flex gap-4">
                <div>
                  <img src="/images/menus/writing-paper.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  KASAYSAYAN AT PINAGMULAN
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div>
                  <img src="/images/menus/book.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  WIKA AT PANITIKAN
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div>
                  <img src="/images/menus/paint.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  SINING AT TRADISYON
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div>
                  <img src="/images/menus/lady.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  PAMUMUHAY AT PANINIWALA
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div>
                  <img src="/images/menus/plate.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  PAGKAIN AT LUTUIN
                </button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4">
                <div className="">
                  <img src="/images/menus/curtain.png" width={50} alt="paper-writing" />
                </div>
                <button className="btn-navigator">
                  PAGDIRIWANG AT PISTA
                </button>
              </motion.div>

            </motion.div>
          </div>

          {/* <Footer /> */}

        </div>

        {/* <div>
          <img src="/images/leaves-left.png" width={200} alt="" />
        </div> */}

        <div className="absolute bottom-0 z-20 leaves"></div>

        <div className="book"></div>

        <div className="absolute bottom-0 right-0 book-pile"></div>

      </div>

    </>
  );
}
