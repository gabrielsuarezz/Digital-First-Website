"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, BookOpen, Download, Sparkles } from "lucide-react"

// 🎯 SECCIÓN HERO - Primera impresión con identidad de marca actualizada
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-vapor-white to-white px-4 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* 📝 CONTENIDO PRINCIPAL */}
        <div className="space-y-8">
          {/* 📢 TÍTULO PRINCIPAL */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-carbon-gray leading-tight">
              Más que visibilidad...
              <span className="block text-brand-turquoise">dejamos huella</span>
              <span className="block text-brand-purple">con tu esencia</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Somos una <strong className="text-brand-turquoise">agencia de marketing emocional</strong> especializada
              en contenido visual, estrategia con alma y automatización auténtica.
              <span className="text-carbon-gray font-medium">
                {" "}
                IA con intención. Marketing con corazón. Diseño con propósito.
              </span>
            </p>
          </div>

          {/* 🎯 BOTONES DE ACCIÓN */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/cursos">
              <Button
                size="lg"
                className="bg-brand-turquoise hover:bg-teal-600 text-white px-8 py-4 text-lg transition-brand"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Explorá nuestros cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/sobre-mi">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white transition-brand"
              >
                <Play className="mr-2 w-5 h-5" />
                Conocé a María Fernanda
              </Button>
            </Link>
          </div>
        </div>

        {/* 🖼️ CONTENIDO VISUAL */}
        <div className="relative">
          {/* 📱 MOCKUP DE LA PLATAFORMA */}
          <div className="relative bg-gradient-to-br from-brand-turquoise to-brand-purple rounded-2xl p-8 shadow-2xl">
            <div className="bg-white rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-brand-turquoise rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">DF</span>
                </div>
                <div>
                  <h3 className="font-semibold text-carbon-gray">Dashboard del Estudiante</h3>
                  <p className="text-xs text-gray-500">Aprendizaje con propósito</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-vapor-white rounded-lg">
                  <BookOpen className="w-5 h-5 text-brand-turquoise" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">IA para tu marca</p>
                    <p className="text-xs text-gray-500">Progreso: 75%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-vapor-white rounded-lg">
                  <Download className="w-5 h-5 text-brand-purple" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Recursos con esencia</p>
                    <p className="text-xs text-gray-500">12 plantillas descargadas</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-vapor-white rounded-lg">
                  <Users className="w-5 h-5 text-carbon-gray" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">Comunidad con propósito</p>
                    <p className="text-xs text-gray-500">Conectá con otras visionarias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ✨ ELEMENTOS DECORATIVOS */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-turquoise opacity-20 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-brand-purple opacity-30 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
