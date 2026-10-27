import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Building2, Check, Compass, Hammer, Layout, LayoutTemplate, MessageCircle,
  MonitorSmartphone, Rocket, ShieldCheck, Smartphone, Sparkles, Store, User, Wand2, Info,
  ListChecks, Globe, MousePointerClick, Handshake, Target, Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { ContactForm } from "@/components/site/ContactForm";
import { MESSAGES, NAV_LINKS, PROFILE_PHOTO, PROJECTS, SOCIAL_LINKS, whatsappLink } from "@/config/site";
import heroMockup from "@/assets/hero-mockup.jpg";

const TITLE = "Vinícius Silva | Criação de Sites para Empresas";
const DESC =
  "Desenvolvimento de sites modernos e responsivos para empresas, comércios e profissionais que desejam fortalecer sua presença digital.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function WaButton({ message, children, variant = "hero" as const, className = "" }: { message: string; children: React.ReactNode; variant?: "hero" | "glass" | "whatsapp"; className?: string }) {
  return (
    <Button asChild variant={variant} size="xl" className={className}>
      <a href={whatsappLink(message)} {...ext}>{children}</a>
    </Button>
  );
}

function SectionHead({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-lg text-muted-foreground">{text}</p>}
    </div>
  );
}

const services = [
  { icon: Building2, title: "Site institucional", text: "Para empresas que precisam apresentar sua história, serviços, diferenciais, localização e informações de contato." },
  { icon: LayoutTemplate, title: "Landing page", text: "Uma página focada em divulgar um serviço, campanha ou oferta e incentivar o visitante a entrar em contato." },
  { icon: Store, title: "Site para comércio e negócios locais", text: "Uma presença digital organizada para lojas, restaurantes, barbearias, salões e outros estabelecimentos." },
  { icon: Wand2, title: "Reformulação de site", text: "Modernização de sites existentes, com melhorias de visual, organização do conteúdo, responsividade e experiência de navegação." },
];

const whyBlocks = [
  { icon: ShieldCheck, title: "Mais credibilidade", text: "Uma apresentação profissional ajuda as pessoas a conhecerem melhor sua empresa." },
  { icon: ListChecks, title: "Informações organizadas", text: "Seus serviços, diferenciais, horários e contatos ficam reunidos em um só lugar." },
  { icon: MousePointerClick, title: "Contato mais fácil", text: "Botões estratégicos podem direcionar o visitante ao WhatsApp ou a outros canais de atendimento." },
  { icon: Globe, title: "Presença digital própria", text: "Um site oferece um espaço controlado pela empresa, complementar às redes sociais." },
];

const steps = [
  { icon: MessageCircle, title: "Conversa inicial", text: "Entendo seu negócio, seus objetivos, seus serviços e o tipo de cliente que você deseja alcançar." },
  { icon: Compass, title: "Planejamento", text: "Definimos a estrutura do site, as informações necessárias, o estilo visual e as funcionalidades adequadas." },
  { icon: Hammer, title: "Desenvolvimento", text: "Construo a página, organizo o conteúdo e adapto a experiência para celulares e computadores." },
  { icon: Rocket, title: "Revisão e publicação", text: "Após sua revisão e aprovação, realizamos os ajustes combinados e organizamos a publicação conforme o escopo contratado." },
];

const differentials = [
  "Layout adaptado à identidade do negócio.",
  "Navegação simples e intuitiva.",
  "Design responsivo.",
  "Botões de contato estratégicos.",
  "Organização clara das informações.",
  "Comunicação direta durante o desenvolvimento.",
  "Estrutura preparada para futuras melhorias, conforme o projeto.",
];

const packages = [
  { name: "Essencial", text: "Para negócios que precisam de uma apresentação digital objetiva.", items: ["Página de apresentação", "Informações principais", "Serviços", "Botão de WhatsApp", "Layout responsivo"] },
  { name: "Profissional", text: "Para empresas que precisam apresentar melhor seus serviços e diferenciais.", items: ["Mais seções de conteúdo", "Galeria ou portfólio", "Perguntas frequentes", "Chamadas para ação", "Organização visual personalizada"], featured: true },
  { name: "Personalizado", text: "Para projetos com necessidades específicas.", items: ["Estrutura sob medida", "Páginas adicionais", "Funcionalidades definidas em conjunto", "Integrações avaliadas conforme viabilidade"] },
];

