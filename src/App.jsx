import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Sparkles,
  Award,
  Star
} from "lucide-react";

import projects from "./components/Projects";
import reviews from "./components/Reviews";

export function App() {


  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* Background blur */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-125 h-125 bg-white/5 blur-[140px]" />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home"><img
            src="/logo.jpg"
            alt="Logo"
            className="w-14 rounded-full"
          /></a>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#about" className="hover:text-white transition">
              Sobre Mim
            </a>
            <a href="#projects" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#contact" className="hover:text-white transition">
              Orçamento
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center" id="home">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Seu carro merece um
            <span className="text-yellow-400"> novo nível </span>
            de acabamento.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto leading-8"
          >
            Especialistas em estética automotiva premium,
            vitrificação, polimento e detalhamento para
            valorizar cada detalhe do seu veículo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-white w-50 justify-center text-black px-2 py-4 rounded-full font-semibold hover:scale-105 transition flex items-center gap-2"
            >
              Serviços
              <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="border w-50 border-white/20 px-2 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
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

      {/* SERVIÇOS */}
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

      {/* ANTES E DEPOIS */}
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

      {/* AVALIAÇÕES */}
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

      {/* CONTATO */}
      <section id="contact" className="py-20 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
          <h2 className="text-5xl font-bold">
            Seu carro merece o <span className="text-yellow-400">melhor</span>.
          </h2>

          <p className="text-zinc-400 text-lg">
            Solicite um orçamento e descubra como podemos
            transformar a estética do seu veículo.
          </p>

          <a
            href=""
            target="_blank"
            className="mx-auto w-fit flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-semibold hover:scale-105 transition"
          >
            Chamar no WhatsApp
            <Phone />
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;