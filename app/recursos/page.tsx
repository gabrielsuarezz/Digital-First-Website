import { ResourcesGrid } from "@/components/resources/resources-grid"
import { ResourcesFilters } from "@/components/resources/resources-filters"

// 📂 PÁGINA DE RECURSOS - Catálogo completo
export default function RecursosPage() {
  return (
    <div className="min-h-screen bg-vapor-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-carbon-gray mb-4">Recursos con Esencia</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plantillas, guías y herramientas diseñadas para potenciar tu marca auténtica
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 🔍 FILTROS */}
          <div className="lg:col-span-1">
            <ResourcesFilters />
          </div>

          {/* 📂 GRID DE RECURSOS */}
          <div className="lg:col-span-3">
            <ResourcesGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
