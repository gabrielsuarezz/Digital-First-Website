import { HeroSection } from "@/components/sections/hero-section"
import { FeaturedCourses } from "@/components/sections/featured-courses"
import { FeaturedResources } from "@/components/sections/featured-resources"
import { ServicesPreview } from "@/components/sections/services-preview"
import { StatsSection } from "@/components/sections/stats-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

// 🏠 PÁGINA PRINCIPAL - Landing page optimizada
export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 🎯 SECCIÓN HERO */}
      <HeroSection />

      {/* 📊 ESTADÍSTICAS */}
      <StatsSection />

      {/* 📚 CURSOS DESTACADOS */}
      <FeaturedCourses />

      {/* 📂 RECURSOS DESTACADOS */}
      <FeaturedResources />

      {/* 💼 SERVICIOS */}
      <ServicesPreview />

      {/* 💬 TESTIMONIOS */}
      <TestimonialsSection />
    </div>
  )
}
