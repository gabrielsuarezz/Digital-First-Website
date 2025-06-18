"use client"

import Link from "next/link"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Mail, MessageCircle, GraduationCap, Briefcase, Heart, Sparkles, ArrowRight } from "lucide-react"

// 👩‍💼 SECCIÓN SOBRE MARÍA FERNANDA - Historia y credenciales con estadísticas
export function AboutMaria() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-16">
          <Badge className="bg-brand-purple text-white px-4 py-2 text-sm font-medium mb-4">
            <Heart className="w-4 h-4 mr-2 fill-current" />
            Fundadora & Estratega
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-carbon-gray mb-4">¿Quién es María Fernanda?</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estratega de marketing digital, productora audiovisual y consultora de marcas con esencia.
          </p>
        </div>

        {/* 📊 ESTADÍSTICAS MOVIDAS DESDE EL HERO */}
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-turquoise mb-2">7+</div>
            <div className="text-sm text-gray-600">Años de experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-purple mb-2">500+</div>
            <div className="text-sm text-gray-600">Marcas transformadas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-carbon-gray mb-2">4.9★</div>
            <div className="text-sm text-gray-600">Calificación promedio</div>
          </div>
        </div>

        {/* 🎥 SECCIÓN DE VIDEO Y FOTO */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* 📹 VIDEO PERSONALIZADO */}
          <div className="space-y-6">
            <div className="relative aspect-video bg-gradient-to-br from-brand-turquoise to-brand-purple rounded-2xl overflow-hidden">
              {!isVideoPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-brand-turquoise hover:bg-vapor-white"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <Play className="mr-2 w-6 h-6" />
                    Ver Video de Presentación
                  </Button>
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  {/* 📝 AQUÍ SE INTEGRARÁ EL VIDEO REAL */}
                  <div className="text-center">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Video de María Fernanda</p>
                    <p className="text-sm opacity-75">Se integrará el video real aquí</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 🖼️ FOTO OFICIAL Y PRESENTACIÓN */}
          <div className="space-y-6">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-vapor-white to-gray-100 rounded-2xl flex items-center justify-center border-4 border-brand-turquoise border-opacity-20">
                <div className="text-8xl">👩‍💼</div>
                {/* 📝 NOTA: Aquí se pondrá la foto oficial adjunta */}
              </div>
            </div>
          </div>
        </div>

        {/* 📝 STORYTELLING EMOCIONAL */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <Card className="border-l-4 border-brand-turquoise">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-carbon-gray mb-4 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-brand-turquoise" />
                Soy María Fernanda Suárez
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Estratega de marketing digital, productora audiovisual, consultora de marcas con esencia y fundadora de
                Digital First Productions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Con más de <strong className="text-brand-turquoise">7 años de experiencia</strong> en medios,
                fotografía, campañas y automatización emocional, ayudo a marcas a{" "}
                <strong className="text-brand-purple">
                  humanizar su presencia digital sin perder su autenticidad.
                </strong>
              </p>
            </CardContent>
          </Card>

          {/* 🎓 FORMACIÓN ACADÉMICA */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-carbon-gray">
                <GraduationCap className="w-6 h-6 mr-3 text-brand-turquoise" />
                Formación Académica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-turquoise rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-carbon-gray">
                      Doble Titulación en Mercadeo y Comunicación Audiovisual
                    </p>
                    <p className="text-gray-600">Florida International University (FIU)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-purple rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-carbon-gray">
                      Certificación en Analítica de Redes y Marketing Digital
                    </p>
                    <p className="text-gray-600">Especialización en automatización emocional</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 🏢 EXPERIENCIA PROFESIONAL */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center text-carbon-gray">
                <Briefcase className="w-6 h-6 mr-3 text-brand-purple" />
                Experiencia Profesional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-brand-turquoise pl-4">
                  <h4 className="font-semibold text-carbon-gray">Ex Omnicom</h4>
                  <p className="text-gray-600">Campañas para State Farm, Jet's Pizza, Urban Air</p>
                </div>
                <div className="border-l-2 border-brand-purple pl-4">
                  <h4 className="font-semibold text-carbon-gray">Productora de Contenido Visual</h4>
                  <p className="text-gray-600">Marcas con impacto y propósito social</p>
                </div>
                <div className="border-l-2 border-carbon-gray pl-4">
                  <h4 className="font-semibold text-carbon-gray">Consultora Especializada</h4>
                  <p className="text-gray-600">Integración de IA de forma humana, creativa y rentable</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 💡 QUÉ HAGO DIFERENTE */}
          <Card className="bg-vapor-white border-brand-purple border-2">
            <CardHeader>
              <CardTitle className="flex items-center text-carbon-gray">
                <Heart className="w-6 h-6 mr-3 text-brand-purple fill-current" />
                ¿Qué hago diferente?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-brand-turquoise rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-carbon-gray">Esencia, no fórmulas</h4>
                  <p className="text-sm text-gray-600">Enseño a construir marcas desde su esencia auténtica</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                  <h4 className="font-semibold text-carbon-gray">Conexión real</h4>
                  <p className="text-sm text-gray-600">Transformo contenido en comunidad y comunidad en conexión</p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-carbon-gray rounded-full flex items-center justify-center mx-auto">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-carbon-gray">Automatización humana</h4>
                  <p className="text-sm text-gray-600">Creo sistemas que automatizan sin desconectar</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 📞 CONTACTO DIRECTO */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-brand-turquoise to-brand-purple text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Contacto Directo</CardTitle>
              <p className="text-gray-100">Hablemos sobre cómo humanizar tu marca</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-100">digitalfirstproductionscorp@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm text-gray-100">+1 786-970-6933</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4 border-t border-white border-opacity-20">
                <Link href="/reservas">
                  <Button size="lg" className="bg-white text-brand-turquoise hover:bg-gray-100 font-semibold">
                    <Heart className="mr-2 w-5 h-5 fill-current" />
                    Explorá cómo podemos humanizar tu marca
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
