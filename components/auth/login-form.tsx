"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"

// 👤 FORMULARIO DE LOGIN - Autenticación de usuarios
export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Aquí iría la lógica de autenticación
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-vapor-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* 🏢 LOGO Y ENCABEZADO */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-carbon-gray rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">DF</span>
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-carbon-gray">
            {isLogin ? "Bienvenido de vuelta" : "Únete a nuestra comunidad"}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin
              ? "Accede a tus cursos y recursos con esencia"
              : "Crea tu cuenta para comenzar tu transformación digital"}
          </p>
        </div>

        {/* 📝 FORMULARIO */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-carbon-gray">
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 👤 NOMBRE (solo en registro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input id="name" name="name" type="text" placeholder="Tu nombre completo" className="pl-10" />
                  </div>
                </div>
              )}

              {/* 📧 EMAIL */}
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="email" name="email" type="email" placeholder="tu@email.com" className="pl-10" required />
                </div>
              </div>

              {/* 📱 TELÉFONO (solo en registro) */}
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Número de celular</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 786 970 6933" />
                </div>
              )}

              {/* 🔒 CONTRASEÑA */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Tu contraseña"
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* ✅ RECORDAR / TÉRMINOS */}
              <div className="flex items-center justify-between">
                {isLogin ? (
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                      Recordarme
                    </label>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" required />
                    <label htmlFor="terms" className="text-sm text-gray-600 cursor-pointer">
                      Acepto los{" "}
                      <Link href="/terminos" className="text-neon-blue hover:underline">
                        términos y condiciones
                      </Link>
                    </label>
                  </div>
                )}

                {isLogin && (
                  <Link href="/recuperar-password" className="text-sm text-neon-blue hover:underline">
                    ¿Olvidaste tu contraseña?
                  </Link>
                )}
              </div>

              {/* 🎯 BOTÓN DE ENVÍO */}
              <Button
                type="submit"
                className="w-full bg-carbon-gray hover:bg-gray-800 text-white"
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {isLogin ? "Iniciando sesión..." : "Creando cuenta..."}
                  </>
                ) : (
                  <>{isLogin ? "Iniciar Sesión" : "Crear Cuenta"}</>
                )}
              </Button>
            </form>

            {/* 🔄 CAMBIAR ENTRE LOGIN Y REGISTRO */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{" "}
                <button
                  type="button"
                  className="text-neon-blue hover:underline font-medium"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 📝 NOTA SOBRE ACCESO */}
        <div className="text-center">
          <p className="text-xs text-gray-500">
            El registro solo es necesario para comprar cursos, descargar recursos o reservar servicios.
            <br />
            Puedes navegar libremente por todo el sitio sin registrarte.
          </p>
        </div>
      </div>
    </div>
  )
}
