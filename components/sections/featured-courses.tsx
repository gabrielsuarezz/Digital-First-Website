import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, Play, Heart } from "lucide-react"
import { coursesData } from "@/config/courses-data"

// 📚 CURSOS DESTACADOS - Muestra los mejores cursos de María Fernanda
export function FeaturedCourses() {
  // 📖 SOLO CURSOS DESTACADOS
  const featuredCourses = coursesData.filter((course) => course.featured).slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Cursos Más Populares</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforma tu presencia digital con nuestros cursos más demandados, diseñados con alma y propósito.
          </p>
        </div>

        {/* 🎯 GRID DE CURSOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 ring-2 ring-opacity-50"
              style={{ ringColor: course.color }}
            >
              <div className="absolute -top-3 left-6 z-10">
                <Badge className="text-white px-3 py-1" style={{ backgroundColor: course.color }}>
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Más Popular
                </Badge>
              </div>

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
                  <CardTitle className="text-xl group-hover:text-gray-700 transition-colors">{course.title}</CardTitle>
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
                  <div>
                    <span>{course.modules.length} módulos</span>
                  </div>
                </div>

                {/* 💰 PRECIO */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-black">${course.price}</span>
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
                    <span className="text-sm text-gray-600">Con {course.collaborator}</span>
                  </div>
                )}

                {/* 🎯 BOTÓN DE ACCIÓN */}
                <Link href={`/curso/${course.slug}`}>
                  <Button className="w-full text-white hover:opacity-90" style={{ backgroundColor: course.color }}>
                    Ver Curso Completo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 🔗 ENLACE A TODOS LOS CURSOS */}
        <div className="text-center">
          <Link href="/cursos">
            <Button variant="outline" size="lg" className="border-black text-black hover:bg-black hover:text-white">
              Ver Todos los Cursos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
