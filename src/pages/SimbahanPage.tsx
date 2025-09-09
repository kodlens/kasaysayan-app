import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Clock, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

// -------------------------------------------------------------
// Kasaysayan ng Simbahan ng Cavinti — Nostalgic, single-file app
// -------------------------------------------------------------
// This file is a drop-in React component you can paste into a Vite project
// (or preview right here). It uses Tailwind + shadcn/ui + framer-motion.
//
// Suggested real-world setup (after previewing):
//   npm create vite@latest kasaysayan -- --template react-ts
//   cd kasaysayan && npm i && npm i -D tailwindcss postcss autoprefixer
//   npx tailwindcss init -p
//   (configure Tailwind content paths)
//   npm i framer-motion lucide-react class-variance-authority tailwind-merge
//   (Add shadcn/ui or copy minimal components used here)
// -------------------------------------------------------------

// Raw content (Tagalog) provided by the user — kept verbatim.
const header = {
  title: "Kasaysayan ng Simbahan ng Cavinti",
  subtitle1: "Transfiguration of Our Lord Parish",
  subtitle2: "Parokya ng Pagbabagong Anyo",
};

const introParagraphs = [
  `Nagtayo ng barong barong at wala pang simbahan dito sa Cavinti noong araw ng Huwebes ika-7 ng Marso taong 1606. Sinimulan ang pagtatayo ng barong barong sa pangangasiwang tatlong magkakapatid na mga taga Lumban, Laguna (sila ang magkakapatid na nakasumpong sa imahen ng San Salvador del Mundo). Sila ay sina Antonio, Gabriel, at Dionisio Puhawan at doon itinayo sa gawing itaas nang timugang bahagi ng kanilang binubukid.`,
  `Ang sinasabing barong barong na ito ay kalapit ng isang malaking binayoyo at doon nga napakita ang Kagalang-galang na himalang isang anyong bata na nang mapatunayan ng tatlong magkakapatid ay yaon ang imahen ng Poong San Salvador na nagging Patron ng baying ito.`,
  `Kaya ang kauna unahang nagging Tiniente Absuluta dito sa Cavinti ay si Antonio Puhawan na siyang panganay sa tatlong magkakapatid. Lumipas ang panahon at nagging ermita ng ang nasabing barong-barong.`,
  `Nang taong 1616, patuloy na ang bisita sa itinatayong ermita. At ang tumatayong pari dito na siyang nagmimisa, nagkakasal, nagbibinyag at nagbabasbas ng inililibing ay si Padre Fernando Moraga at si Padre Juan de Consuegra na guardian sa bayan ng Lumban, at ang humahalili ay sina Padre Pedro delos Santos, Padre Blas dela Madre de Dios, Padre Bartolome de Palencia, at si Padre Alonzo de Ampuduya na pawing mga guardian ng bayan ng Lumban.`,
  `Nang magkaroon ng kapitular ay noong 1619 at ang nadestinong pari dito ay si Padre Alonzo de Ampuduya, ang kauna-unahang guardian dito sa Cavinti na siyang naghanay sa Capillar Mayor sa mga tao dito sa Cavinti, na ito ay bayan na kahit  visita o ermita pa lamang. Ang mga nagsisimba dito ay may mga dalang busog at pana.`,
];

