"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react"

// 📞 SECCIÓN CONTACTO - Cómo te pueden contactar
export function ContactSection() {
  // 🔄 ESTADO DEL FORMULARIO - Controla si se está enviando
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // 📧 FUNCIÓN PARA ENVIAR EMAIL CON EMAILJS
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // 🚨 IMPORTANTE: Aquí va tu integración con EmailJS
      // 📝 PASO 1: Agrega este script en tu archivo app/layout.tsx, antes del </body>:
      /*
      <script 
        type="text/javascript" 
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
      </script>
      <script type="text/javascript">
        emailjs.init("iJQbi1_jIyfXAVhEr")
      </script>
      */

      // 📝 PASO 2: Esta es la función que enviará el email usando tus IDs:
      const result = await (window as any).emailjs.sendForm(
        "service_b4ag0tm", // Tu Service ID
        "template_dvszrwi", // Tu Template ID
        e.target, // El formulario completo
        "iJQbi1_jIyfXAVhEr", // Tu Public Key
      )

      console.log("Email enviado exitosamente:", result.text)
      setSubmitStatus("success")
      // Limpiar formulario
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Error al enviar email:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Resetear estado después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 📢 TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hablemos de tu proyecto</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {/* 📝 CAMBIA ESTA DESCRIPCIÓN */}
            Estoy aquí para ayudarte. Cuéntame sobre tu negocio y veamos cómo puedo ayudarte a crecer.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 📝 FORMULARIO DE CONTACTO */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-600" />
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
                  <Label htmlFor="email">Email *</Label>
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
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input
                    id="telefono"
                    name="from_phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    disabled={isSubmitting}
                  />
                </div>

                {/* 💼 TIPO DE PROYECTO */}
                <div className="space-y-2">
                  <Label htmlFor="servicio">¿Qué servicio te interesa?</Label>
                  <select
                    id="servicio"
                    name="reason_for_contact"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="desarrollo-web">Desarrollo Web</option>
                    <option value="marketing-digital">Marketing Digital</option>
                    <option value="diseno-grafico">Diseño Gráfico</option>
                    <option value="consultoria">Consultoría</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* 💬 MENSAJE */}
                <div className="space-y-2">
                  <Label htmlFor="mensaje">Cuéntame sobre tu proyecto *</Label>
                  <Textarea
                    id="mensaje"
                    name="message"
                    placeholder="Describe tu proyecto, objetivos, presupuesto aproximado y cualquier detalle importante..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* 🚨 NOTA IMPORTANTE SOBRE LA API */}
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-green-800">Formulario configurado con EmailJS</p>
                      <p className="text-green-700 mt-1">
                        Este formulario está listo para enviar emails reales. Solo necesitas agregar el script de
                        EmailJS en el layout principal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 🎯 BOTÓN DE ENVÍO */}
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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
                    <span>¡Mensaje enviado! Te responderé pronto.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>Error al enviar. Inténtalo de nuevo.</span>
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
                <CardTitle>Contacto directo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 📧 EMAIL - CAMBIA POR EL TUYO */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">maria@tuempresa.com</p>
                  </div>
                </div>

                {/* 📱 TELÉFONO - CAMBIA POR EL TUYO */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">+52 55 1234 5678</p>
                  </div>
                </div>

                {/* 📍 UBICACIÓN - CAMBIA POR LA TUYA */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-gray-600">Ciudad de México, México</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ⏰ HORARIOS */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Horarios de atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {/* 📝 CAMBIA ESTOS HORARIOS POR LOS TUYOS */}
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="font-medium">10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span className="text-gray-500">Solo emergencias</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <Badge className="bg-blue-500 text-white mb-2">Respuesta rápida</Badge>
                  <p className="text-sm text-blue-700">Respondo todos los mensajes en menos de 24 horas</p>
                </div>
              </CardContent>
            </Card>

            {/* 🎯 LLAMADA A LA ACCIÓN ADICIONAL */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">¿Prefieres una llamada?</h3>
                <p className="text-gray-600 mb-4">
                  Agenda una llamada gratuita de 15 minutos para hablar sobre tu proyecto
                </p>
                <Button variant="outline" className="w-full">
                  {/* 📝 NOTA: Aquí conectarás tu sistema de citas más adelante */}
                  Agendar llamada gratuita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
