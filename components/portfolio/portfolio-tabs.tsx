"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Camera, Video, Download, Eye, Lock } from "lucide-react"

// 🎨 TABS DEL PORTAFOLIO - Fotografía, Video, Entregas
export function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("fotografia")
  const [clientPin, setClientPin] = useState("")

  const tabs = [
    { id: "fotografia", label: "Fotografía", icon: Camera },
    { id: "video", label: "Video", icon: Video },
    { id: "entregas", label: "Entregas para Clientes", icon: Download },
  ]

  // 📸 GALERÍA DE FOTOGRAFÍA
  const photographyGallery = [
    { id: 1, title: "Sesión de Marca Personal", category: "Branding" },
    { id: 2, title: "Fotografía de Producto", category: "Comercial" },
    { id: 3, title: "Retrato Corporativo", category: "Corporativo" },
    { id: 4, title: "Sesión Creativa", category: "Arte" },
    { id: 5, title: "Evento Empresarial", category: "Eventos" },
    { id: 6, title: "Lifestyle Brand", category: "Lifestyle" },
  ]

  // 🎥 GALERÍA DE VIDEO
  const videoGallery = [
    { id: 1, title: "Video Promocional - Marca Personal", duration: "2:30" },
    { id: 2, title: "Testimonial Cliente", duration: "1:45" },
    { id: 3, title: "Behind the Scenes", duration: "3:15" },
    { id: 4, title: "Reel Corporativo", duration: "0:30" },
  ]

  return (
    <div className="space-y-8">
      {/* 📱 NAVEGACIÓN DE TABS */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "outline"}
            className={`flex items-center space-x-2 ${
              activeTab === tab.id
                ? "bg-carbon-gray text-white"
                : "border-carbon-gray text-carbon-gray hover:bg-carbon-gray hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <tab.icon className="w-4 h-4" />
            <span>{tab.label}</span>
          </Button>
        ))}
      </div>

      {/* 📸 TAB DE FOTOGRAFÍA */}
      {activeTab === "fotografia" && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-carbon-gray mb-2">Galería de Fotografía</h2>
            <p className="text-gray-600">Explora nuestros trabajos fotográficos más destacados</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photographyGallery.map((photo) => (
              <Card key={photo.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square bg-gradient-to-br from-vapor-white to-gray-100 rounded-t-lg flex items-center justify-center group-hover:from-gray-100 group-hover:to-gray-200 transition-all">
                    <Camera className="w-12 h-12 text-carbon-gray group-hover:text-gray-600 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-carbon-gray mb-1">{photo.title}</h3>
                    <p className="text-sm text-gray-600">{photo.category}</p>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Galería
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 🎥 TAB DE VIDEO */}
      {activeTab === "video" && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-carbon-gray mb-2">Galería de Video</h2>
            <p className="text-gray-600">Descubre nuestras producciones audiovisuales</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {videoGallery.map((video) => (
              <Card key={video.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-carbon-gray to-gray-800 rounded-t-lg flex items-center justify-center group-hover:from-gray-800 group-hover:to-black transition-all">
                    <Video className="w-16 h-16 text-white group-hover:text-gray-300 transition-colors" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-carbon-gray mb-1">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">Duración: {video.duration}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Video className="w-4 h-4 mr-2" />
                      Reproducir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* 📦 TAB DE ENTREGAS PARA CLIENTES */}
      {activeTab === "entregas" && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-carbon-gray mb-2">Entregas para Clientes</h2>
            <p className="text-gray-600">Accede a tu contenido personalizado con tu PIN exclusivo</p>
          </div>

          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="text-center">
                  <Lock className="w-12 h-12 text-carbon-gray mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-carbon-gray mb-2">Acceso con PIN</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ingresa el PIN de 5 dígitos que recibiste para acceder a tu contenido personalizado
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pin">PIN de Acceso</Label>
                  <Input
                    id="pin"
                    type="text"
                    placeholder="12345"
                    maxLength={5}
                    value={clientPin}
                    onChange={(e) => setClientPin(e.target.value.replace(/\D/g, ""))}
                    className="text-center text-lg tracking-widest"
                  />
                </div>

                <Button
                  className="w-full bg-carbon-gray hover:bg-gray-800 text-white"
                  disabled={clientPin.length !== 5}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Acceder a mis Archivos
                </Button>

                <div className="text-center text-xs text-gray-500">¿No tienes tu PIN? Contacta a María Fernanda</div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  )
}
