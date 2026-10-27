import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, MESSAGES, whatsappLink } from "@/config/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#inicio" className="flex flex-col leading-tight">
          <span className="text-base font-extrabold tracking-tight">Vinícius Silva</span>
          <span className="text-xs font-medium text-muted-foreground">Desenvolvimento Web</span>
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {NAV_LINKS.slice(1).map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-foreground">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <a href={whatsappLink(MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav aria-label="Menu móvel" className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <Button asChild variant="hero" size="xl" className="w-full">
                <a href={whatsappLink(MESSAGES.orcamento)} target="_blank" rel="noopener noreferrer">Solicitar orçamento</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
