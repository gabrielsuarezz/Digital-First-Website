"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ShoppingCart,
  User,
  BookOpen,
  Download,
  Camera,
  Calendar,
  Mail,
  UserCircle,
  Settings,
} from "lucide-react"

// 🧭 NAVEGACIÓN PRINCIPAL - Con logo real y colores actualizados
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems] = useState(2) // Simulación del carrito

  // 📱 ENLACES DE NAVEGACIÓN
  const navLinks = [
    { href: "/", label: "Inicio", icon: null },
    { href: "/cursos", label: "Cursos", icon: BookOpen },
    { href: "/recursos", label: "Recursos", icon: Download },
    { href: "/portafolio", label: "Portafolio", icon: Camera },
    { href: "/reservas", label: "Reservas", icon: Calendar },
    { href: "/sobre-mi", label: "Sobre Mí", icon: UserCircle },
    { href: "/contacto", label: "Contacto", icon: Mail },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 🏢 LOGO DIGITAL FIRST PRODUCTIONS - REAL */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.png"
                alt="Digital First Productions"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-xl text-carbon-gray">Digital First</h1>
              <p className="text-xs text-brand-purple -mt-1 font-medium">Productions</p>
            </div>
          </Link>

          {/* 🖥️ NAVEGACIÓN DESKTOP */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-1 text-gray-700 hover:text-carbon-gray transition-colors font-medium"
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* 🛒 ACCIONES DEL USUARIO */}
          <div className="flex items-center space-x-4">
            {/* 🛍️ CARRITO */}
            <Link href="/carrito" className="relative">
              <Button variant="ghost" size="sm">
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-brand-turquoise text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* ⚙️ ADMIN (solo para María Fernanda) */}
            <Link href="/admin">
              <Button variant="ghost" size="sm" className="text-brand-purple hover:bg-brand-purple hover:text-white">
                <Settings className="w-4 h-4" />
              </Button>
            </Link>

            {/* 👤 USUARIO */}
            <Link href="/login">
              <Button
                variant="outline"
                size="sm"
                className="border-carbon-gray text-carbon-gray hover:bg-carbon-gray hover:text-white"
              >
                <User className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Iniciar Sesión</span>
              </Button>
            </Link>

            {/* 📱 MENÚ MÓVIL */}
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* 📱 MENÚ MÓVIL DESPLEGABLE */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-vapor-white hover:text-carbon-gray transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