// Timeline events extracted from the content. Years with descriptions remain Tagalog.
const timeline: { year: string; title?: string; body: string }[] = [
  {
    year: "1684",
    body:
      "Don Francisco Aragon. Sa panahong ito sinimulan ang paghuhulog ng semento sa ginagawang simbahang bato dito sa Cavinti noong Ika-5 ng Septyembre, si Padre Vicente Birgir ang siyang nagbendita ng Ara at ang nasa ilalim ay si Padre Francisco de San Jose. Ang mga sumambot ng Ara ng ihulog sa ilalim ay si Vicente Principe at ang Kapitan Don Francisco Aragon kasama ang mga Dondones ng Bayan.",
  },
  {
    year: "1822",
    body:
      "Don Juan Jose de San Agustin. Sa panahong ito sinimulan ang pag sesemento ng latore ng simbahan ng Cavinti.",
  },
  {
    year: "1831",
    body:
      "Alkalde Don Juan Parma Valente. Sa panahong ito natapos ang latore at kortada ng simbahan dito sa Cavinti.",
  },
  {
    year: "1834",
    body:
      "Alkalde Don Jose de San Juan alyas Tilis. Sa panahong ito pinunuan ng kombento ng simbahan.",
  },
  {
    year: "1859",
    body:
      "Alkalde Don Jacinto Flores alyas Labong. Sa panahong ito kumanta ng primerong misa si Padre Ignacio Antonio de Villanueva na taga Cavinti.",
  },
  {
    year: "1863",
    body:
      "Alkalde Don Basilio Peras. Sa panahong ito pinalakihan ang koro ng simbahan, at ang nagpagawa ay si Padre Santiago.",
  },
  {
    year: "1882",
    body:
      "Alkalde Don Estanislao Bugtong alyas Bulo. Sa panahong ito lumindol ng malakas at matagal… Malaki ang nasira hangga’t hindi nakukumpuni ang latore at nabububungan ng yero, pati kasiraan ng simbahan… Sa panahong ito rin bumili ng dalawang kampana at nabubungan ng yero ang kapitol ng kumbento.",
  },
  {
    year: "1894",
    body:
      "Alkalde Don Juan Bleza. Sa panahong ito binubungan muli ng yero ang kapitol ng kumbento ngunit hindi natapos.",
  },
  {
    year: "1953",
    body:
      "Sa panahon ni Fr. Domingo, nagpaayos siya ng altar sa tulong nina G. Florencio Valente at Felix Mirasol.",
  },
  {
    year: "1960",
    body:
      "Si Fr. C. Yatco ang napadestino dito at marami siyang pagbabago at pag sasaayos sa simbahan kagaya ng kisame, palitada sa harap, communion rail.",
  },
  {
    year: "1966",
    body:
      "Ipinagawa ni Fr. Astudillo ang canopy sa harap ng simbahan.",
  },
  {
    year: "1968",
    body:
      "Si Fr. Dawis ang nagpa-umpisa ng paghahanay ng baldosa na ipinagpatuloy ni Fr. Solis sa tulong nina Gng. Amy De Leon at G. Eustaquio V. Mesina noong 1970.",
  },
  {
    year: "1970",
    body:
      "Pagpapatuloy ng baldosa (Solis) at pakikiisa ng mga taga-Cavinti.",
  },
  {
    year: "—",
    body:
      "Nagpaayos ng bubong si Fr. Madrinan sa tulong ng mga taga Maynila nang masira ito ng bagyo. Ang altar na pinalitan ng bagong tayo ngayon ay noong panahon ni Fr. Abad ipinagawa; kasabay nito ang pagbububong ng kumbento at pagsasaayos ng latore.",
  },
  {
    year: "1981–1982",
    body:
      "Sa panahon ni Fr. Rey Agramon, muling sumigla ang pagsasaayos. Sa paglalakbay ng mag-asawang Tuding at Agring Mirasol sa Estados Unidos (1981), naghatid sila ng tulong. Mula 1982, ang mga Hermanos at Hermanas ay nagpakita ng ibayong kasipagan sa pagtulong sa simbahan.",
  },
  {
    year: "—",
    body:
      "Naitatag ang Magdapio Club International (US/Canada) at ang San Salvador Del Mundo Foundation, Inc. na naatasang magpatuloy ng pamamahala sa mga susunod na proyekto; natapos ang pinakatampok na pagawain bilang handog sa Patron na si San Salvador.",
  },
];

