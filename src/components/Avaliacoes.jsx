import { motion } from "framer-motion";
import {
    Star
} from "lucide-react";
import reviews from "./Reviews";

export function Reviews() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-5xl font-bold">
                        O que nossos <span className="text-yellow-400">clientes</span> dizem
                    </h2>

                    <p className="text-zinc-400 mt-4 text-lg">
                        Resultados reais e clientes satisfeitos com nosso trabalho.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="bg-zinc-900 border border-white/10 rounded-4xl p-8 hover:border-yellow-400/30 hover:-translate-y-1 transition duration-300"
                        >
                            {/* estrelas */}
                            <div className="flex gap-1 mb-5">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                            </div>

                            <p className="text-zinc-400 leading-8 italic">
                                "{review.text}"
                            </p>

                            <div className="mt-6 border-t border-white/10 pt-5">
                                <h4 className="font-semibold text-lg">
                                    {review.name}
                                </h4>

                                <p className="text-zinc-500 text-sm">
                                    Cliente satisfeito
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Reviews