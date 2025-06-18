import { CoursePlayer } from "@/components/courses/course-player"
import { coursesData } from "@/config/courses-data"
import { notFound } from "next/navigation"

// 🎓 PÁGINA INDIVIDUAL DE CURSO
export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug)

  if (!course) {
    notFound()
  }

  return <CoursePlayer courseId={course.id} />
}

// 📊 GENERAR RUTAS ESTÁTICAS
export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }))
}

// 📝 METADATA DINÁMICA
export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug)

  if (!course) {
    return {
      title: "Curso no encontrado",
    }
  }

  return {
    title: `${course.title} - Digital First Productions`,
    description: course.description,
  }
}
