import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Video, Users, BookOpen, Palette, Calendar, Clock } from "lucide-react"

// 🎯 GRID DE SERVICIOS - Servicios disponibles para reservar
export function ServicesGrid() {
  const services = [
    {
      id: 1,
      title: "Curso Personalizado Online",
      description: "Sesión de aprendizaje uno a uno adaptada a tus necesidades específicas",
      duration: "1 hora",
      price: "Desde $100",
      icon: BookOpen,
      popular: false,
    },
    {
      id: 2,
      title: "Curso Personalizado Presencial",
      description: "Aprendizaje presencial con atención personalizada y práctica directa",
      duration: "1 hora",
      price: "Desde $150",
      icon: Users,
      popular: false,
    },
    {
      id: 3,
      title: "Sesión de Fotos",
      description: "Sesión fotográfica profesional para tu marca personal o negocio",
      duration: "2-3 horas",
      price: "Desde $200",
      icon: Camera,
      popular: true,
    },
    {
      id: 4,
      title: "Sesión de Video",
      description: "Producción de contenido audiovisual para redes sociales y marketing",
      duration: "2-4 horas",
      price: "Desde $300",
      icon: Video,
      popular: false,
    },
    {
      id: 5,
      title: "Producción de Contenido (1h)",
      description: "Creación intensiva de contenido visual y estratégico",
      duration: "1 hora",
      price: "Desde $120",
      icon: Palette,
      popular: false,
    },
    {
      id: 6,
      title: "Producción de Contenido (4h)",
      description: "Día completo de producción de contenido con múltiples formatos",
      duration: "4 horas",
      price: "Desde $400",
      icon: Palette,
      popular: true,
    },
    {
      id: 7,
      title: "Evento",
      description: "Cobertura profesional de eventos corporativos o personales",
      duration: "Variable",
      price: "Consultar",
      icon: Calendar,
      popular: false,
    },
    {
      id: 8,
      title: "Sesión de Bienvenida",
      description: "Primera consulta para conocer tus necesidades y objetivos",
      duration: "30 min",
      price: "GRATIS",
      icon: Users,
      popular: false,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-carbon-gray mb-2">Servicios Disponibles</h2>
        <p className="text-sm text-gray-600">Selecciona el servicio que necesitas</p>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer hover:shadow-md transition-all duration-300 ${
              service.popular ? "ring-2 ring-warm-orange" : ""
            }`}
          >
            {service.popular && (
              <div className="absolute -top-2 left-4 z-10">
                <Badge className="bg-warm-orange text-white text-xs">Más Solicitado</Badge>
              </div>
            )}

            <CardHeader className="pb-3">
              <CardTitle className="flex items-center text-lg">
                <service.icon className="w-5 h-5 mr-3 text-carbon-gray" />
                {service.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{service.duration}</span>
                </div>
                <div className="font-semibold text-carbon-gray">{service.price}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
