import { CoursesGrid } from "@/components/courses/courses-grid"
import { CoursesFilters } from "@/components/courses/courses-filters"

// 📚 PÁGINA DE CURSOS - Catálogo completo
export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Todos los Cursos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra colección completa de cursos diseñados para impulsar tu carrera digital
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* 🔍 FILTROS */}
          <div className="lg:col-span-1">
            <CoursesFilters />
          </div>

          {/* 📚 GRID DE CURSOS */}
          <div className="lg:col-span-3">
            <CoursesGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
