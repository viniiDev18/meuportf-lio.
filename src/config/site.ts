// Central business configuration. Edit here to update the whole site.
import restaurante from "@/assets/demo-restaurante.jpg";
import barbearia from "@/assets/demo-barbearia.jpg";
import servicos from "@/assets/demo-servicos.jpg";
import loja from "@/assets/demo-loja.jpg";
import viniciusFoto from "@/assets/vinicius-foto.png.asset.json";
import projetoLomonacoGomes from "@/assets/projeto-lomonaco-gomes.png.asset.json";

export const WHATSAPP_NUMBER = "5585981463662";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function whatsappLink(message: string = MESSAGES.geral): string {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`;
}

export const MESSAGES = {
  geral:
    "Olá, Vinícius! Conheci seu site e gostaria de saber mais sobre a criação de um site para minha empresa.",
  orcamento:
    "Olá, Vinícius! Gostaria de solicitar um orçamento para desenvolver um site para minha empresa.",
};

// Fill in when available — empty links are hidden automatically.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  // { label: "LinkedIn", href: "https://linkedin.com/in/..." },
  // { label: "GitHub", href: "https://github.com/..." },
  // { label: "Instagram", href: "https://instagram.com/..." },
];

export const PROFILE_PHOTO: string | null = viniciusFoto.url;

export const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "servicos", label: "Serviços" },
  { id: "projetos", label: "Projetos" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "sobre", label: "Sobre mim" },
  { id: "faq", label: "Perguntas frequentes" },
  { id: "contato", label: "Contato" },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  isDemo: boolean; // true = conceptual demo, false = real client work
  technologies?: string[];
  liveUrl?: string; // shows "Ver demonstração" when set
  whatsappMessage: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Lomonaco & Gomes",
    category: "Escritório de advocacia",
    description:
      "Site institucional com apresentação do escritório, áreas de atuação, diferenciais, avaliações e contato direto pelo WhatsApp. Publicado e disponível para acesso.",
    image: foto.PNG,
    isDemo: false,
    liveUrl: "https://lomonacoegomes.lovable.app/",
    whatsappMessage:
      "Olá, Vinícius! Vi o site que você fez para o Lomonaco & Gomes e gostaria de um site para o meu negócio.",
  },
  {
    title: "Restaurante",
    category: "Gastronomia",
    description:
      "Página elegante com apresentação do estabelecimento, destaques do cardápio, horário de funcionamento e botão de contato.",
    image: restaurante,
    isDemo: true,
    whatsappMessage:
      "Olá, Vinícius! Tenho um restaurante e gostaria de conversar sobre a criação de um site.",
  },
  {
    title: "Barbearia",
    category: "Beleza e estética",
    description:
      "Página moderna com serviços, galeria visual, informações de localização e botão para agendamento.",
    image: barbearia,
    isDemo: true,
    whatsappMessage:
      "Olá, Vinícius! Tenho uma barbearia e gostaria de um site parecido com a demonstração que vi.",
  },
  {
    title: "Empresa de serviços",
    category: "Prestação de serviços",
    description:
      "Site institucional com apresentação, soluções, diferenciais, perguntas frequentes e solicitação de orçamento.",
    image: servicos,
    isDemo: true,
    whatsappMessage:
      "Olá, Vinícius! Tenho uma empresa de serviços e gostaria de um site institucional parecido com a demonstração.",
  },
  {
    title: "Loja local",
    category: "Comércio",
    description:
      "Vitrine digital com categorias de produtos, informações da empresa e contato direto.",
    image: loja,
    isDemo: true,
    whatsappMessage:
      "Olá, Vinícius! Tenho uma loja e gostaria de conversar sobre uma vitrine digital parecida com a demonstração.",
  },
];

// Investment ranges for the contact form. Edit freely — keep empty values neutral.
export const INVESTMENT_RANGES = [
  "Prefiro conversar primeiro",
  "Ainda não sei",
];

export const SITE_TYPES = [
  "Site institucional",
  "Landing page",
  "Site para comércio/negócio local",
  "Reformulação de site",
  "Ainda não sei",
];
