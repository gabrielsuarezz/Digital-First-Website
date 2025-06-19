"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

// 🔍 FILTROS DE RECURSOS - Sidebar para filtrar recursos
export function ResourcesFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [showFreeOnly, setShowFreeOnly] = useState(false)

  const categories = [
    { id: "redes-sociales", label: "Redes Sociales", count: 15 },
    { id: "marketing", label: "Marketing", count: 12 },
    { id: "diseno", label: "Diseño", count: 10 },
    { id: "ia", label: "Inteligencia Artificial", count: 8 },
    { id: "branding", label: "Branding", count: 6 },
    { id: "fotografia", label: "Fotografía", count: 4 },
  ]

  const types = [
    { id: "plantillas", label: "Plantillas", count: 20 },
    { id: "guias", label: "Guías PDF", count: 15 },
    { id: "kits", label: "Kits Gráficos", count: 8 },
    { id: "iconos", label: "Iconos", count: 5 },
    { id: "videos", label: "Videos", count: 3 },
  ]

  const clearFilters = () => {
    setPriceRange([0, 100])
    setSelectedCategories([])
    setSelectedTypes([])
    setShowFreeOnly(false)
  }

  return (
    <div className="space-y-6">
      {/* 🆓 RECURSOS GRATUITOS */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tipo de Recurso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="free-only"
              checked={showFreeOnly}
              onCheckedChange={(checked) => setShowFreeOnly(checked as boolean)}
            />
            <label htmlFor="free-only" className="text-sm font-medium cursor-pointer">
              Solo recursos gratuitos
            </label>
            <Badge className="bg-green-500 text-white text-xs">GRATIS</Badge>
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

      {/* 📄 TIPO DE ARCHIVO */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Tipo de Archivo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {types.map((type) => (
            <div key={type.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedTypes([...selectedTypes, type.id])
                    } else {
                      setSelectedTypes(selectedTypes.filter((t) => t !== type.id))
                    }
                  }}
                />
                <label htmlFor={type.id} className="text-sm font-medium cursor-pointer">
                  {type.label}
                </label>
              </div>
              <Badge variant="outline" className="text-xs">
                {type.count}
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
              max={100}
              min={0}
              step={5}
              className="w-full [&>span:first-child]:bg-gray-800 [&>span:first-child]:h-2 [&_[role=slider]]:bg-brand-turquoise [&_[role=slider]]:border-2 [&_[role=slider]]:border-white [&_[role=slider]]:shadow-lg"
            />
          </div>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>


      {/* 🔄 LIMPIAR FILTROS */}
      <Button variant="outline" className="w-full" onClick={clearFilters}>
        Limpiar Filtros
      </Button>
    </div>
  )
}
