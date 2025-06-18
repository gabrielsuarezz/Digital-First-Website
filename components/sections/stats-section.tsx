import { Users, BookOpen, Download, Star } from "lucide-react"

// 📊 SECCIÓN DE ESTADÍSTICAS - Números que impresionan
export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "2,500+",
      label: "Estudiantes Activos",
      description: "Aprendiendo y creciendo cada día",
    },
    {
      icon: BookOpen,
      number: "25+",
      label: "Cursos Disponibles",
      description: "Contenido actualizado constantemente",
    },
    {
      icon: Download,
      number: "10,000+",
      label: "Recursos Descargados",
      description: "Plantillas y guías profesionales",
    },
    {
      icon: Star,
      number: "4.9★",
      label: "Calificación Promedio",
      description: "Basado en más de 1,200 reseñas",
    },
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Números que Hablan por Nosotros</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            La confianza de miles de estudiantes y profesionales respalda nuestro trabajo.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-white bg-opacity-10 rounded-full flex items-center justify-center mx-auto">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-lg font-semibold">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