const faqs = [
  ["Minha empresa ainda não tem um site. Você pode me ajudar?", "Sim. Podemos começar entendendo seu negócio, as informações que precisam aparecer e o tipo de site mais adequado."],
  ["O site funciona no celular?", "Os projetos são planejados para se adaptar a diferentes tamanhos de tela, incluindo celulares, tablets e computadores."],
  ["Quanto custa criar um site?", "O valor depende da estrutura, do conteúdo, das funcionalidades e das necessidades do projeto. Entre em contato para solicitar uma avaliação e um orçamento."],
  ["Quanto tempo leva para ficar pronto?", "O prazo é definido de acordo com a complexidade do site, a disponibilidade dos materiais e as etapas de aprovação."],
  ["Preciso fornecer textos e fotos?", "Podemos definir isso na conversa inicial. O que será necessário e o que estará incluído no serviço será combinado antes do início do projeto."],
  ["O domínio e a hospedagem estão incluídos?", "Isso depende da proposta contratada. Os custos, responsabilidades e serviços necessários serão explicados no orçamento."],
  ["Posso solicitar alterações?", "Sim. O escopo, as etapas de revisão e as condições para alterações serão definidos na proposta do projeto."],
  ["Como faço para começar?", "Clique em um dos botões de contato e me conte um pouco sobre sua empresa e o site que gostaria de criar."],
];

