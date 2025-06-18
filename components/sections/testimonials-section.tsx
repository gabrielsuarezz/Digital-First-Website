import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

// 💬 SECCIÓN DE TESTIMONIOS - Reseñas de estudiantes
export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Emprendedora Digital",
      content:
        "Los cursos de Digital First Productions transformaron completamente mi negocio. En 3 meses aumenté mis ventas un 200% aplicando lo que aprendí.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      role: "Marketing Manager",
      content:
        "Las plantillas y recursos son increíbles. Me ahorran horas de trabajo cada semana y mis campañas se ven mucho más profesionales.",
      rating: 5,
      image: "👨‍💻",
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Freelancer",
      content:
        "El curso de Google Ads me ayudó a conseguir mis primeros clientes. Ahora manejo campañas para varias empresas gracias a lo que aprendí aquí.",
      rating: 5,
      image: "👩‍🎨",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Lo que Dicen Nuestros Estudiantes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de personas que transformaron sus carreras con nuestros cursos y recursos.
          </p>
        </div>

        {/* 🎯 GRID DE TESTIMONIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                {/* 💬 ICONO DE CITA */}
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* ⭐ CALIFICACIÓN */}
                <div className="flex items-center space-x-1 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* 📝 CONTENIDO DEL TESTIMONIO */}
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.content}"</p>

                {/* 👤 INFORMACIÓN DEL AUTOR */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  <div className="text-3xl">{testimonial.image}</div>
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
