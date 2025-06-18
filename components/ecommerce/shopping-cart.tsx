"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react"

// 🛒 CARRITO DE COMPRAS - Donde el usuario ve sus productos seleccionados
export function ShoppingCart() {
  // 📦 PRODUCTOS DE EJEMPLO - Reemplaza estos por tus cursos/recursos reales
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Curso Completo de Marketing Digital",
      price: 199.99,
      quantity: 1,
      type: "curso",
      description: "Aprende marketing digital desde cero hasta experto",
    },
    {
      id: 2,
      title: "Plantillas de Redes Sociales",
      price: 49.99,
      quantity: 2,
      type: "recurso",
      description: "Pack de 50 plantillas profesionales para Instagram",
    },
    {
      id: 3,
      title: "Guía de Google Ads",
      price: 79.99,
      quantity: 1,
      type: "guia",
      description: "Manual completo para dominar Google Ads",
    },
  ])

  // 🔢 FUNCIONES PARA MANEJAR CANTIDADES
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  // 💰 CÁLCULOS DEL CARRITO
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const taxes = subtotal * 0.1 // 10% de impuestos (ajusta según tu país)
  const total = subtotal + taxes

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 📢 TÍTULO DEL CARRITO */}
      <div className="flex items-center gap-3">
        <ShoppingBag className="w-8 h-8 text-gray-900" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tu Carrito</h1>
          <p className="text-gray-600">
            {totalItems} {totalItems === 1 ? "producto" : "productos"} en tu carrito
          </p>
        </div>
      </div>

      {cartItems.length === 0 ? (
        // 🛒 CARRITO VACÍO
        <Card className="text-center py-12">
          <CardContent>
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tu carrito está vacío</h3>
            <p className="text-gray-600 mb-6">Agrega algunos cursos o recursos para comenzar</p>
            <Button>
              <ArrowRight className="mr-2 w-4 h-4" />
              Ver productos
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 📦 LISTA DE PRODUCTOS */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    {/* 🖼️ IMAGEN DEL PRODUCTO (PLACEHOLDER) */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-2xl">
                        {item.type === "curso" && "📚"}
                        {item.type === "recurso" && "🎨"}
                        {item.type === "guia" && "📖"}
                      </div>
                    </div>

                    {/* 📝 INFORMACIÓN DEL PRODUCTO */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <Badge variant="outline" className="text-xs">
                            {item.type}
                          </Badge>
                        </div>

                        {/* 🗑️ BOTÓN ELIMINAR */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* 💰 PRECIO Y CANTIDAD */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="text-lg font-bold text-gray-900">${item.price.toFixed(2)}</div>

                        {/* 🔢 CONTROLES DE CANTIDAD */}
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>

                          <span className="w-8 text-center font-medium">{item.quantity}</span>

                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 💰 RESUMEN DEL CARRITO */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Resumen del pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* 📊 DESGLOSE DE PRECIOS */}
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Impuestos</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* 🎯 BOTÓN PRINCIPAL */}
                <Button className="w-full" size="lg">
                  Proceder al Pago
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                {/* 🔒 MENSAJE DE SEGURIDAD */}
                <div className="text-xs text-gray-500 text-center">
                  <p>🔒 Pago 100% seguro con PayPal</p>
                  <p>Garantía de devolución de 30 días</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
