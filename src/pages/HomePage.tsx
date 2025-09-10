import { motion } from "framer-motion";
import { Landmark, BookOpenText, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import VintagePaper from "@/components/custom/VIntagePaper";
import Footer from "@/components/custom/Footer";

// -------------------------------------------------------------
// Homepage / Index for Kasaysayan — Nostalgic theme
// -------------------------------------------------------------

const features = [
  {
    icon: BookOpenText,
    title: "Kasaysayan",
    desc: "Basahin ang mga piling sanaysay at dokumento tungkol sa kasaysayan ng Cavinti.",
    href: "/kasaysayan",
  },
  {
    icon: Landmark,
    title: "Simbahan",
    desc: "Alamin ang pinagmulan at mahahalagang kaganapan sa Parokya ng Pagbabagong Anyo.",
    href: "/simbahan",
  }
  
  // {
  //   icon: History,
  //   title: "Talatuntunan",
  //   desc: "Siyasatin ang mga pangyayari sa pamamagitan ng timeline at tala.",
  //   href: "/timeline",
  // },
];


export default function HomePage() {
  return (
    // <div className="relative min-h-dvh bg-[linear-gradient(135deg,#f1e6c8_0%,#e6d7b1_50%,#d9c79a_100%)] text-stone-900">
    <div className="relative min-h-dvh bg-white text-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
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

        <div className="">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4">
              <div>
                <img src="/images/menus/writing-paper.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                KASAYSAYAN AT PINAGMULAN
              </button>
            </div>

            <div className="flex gap-4">
              <div>
                <img src="/images/menus/book.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                WIKA AT PANITIKAN
              </button>
            </div>

            <div className="flex gap-4">
              <div>
                <img src="/images/menus/paint.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                SINING AT TRADISYON
              </button>
            </div>

            <div className="flex gap-4">
              <div>
                <img src="/images/menus/lady.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                PAMUMUHAY AT PANINIWALA
              </button>
            </div>

            <div className="flex gap-4">
              <div>
                <img src="/images/menus/plate.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                PAGKAIN AT LUTUIN
              </button>
            </div>

            <div className="flex gap-4">
              <div className="">
                <img src="/images/menus/curtain.png" width={50} alt="paper-writing" />
              </div>
              <button className="btn-navigator">
                PAGDIRIWANG AT PISTA
              </button>
            </div>
          </div>
        </div>

        {/* <VintagePaper>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card className="bg-amber-50/60 border-stone-400/40 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-amber-200/70 shadow">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-lg font-serif text-stone-800">
                        {f.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1 justify-between">
                    <p className="text-stone-700 mb-4 leading-relaxed text-sm">
                      {f.desc}
                    </p>
                    <Button variant="outline" asChild className="self-start border-stone-400/60 bg-amber-100 hover:bg-amber-200">
                      <a href={f.href} className="flex items-center gap-2">
                        Tingnan <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </VintagePaper> */}

        {/* <Footer /> */}
        
      </div>

      <div className="absolute bottom-0" style={{
        backgroundImage: 'url(/images/leaves-left.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'center',
        height: '600px',
        width: '400px',
      }}>
        
      </div>
    </div>
  );
}
