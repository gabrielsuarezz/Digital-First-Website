import { PortfolioTabs } from "@/components/portfolio/portfolio-tabs"

// 🎨 PÁGINA DE PORTAFOLIO - Galería completa
export default function PortafolioPage() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-carbon-gray mb-4">Nuestro Portafolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestro trabajo en fotografía, video y entregas personalizadas para clientes
          </p>
        </div>

        <PortfolioTabs />
      </div>
    </div>
  )
}
