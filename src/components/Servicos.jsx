import projects from "./Projects"
import { motion } from "framer-motion";

export function Servicos() {
    return (
        <section id="projects" className="py-24 px-6 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl font-bold mb-7">
                    Serviços
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-zinc-900 border border-white/10 rounded-4xl overflow-hidden hover:border-white/20 hover:translate-y-1 transition"
                        >
                            <div className="h-80 overflow-hidden">
                                <div
                                    src={project.url}
                                    className="bg-white w-full h-full object-cover hover:scale-110 transition duration-700"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 mt-3 leading-7">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Servicos
