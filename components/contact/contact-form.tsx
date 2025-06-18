"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, MessageCircle } from "lucide-react"

// 📞 FORMULARIO DE CONTACTO - Contacto directo con María Fernanda
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 📧 INTEGRACIÓN CON EMAILJS
      const result = await (window as any).emailjs.sendForm(
        "service_b4ag0tm",
        "template_dvszrwi",
        e.target,
        "iJQbi1_jIyfXAVhEr",
      )

      console.log("Email enviado exitosamente:", result.text)
      setSubmitStatus("success")
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Error al enviar email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-16">
          <Badge className="bg-neon-blue text-carbon-gray px-4 py-2 text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4 mr-2" />
            Conectemos con propósito
          </Badge>
          <h1 className="text-4xl font-bold text-carbon-gray mb-4">Hablemos de tu proyecto</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estoy aquí para ayudarte a humanizar tu marca y crear conexiones auténticas con tu audiencia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 📝 FORMULARIO DE CONTACTO */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-carbon-gray">
                <Send className="w-5 h-5 text-neon-blue" />
                Envíame un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={sendEmail} className="space-y-6">
                {/* 👤 NOMBRE */}
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo *</Label>
                  <Input
                    id="nombre"
                    name="from_name"
                    placeholder="Tu nombre completo"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* 📧 EMAIL */}
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="tu@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* 📱 TELÉFONO */}
                <div className="space-y-2">
                  <Label htmlFor="telefono">Número de celular</Label>
                  <Input
                    id="telefono"
                    name="from_phone"
                    type="tel"
                    placeholder="+1 786 970 6933"
                    disabled={isSubmitting}
                  />
                </div>

                {/* 💼 RAZÓN DE CONTACTO */}
                <div className="space-y-2">
                  <Label htmlFor="razon">Razón de contacto *</Label>
                  <select
                    id="razon"
                    name="reason_for_contact"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-neon-blue focus:border-transparent"
                    disabled={isSubmitting}
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="curso-personalizado">Curso Personalizado</option>
                    <option value="sesion-fotos">Sesión de Fotos</option>
                    <option value="sesion-video">Sesión de Video</option>
                    <option value="produccion-contenido">Producción de Contenido</option>
                    <option value="consultoria-marca">Consultoría de Marca</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* 💬 MENSAJE */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Cuéntame sobre tu proyecto *</Label>
                  <Textarea
                    id="mensaje"
                    name="message"
                    placeholder="Describe tu proyecto, objetivos, presupuesto aproximado y cualquier detalle importante que me ayude a entender cómo puedo ayudarte a humanizar tu marca..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* 🎯 BOTÓN DE ENVÍO */}
                <Button
                  type="submit"
                  className="w-full bg-carbon-gray hover:bg-gray-800 text-white"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                {/* ✅ MENSAJES DE ESTADO */}
                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>¡Mensaje enviado! Te responderé pronto con el corazón.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Error al enviar. Inténtalo de nuevo o escríbeme directamente.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* 📞 INFORMACIÓN DE CONTACTO */}
          <div className="space-y-8">
            {/* 📱 CONTACTO DIRECTO */}
            <Card>
              <CardHeader>
                <CardTitle className="text-carbon-gray">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 📧 EMAIL */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-neon-blue bg-opacity-20 rounded-lg">
                    <Mail className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <p className="font-medium text-carbon-gray">Email</p>
                    <p className="text-gray-600 text-sm">digitalfirstproductionscorp@gmail.com</p>
                  </div>
                </div>

                {/* 📱 WHATSAPP */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warm-orange bg-opacity-20 rounded-lg">
                    <Phone className="w-5 h-5 text-warm-orange" />
                  </div>
                  <div>
                    <p className="font-medium text-carbon-gray">WhatsApp</p>
                    <p className="text-gray-600 text-sm">+1 786-970-6933</p>
                  </div>
                </div>

                {/* 📍 UBICACIÓN */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-carbon-gray bg-opacity-20 rounded-lg">
                    <MapPin className="w-5 h-5 text-carbon-gray" />
                  </div>
                  <div>
                    <p className="font-medium text-carbon-gray">Ubicación</p>
                    <p className="text-gray-600 text-sm">Miami, Florida - Servicios globales online</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ⏰ HORARIOS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-carbon-gray">
                  <Clock className="w-5 h-5" />
                  Horarios de Atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 AM - 2:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="text-gray-500">Solo emergencias</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-vapor-white rounded-lg">
                  <Badge className="bg-neon-blue text-carbon-gray mb-2">Respuesta rápida</Badge>
                  <p className="text-sm text-gray-700">Respondo todos los mensajes en menos de 24 horas</p>
                </div>
              </CardContent>
            </Card>

            {/* 🎯 LLAMADA A LA ACCIÓN */}
            <Card className="bg-gradient-to-r from-vapor-white to-gray-50 border-warm-orange border-2">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg text-carbon-gray mb-2">¿Prefieres una videollamada?</h3>
                <p className="text-gray-600 mb-4">
                  Agenda una sesión de bienvenida gratuita de 30 minutos para conocernos y hablar sobre tu proyecto
                </p>
                <Button
                  variant="outline"
                  className="w-full border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white"
                >
                  Agendar Sesión de Bienvenida
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