const closingParagraphs = [
  `Sa ikalawang bahagi ng ika-20 siglo, nagkaroon ng katulong ang mga pari sa pagpaayos ng simbahan — ang mga Hermanos at Hermanas at mga namumuno sa samahang pansimbahan.`,
  `Dito naman sa atin, natatag ang San Salvador Del Mundo Foundation, Inc. na ngayon ay naatasang magpatuloy ng pamamahala sa mga darating pang mga proyekto. At ngayon nga ay natapos na ang pinakatampok nilang pagawain bilang handog ng mga taga Cavinti sa pinakamamahal nilang Patron na si San Salvador.`,
];

function VintagePaper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl shadow-xl border border-stone-400/50 p-6 sm:p-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50 via-amber-100 to-amber-200 text-stone-800">
      <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(0,0,0,0.035), rgba(0,0,0,0.035) 1px, transparent 1px, transparent 4px)",
        mixBlendMode: "multiply",
        opacity: 0.2,
      }} />
      {children}
    </div>
  );
}

function SectionHeading({ icon: Icon, title, subtitle }: { icon: any; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-400 bg-amber-200/70 shadow">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h2 className="text-2xl sm:text-3xl font-serif tracking-wide">{title}</h2>
        {subtitle && <p className="text-sm text-stone-600">{subtitle}</p>}
      </div>
    </div>
  );
}

function TimelineItem({ year, body }: { year: string; body: string }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative pl-6 border-l-2 border-stone-400/40 pb-6">
      <span className="absolute -left-[15px] top-0 h-4 w-4 rounded-full bg-stone-600 shadow" />
      <div className="flex items-center gap-2 mb-1">
        <Badge variant="outline" className="font-serif tracking-wider text-stone-700 border-stone-500/50 bg-amber-100">{year}</Badge>
      </div>
      <p className="leading-relaxed text-stone-800/90 whitespace-pre-line">{body}</p>
    </motion.li>
  );
}

export default function SimbahanPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!query.trim()) return timeline;
    const q = query.toLowerCase();
    return timeline.filter(t => (t.year + " " + t.body).toLowerCase().includes(q));
  }, [query]);

  const navigate = useNavigate()

  return (
    <div className="min-h-dvh bg-[linear-gradient(135deg,#f1e6c8_0%,#e6d7b1_50%,#d9c79a_100%)] text-stone-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.header
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-stone-700 mb-2">
            <Landmark className="h-5 w-5" />
            <span className="uppercase tracking-[0.25em] text-xs">SIMBAHAN • CAVINTI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif tracking-wide">{header.title}</h1>
          <p className="text-stone-700 mt-2 italic">{header.subtitle1} — {header.subtitle2}</p>
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
          <SectionHeading icon={BookOpen} title="Pinagmulan at Unang Kabanata" subtitle="1606–1619" />
          <div className="space-y-4 mb-8 text-[1.02rem] leading-7">
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <SectionHeading icon={Clock} title="Talatuntunan ng Mahahalagang Pangyayari" subtitle="1684–Ika-20 Siglo" />

          <Card className="bg-amber-50/60 border-stone-400/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-base text-stone-700">Mabilisang Hanap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Hal. 1882, baldosa, canopy, altar…"
                  className="bg-white/80 border-stone-400/60"
                />
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <ScrollArea className="h-[48vh] pr-4">
              <ol className="space-y-4">
                {filtered.map((item, idx) => (
                  <TimelineItem key={idx} year={item.year} body={item.body} />
                ))}
              </ol>
            </ScrollArea>
          </div>

          <div className="mt-10 space-y-4 text-[1.02rem] leading-7">
            {closingParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </VintagePaper>

        <footer className="mt-10 text-center text-xs text-stone-600">
          <p>
            Ginawa para sa proyekto <span className="font-serif">Kasaysayan</span> — isang nostalgic na
            presentasyon ng lokal na pamana.
          </p>
        </footer>
      </div>
    </div>
  );
}
