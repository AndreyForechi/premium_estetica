import {
    Phone,
} from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 px-6 mb-20">
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h2 className="text-5xl font-bold">
                        Seu carro merece o <span className="text-yellow-400">melhor</span>.
                    </h2>

                    <p className="text-zinc-400 text-lg">
                        Solicite um orçamento e descubra como podemos
                        transformar a estética do seu veículo.
                    </p>
                </div>

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
    )
}

export default Contact