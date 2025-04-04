import Link from "next/link"
import { Phone, Mail, MapPin, Ruler, FileText, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Substitua este número pelo número de WhatsApp da empresa (formato internacional sem símbolos)
  const whatsappNumber = "556436232726" // Exemplo: 55 (Brasil) + DDD + número
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="font-bold text-navy-800 text-xl">Real Urbana</div>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicos" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Serviços
            </Link>
            <Link href="#formatos" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Formatos
            </Link>
            <Link href="#contato" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contato
            </Link>
          </nav>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Phone className="mr-2 h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 to-navy-700/80 z-10" />
        <div className="relative h-[500px]">
          <div className="absolute inset-0 bg-navy-800/20"></div>
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-start justify-center text-white">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Plotagem de Projetos com Qualidade Profissional
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            Impressão de alta definição para projetos de engenharia civil e arquitetura em diversos formatos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="mr-2 h-5 w-5" /> Solicitar Orçamento
              </Button>
            </a>
            <Button variant="outline" size="lg" className="text-black border-white hover:bg-white/10">
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-800">Nossos Serviços de Plotagem</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Oferecemos impressão de alta qualidade para todos os tipos de projetos técnicos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-10 w-10 text-orange-500" />,
                title: "Projetos Arquitetônicos",
                description: "Plantas baixas, cortes, fachadas e detalhamentos com alta precisão e qualidade.",
              },
              {
                icon: <Ruler className="h-10 w-10 text-orange-500" />,
                title: "Projetos Estruturais",
                description: "Impressão de projetos estruturais com detalhes precisos e escalas exatas.",
              },
              {
                icon: <FileText className="h-10 w-10 text-orange-500" />,
                title: "Projetos Hidráulicos",
                description: "Plotagem de sistemas hidráulicos, sanitários e de drenagem com alta definição.",
              },
              {
                icon: <FileText className="h-10 w-10 text-orange-500" />,
                title: "Projetos Elétricos",
                description: "Impressão de diagramas elétricos, quadros de distribuição e detalhamentos.",
              },
              {
                icon: <FileText className="h-10 w-10 text-orange-500" />,
                title: "Prevenção de Incêndio",
                description: "Plotagem de projetos de prevenção e combate a incêndio conforme normas técnicas.",
              },
              {
                icon: <FileText className="h-10 w-10 text-orange-500" />,
                title: "Projetos Personalizados",
                description: "Atendemos necessidades específicas com soluções personalizadas de impressão.",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-700">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section id="formatos" className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-800">Formatos Disponíveis</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Trabalhamos com diversos tamanhos padronizados e personalizados para atender suas necessidades
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            {[
              { format: "A0", size: "841 × 1189 mm" },
              { format: "A1", size: "594 × 841 mm" },
              { format: "A2", size: "420 × 594 mm" },
              { format: "A3", size: "297 × 420 mm" },
              { format: "Personalizado", size: "Sob medida" },
            ].map((format, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border hover:border-orange-500 transition-colors">
                <h3 className="text-2xl font-bold text-orange-500 mb-2">{format.format}</h3>
                <p className="text-sm text-muted-foreground">{format.size}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-navy-50 p-8 rounded-lg border border-navy-100">
            <h3 className="text-xl font-bold mb-4 text-navy-800">Por que escolher nossos serviços?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Impressão em alta resolução",
                "Cores fiéis ao projeto original",
                "Papel de alta qualidade",
                "Entrega rápida",
                "Atendimento personalizado",
                "Preços competitivos",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight">Pronto para imprimir seu projeto?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-navy-50">
            Entre em contato conosco pelo WhatsApp para um orçamento rápido e personalizado
          </p>
          <div className="mt-8">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Phone className="mr-2 h-5 w-5" /> Fale Conosco no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-800">Entre em Contato</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Estamos prontos para atender suas necessidades de plotagem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <Phone className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-navy-700">Telefone</h3>
              <p className="text-muted-foreground">(64) 3623-2726</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <Mail className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-navy-700">E-mail</h3>
              <p className="text-muted-foreground">realploter@gmail.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <MapPin className="h-10 w-10 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-navy-700">Endereço</h3>
              <p className="text-muted-foreground">Rua Umbelino Fonseca, 888 - Rio Verde, GO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-navy-900 text-gray-300">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="text-xl font-bold text-white">Real Urbana</div>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Real Urbana. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

