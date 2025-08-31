import { Button } from "@/components/ui/button";
import { CountdownBanner } from "@/components/CountdownBanner";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { FAQAccordion } from "@/components/FAQAccordion";

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

export default function Index() {
  return (
    <div className="min-h-screen bg-navy-dark overflow-x-hidden">
      {/* Countdown Banner */}
      <CountdownBanner />
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[845px] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-0 overflow-hidden mt-[1px]"
        style={{
          backgroundImage:
            "url('https://cdn.builder.io/api/v1/image/assets%2F95a0d65e6e664f9083220b6878574efe%2F46aa32114dfd4533ab80340fed8c1223')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          padding: "12px 48px 0",
        }}
      >
        {/* Background Image - Editable */}
        <img
          src="https://i.postimg.cc/fL89zRnZ/backgroud-novo.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Overlay */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "#000C14", opacity: 0.6 }}
        />
        <div className="w-full max-w-[1060px] relative">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a656acf31fd915df443f9b6bbf0097aa9addd5c0?width=434"
            alt="Logo"
            className="w-[150px] sm:w-[180px] md:w-[217px] h-auto mb-6 sm:mb-8 lg:mb-11"
          />

          {/* Hero Content Container */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 mt-4 sm:mt-6 lg:mt-[37px]">
            {/* Hero Content */}
            <div className="w-full lg:w-1/2 max-w-full lg:max-w-[589px]">
              <h1 className="font-raleway text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-extrabold leading-tight sm:leading-[1.2] lg:leading-[48px] mb-4 sm:mb-6 text-center lg:text-left">
                <span className="text-white">Destrave </span>
                <span className="text-gold">a sua gestão condominial</span>
              </h1>

              <p className="font-raleway text-sm sm:text-base lg:text-lg xl:text-xl font-semibold leading-relaxed text-white mb-6 sm:mb-8 text-center lg:text-left">
                Ou continue refém de conflitos que você não controla.
              </p>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <p className="font-raleway text-sm sm:text-base text-white leading-relaxed">
                  <p>
                    Você trabalha duro no condomínio, se prepara, cumpre o
                    dever.
                  </p>
                  <span className="font-bold">
                    <p>Mas mesmo assim, sente-se travado: </p>
                    <p>assembleias tensas, ruídos,</p>
                  </span>
                  decisões que não avançam.
                </p>

                <p className="font-raleway text-sm sm:text-base text-white leading-relaxed">
                  <p>Esqueça mais uma lei decorada ou nova norma.</p>
                  <span className="font-bold">
                    <p> Você já tem capacidade. </p>
                    <p>
                      Falta método de comunicação e liderança para tirar o peso
                      dos ombros.
                    </p>
                  </span>
                </p>

                <div className="text-xs sm:text-sm font-raleway text-white leading-relaxed space-y-1">
                  <p>
                    <span style={{ marginTop: "-2px" }}>
                      <p>
                        Faça como síndicos que descobriram o que estava por trás
                        dos conflitos e da estagnação.{" "}
                      </p>
                    </span>
                    <span className="font-bold" style={{ marginTop: "1px" }}>
                      <p>
                        Participe da mentoria que mostra por que gestões
                        competentes travam — e como destravar de forma
                        definitiva.
                      </p>
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 justify-center lg:justify-start">
                <CTAButton className="w-full sm:w-auto">
                  Quero destravar minha gestão agora
                </CTAButton>
              </div>
            </div>

            {/* Expert Image Space */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg overflow-hidden"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Section */}
      <section className="bg-navy-dark px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1060px] mx-auto bg-cream rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] shadow-[0_20px_60px_0_rgba(0,0,0,0.1)] min-h-[400px] sm:min-h-[500px] lg:min-h-[687px] flex items-center relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 gap-6 lg:gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F95a0d65e6e664f9083220b6878574efe%2F9e37b944894b493c8f5dbce3fb2a9440"
                alt="Cifrão com correntes"
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[560px] h-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-4 sm:mb-6">
                <span className="text-navy-dark">
                  Não é sobre acumular mais regulamentos. É sobre
                </span>
                <span className="text-gold"> parar de se sabotar</span>
                <span className="text-navy-dark">
                  <p>na hora de conduzir as pessoas.</p>
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base font-roboto leading-relaxed text-gray-800">
                <p>
                  <span>
                    <p>
                      Se eu entregasse um regulamento impecável e um orçamento
                      folgado hoje, seus problemas estariam resolvidos?{" "}
                    </p>
                  </span>
                  <span>
                    <p>
                      Talvez você diga que sim. Mas a verdade é que não estão.
                    </p>
                  </span>
                  <span className="font-bold">
                    <p>Porque o problema nunca foi só a regra escrita.</p>
                  </span>
                </p>

                <p>
                  <span style={{ marginLeft: "-3px" }}>
                    É o que acontece logo
                  </span>
                  <span className="font-bold" style={{ marginLeft: "5px" }}>
                    depois
                  </span>
                  <span> da "boa" assembleia:</span>
                </p>

                <ul className="space-y-2 pl-4 sm:pl-6 text-left">
                  <li>• Um grupo de WhatsApp vira incêndio.</li>
                  <li>• Uma obra estoura orçamento e confiança.</li>
                  <li>• Um conselheiro trava decisões por resistência.</li>
                  <li>• Um morador eleva o tom e desorganiza a sala.</li>
                  <li>• Um boato distorce a prestação de contas.</li>
                </ul>

                <p>
                  <span>Sempre tem "alguma coisa". Isso se chama: </span>
                  <span className="font-bold" style={{ marginLeft: "1px" }}>
                    Ciclo de Pré-Crise.
                  </span>
                  <span style={{ marginLeft: "2px" }}>
                    <br />É o sintoma mais cruel da
                  </span>
                  <span className="font-bold">
                    &nbsp;falta de método de comunicação e liderança — e da
                    ausência de Autoliderança.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="bg-navy-dark px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1521px] mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-6 sm:mb-8">
              <span className="text-white">
                Eu também já enfrentei assembleias hostis.{" "}
              </span>
              <span className="text-gold">
                &nbsp;
                <br />
                Hoje conduzo gestões estáveis, com decisões encaminhadas e
                reeleições sustentadas.
              </span>
            </h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base font-raleway leading-relaxed text-white">
              <p>
                A virada veio quando{" "}
                <span className="font-bold">
                  &nbsp;sistematizei princípios claros para conduzir pessoas sob
                  pressão.
                </span>
              </p>

              <p>
                E, mais importante: quando transformei isso em um método
                aplicável no dia a dia.
              </p>

              <p>
                Aconteceu comigo. Aconteceu com síndicos que aplicaram o método.
              </p>

              <p className="font-bold">Pode acontecer com você.</p>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center lg:justify-start">
              <CTAButton className="w-full sm:w-auto">
                Quero liderança respeitada
              </CTAButton>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b5c85a28a3b3c627a71266d1fd1d841aab697dbf?width=1214"
              alt="Pessoa em posição de sucesso"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="bg-cream px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-16 rounded-t-[50px] sm:rounded-t-[75px] lg:rounded-t-[100px]">
        <div className="max-w-[1060px] mx-auto text-center">
          <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-6 sm:mb-8 text-navy-dark">
            A Mentoria Gestão Blindada é o momento
            <br className="hidden sm:block" />
            <span className="text-gold">
              em que você encara a verdade que
              <br className="hidden sm:block" />
              evita há anos.
            </span>
          </h2>

          <p className="text-sm sm:text-base font-raleway text-navy-dark mb-6 sm:mb-8">
            Você vai entender:
          </p>

          <div className="text-sm sm:text-base font-raleway leading-relaxed text-navy-dark mb-8 sm:mb-12 space-y-2 text-left sm:text-center">
            <p>
              ✅ Por que sua{" "}
              <span className="font-bold">
                comunicação gera ruído e desgaste
              </span>
            </p>
            <p>
              <span style={{ marginLeft: "-4px" }}>✅ Por que você</span>
              <span className="font-bold" style={{ marginLeft: "4px" }}>
                evita confronto e perde autoridade
              </span>
            </p>
            <p>
              ✅ Por que, mesmo sendo capaz,{" "}
              <span className="font-bold">
                não sustenta decisões em assembleias
              </span>
            </p>
          </div>

          <h3 className="text-lg sm:text-xl font-raleway font-black text-navy-dark mb-4 sm:mb-6">
            Os 3 sintomas de uma gestão travada:
          </h3>

          <div className="text-sm sm:text-base font-raleway leading-relaxed text-navy-dark mb-8 sm:mb-12 space-y-2 text-left sm:text-center">
            <p>
              <span className="font-bold">Resultado Travado:</span> você tenta,
              se esforça, mas a deliberação não sai.
            </p>
            <p>
              <span className="font-bold">Resultado Atrasado:</span> você sabe
              que já era para estar mais longe.
            </p>
            <p>
              <span className="font-bold">Resultado Diminuído:</span> quando
              avança, é em doses frustrantes.
            </p>
          </div>

          <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-6 sm:mb-8 text-navy-dark">
            Vamos identificar e destravar juntos o
            <br className="hidden sm:block" />
            que est�� impedindo seu avanço.
          </h2>

          <p className="text-sm sm:text-base font-raleway text-navy-dark mb-6 sm:mb-8">
            Você vai ganhar:
          </p>

          <div className="text-sm sm:text-base font-raleway leading-relaxed text-navy-dark mb-8 sm:mb-12 space-y-2 text-left sm:text-center">
            <p>
              ✅{" "}
              <span className="font-bold">
                Diagnóstico de Comunicação e Liderança (personalizado)
              </span>
            </p>
            <p>✅ Ferramentas para reduzir conflitos e ruídos</p>
            <p>
              ✅{" "}
              <span className="font-bold">
                Análise dos padrões que sabotam assembleias
              </span>
            </p>
            <p>✅ Plano de ação para resultados no seu condomínio</p>
          </div>

          <div className="flex justify-center">
            <CTAButton className="w-full sm:w-auto">
              Desbloquear minha autoridade
            </CTAButton>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Método HERA Section */}
      <section
        id="metodo-hera"
        className="bg-cream px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-[1060px] mx-auto">
          {/* Title */}
          <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-6 sm:mb-8 text-navy-dark text-center">
            Método HERA — princípios que blindam sua gestão
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg font-raleway text-navy-dark text-center mb-12 sm:mb-16 leading-relaxed max-w-4xl mx-auto">
            <span className="font-bold">H</span>onestidade estratégica •{" "}
            <span className="font-bold">E</span>mpatia aplicada •{" "}
            <span className="font-bold">R</span>esponsabilidade (civil e
            coletiva) • <span className="font-bold">A</span>utoliderança
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Card H - Honestidade estratégica */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="text-sm font-bold text-gold mb-3">
                H — Honestidade estratégica
              </div>
              <h3 className="font-raleway text-lg font-bold text-navy-dark mb-4 leading-tight">
                Confiança que sustenta decisões
              </h3>
              <ul className="space-y-2 text-sm text-navy-dark mb-4">
                <li>• Critérios claros e comunicados antes da votação.</li>
                <li>• Prestação de contas entendível, sem ruído.</li>
              </ul>
              <p className="text-xs text-gray-600 italic">
                Roteiros de fala e checklists para transparência.
              </p>
            </div>

            {/* Card E - Empatia aplicada */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="text-sm font-bold text-gold mb-3">
                E — Empatia aplicada
              </div>
              <h3 className="font-raleway text-lg font-bold text-navy-dark mb-4 leading-tight">
                Comunicação que reduz conflito
              </h3>
              <ul className="space-y-2 text-sm text-navy-dark mb-4">
                <li>• Leitura de sala e ajuste de tom.</li>
                <li>• Scripts para objeções sem confronto.</li>
              </ul>
              <p className="text-xs text-gray-600 italic">
                Validação sem submissão: firmeza + respeito.
              </p>
            </div>

            {/* Card R - Responsabilidade */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="text-sm font-bold text-gold mb-3">
                R — Responsabilidade (civil e coletiva)
              </div>
              <h3 className="font-raleway text-lg font-bold text-navy-dark mb-4 leading-tight">
                Decisão segura e executável
              </h3>
              <ul className="space-y-2 text-sm text-navy-dark mb-4">
                <li>• Riscos mapeados e ritos claros de deliberação.</li>
                <li>• Documentos e registros que sustentam a gestão.</li>
              </ul>
              <p className="text-xs text-gray-600 italic">
                Base jurídica sem juridiquês: prática e objetiva.
              </p>
            </div>

            {/* Card A - Autoliderança */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="text-sm font-bold text-gold mb-3">
                A — Autoliderança
              </div>
              <h3 className="font-raleway text-lg font-bold text-navy-dark mb-4 leading-tight">
                Presença que impõe respeito
              </h3>
              <ul className="space-y-2 text-sm text-navy-dark mb-4">
                <li>• Postura, voz e linguagem corporal sob pressão.</li>
                <li>• Rituais pré-assembleia para entrar no controle.</li>
              </ul>
              <p className="text-xs text-gray-600 italic">
                Você conduz a sala — não é conduzido por ela.
              </p>
            </div>
          </div>

          {/* Como aplicamos na prática */}
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-100 mb-12 sm:mb-16">
            <h3 className="font-raleway text-lg sm:text-xl font-bold text-navy-dark mb-6 text-center">
              Como aplicamos na prática
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-lg font-bold text-gold mb-2">1</div>
                <p className="text-sm text-navy-dark">
                  <strong>Diagnóstico HERA</strong> — comunicação, riscos e
                  presença.
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gold mb-2">2</div>
                <p className="text-sm text-navy-dark">
                  <strong>Scripts por princípio</strong> — falas e checklists
                  prontos.
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gold mb-2">3</div>
                <p className="text-sm text-navy-dark">
                  <strong>Simulações</strong> — assembleias com feedback.
                </p>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gold mb-2">4</div>
                <p className="text-sm text-navy-dark">
                  <strong>Implementação</strong> — ajustes no seu condomínio.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="#formulario">
              <CTAButton className="w-full sm:w-auto">
                Quero o método E.R.A. aplicado
              </CTAButton>
            </a>
            <p className="text-xs text-gray-600 mt-3">
              WhatsApp abre com seus dados do formulário.
            </p>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section
        className="bg-cream px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[160px] py-8 sm:py-12 lg:py-16 rounded-b-[50px] sm:rounded-b-[75px] lg:rounded-b-[100px]"
        style={{
          background: `url('https://api.builder.io/api/v1/image/assets/TEMP/d206b146ec0057dce48262f1fa3a153fae02d95b?width=3042') lightgray center center / cover no-repeat, #FDF8ED`,
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Hilária Gama */}
          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-24">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-gradient-to-br from-navy-dark to-navy-medium rounded-lg flex items-end justify-start p-4 sm:p-6 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F2d68a42150b8470e821b8051a53aa984%2F3553d263fa8d47dda161956d86dc1346"
                    alt="Hilária Gama"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div
                    className="text-3xl sm:text-4xl lg:text-6xl font-bold relative z-10"
                    style={{ color: "rgba(192, 166, 54, 1)" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-4 sm:mb-6 text-navy-dark">
                Hilária Gama:
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base font-raleway leading-relaxed text-navy-dark">
                <p>
                  <span className="font-bold">Hilária Gama</span> é advogada há
                  30+ anos e síndica há 12, com{" "}
                  <span className="font-bold">
                    reeleições sustentadas por comunicação clara e princípios
                    sólidos.
                  </span>
                </p>

                <p>
                  A virada veio quando consolidou os{" "}
                  <span className="font-bold">
                    Princípios E.R.A.: Empatia, Responsabilidade e
                    Autoliderança.
                  </span>
                </p>

                <p>
                  Com esse enfoque,{" "}
                  <span className="font-bold">
                    reescreveu rotinas de assembleias e ajudou síndicos a
                    liderar com clareza e respeito.
                  </span>
                </p>

                <p>
                  Decidiu transformar a experiência em mentoria prática,
                  mostrando{" "}
                  <span className="font-bold">
                    o que realmente falta para decisões avançarem.
                  </span>
                </p>

                <p>
                  Hoje, é reconhecida por{" "}
                  <span className="font-bold">
                    métodos objetivos e roteiros aplicáveis — scripts,
                    checklists e feedback em casos reais.
                  </span>
                </p>

                <p>
                  Sua força é{" "}
                  <span className="font-bold">
                    transformar tensão em decisão, reduzindo ruídos e blindando
                    a imagem do síndico.
                  </span>
                </p>

                <blockquote className="font-bold italic text-sm sm:text-base border-l-4 border-gold pl-4 my-4"></blockquote>

                <p>
                  A <span className="font-bold">Mentoria Gestão Blindada</span>{" "}
                  não é mais um curso: é um divisor de águas para quem lidera
                  condomínios.
                </p>
              </div>
            </div>
          </div>

          {/* Victor Pessoa */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg flex items-end justify-end p-4 sm:p-6 relative overflow-hidden">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F95a0d65e6e664f9083220b6878574efe%2F05e3b27db6754b2e8092d0917b4bbedd"
                    alt="Victor Pessoa"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold text-right relative z-10">
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-4 sm:mb-6 text-navy-dark">
                Victor Pessoa:
              </h2>

              <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm lg:text-base font-raleway leading-relaxed text-navy-dark">
                <p>
                  <span style={{ marginLeft: "-2px" }}>Atua com</span>
                  <span className="font-bold">
                    &nbsp;comunicação, liderança e autoconhecimento, ajudando
                    líderes a falar com presença e influência.
                  </span>
                </p>

                <p>
                  Na mentoria, conduz a aula ao vivo{" "}
                  <span className="font-bold">
                    "Comunique para Liderar", com técnicas práticas para
                    assembleias.
                  </span>
                </p>

                <p>
                  Foco em{" "}
                  <span className="font-bold">
                    &nbsp;presença, linguagem que reduz confronto e estrutura de
                    fala para aprovar propostas.
                  </span>
                </p>

                <p>
                  Você sai com{" "}
                  <span className="font-bold">
                    &nbsp;passos claros para aplicar no próximo encontro do
                    condomínio.
                  </span>
                </p>

                <p></p>

                <p>
                  <span>
                    Você não precisa continuar patinando em conflitos.
                  </span>
                  <span className="font-bold" style={{ marginTop: "1px" }}>
                    <br />
                    Esta é a sua virada.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="depoimentos"
        className="bg-cream px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[230px] py-8 sm:py-12 lg:py-16"
      >
        <div className="max-w-[1060px] mx-auto">
          {/* Container with rounded corners and shadow */}
          <div className="bg-cream rounded-[25px] sm:rounded-[35px] lg:rounded-[50px] shadow-[0_20px_60px_0_rgba(0,0,0,0.1)] px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
            {/* Title and Subtitle */}
            <div className="text-center mb-8 sm:mb-12 lg:mb-16">
              <h2 className="font-raleway text-xl sm:text-2xl lg:text-[32px] font-extrabold leading-tight sm:leading-relaxed lg:leading-[38.4px] mb-4 sm:mb-6 text-navy-dark">
                O que síndicos dizem após aplicar o método
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-raleway text-navy-dark leading-relaxed max-w-3xl mx-auto">
                Depoimentos reais de quem saiu do conflito e passou a conduzir
                com autoridade.
              </p>
            </div>

            {/* Carousel */}
            <div className="mb-6 sm:mb-8">
              <TestimonialsCarousel />
            </div>

            {/* Caption */}
            <p className="text-xs sm:text-sm font-raleway text-navy-dark/70 text-center mb-8 sm:mb-10">
              Depoimentos auditáveis: prints e vídeos originais armazenados.
            </p>

            {/* CTA */}
            <div className="flex justify-center">
              <a href="#formulario">
                <CTAButton className="w-full sm:w-auto">
                  Quero conduzir assembleias sem conflito
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-dark px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="font-raleway text-xs sm:text-sm lg:text-base text-white text-center sm:text-left">
            <span className="font-bold">
              Copyright © 2025 | Mentoria Gestão Blindada
            </span>
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> — </span>Todos os Direitos
            Reservados
          </p>

          <a
            href="#top"
            className="font-raleway text-xs sm:text-sm lg:text-base text-gold hover:text-gold/80 transition-colors whitespace-nowrap"
          >
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
