"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  BookOpen,
  Download,
  Users,
  Calendar,
  DollarSign,
  BarChart3,
  Edit,
  Plus,
  Eye,
  Trash2,
} from "lucide-react"

// ⚙️ DASHBOARD DE ADMINISTRACIÓN - Panel de control para María Fernanda
export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // 📊 ESTADÍSTICAS RÁPIDAS
  const stats = [
    { title: "Estudiantes Activos", value: "2,547", change: "+12%", icon: Users, color: "text-brand-turquoise" },
    { title: "Cursos Vendidos", value: "1,234", change: "+8%", icon: BookOpen, color: "text-brand-purple" },
    { title: "Ingresos del Mes", value: "$45,678", change: "+15%", icon: DollarSign, color: "text-green-600" },
    { title: "Recursos Descargados", value: "8,901", change: "+23%", icon: Download, color: "text-blue-600" },
  ]

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* 📢 ENCABEZADO */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-carbon-gray mb-2">Panel de Administración</h1>
        <p className="text-gray-600">Bienvenida María Fernanda, aquí puedes gestionar todo tu sitio web</p>
      </div>

      {/* 📊 ESTADÍSTICAS RÁPIDAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-carbon-gray">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.change} vs mes anterior</p>
                </div>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 📱 TABS DE ADMINISTRACIÓN */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="courses">Cursos</TabsTrigger>
          <TabsTrigger value="resources">Recursos</TabsTrigger>
          <TabsTrigger value="bookings">Reservas</TabsTrigger>
          <TabsTrigger value="messages">Mensajes</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>

        {/* 📊 TAB RESUMEN */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-brand-turquoise" />
                  Actividad Reciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-vapor-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-turquoise rounded-full"></div>
                      <span className="text-sm">Nueva venta: Curso de IA</span>
                    </div>
                    <span className="text-xs text-gray-500">Hace 2 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-vapor-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                      <span className="text-sm">Nuevo mensaje de contacto</span>
                    </div>
                    <span className="text-xs text-gray-500">Hace 15 min</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-vapor-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Reserva confirmada: Sesión de fotos</span>
                    </div>
                    <span className="text-xs text-gray-500">Hace 1 hora</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-brand-purple" />
                  Próximas Citas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border-l-4 border-brand-turquoise bg-vapor-white rounded-r-lg">
                    <div>
                      <p className="font-medium text-sm">Sesión de Fotos - Ana García</p>
                      <p className="text-xs text-gray-500">Hoy, 2:00 PM</p>
                    </div>
                    <Badge className="bg-brand-turquoise text-white">Hoy</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border-l-4 border-brand-purple bg-vapor-white rounded-r-lg">
                    <div>
                      <p className="font-medium text-sm">Curso Personalizado - Carlos López</p>
                      <p className="text-xs text-gray-500">Mañana, 10:00 AM</p>
                    </div>
                    <Badge className="bg-brand-purple text-white">Mañana</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* 📚 TAB CURSOS */}
        <TabsContent value="courses" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-carbon-gray">Gestión de Cursos</h2>
            <Button className="bg-brand-turquoise hover:bg-teal-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Curso
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tus Cursos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* 📝 AQUÍ SE MOSTRARÁN TUS CURSOS REALES */}
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-brand-turquoise rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Curso de Ejemplo</h3>
                      <p className="text-sm text-gray-600">12 estudiantes • $199.99</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 📂 TAB RECURSOS */}
        <TabsContent value="resources" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-carbon-gray">Gestión de Recursos</h2>
            <Button className="bg-brand-purple hover:bg-purple-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Recurso
            </Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Aquí podrás gestionar todos tus recursos descargables</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 📅 TAB RESERVAS */}
        <TabsContent value="bookings" className="space-y-6">
          <h2 className="text-2xl font-bold text-carbon-gray">Gestión de Reservas</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Aquí verás todas las reservas de tus servicios</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* 📧 TAB MENSAJES */}
        <TabsContent value="messages" className="space-y-6">
          <h2 className="text-2xl font-bold text-carbon-gray">Mensajes de Contacto</h2>
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-gray-500">Aquí verás todos los mensajes del formulario de contacto</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ⚙️ TAB CONFIGURACIÓN */}
        <TabsContent value="settings" className="space-y-6">
          <h2 className="text-2xl font-bold text-carbon-gray">Configuración del Sitio</h2>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Información Personal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Nombre</label>
                  <p className="text-gray-600">María Fernanda Suárez</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <p className="text-gray-600">digitalfirstproductionscorp@gmail.com</p>
                </div>
                <div>
                  <label className="text-sm font-medium">Teléfono</label>
                  <p className="text-gray-600">+1 786-970-6933</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Edit className="w-4 h-4 mr-2" />
                  Editar Información
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Configuración del Sitio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Colores de Marca</label>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-8 h-8 bg-brand-turquoise rounded-full"></div>
                    <div className="w-8 h-8 bg-brand-purple rounded-full"></div>
                    <div className="w-8 h-8 bg-carbon-gray rounded-full"></div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Configuración Avanzada
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
