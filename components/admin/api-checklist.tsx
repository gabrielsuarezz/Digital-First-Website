"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertCircle, ExternalLink, Mail, CreditCard, Calendar, BarChart3 } from "lucide-react"

// 📋 CHECKLIST DE APIs - Para que sepas qué tienes y qué falta
export function ApiChecklist() {
  // 🔧 ESTADO DE TUS APIs - Cambia estos valores cuando conectes cada API
  const apis = [
    {
      nombre: "Email (Formulario de contacto)",
      descripcion: "Para recibir mensajes de tu formulario",
      icono: Mail,
      conectada: false, // 📝 CAMBIA A true cuando conectes
      prioridad: "alta",
      proveedor: "Resend / EmailJS",
      costo: "Gratis hasta 3,000 emails/mes",
      pasos: [
        "1. Crear cuenta en Resend.com",
        "2. Obtener API Key",
        "3. Agregar la clave en el archivo de configuración",
        "4. Probar el formulario",
      ],
    },
    {
      nombre: "Google Analytics",
      descripcion: "Para ver estadísticas de tu sitio",
      icono: BarChart3,
      conectada: false, // 📝 CAMBIA A true cuando conectes
      prioridad: "alta",
      proveedor: "Google",
      costo: "Gratis",
      pasos: [
        "1. Crear cuenta en Google Analytics",
        "2. Crear propiedad para tu sitio",
        "3. Obtener ID de seguimiento",
        "4. Agregar código al sitio",
      ],
    },
    {
      nombre: "Pagos Online",
      descripcion: "Para procesar pagos si vendes servicios",
      icono: CreditCard,
      conectada: false, // 📝 CAMBIA A true cuando conectes
      prioridad: "media",
      proveedor: "Stripe / PayPal",
      costo: "2.9% + $0.30 por transacción",
      pasos: [
        "1. Crear cuenta en Stripe.com",
        "2. Verificar tu negocio",
        "3. Obtener claves API",
        "4. Integrar sistema de pagos",
      ],
    },
    {
      nombre: "Sistema de Citas",
      descripcion: "Para que clientes agenden citas contigo",
      icono: Calendar,
      conectada: false, // 📝 CAMBIA A true cuando conectes
      prioridad: "baja",
      proveedor: "Calendly / Cal.com",
      costo: "Gratis plan básico",
      pasos: [
        "1. Crear cuenta en Calendly",
        "2. Configurar disponibilidad",
        "3. Personalizar formulario",
        "4. Integrar en el sitio",
      ],
    },
  ]

  const getPriorityColor = (prioridad: string) => {
    switch (prioridad) {
      case "alta":
        return "bg-red-100 text-red-800"
      case "media":
        return "bg-yellow-100 text-yellow-800"
      case "baja":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const conectadas = apis.filter((api) => api.conectada).length
  const total = apis.length

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 📊 RESUMEN GENERAL */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Estado de tus APIs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-600">
              {conectadas}/{total}
            </div>
            <div>
              <p className="font-medium">APIs conectadas</p>
              <p className="text-sm text-gray-600">
                {conectadas === 0
                  ? "Ninguna API conectada aún"
                  : conectadas === total
                    ? "¡Todas las APIs están listas!"
                    : `${total - conectadas} APIs pendientes`}
              </p>
            </div>
          </div>

          {/* 📈 BARRA DE PROGRESO */}
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(conectadas / total) * 100}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 📋 LISTA DE APIs */}
      <div className="grid gap-6">
        {apis.map((api, index) => (
          <Card key={index} className={`${api.conectada ? "border-green-200 bg-green-50" : "border-gray-200"}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${api.conectada ? "bg-green-100" : "bg-gray-100"}`}>
                    <api.icono className={`w-5 h-5 ${api.conectada ? "text-green-600" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{api.nombre}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{api.descripcion}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge className={getPriorityColor(api.prioridad)}>{api.prioridad}</Badge>
                  {api.conectada ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* 💰 INFORMACIÓN DEL PROVEEDOR */}
              <div className="grid md:grid-cols-2 gap-4 p-3 bg-white rounded-lg border">
                <div>
                  <p className="text-sm font-medium text-gray-700">Proveedor recomendado</p>
                  <p className="text-sm text-gray-600">{api.proveedor}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Costo</p>
                  <p className="text-sm text-gray-600">{api.costo}</p>
                </div>
              </div>

              {/* 📝 PASOS PARA CONECTAR */}
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Pasos para conectar:</h4>
                <ul className="space-y-1">
                  {api.pasos.map((paso, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {paso}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 🎯 BOTONES DE ACCIÓN */}
              <div className="flex gap-2">
                {!api.conectada && (
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ir al proveedor
                  </Button>
                )}
                <Button variant={api.conectada ? "secondary" : "default"} size="sm" disabled={api.conectada}>
                  {api.conectada ? "Conectada ✓" : "Marcar como conectada"}
                </Button>
              </div>

              {/* ⚠️ NOTA IMPORTANTE */}
              {!api.conectada && api.prioridad === "alta" && (
                <div className="flex items-start gap-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-800">Prioridad alta</p>
                    <p className="text-yellow-700">Esta API es importante para el funcionamiento básico de tu sitio.</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 🎯 SIGUIENTE PASO */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="pt-6">
          <h3 className="font-bold text-lg mb-2">¿Qué sigue?</h3>
          <p className="text-gray-600 mb-4">
            Tu sitio ya está funcionando perfectamente sin APIs. Puedes conectarlas una por una cuando estés listo,
            empezando por las de prioridad alta.
          </p>
          <div className="flex gap-2">
            <Button>Empezar con Email</Button>
            <Button variant="outline">Ver documentación completa</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
