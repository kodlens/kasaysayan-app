import { motion, type Variants } from "framer-motion";
import { Landmark } from "lucide-react";
import { Link } from "react-router"; // fixed import

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HomePage() {
  return (
    <div className="relative min-h-dvh bg-gradient-to-br from-[#f1e6c8] via-[#e6d7b1] to-[#d9c79a] text-stone-900 overflow-hidden">

      {/* Main Content with Nostalgic Border */}
      <div className="relative z-10 max-w-5xl mx-auto mt-10 px-4 sm:px-6 py-10 sm:py-14 border-8 border-[#d2b48c] rounded-2xl shadow-2xl bg-[#fffaf0]">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="flex justify-center mb-4 text-stone-700">
            <Landmark className="h-15 w-15" />
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide text-primary font-serif">
            KULTURANG CAVINTIIN
          </h1>
          <div className="text-stone-700 italic max-w-2xl mx-auto mt-2 text-center">
            Ang Kultura ng Cavinti: Gabay sa Pagkilala, Ugat ng Pagkakakilanlan, at Pamana sa Susunod na Henerasyon.
          </div>
        </motion.header>

        {/* Menu Buttons */}
        <motion.div
          className="flex flex-col gap-4 items-start sm:items-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              path: "/kasaysayan-pinagmulan",
              text: "KASAYSAYAN AT PINAGMULAN",
              icon: "/images/menus/writing-paper.png",
            },
            {
              path: "/wika-panitikan",
              text: "WIKA AT PANITIKAN",
              icon: "/images/menus/book.png",
            },
            {
              path: "/sining-tradisyon",
              text: "SINING AT TRADISYON",
              icon: "/images/menus/paint.png",
            },
            {
              path: "",
              text: "PAMUMUHAY AT PANINIWALA",
              icon: "/images/menus/lady.png",
            },
            {
              path: "",
              text: "PAGKAIN AT LUTUIN",
              icon: "/images/menus/plate.png",
            },
            {
              path: "",
              text: "PAGDIRIWANG AT PISTA",
              icon: "/images/menus/curtain.png",
            },
          ].map(({ path, text, icon }, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-center gap-4 w-full sm:w-auto"
            >
              <img src={icon} width={50} alt={text} />
              {path ? (
                <Link to={path} className="btn-navigator">
                  {text}
                </Link>
              ) : (
                <button className="btn-navigator">{text}</button>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="relative h-[180px] ">
        <div className="absolute leaves pointer-events-none"></div>
        <div className="absolute bottom-0 book pointer-events-none z-0"></div>
        <div className="absolute right-0 book-pile pointer-events-none"></div>
      </div>

      {/* Decorative elements (optional) */}
      
    </div>
  );
}``
