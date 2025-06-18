"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, PenTool, BarChart3, MessageSquare, ArrowRight, Star } from "lucide-react"

// 💼 SECCIÓN SERVICIOS - Qué ofreces a tus clientes
export function ServicesSection() {
  // 📝 TUS SERVICIOS - CAMBIA ESTOS POR LOS TUYOS
  const servicios = [
    {
      icono: TrendingUp,
      titulo: "Gestión de Redes Sociales",
      descripcion: "Creo y gestiono tu presencia en redes sociales para generar engagement y ventas reales.",
      precio: "Desde $400/mes",
      caracteristicas: ["Contenido diario", "Stories estratégicos", "Interacción con seguidores", "Reportes mensuales"],
      popular: true,
    },
    {
      icono: BarChart3,
      titulo: "Google Ads",
      descripcion: "Campañas publicitarias optimizadas para generar leads calificados y aumentar tus ventas.",
      precio: "Desde $300/mes + presupuesto publicitario",
      caracteristicas: [
        "Investigación de palabras clave",
        "Creación de anuncios",
        "Optimización continua",
        "Reportes detallados",
      ],
      popular: false,
    },
    {
      icono: PenTool,
      titulo: "Estrategia de Contenido",
      descripcion: "Desarrollo una estrategia de contenido que posicione tu marca como experta en tu sector.",
      precio: "Desde $250/mes",
      caracteristicas: [
        "Calendario editorial",
        "Copywriting persuasivo",
        "Diseño gráfico básico",
        "Análisis de competencia",
      ],
      popular: false,
    },
    {
      icono: MessageSquare,
      titulo: "Consultoría 1:1",
      descripcion: "Sesiones personalizadas para resolver problemas específicos y acelerar tu crecimiento.",
      precio: "$100/hora",
      caracteristicas: [
        "Análisis de situación actual",
        "Plan de acción personalizado",
        "Seguimiento por WhatsApp",
        "Recursos exclusivos",
      ],
      popular: false,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* 📢 TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cómo Te Ayudo</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Servicios diseñados para hacer crecer tu negocio de forma sostenible
          </p>
        </div>

        {/* 🎯 TARJETAS DE SERVICIOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicios.map((servicio, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                servicio.popular ? "ring-2 ring-blue-500 scale-105" : ""
              }`}
            >
              {/* 🏷️ BADGE DE POPULAR */}
              {servicio.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Más popular
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <servicio.icono className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{servicio.titulo}</CardTitle>
                    <div className="text-2xl font-bold text-blue-600 mt-1">{servicio.precio}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{servicio.descripcion}</p>

                {/* ✅ CARACTERÍSTICAS DEL SERVICIO */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Incluye:</h4>
                  <ul className="space-y-2">
                    {servicio.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 🎯 BOTÓN DE ACCIÓN */}
                <Button
                  className="w-full"
                  variant={servicio.popular ? "default" : "outline"}
                  onClick={() => {
                    // 📝 NOTA: Este botón llevará al formulario de contacto
                    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Solicitar información
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 💬 SECCIÓN DE CONFIANZA */}
        <div className="text-center mt-16 p-8 bg-white rounded-2xl shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-gray-600 mb-6">
            Cada negocio es único. Hablemos sobre tus necesidades específicas y creemos una solución personalizada.
          </p>
          <Button
            size="lg"
            onClick={() => {
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <MessageSquare className="mr-2 w-5 h-5" />
            Conversemos sobre tu proyecto
          </Button>
        </div>
      </div>
    </section>
  )
}
