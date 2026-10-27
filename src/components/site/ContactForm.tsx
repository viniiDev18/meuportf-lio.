import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INVESTMENT_RANGES, SITE_TYPES, whatsappLink } from "@/config/site";

type Fields = {
  nome: string;
  empresa: string;
  segmento: string;
  temSite: string;
  tipo: string;
  descricao: string;
  investimento: string;
};

const empty: Fields = { nome: "", empresa: "", segmento: "", temSite: "", tipo: "", descricao: "", investimento: "" };
const required: (keyof Fields)[] = ["nome", "empresa", "segmento", "temSite", "tipo", "descricao"];

export function buildFormMessage(f: Fields) {
  const lines = [
    "Olá, Vinícius! Gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${f.nome}`,
    `*Empresa:* ${f.empresa}`,
    `*Segmento:* ${f.segmento}`,
    `*Já possui site:* ${f.temSite}`,
    `*Tipo de site:* ${f.tipo}`,
    `*Descrição:* ${f.descricao}`,
  ];
  if (f.investimento) lines.push(`*Faixa de investimento:* ${f.investimento}`);
  return lines.join("\n");
}

const inputCls =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-cyan aria-[invalid=true]:border-destructive";

export function ContactForm() {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const set = (k: keyof Fields) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  function submit(e: FormEvent) {
    e.preventDefault();
    const errs: typeof errors = {};
    required.forEach((k) => { if (!f[k].trim()) errs[k] = true; });
    setErrors(errs);
    if (Object.keys(errs).length) return;
    window.open(whatsappLink(buildFormMessage(f)), "_blank", "noopener,noreferrer");
  }

  const err = (k: keyof Fields) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">Preencha este campo.</p> : null;

  return (
    <form onSubmit={submit} noValidate className="card-elevated grid gap-4 p-6 hover:translate-y-0 sm:grid-cols-2 sm:p-8">
      <div>
        <label htmlFor="nome" className="mb-1.5 block text-sm font-medium">Nome *</label>
        <input id="nome" className={inputCls} value={f.nome} onChange={set("nome")} aria-invalid={!!errors.nome} maxLength={100} />
        {err("nome")}
      </div>
      <div>
        <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium">Nome da empresa *</label>
        <input id="empresa" className={inputCls} value={f.empresa} onChange={set("empresa")} aria-invalid={!!errors.empresa} maxLength={100} />
        {err("empresa")}
      </div>
      <div>
        <label htmlFor="segmento" className="mb-1.5 block text-sm font-medium">Segmento do negócio *</label>
        <input id="segmento" placeholder="Ex.: restaurante, clínica, loja" className={inputCls} value={f.segmento} onChange={set("segmento")} aria-invalid={!!errors.segmento} maxLength={100} />
        {err("segmento")}
      </div>
      <div>
        <label htmlFor="temSite" className="mb-1.5 block text-sm font-medium">A empresa já possui um site? *</label>
        <select id="temSite" className={inputCls} value={f.temSite} onChange={set("temSite")} aria-invalid={!!errors.temSite}>
          <option value="">Selecione</option>
          <option>Sim</option>
          <option>Não</option>
        </select>
        {err("temSite")}
      </div>
      <div>
        <label htmlFor="tipo" className="mb-1.5 block text-sm font-medium">Qual tipo de site deseja? *</label>
        <select id="tipo" className={inputCls} value={f.tipo} onChange={set("tipo")} aria-invalid={!!errors.tipo}>
          <option value="">Selecione</option>
          {SITE_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        {err("tipo")}
      </div>
      <div>
        <label htmlFor="investimento" className="mb-1.5 block text-sm font-medium">Faixa de investimento (opcional)</label>
        <select id="investimento" className={inputCls} value={f.investimento} onChange={set("investimento")}>
          <option value="">Selecione</option>
          {INVESTMENT_RANGES.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="descricao" className="mb-1.5 block text-sm font-medium">Descrição do projeto *</label>
        <textarea id="descricao" rows={4} className={inputCls} value={f.descricao} onChange={set("descricao")} aria-invalid={!!errors.descricao} maxLength={1000} placeholder="Conte um pouco sobre sua empresa e o site que gostaria de criar." />
        {err("descricao")}
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" variant="whatsapp" size="xl" className="w-full sm:w-auto">
          <Send /> Enviar solicitação pelo WhatsApp
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">Ao enviar, uma conversa será aberta no WhatsApp com suas respostas. Nenhum dado é armazenado neste site.</p>
      </div>
    </form>
  );
}
