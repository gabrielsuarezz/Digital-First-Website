import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera, Video, Users, Clock, ArrowRight } from "lucide-react"

// 💼 PREVIEW DE SERVICIOS - Muestra los servicios disponibles
export function ServicesPreview() {
  // 🎯 SERVICIOS DISPONIBLES
  const services = [
    {
      id: 1,
      title: "Sesión de Fotos Profesional",
      description: "Sesión fotográfica personalizada para tu marca personal o negocio.",
      duration: "2-3 horas",
      price: "Desde $200",
      icon: Camera,
      popular: true,
    },
    {
      id: 2,
      title: "Producción de Video",
      description: "Creación de contenido audiovisual para redes sociales y marketing.",
      duration: "1-4 horas",
      price: "Desde $300",
      icon: Video,
      popular: false,
    },
    {
      id: 3,
      title: "Curso Personalizado Online",
      description: "Sesión de aprendizaje uno a uno adaptada a tus necesidades específicas.",
      duration: "1 hora",
      price: "Desde $100",
      icon: Users,
      popular: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Servicios Personalizados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajemos juntos para crear contenido único y estrategias personalizadas para tu marca.
          </p>
        </div>

        {/* 🎯 GRID DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 relative">
              {service.popular && (
                <div className="absolute -top-3 left-6 z-10">
                  <Badge className="bg-black text-white px-3 py-1">Más Solicitado</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-200 transition-colors">
                  <service.icon className="w-8 h-8 text-gray-600" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="text-center space-y-4">
                <p className="text-gray-600 leading-relaxed">{service.description}</p>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="text-2xl font-bold text-black">{service.price}</div>

                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  <Calendar className="mr-2 w-4 h-4" />
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🔗 ENLACE A TODAS LAS RESERVAS */}
        <div className="text-center">
          <Link href="/reservas">
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              Ver Todos los Servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
