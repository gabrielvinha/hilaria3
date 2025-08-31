import { useState } from "react";
import { Button } from "@/components/ui/button";

const CTAButton = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <Button
    className={`bg-gradient-to-r from-green-start to-green-end hover:from-green-start/90 hover:to-green-end/90 text-white font-raleway font-bold text-sm sm:text-base leading-4 tracking-wide uppercase px-6 sm:px-12 md:px-16 lg:px-24 py-4 sm:py-5 lg:py-6 rounded-full shadow-[0_-4px_56px_0_rgba(37,211,102,0.48)] transition-all duration-300 h-auto w-full sm:w-auto ${className}`}
  >
    {children}
  </Button>
);

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Funciona se minha assembleia for muito hostil?",
    answer:
      "Sim. Você recebe scripts de fala e estratégias de condução para salas difíceis, além de simulações com feedback.",
  },
  {
    question: "Preciso ser advogado para aplicar?",
    answer:
      "Não. O método é prático e sem juridiquês. Você aprende o essencial jurídico para decidir com segurança.",
  },
  {
    question: "Quanto tempo até ver resultado?",
    answer:
      "Muitos síndicos relatam melhora já na próxima assembleia, ao aplicar scripts e ritos de comunicação.",
  },
  {
    question: "E se eu não tiver tempo?",
    answer:
      "As aulas têm foco em aplicação direta e vêm com roteiros prontos. Você implementa nos momentos que já existem na sua rotina.",
  },
  {
    question: "Posso levar o subsíndico ou um conselheiro?",
    answer:
      "Sim. Alinhamento de liderança acelera resultados. Informe no atendimento para orientarmos o melhor formato.",
  },
  {
    question: "É online? Tem encontros ao vivo?",
    answer:
      "Sim. Os encontros são ao vivo e focados em casos reais, com espaço para perguntas.",
  },
  {
    question: "E se eu faltar a uma sessão?",
    answer:
      "Você recebe direcionamento para recuperar e não perder o fio. O importante é aplicar os roteiros.",
  },
  {
    question: "Vale para condomínios pequenos?",
    answer:
      "Sim. Os princípios E.R.A. escalam. Pequenos veem impacto rápido por proximidade dos moradores.",
  },
  {
    question: "Tenho medo de confronto. Isso me trava.",
    answer:
      "Trabalhamos postura e linguagem para firmeza sem agressividade. Você aprende a reduzir ruído e manter a sala sob controle.",
  },
  {
    question: "E se não funcionar para mim?",
    answer:
      "Você tem Garantia Blindada de 30 dias. Aplique os passos iniciais; se não sentir evolução, devolvemos 100%.",
  },
];

export const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-cream px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-16">
      <div className="max-w-[1060px] mx-auto">
        {/* Title and Opening */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-4 sm:mb-6 text-navy-dark">
            Perguntas que costumam travar a decisão
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-raleway text-navy-dark leading-relaxed max-w-3xl mx-auto">
            Respostas diretas para você avançar com segurança.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4 mb-8 sm:mb-12 lg:mb-16">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 sm:px-8 py-4 sm:py-6 text-left focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-200 hover:bg-gray-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-raleway text-sm sm:text-base lg:text-lg font-bold text-navy-dark pr-4 leading-relaxed">
                    {item.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-5 h-5 text-navy-dark transition-transform duration-200 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                <div className="px-6 sm:px-8 pb-4 sm:pb-6">
                  <p className="text-sm sm:text-base font-raleway text-navy-dark leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <a href="#formulario">
            <CTAButton className="w-full sm:w-auto">
              Quero o método E.R.A. aplicado
            </CTAButton>
          </a>
        </div>
      </div>
    </section>
  );
};
