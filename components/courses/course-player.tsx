"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Play, Download, CheckCircle, BookOpen, MessageSquare, ChevronLeft, ChevronRight, User } from "lucide-react"

// 🎓 REPRODUCTOR DE CURSOS - Experiencia completa de aprendizaje
export function CoursePlayer({ courseId }: { courseId: number }) {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [showReflection, setShowReflection] = useState(false)
  const [reflection, setReflection] = useState("")
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set())

  // 📚 DATOS DEL CURSO (esto vendría de tu base de datos)
  const course = {
    id: 1,
    title: "¿Cómo empezar en redes sociales si no sé por dónde empezar?",
    instructor: "María Fernanda Suárez",
    welcomeVideo: "https://example.com/welcome-video.mp4",
    modules: [
      {
        id: 1,
        title: "Building Confidence",
        lessons: [
          {
            id: 1,
            title: "Entiende tus fortalezas",
            description: "Descubre qué te hace única y cómo convertir eso en tu superpoder digital",
            videoUrl: "https://example.com/lesson-1-1.mp4",
            duration: "25 min",
            resources: ["Worksheet: Mis fortalezas únicas.pdf", "Plantilla: Perfil de marca personal.canva"],
            reflection: "¿Cuáles son las 3 fortalezas que más te definen y cómo podrías mostrarlas en redes?",
          },
        ],
      },
    ],
  }

  const currentLessonData = course.modules[currentModule]?.lessons[currentLesson]
  const lessonKey = `${currentModule}-${currentLesson}`
  const isCompleted = completedLessons.has(lessonKey)

  const markAsCompleted = () => {
    setCompletedLessons(new Set([...completedLessons, lessonKey]))
  }

  const totalLessons = course.modules.reduce((total, module) => total + module.lessons.length, 0)
  const completedCount = completedLessons.size
  const progress = (completedCount / totalLessons) * 100

  return (
    <div className="min-h-screen bg-vapor-white">
      {/* 📱 HEADER DEL CURSO */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver a Cursos
            </Button>
            <div>
              <h1 className="text-xl font-bold text-carbon-gray">{course.title}</h1>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="w-4 h-4" />
                <span>{course.instructor}</span>
                <span>•</span>
                <span>
                  {completedCount}/{totalLessons} lecciones
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Progreso del curso</p>
              <Progress value={progress} className="w-32" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-6 p-6">
        {/* 📚 SIDEBAR - MÓDULOS Y LECCIONES */}
        <div className="lg:col-span-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contenido del Curso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {course.modules.map((module, moduleIndex) => (
                <div key={module.id} className="space-y-2">
                  <h3 className="font-semibold text-carbon-gray flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-brand-turquoise" />
                    {module.title}
                  </h3>
                  <div className="space-y-1 ml-6">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const isCurrentLesson = moduleIndex === currentModule && lessonIndex === currentLesson
                      const lessonCompleted = completedLessons.has(`${moduleIndex}-${lessonIndex}`)

                      return (
                        <button
                          key={lesson.id}
                          onClick={() => {
                            setCurrentModule(moduleIndex)
                            setCurrentLesson(lessonIndex)
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            isCurrentLesson ? "bg-brand-turquoise text-white" : "hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <p className="font-medium text-sm">{lesson.title}</p>
                              <p className="text-xs opacity-75">{lesson.duration}</p>
                            </div>
                            {lessonCompleted && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* 🎥 ÁREA PRINCIPAL - VIDEO Y CONTENIDO */}
        <div className="lg:col-span-3 space-y-6">
          {/* 📹 REPRODUCTOR DE VIDEO */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-carbon-gray rounded-t-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-75" />
                  <p className="text-lg font-medium">{currentLessonData?.title}</p>
                  <p className="text-sm opacity-75">Video de la lección • {currentLessonData?.duration}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-carbon-gray">{currentLessonData?.title}</h2>
                    <p className="text-gray-600 mt-2">{currentLessonData?.description}</p>
                  </div>
                  {!isCompleted && (
                    <Button onClick={markAsCompleted} className="bg-brand-turquoise hover:bg-teal-600 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Marcar como Completada
                    </Button>
                  )}
                  {isCompleted && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completada
                    </Badge>
                  )}
                </div>

                {/* 📂 RECURSOS DESCARGABLES */}
                {currentLessonData?.resources && currentLessonData.resources.length > 0 && (
                  <div className="border-t pt-4">
                    <h3 className="font-semibold text-carbon-gray mb-3 flex items-center">
                      <Download className="w-4 h-4 mr-2 text-brand-purple" />
                      Recursos de esta lección
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentLessonData.resources.map((resource, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="justify-start border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {resource}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 💭 SECCIÓN DE REFLEXIÓN */}
          {currentLessonData?.reflection && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-brand-purple">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Momento de Reflexión
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-brand-purple bg-opacity-10 p-4 rounded-lg border-l-4 border-brand-purple">
                  <p className="text-carbon-gray font-medium">{currentLessonData.reflection}</p>
                </div>

                {!showReflection ? (
                  <Button
                    onClick={() => setShowReflection(true)}
                    variant="outline"
                    className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Escribir mi reflexión
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Textarea
                      placeholder="Escribe tu reflexión aquí... Recuerda que este es tu espacio para procesar lo aprendido."
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                      rows={4}
                    />
                    <div className="flex space-x-2">
                      <Button className="bg-brand-purple hover:bg-purple-700 text-white">Guardar Reflexión</Button>
                      <Button variant="outline" onClick={() => setShowReflection(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* 🔄 NAVEGACIÓN ENTRE LECCIONES */}
          <div className="flex justify-between">
            <Button
              variant="outline"
              disabled={currentModule === 0 && currentLesson === 0}
              onClick={() => {
                if (currentLesson > 0) {
                  setCurrentLesson(currentLesson - 1)
                } else if (currentModule > 0) {
                  setCurrentModule(currentModule - 1)
                  setCurrentLesson(course.modules[currentModule - 1].lessons.length - 1)
                }
              }}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Lección Anterior
            </Button>

            <Button
              className="bg-brand-turquoise hover:bg-teal-600 text-white"
              onClick={() => {
                const currentModuleLessons = course.modules[currentModule].lessons.length
                if (currentLesson < currentModuleLessons - 1) {
                  setCurrentLesson(currentLesson + 1)
                } else if (currentModule < course.modules.length - 1) {
                  setCurrentModule(currentModule + 1)
                  setCurrentLesson(0)
                }
              }}
              disabled={
                currentModule === course.modules.length - 1 &&
                currentLesson === course.modules[currentModule].lessons.length - 1
              }
            >
              Siguiente Lección
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