function Index() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        {/* HERO */}
        <section id="inicio" className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
          <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
            <div className="fade-up">
              <p className="eyebrow">Desenvolvimento de sites para empresas</p>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">
                Seu negócio merece um site <span className="text-gradient">profissional.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Crio sites modernos, responsivos e personalizados para apresentar sua empresa na internet, fortalecer sua credibilidade e facilitar o contato com seus clientes.
              </p>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Do planejamento à publicação, você terá uma apresentação digital pensada para o seu negócio e para as pessoas que deseja alcançar.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WaButton message={MESSAGES.geral}>Quero um site para minha empresa <ArrowRight /></WaButton>
                <Button asChild variant="glass" size="xl"><a href="#projetos">Conhecer meus projetos</a></Button>
              </div>
              <ul className="mt-10 grid gap-3 text-sm sm:grid-cols-3">
                {[
                  [Layout, "Design adaptado ao seu negócio"],
                  [MonitorSmartphone, "Experiência em celulares e computadores"],
                  [MessageCircle, "Contato facilitado com seus clientes"],
                ].map(([Icon, t]) => {
                  const I = Icon as typeof Layout;
                  return (
                    <li key={t as string} className="flex items-start gap-2.5 text-muted-foreground">
                      <I className="mt-0.5 size-5 shrink-0 text-cyan" /> <span>{t as string}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <figure className="fade-up relative [animation-delay:150ms]">
              <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
                <img src={heroMockup} width={1536} height={1152} alt="Demonstração de site para restaurante exibido em notebook e celular" className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Info className="size-3.5" /> Demonstração conceitual
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Serviços" title="Soluções digitais para o seu negócio crescer." text="Cada empresa tem uma necessidade diferente. Por isso, desenvolvo soluções que valorizam sua marca, apresentam seus serviços e facilitam a comunicação com seus clientes." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <article key={s.title} className="card-elevated flex flex-col p-7">
                  <div className="bg-brand mb-6 flex size-12 items-center justify-center rounded-xl"><s.icon className="size-6 text-primary-foreground" /></div>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                  <a href={whatsappLink(`Olá, Vinícius! Tenho interesse no serviço de ${s.title.toLowerCase()} e gostaria de saber mais.`)} {...ext} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan hover:gap-2.5 transition-all">
                    Tenho interesse <ArrowRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Projetos" title="Veja o que podemos construir para sua empresa." text="Conheça um projeto já publicado no ar e demonstrações de como uma presença digital profissional pode ser apresentada para diferentes tipos de negócio." />
            <div className="grid gap-6 md:grid-cols-2">
              {PROJECTS.map((p) => (
                <article key={p.title} className="card-elevated group overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img src={p.image} width={1280} height={896} loading="lazy" alt={p.isDemo ? `Demonstração conceitual de site para ${p.title.toLowerCase()}` : `Site criado para ${p.title}`} className="h-auto w-full transition-transform duration-700 group-hover:scale-105" />
                    {p.isDemo && (
                      <span className="absolute left-4 top-4 rounded-full border border-border bg-background/85 px-3 py-1 text-xs font-semibold backdrop-blur">Demonstração conceitual</span>
                    )}
                  </div>
                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-wider text-cyan">{p.category}</p>
                    <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground">{p.description}</p>
                    {p.technologies?.length ? <p className="mt-3 text-xs text-muted-foreground">{p.technologies.join(" · ")}</p> : null}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {p.liveUrl && <Button asChild variant="glass" size="lg"><a href={p.liveUrl} {...ext}>{p.isDemo ? "Ver demonstração" : "Ver site no ar"}</a></Button>}
                      <Button asChild variant="hero" size="lg"><a href={whatsappLink(p.whatsappMessage)} {...ext}>Quero um site parecido</a></Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Por que ter um site?" title="Sua empresa pode ir além das redes sociais." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whyBlocks.map((b) => (
                <div key={b.title} className="card-elevated p-7">
                  <b.icon className="size-7 text-cyan" />
                  <h3 className="mt-5 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
                </div>
              ))}
            </div>
            <blockquote className="mx-auto mt-14 max-w-3xl text-center text-xl font-semibold leading-relaxed sm:text-2xl">
              “Seu Instagram pode apresentar sua empresa. <span className="text-gradient">Seu site pode organizar toda a experiência</span> de quem quer conhecer e contratar seus serviços.”
            </blockquote>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Como funciona" title="Do primeiro contato ao seu site publicado." />
            <ol className="relative grid gap-6 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="card-elevated p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-gradient text-4xl font-extrabold">0{i + 1}</span>
                    <s.icon className="size-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 flex flex-col items-center gap-5 text-center">
              <p className="text-2xl font-bold">Vamos conversar sobre o seu projeto?</p>
              <WaButton message={MESSAGES.geral} variant="whatsapp"><MessageCircle /> Começar pelo WhatsApp</WaButton>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-border bg-surface">
              {PROFILE_PHOTO ? (
                <img src={PROFILE_PHOTO} alt="Foto de Vinícius Silva" className="size-full object-cover" loading="lazy" />
              ) : (
                <div className="bg-glow flex size-full flex-col items-center justify-center gap-3 text-muted-foreground">
                  <User className="size-16" />
                  <span className="text-sm">Espaço reservado para foto</span>
                </div>
              )}
            </div>
            <div>
              <p className="eyebrow">Sobre mim</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Prazer, sou Vinícius Silva.</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>Sou estudante de Engenharia de Software e profissional de tecnologia. Minha experiência com suporte de TI, sistemas corporativos e infraestrutura me ensinou a compreender problemas, organizar informações e buscar soluções práticas.</p>
                <p>Agora, direciono meu trabalho para o desenvolvimento de sites e experiências web, com foco em apresentar empresas de forma profissional e facilitar a comunicação com seus clientes.</p>
                <p>Meu objetivo é oferecer um atendimento próximo, entender a necessidade de cada negócio e desenvolver uma solução digital alinhada ao que o cliente realmente precisa.</p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {[[Handshake, "Atendimento próximo e transparente"], [Target, "Soluções pensadas para cada negócio"], [Award, "Compromisso com organização e qualidade"]].map(([Icon, t]) => {
                  const I = Icon as typeof Handshake;
                  return (
                    <li key={t as string} className="rounded-2xl border border-border bg-card p-4 text-sm font-medium">
                      <I className="mb-2 size-5 text-cyan" />{t as string}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-5xl px-5">
            <SectionHead eyebrow="Diferenciais" title="Um site feito para representar sua empresa." />
            <ul className="grid gap-4 sm:grid-cols-2">
              {differentials.map((d) => (
                <li key={d} className="flex items-start gap-3 rounded-2xl border border-border bg-background/60 p-5">
                  <span className="bg-brand mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full"><Check className="size-3.5 text-primary-foreground" /></span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-sm text-muted-foreground">Hospedagem, domínio, manutenção, criação de conteúdo e integrações são definidos conforme cada orçamento.</p>
          </div>
        </section>

        {/* PACOTES */}
        <section id="pacotes" className="py-24">
          <div className="mx-auto max-w-7xl px-5">
            <SectionHead eyebrow="Pacotes e orçamento" title="Escolha o ponto de partida ideal." text="Os pacotes são referências para começarmos a conversa — sem valores fixos." />
            <div className="grid gap-6 lg:grid-cols-3">
              {packages.map((p) => (
                <article key={p.name} className={`card-elevated flex flex-col p-8 ${p.featured ? "border-cyan/40 shadow-elegant" : ""}`}>
                  {p.featured && <span className="mb-4 inline-flex w-fit items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-cyan"><Sparkles className="size-3" /> Mais completo</span>}
                  <h3 className="text-2xl font-bold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Possibilidades</p>
                  <ul className="mt-3 flex-1 space-y-2.5 text-sm">
                    {p.items.map((i) => <li key={i} className="flex gap-2"><Check className="size-4 shrink-0 text-cyan" />{i}</li>)}
                  </ul>
                  <WaButton message={`Olá, Vinícius! Gostaria de solicitar um orçamento para o pacote ${p.name}.`} variant={p.featured ? "hero" : "glass"} className="mt-8 w-full">Solicitar orçamento</WaButton>
                </article>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-muted-foreground">Os recursos, prazos e valores são definidos após entender as necessidades de cada projeto.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHead eyebrow="Perguntas frequentes" title="Tire suas dúvidas." />
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(([q, a], i) => (
                <AccordionItem key={q} value={`f${i}`} className="rounded-2xl border border-border bg-background/60 px-5">
                  <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="relative overflow-hidden py-24">
          <div aria-hidden className="bg-glow pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Contato</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Sua empresa está pronta para ter seu próprio site?</h2>
              <p className="mt-5 text-lg text-muted-foreground">Me conte um pouco sobre seu negócio. Vamos conversar sobre a melhor forma de apresentá-lo na internet.</p>
              <WaButton message={MESSAGES.geral} variant="whatsapp" className="mt-8"><MessageCircle /> Conversar pelo WhatsApp</WaButton>
              <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"><Smartphone className="size-4" /> (85) 98146-3662</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold">Vinícius Silva</p>
            <p className="text-sm text-muted-foreground">Desenvolvimento Web</p>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Sites profissionais para empresas que querem fortalecer sua presença digital.</p>
          </div>
          <nav aria-label="Rodapé">
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {NAV_LINKS.map((l) => <li key={l.id}><a href={`#${l.id}`} className="hover:text-foreground">{l.label}</a></li>)}
            </ul>
          </nav>
          <div className="md:text-right">
            <WaButton message={MESSAGES.geral} variant="whatsapp"><MessageCircle /> WhatsApp</WaButton>
            {SOCIAL_LINKS.length > 0 && (
              <ul className="mt-4 flex gap-4 text-sm text-muted-foreground md:justify-end">
                {SOCIAL_LINKS.map((s) => <li key={s.href}><a href={s.href} {...ext} className="hover:text-foreground">{s.label}</a></li>)}
              </ul>
            )}
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Vinícius Silva. Todos os direitos reservados.</p>
      </footer>

      <a href={whatsappLink(MESSAGES.geral)} {...ext} aria-label="Conversar pelo WhatsApp" className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-transform hover:scale-110">
        <MessageCircle className="size-7" />
      </a>
    </>
  );
}
