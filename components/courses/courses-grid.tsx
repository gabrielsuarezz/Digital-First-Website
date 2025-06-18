"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Play, ShoppingCart, Heart } from "lucide-react"
import { coursesData } from "@/config/courses-data"

// 📚 GRID DE CURSOS - Muestra todos los cursos reales de María Fernanda
export function CoursesGrid() {
  const [courses] = useState(coursesData)

  const addToCart = (courseId: number) => {
    console.log(`Curso ${courseId} agregado al carrito`)
    // Aquí conectarías con tu estado global del carrito
  }

  return (
    <div className="space-y-6">
      {/* 📊 RESULTADOS */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600">Mostrando {courses.length} cursos</p>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
          <option>Más populares</option>
          <option>Precio: menor a mayor</option>
          <option>Precio: mayor a menor</option>
          <option>Mejor calificados</option>
          <option>Más recientes</option>
        </select>
      </div>

      {/* 🎯 GRID DE CURSOS */}
      <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className={`group hover:shadow-xl transition-all duration-300 ${
              course.featured ? "ring-2 ring-opacity-50" : ""
            }`}
            style={{
              borderColor: course.featured ? course.color : undefined,
              ringColor: course.featured ? course.color : undefined,
            }}
          >
            {course.featured && (
              <div className="absolute -top-3 left-6 z-10">
                <Badge className="text-white px-3 py-1" style={{ backgroundColor: course.color }}>
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Destacado
                </Badge>
              </div>
            )}

            <CardHeader className="pb-4">
              {/* 🖼️ IMAGEN DEL CURSO */}
              <div
                className="aspect-video rounded-lg mb-4 flex items-center justify-center group-hover:opacity-90 transition-all"
                style={{ backgroundColor: course.color + "20" }}
              >
                <Play
                  className="w-12 h-12 group-hover:scale-110 transition-transform"
                  style={{ color: course.color }}
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-gray-700 transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{course.description}</p>

              {/* 📊 ESTADÍSTICAS DEL CURSO */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Play className="w-4 h-4" />
                  <span>{course.modules.length} módulos</span>
                </div>
              </div>

              {/* 💰 PRECIO */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-carbon-gray">${course.price}</span>
                    {course.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                    )}
                  </div>
                  {course.originalPrice && (
                    <p className="text-xs text-green-600 font-medium">
                      Ahorra ${(course.originalPrice - course.price).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              {/* 👩‍💼 COLABORADOR */}
              {course.collaborator && (
                <div className="flex items-center space-x-2 p-2 bg-vapor-white rounded-lg">
                  <Heart className="w-4 h-4 text-warm-orange" />
                  <span className="text-sm text-gray-600">En colaboración con {course.collaborator}</span>
                </div>
              )}

              {/* 🎯 BOTONES DE ACCIÓN */}
              <div className="flex gap-2">
                <Button
                  className="flex-1 text-white hover:opacity-90"
                  style={{ backgroundColor: course.color }}
                  onClick={() => addToCart(course.id)}
                >
                  <ShoppingCart className="mr-2 w-4 h-4" />${course.price}
                </Button>
                <Link href={`/curso/${course.slug}`}>
                  <Button
                    variant="outline"
                    className="hover:text-white"
                    style={{
                      borderColor: course.color,
                      color: course.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = course.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent"
                    }}
                  >
                    Ver Curso
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
