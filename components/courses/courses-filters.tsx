"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// 🔍 FILTROS DE CURSOS - Categorías específicas de María Fernanda
export function CoursesFilters() {
  const [priceRange, setPriceRange] = useState([0, 300])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)
  const [showCollaborationsOnly, setShowCollaborationsOnly] = useState(false)

  // 🏷️ CATEGORÍAS ESPECÍFICAS DE TUS CURSOS
  const categories = [
    { id: "redes-sociales", label: "Redes Sociales", count: 1 },
    { id: "inteligencia-artificial", label: "Inteligencia Artificial", count: 1 },
    { id: "community-building", label: "Construcción de Comunidad", count: 1 },
    { id: "creacion-contenido", label: "Creación de Contenido", count: 1 },
    { id: "colaboraciones", label: "Colaboraciones", count: 1 },
    { id: "productividad", label: "Productividad", count: 1 },
    { id: "edicion-video", label: "Edición de Video", count: 1 },
    { id: "bienestar-mental", label: "Bienestar Mental", count: 1 },
    { id: "confianza-personal", label: "Confianza Personal", count: 1 },
  ]

  const clearFilters = () => {
    setPriceRange([0, 300])
    setSelectedCategories([])
    setShowFeaturedOnly(false)
    setShowCollaborationsOnly(false)
  }

  return (
    <div className="space-y-6">
      {/* ⭐ CURSOS DESTACADOS */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tipo de Curso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="featured-only"
              checked={showFeaturedOnly}
              onCheckedChange={(checked) => setShowFeaturedOnly(checked as boolean)}
            />
            <label htmlFor="featured-only" className="text-sm font-medium cursor-pointer">
              Solo cursos destacados
            </label>
            <Badge className="bg-warm-orange text-white text-xs">DESTACADO</Badge>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="collaborations-only"
              checked={showCollaborationsOnly}
              onCheckedChange={(checked) => setShowCollaborationsOnly(checked as boolean)}
            />
            <label htmlFor="collaborations-only" className="text-sm font-medium cursor-pointer">
              Colaboraciones especiales
            </label>
            <Badge className="bg-brand-purple text-white text-xs">COLLAB</Badge>
          </div>
        </CardContent>
      </Card>

      {/* 🏷️ CATEGORÍAS */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categorías</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedCategories([...selectedCategories, category.id])
                    } else {
                      setSelectedCategories(selectedCategories.filter((c) => c !== category.id))
                    }
                  }}
                />
                <label htmlFor={category.id} className="text-sm font-medium cursor-pointer">
                  {category.label}
                </label>
              </div>
              <Badge variant="outline" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 💰 RANGO DE PRECIO */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Precio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={300}
              min={0}
              step={10}
              className="w-full [&>span:first-child]:bg-gray-800 [&>span:first-child]:h-2 [&_[role=slider]]:bg-brand-turquoise [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <div className="text-xs text-gray-500 text-center">Precios individuales por curso</div>
        </CardContent>
      </Card>


      {/* 🔄 LIMPIAR FILTROS */}
      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Limpiar Filtros
      </Button>

      {/* 💡 NOTA SOBRE PRECIOS */}
      <Card className="bg-vapor-white border-brand-turquoise border-2">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-2 text-carbon-gray">💡 Precios Individuales</h3>
          <p className="text-sm text-gray-600 mb-4">
            Cada curso tiene su precio individual. No hay niveles - todos están diseñados con la misma calidad y amor.
          </p>
          <div className="text-xs text-brand-turquoise font-medium">
            ✨ Próximamente: Packs especiales con descuentos
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
