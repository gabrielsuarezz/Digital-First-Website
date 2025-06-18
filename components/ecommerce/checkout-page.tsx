"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, CreditCard, Mail, User, Lock, ArrowLeft } from "lucide-react"

// 💳 PÁGINA DE CHECKOUT - Finalizar compra
export function CheckoutPage() {
  // 🔄 ESTADO DEL PROCESO
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)

  // 📦 PRODUCTOS DEL CARRITO (normalmente vendrían del estado global)
  const cartItems = [
    {
      id: 1,
      title: "Curso Completo de Marketing Digital",
      price: 199.99,
      quantity: 1,
    },
    {
      id: 2,
      title: "Plantillas de Redes Sociales",
      price: 49.99,
      quantity: 2,
    },
  ]

  // 💰 CÁLCULOS
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const taxes = subtotal * 0.1
  const total = subtotal + taxes

  // 📝 INFORMACIÓN DEL CLIENTE
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* 📢 ENCABEZADO */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al carrito
          </Button>
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Finalizar Compra</h1>
        <p className="text-gray-600">Completa tu pedido de forma rápida y segura</p>
      </div>

      {/* 📊 INDICADOR DE PASOS */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-8">
          {[
            { step: 1, title: "Información", icon: User },
            { step: 2, title: "Resumen", icon: CheckCircle },
            { step: 3, title: "Pago", icon: CreditCard },
          ].map(({ step, title, icon: Icon }) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep >= step ? "bg-black text-white" : "bg-gray-200 text-gray-500"
                }`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span className={`ml-2 ${currentStep >= step ? "text-black font-medium" : "text-gray-500"}`}>
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* 📝 FORMULARIO PRINCIPAL */}
        <div className="lg:col-span-2 space-y-6">
          {/* PASO 1: INFORMACIÓN DE CONTACTO */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-800">Acceso inmediato</p>
                      <p className="text-blue-700">
                        Recibirás el acceso a tus cursos y recursos por email inmediatamente después del pago.
                      </p>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={() => setCurrentStep(2)}
                  disabled={!customerInfo.name || !customerInfo.email}
                >
                  Continuar al Resumen
                </Button>
              </CardContent>
            </Card>
          )}

          {/* PASO 2: RESUMEN DEL PEDIDO */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center py-2">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">Cantidad: {item.quantity}</p>
                    </div>
                    <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Impuestos</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setCurrentStep(1)} className="flex-1">
                    Volver
                  </Button>
                  <Button onClick={() => setCurrentStep(3)} className="flex-1">
                    Proceder al Pago
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* PASO 3: MÉTODO DE PAGO */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Método de Pago
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Selecciona tu método de pago</h3>
                  <p className="text-gray-600 mb-6">Pago 100% seguro con PayPal</p>
                </div>

                {/* 🚨 CONTENEDOR PARA EL BOTÓN DE PAYPAL */}
                <div className="space-y-4">
                  {/* 📝 ESTE ES EL DIV DONDE SE RENDERIZARÁ EL BOTÓN DE PAYPAL */}
                  <div
                    id="paypal-button-container"
                    className="min-h-[50px] border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center"
                  >
                    {/* 🔄 BOTÓN TEMPORAL MIENTRAS NO ESTÉ CONFIGURADO PAYPAL */}
                    <div className="text-center">
                      <div className="text-2xl mb-2">💳</div>
                      <p className="text-gray-600 text-sm">El botón de PayPal aparecerá aquí</p>
                      <p className="text-gray-500 text-xs">Una vez que configures la integración</p>
                    </div>
                  </div>

                  {/* 🔒 MENSAJE DE SEGURIDAD */}
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Lock className="w-4 h-4" />
                    <span>Pago seguro procesado por PayPal</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setCurrentStep(2)} className="flex-1">
                    Volver
                  </Button>
                </div>

                {/* 📝 COMENTARIOS PARA LA INTEGRACIÓN DE PAYPAL */}
                {/* 
                --- CONFIGURACIÓN DE PAYPAL (CÓDIGO QUE DEBES PEGAR) ---
                
                Detalles de tu aplicación PayPal:
                - App Name: Digital First Website
                - Client ID (Público): ATSh6vUohf3I_mBUKEjBwuTgX46cpmbvIQ2Ab93mKBSSCkIialJHaIdBNeenR3WBXY6tX-SHpDgUjAFt
                - Secret Key (PRIVADO - NUNCA EN EL FRONT-END): EPdPk68NF16wHg2svJIrNnrNqUdcpjnXZLq3l2JVKQ8fZc52kQeP-VggFg3ZoIg1-Sw1mrVsKZc-YGO7
                - Email de la cuenta Live PayPal: digitalfirstproductionscorp@gmail.com

                PASO 1: Incluir el script del SDK de JavaScript de PayPal en tu archivo app/layout.tsx
                Pégalo justo antes de la etiqueta de cierre </body>.
                
                Ejemplo de script a pegar en app/layout.tsx:
                <script src="https://www.paypal.com/sdk/js?client-id=ATSh6vUohf3I_mBUKEjBwuTgX46cpmbvIQ2Ab93mKBSSCkIialJHaIdBNeenR3WBXY6tX-SHpDgUjAFt&currency=USD"></script>

                PASO 2: Inicializar y renderizar el botón de PayPal
                Agrega este código en un useEffect dentro de este componente:

                useEffect(() => {
                  if (typeof window !== 'undefined' && window.paypal) {
                    window.paypal.Buttons({
                      style: {
                        layout: 'vertical',
                        color: 'black',
                        shape: 'rect',
                        label: 'paypal'
                      },
                      createOrder: function(data, actions) {
                        return actions.order.create({
                          purchase_units: [{
                            amount: {
                              value: total.toFixed(2) // Monto dinámico del carrito
                            }
                          }]
                        });
                      },
                      onApprove: function(data, actions) {
                        // Aquí llamarías a tu función serverless para capturar el pago
                        return fetch('/api/paypal-capture', {
                          method: 'post',
                          headers: {
                            'content-type': 'application/json'
                          },
                          body: JSON.stringify({
                            orderID: data.orderID
                          })
                        }).then(function(response) {
                          return response.json();
                        }).then(function(orderData) {
                          alert('Pago completado! Transacción ID: ' + orderData.id);
                          // Redirigir a página de confirmación
                        }).catch(function(error) {
                          console.error('Error al capturar el pago:', error);
                          alert('Hubo un error al procesar el pago.');
                        });
                      },
                      onCancel: function (data) {
                        console.log('Pago cancelado por el usuario.', data);
                        alert('Pago cancelado.');
                      },
                      onError: function (err) {
                        console.error('Error de PayPal:', err);
                        alert('Ocurrió un error con PayPal.');
                      }
                    }).render('#paypal-button-container');
                  }
                }, [total]);

                IMPORTANTE: 
                1. La Secret Key NO DEBE SER USADA en el front-end
                2. Necesitarás crear una función serverless en /api/paypal-capture para capturar pagos de forma segura
                3. El monto debe ser validado en el backend por seguridad
                
                --- FIN DE LA CONFIGURACIÓN DE PAYPAL ---
                */}
              </CardContent>
            </Card>
          )}
        </div>

        {/* 📊 RESUMEN LATERAL */}
        <div className="lg:col-span-1">
          <Card className="sticky top-6">
            <CardHeader>
              <CardTitle>Tu Pedido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* 📦 PRODUCTOS */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">Cantidad: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* 💰 TOTALES */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Impuestos</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* 🎁 BENEFICIOS */}
              <div className="space-y-2 pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Acceso inmediato</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Garantía 30 días</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <CheckCircle className="w-4 h-4" />
                  <span>Soporte incluido</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
