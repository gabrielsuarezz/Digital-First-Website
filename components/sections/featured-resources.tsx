import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, ImageIcon, Palette, ArrowRight, Star } from "lucide-react"

// 📂 RECURSOS DESTACADOS - Muestra los mejores recursos
export function FeaturedResources() {
  // 📁 RECURSOS DE EJEMPLO - Reemplaza por tus recursos reales
  const featuredResources = [
    {
      id: 1,
      title: "Plantillas de Instagram Stories",
      description: "Pack de 50 plantillas profesionales para Instagram Stories editables en Canva.",
      price: 29.99,
      originalPrice: 49.99,
      type: "Plantillas",
      format: "Canva",
      downloads: 2340,
      rating: 4.9,
      isFree: false,
      featured: true,
    },
    {
      id: 2,
      title: "Guía Completa de SEO 2024",
      description: "Manual paso a paso para posicionar tu sitio web en Google con las últimas técnicas.",
      price: 0,
      originalPrice: 0,
      type: "Guía",
      format: "PDF",
      downloads: 5670,
      rating: 4.8,
      isFree: true,
      featured: false,
    },
    {
      id: 3,
      title: "Kit de Branding Completo",
      description: "Logos, paletas de colores, tipografías y elementos gráficos para tu marca.",
      price: 79.99,
      originalPrice: 129.99,
      type: "Kit Gráfico",
      format: "PNG/AI",
      downloads: 890,
      rating: 4.9,
      isFree: false,
      featured: true,
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "Plantillas":
        return Palette
      case "Guía":
        return FileText
      case "Kit Gráfico":
        return ImageIcon
      default:
        return Download
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Recursos Más Descargados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Acelera tu trabajo con nuestros recursos profesionales, plantillas y guías especializadas.
          </p>
        </div>

        {/* 🎯 GRID DE RECURSOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredResources.map((resource) => {
            const IconComponent = getIcon(resource.type)
            return (
              <Card
                key={resource.id}
                className={`group hover:shadow-xl transition-all duration-300 ${
                  resource.featured ? "ring-2 ring-black" : ""
                }`}
              >
                {resource.featured && (
                  <div className="absolute -top-3 left-6 z-10">
                    <Badge className="bg-black text-white px-3 py-1">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Destacado
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  {/* 🖼️ PREVIEW DEL RECURSO */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all">
                    <IconComponent className="w-12 h-12 text-gray-500 group-hover:text-gray-600 transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {resource.type}
                      </Badge>
                      {resource.isFree && <Badge className="bg-green-500 text-white text-xs">GRATIS</Badge>}
                    </div>
                    <CardTitle className="text-xl group-hover:text-gray-700 transition-colors">
                      {resource.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{resource.description}</p>

                  {/* 📊 ESTADÍSTICAS DEL RECURSO */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{resource.rating}</span>
                    </div>
                    <div>
                      <span>{resource.format}</span>
                    </div>
                  </div>

                  {/* 💰 PRECIO */}
                  <div className="flex items-center justify-between">
                    {resource.isFree ? (
                      <div className="text-2xl font-bold text-green-600">GRATIS</div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-black">${resource.price}</span>
                          {resource.originalPrice > 0 && (
                            <span className="text-sm text-gray-500 line-through">${resource.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 🎯 BOTÓN DE ACCIÓN */}
                  <Button className="w-full bg-black hover:bg-gray-800 text-white">
                    <Download className="mr-2 w-4 h-4" />
                    {resource.isFree ? "Descargar Gratis" : "Obtener Recurso"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* 🔗 ENLACE A TODOS LOS RECURSOS */}
        <div className="text-center">
          <Link href="/recursos">
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              Ver Todos los Recursos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
