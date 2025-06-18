"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, FileText, ImageIcon, Palette, Star, ShoppingCart, Eye } from "lucide-react"

// 📂 GRID DE RECURSOS - Muestra todos los recursos disponibles
export function ResourcesGrid() {
  // 📁 TODOS LOS RECURSOS - Base de datos simulada
  const [resources] = useState([
    {
      id: 1,
      title: "Plantillas de Instagram Stories",
      description: "Pack de 50 plantillas profesionales para Instagram Stories editables en Canva con tu esencia.",
      price: 29.99,
      originalPrice: 49.99,
      type: "Plantillas",
      format: "Canva",
      downloads: 2340,
      rating: 4.9,
      isFree: false,
      category: "Redes Sociales",
      featured: true,
    },
    {
      id: 2,
      title: "Guía Completa de SEO 2024",
      description: "Manual paso a paso para posicionar tu sitio web en Google con las últimas técnicas y estrategias.",
      price: 0,
      originalPrice: 0,
      type: "Guía",
      format: "PDF",
      downloads: 5670,
      rating: 4.8,
      isFree: true,
      category: "Marketing",
      featured: false,
    },
    {
      id: 3,
      title: "Kit de Branding Completo",
      description: "Logos, paletas de colores, tipografías y elementos gráficos para construir tu marca con propósito.",
      price: 79.99,
      originalPrice: 129.99,
      type: "Kit Gráfico",
      format: "PNG/AI",
      downloads: 890,
      rating: 4.9,
      isFree: false,
      category: "Diseño",
      featured: true,
    },
    {
      id: 4,
      title: "Plantillas de Posts para Instagram",
      description: "30 diseños únicos para posts de Instagram que conectan emocionalmente con tu audiencia.",
      price: 19.99,
      originalPrice: 29.99,
      type: "Plantillas",
      format: "Canva",
      downloads: 1560,
      rating: 4.7,
      isFree: false,
      category: "Redes Sociales",
      featured: false,
    },
    {
      id: 5,
      title: "Guía de IA para Marcas Humanas",
      description: "Aprende a usar inteligencia artificial sin perder tu esencia y autenticidad.",
      price: 0,
      originalPrice: 0,
      type: "Guía",
      format: "PDF",
      downloads: 3240,
      rating: 4.9,
      isFree: true,
      category: "IA",
      featured: false,
    },
    {
      id: 6,
      title: "Pack de Iconos Emocionales",
      description: "200 iconos diseñados para transmitir emociones y conectar con tu audiencia.",
      price: 39.99,
      originalPrice: 59.99,
      type: "Iconos",
      format: "SVG/PNG",
      downloads: 720,
      rating: 4.8,
      isFree: false,
      category: "Diseño",
      featured: false,
    },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case "Plantillas":
        return Palette
      case "Guía":
        return FileText
      case "Kit Gráfico":
        return ImageIcon
      case "Iconos":
        return Star
      default:
        return Download
    }
  }

  const addToCart = (resourceId: number) => {
    console.log(`Recurso ${resourceId} agregado al carrito`)
    // Aquí conectarías con tu estado global del carrito
  }

  return (
    <div className="space-y-6">
      {/* 📊 RESULTADOS */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Mostrando {resources.length} recursos</p>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white">
          <option>Más populares</option>
          <option>Más descargados</option>
          <option>Precio: menor a mayor</option>
          <option>Precio: mayor a menor</option>
          <option>Mejor calificados</option>
          <option>Más recientes</option>
        </select>
      </div>

      {/* 🎯 GRID DE RECURSOS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {resources.map((resource) => {
          const IconComponent = getIcon(resource.type)
          return (
            <Card key={resource.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                {/* 🖼️ PREVIEW DEL RECURSO */}
                <div className="aspect-video bg-gradient-to-br from-vapor-white to-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:from-gray-100 group-hover:to-gray-200 transition-all">
                  <IconComponent className="w-12 h-12 text-carbon-gray group-hover:text-gray-600 transition-colors" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {resource.type}
                    </Badge>
                    <div className="flex items-center space-x-2">
                      {resource.isFree && <Badge className="bg-green-500 text-white text-xs">GRATIS</Badge>}
                      {resource.featured && <Badge className="bg-warm-orange text-white text-xs">Destacado</Badge>}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-carbon-gray transition-colors">
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
                        <span className="text-xl font-bold text-carbon-gray">${resource.price}</span>
                        {resource.originalPrice > 0 && (
                          <span className="text-sm text-gray-500 line-through">${resource.originalPrice}</span>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* 🎯 BOTONES DE ACCIÓN */}
                <div className="flex gap-2">
                  {resource.isFree ? (
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                      <Download className="mr-2 w-4 h-4" />
                      Descargar Gratis
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-carbon-gray hover:bg-gray-800 text-white"
                      onClick={() => addToCart(resource.id)}
                    >
                      <ShoppingCart className="mr-2 w-4 h-4" />
                      Agregar
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    className="border-carbon-gray text-carbon-gray hover:bg-carbon-gray hover:text-white"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
