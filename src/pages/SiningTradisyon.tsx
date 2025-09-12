import Title from "@/components/Title";
import { motion, type Variants } from "framer-motion";

const SiningTradisyon = () => {

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
        <div className="min-h-dvh max-w-5xl mx-4 md:mx-auto mt-10">

            <motion.div>
                <Title title="Ang Sining ng Cavinti: Pamanang Yari sa Kamay at Kultura" />
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show">

                

                <motion.div className="mb-4" variants={itemVariants}>
                    <p> Sa bayan ng Cavinti, Laguna, ang sining ay hindi lamang nakikita sa mga obra o likhang-biswal, kundi sa mismong pamumuhay ng mga tao. Isa sa pinakamahalagang mukha ng sining sa Cavinti ay ang paggawa ng sambalilo, isang malapad na sumbrerong yari sa anahaw o buntal. Ang maingat na paghahabi at pagbubuo ng sambalilo ay hindi basta gawaing kabuhayan; ito ay sining na nagpapakita ng tiyaga, malikhaing pag-iisip, at pagmamahal sa sariling kultura.</p>

                </motion.div>{ /* motion div items */}

                <motion.div variants={itemVariants}>
                    <div className="flex flex-col gap-2 mx-2 md:flex-row">
                        <img src="/images/sining-tradisyon-1.png" className="mx-auto" width={300} alt="" />
                        <img src="/images/sining-tradisyon-2.png" className="mx-auto" height={300} alt="" />
                    </div>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    <p>
                        Itinuturing na simbolo ng kanilang pagkakakilanlan ang sambalilo, kaya naman taon-taon ay ipinagdiriwang ang Sambalilo Festival. Sa makukulay na parada, malikhaing street dancing, at iba’t ibang paligsahan, muling nabubuhay ang sining ng bayan. Dito, hindi lamang ipinapakita ang kahusayan sa paggawa ng mga likhang-kamay, kundi pati na rin ang sining sa musika, sayaw, at pagdidisenyo ng kasuotan. Ang mga mamamayan, mula bata hanggang matanda, ay nagiging mga alagad ng sining sa kanilang sariling paraan.
                    </p>
                </motion.div>{ /* motion div items */}

                <motion.div className="mb-4" variants={itemVariants}>
                    <p>
                        Hindi rin maikakaila na ang sining ng Cavinti ay malapit sa kalikasan. Ang mga tanawin tulad ng Cavinti Falls at Lake Caliraya ay nagiging inspirasyon ng mga pintor, manlilikha, at manunulat. Ang mga awit at sayaw na isinasagawa sa mga pista at pagtitipon ay patunay na ang sining ay likas na bahagi ng kanilang pamumuhay. Sa mga gawaing ito, ang sining ay nagiging tulay upang mapanatili ang diwa ng pagkakaisa at pagdamay sa komunidad.
                    </p>
                    <div className="flex flex-col gap-2 md:flex-row justify-center items-center">
                        <div className="flex flex-col">
                            <img src="/images/sining-tradisyon-3.png" className="" alt="picture 3" />
                            <div className="text-center italic">
                                (Magdapio Falls/Cavinti Falls)
                            </div>
                        </div>

                        <div>
                            <img src="/images/sining-tradisyon-4.png" className="" alt="picture 4" />
                            <div className="text-center italic">
                                (Caliraya Lake)
                            </div>
                        </div>
                    </div>
                    
                </motion.div>{ /* motion div items */}


                <motion.div className="mb-4" variants={itemVariants}>
                    <div className="flex flex-col md:float-right md:ml-2">
                        <img src="/images/sining-tradisyon-5.png" className="" alt="picture 3" />
                    </div>
                    <p>
                        Ang sining ng Cavinti ay hindi lamang nakikita sa mga produkto o pagdiriwang, kundi sa bawat hibla ng tradisyon at kultura. Ang sambalilo ay nananatiling sagisag ng kanilang malikhaing pamana, at ito ay nagpapaalala na ang tunay na sining ay yaong nakaugat sa puso ng tao at nagbibigay-buhay sa kanyang bayan.
                    </p>
                </motion.div>{ /* motion div items */}

                <div className="clear-both"></div>

                <div className="mb-4"></div>

                <motion.div>
                    <Title title="Ang Tradisyon ng Cavinti: Puso ng Bayan at Pamayanan" />
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                    
                    <p>
                        Ang bayan ng Cavinti, Laguna ay mayaman hindi lamang sa tanawin at likas na yaman, kundi pati na rin sa mga tradisyong patuloy na bumubuhay sa kanilang pagkakakilanlan. Isa sa mga pinakatampok na tradisyon dito ay ang <strong>Sambalilo Festival</strong> , isang pagdiriwang na nagbibigay-pugay sa malapad na sumbrerong yari sa anahaw at buntal. Sa pistang ito, makikita ang masiglang parada, sayawan, at iba’t ibang paligsahan na hindi lamang nagdiriwang ng produkto kundi nagpapakita rin ng pagkakaisa at kasiyahan ng buong bayan.
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 justify-center flex-wrap">
                        <img src="/images/sining-tradisyon-6.png" className="w-[400px]" alt="picture 6" />
                        <img src="/images/sining-tradisyon-7.png" className="" alt="picture 7" />
                        <img src="/images/sining-tradisyon-8.png" className="w-[400px]" alt="picture 8" />
                    </div>

                </motion.div>{ /* motion div items */}


                <motion.div className="mb-4" variants={itemVariants}>
                     <p>
                        Kilala rin ang Cavinti bilang tahanan ng pinakamalaking sambalilo sa buong mundo. Ito ay gawa sa hinabing dahon ng pandan. Naitala ito sa Guinness Book of World Records noong Agosto 2016.
                    </p> 
                    <div className="flex gap-2 md:flex-row flex-col">
                        <img src="/images/sining-tradisyon-9.png" width={400} alt="picture 9" />
                        <img src="/images/sining-tradisyon-10.png" width={400} alt="picture 10" />
                    </div>
                   
                </motion.div>{ /* motion div items */}


            </motion.div>

        </div>
    )
}

export default SiningTradisyon