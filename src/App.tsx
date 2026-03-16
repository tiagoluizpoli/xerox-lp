import { SiWhatsapp } from '@icons-pack/react-simple-icons'
import { useState } from "react"
import { Printer, Zap, FileText, Palette, Smartphone, User, Building2, Settings } from "lucide-react"

export default function App() {
  const [copied, setCopied] = useState(false)
  const pixKey = "392.809.928-05"

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const textArea = document.createElement("textarea")
      textArea.value = pixKey
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0f1115]">
      {/* Orange/Brown Gradient Background */}
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-orange-900/40 via-orange-950/20 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-amber-900/30 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-3 py-2 md:px-4 md:py-16">

        {/* Header */}
        <header className="mb-4 text-center md:mb-10">
          <div className="mb-6 flex flex-col items-center justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#3b82f6] to-orange-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
              <img
                src="/logo.png"
                alt="Graziago Logo"
                className="relative h-24 w-24 rounded-2xl object-cover shadow-2xl md:h-36 md:w-36 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* <div className="flex items-center gap-1.5 md:gap-2">
              <Printer className="h-5 w-5 text-[#3b82f6] md:h-6 md:w-6" strokeWidth={1.5} />
              <Zap className="h-4 w-4 text-orange-500 md:h-5 md:w-5" strokeWidth={2} />
            </div> */}
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white md:text-6xl text-center">
            GRAZIAGO<br className="md:hidden" /> IMPRESSÕES
          </h1>
          <p className="mt-1 text-xs font-semibold tracking-widest text-orange-500 md:mt-2 md:text-lg">
            RÁPIDAS & QUALIDADE
          </p>
        </header>

        {/* Cards Container */}
        <div className="flex flex-col gap-3 md:gap-6">

          {/* Prices Card */}
          <Card>
            <SectionHeader>TABELA DE PREÇOS</SectionHeader>
            <div className="mt-2 space-y-1.5 md:mt-4 md:space-y-3">
              <ListItem
                icon={<FileText className="h-4 w-4 text-[#3b82f6] md:h-5 md:w-5" />}
                label="Preto e Branco:"
                value="R$ 1,00 (unid.)"
              />
              <ListItem
                icon={<Palette className="h-4 w-4 text-[#3b82f6] md:h-5 md:w-5" />}
                label="Colorido:"
                value="R$ 1,75 (unid.)"
              />
            </div>
          </Card>

          {/* Additional Services Card */}
          <Card>
            <SectionHeader>SERVIÇOS ADICIONAIS</SectionHeader>
            <div className="mt-2 space-y-2 md:mt-4 md:space-y-4">
              <ServiceItem
                icon={<User className="h-4 w-4 text-orange-500 md:h-5 md:w-5" />}
                title="Fábrica de Currículo (Consultoria):"
                description="Criação e consultoria especializada para o seu currículo. Destaque suas qualificações com um design profissional."
              />
              <ServiceItem
                icon={<Settings className="h-4 w-4 text-[#3b82f6] md:h-5 md:w-5" />}
                title="Ajustes e encaixe de impressões:"
                description="Ajuste técnico de conteúdo sem formato ou com dificuldade de impressão, garantindo a melhor qualidade no papel (sujeito a disponibilidade técnica)."
              />
            </div>
          </Card>

          {/* PIX Card */}
          <Card>
            <SectionHeader>PAGUE VIA PIX</SectionHeader>
            <div className="mt-2 space-y-1.5 md:mt-4 md:space-y-3">
              <ListItem
                icon={<Smartphone className="h-4 w-4 text-[#3b82f6] md:h-5 md:w-5" />}
                label="Chave CPF:"
                value={pixKey}
                onCopy={handleCopyPix}
                copied={copied}
              />
              <ListItem
                icon={<User className="h-4 w-4 text-orange-500 md:h-5 md:w-5" />}
                label="Nome:"
                value="Tiago Luiz S. de Poli"
              />
              <ListItem
                icon={<Building2 className="h-4 w-4 text-orange-500 md:h-5 md:w-5" />}
                label="Banco:"
                value="Banco Inter"
              />
            </div>
          </Card>

          {/* Contact Card */}
          <Card>
            <SectionHeader>CONTATO</SectionHeader>
            <div className="mt-2 flex flex-col gap-3 md:mt-4 md:gap-4">
              <ListItem
                icon={<SiWhatsapp color='#25D366' className="h-4 w-4 text-[#3b82f6] md:h-5 md:w-5" />}
                label="WhatsApp / Celular:"
                value="(11) 95506-6489"
                onAction={() => window.open("https://wa.me/5511955066489", "_blank")}
                actionLabel="Chamar"
              />
            </div>
          </Card>
        </div>
      </div>

      {/* Toast Notification */}
      {copied && (
        <div
          className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 animate-fade-in-up md:bottom-6"
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/20 px-4 py-2 shadow-lg backdrop-blur-xl md:rounded-full md:px-6 md:py-3">
            <span className="text-sm font-medium text-green-400 md:text-base">Chave PIX copiada!</span>
          </div>
        </div>
      )}
    </main>
  )
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm md:rounded-2xl md:p-6">
      {children}
    </div>
  )
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <div className="h-4 w-0.5 rounded-full bg-orange-500 md:h-6 md:w-1" />
      <h2 className="text-xs font-bold tracking-wider text-[#3b82f6] md:text-sm">
        {children}
      </h2>
    </div>
  )
}

function ListItem({
  icon,
  label,
  value,
  onCopy,
  copied,
  onAction,
  actionLabel
}: {
  icon: React.ReactNode
  label: string
  value: string
  onCopy?: () => void
  copied?: boolean
  onAction?: () => void
  actionLabel?: string
}) {
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {icon}
      <span className="text-xs font-semibold text-white md:text-base">{label}</span>
      <span className="text-xs text-white/80 md:text-base">{value}</span>
      {onCopy && (
        <button
          onClick={onCopy}
          className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/70 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white active:scale-95 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
          aria-label="Copiar"
        >
          {copied ? "Copiado!" : "Copiar"}
        </button>
      )}
      {onAction && (
        <button
          onClick={onAction}
          className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-white/70 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-white active:scale-95 md:rounded-lg md:px-3 md:py-1.5 md:text-sm"
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

function ServiceItem({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <div className="mt-0.5 shrink-0">
        {icon}
      </div>
      <p className="text-xs leading-relaxed text-white/80 md:text-sm">
        <span className="font-semibold text-white">{title}</span>{" "}
        {description}
      </p>
    </div>
  )
}
