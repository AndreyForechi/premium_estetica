import { motion } from "framer-motion";

export function Antes_Depois() {
    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">
                    <h2 className="text-5xl font-bold">
                        Antes & <span className="text-yellow-400">Depois</span>
                    </h2>

                    <p className="text-zinc-400 mt-4 text-lg">
                        Resultados que mostram a transformação e o cuidado
                        em cada detalhe do veículo.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">

                    {/* CARD 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-900 border border-white/10 rounded-4xl p-5 hover:border-white/20 transition"
                    >
                        <div className="grid grid-cols-2 gap-4">

                            {/* Antes */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="bg-white h-72 rounded-3xl flex items-center justify-center text-black font-bold text-lg">
                                    ANTES
                                </div>

                                <p className="text-center text-zinc-400 mt-3">
                                    Antes do polimento
                                </p>
                            </div>

                            {/* Depois */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="bg-white h-72 rounded-3xl flex items-center justify-center text-black font-bold text-lg">
                                    DEPOIS
                                </div>

                                <p className="text-center text-zinc-400 mt-3">
                                    Após o detalhamento
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-zinc-900 border border-white/10 rounded-4xl p-5 hover:border-white/20 transition"
                    >
                        <div className="grid grid-cols-2 gap-4">

                            {/* Antes */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="bg-white h-72 rounded-3xl flex items-center justify-center text-black font-bold text-lg">
                                    ANTES
                                </div>

                                <p className="text-center text-zinc-400 mt-3">
                                    Pintura desgastada
                                </p>
                            </div>

                            {/* Depois */}
                            <div className="col-span-2 sm:col-span-1">
                                <div className="bg-white h-72 rounded-3xl flex items-center justify-center text-black font-bold text-lg">
                                    DEPOIS
                                </div>

                                <p className="text-center text-zinc-400 mt-3">
                                    Brilho restaurado
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default Antes_Depois