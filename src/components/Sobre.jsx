

import { motion } from "framer-motion";

import {
    Sparkles,
    ShieldCheck,
    Award,

} from "lucide-react";

export function Sobre() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-7">
                    Sobre <span className="text-yellow-400">nós</span>
                </h2>

                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="overflow-hidden rounded-4xl"
                    >
                        <div

                            className="bg-white text-center flex flex-col hover:scale-103 justify-center text-black w-full h-137.5 object-cover transition duration-700"


                        />


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="border border-white/10 rounded-4xl p-10 bg-zinc-950"
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            Paixão por carros e excelência em acabamento
                        </h3>

                        <p className="text-zinc-400 text-md leading-8">
                            Apaixonado por carros e especialistas
                            em estética automotiva premium. Nosso objetivo
                            é entregar acabamento impecável, brilho intenso
                            e proteção para manter seu veículo sempre em alto nível.
                        </p>

                        <p className="text-zinc-400 text-lg leading-8 mt-3">
                            Trabalhamos com técnicas modernas de polimento,
                            vitrificação, higienização interna e detalhamento
                            para proporcionar um resultado realmente diferenciado.
                        </p>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 mt-5">
                            <div className="bg-black border border-white/10 rounded-3xl p-5 hover:border-white/20 transition">
                                <ShieldCheck className="text-zinc-400 mb-3" />
                                <h4 className="font-semibold">
                                    Proteção
                                </h4>
                            </div>

                            <div className="bg-black border border-white/10 rounded-3xl p-5 hover:border-white/20 transition">
                                <Sparkles className="text-zinc-400 mb-3" />
                                <h4 className="font-semibold">
                                    Acabamento Premium
                                </h4>
                            </div>

                            <div className="bg-black border border-white/10 rounded-3xl p-5 hover:border-white/20 transition">
                                <Award className="text-zinc-400 mb-3" />
                                <h4 className="font-semibold">
                                    Qualidade
                                </h4>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 mt-10 border-t border-white/10 pt-8 text-center sm:text-left justify-center sm:justify-start">
                            <div className="flex flex-col">
                                <h2 className="text-4xl font-bold">
                                    +100
                                </h2>
                                <p className="text-zinc-500">
                                    Clientes satisfeitos
                                </p>
                            </div>

                            <div>
                                <h2 className="text-4xl font-bold">
                                    +1
                                </h2>
                                <p className="text-zinc-500">
                                    Ano de experiência
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Sobre