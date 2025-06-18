import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"

// 📊 SEO OPTIMIZADO PARA DIGITAL FIRST PRODUCTIONS
export const metadata: Metadata = {
  title: "Digital First Productions - Cursos y Recursos Digitales",
  description:
    "Plataforma educativa profesional con cursos de marketing digital, recursos descargables, portafolio creativo y servicios personalizados.",
  keywords:
    "cursos marketing digital, recursos digitales, fotografía profesional, producción de contenido, Digital First Productions",
  authors: [{ name: "Digital First Productions" }],
  openGraph: {
    title: "Digital First Productions - Educación Digital Profesional",
    description: "Transforma tu negocio con nuestros cursos, recursos y servicios creativos",
    type: "website",
  },
    generator: 'v0.dev'
}

// 🏗️ LAYOUT PRINCIPAL CON NAVEGACIÓN GLOBAL
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-black">
        {/* 🧭 NAVEGACIÓN PRINCIPAL */}
        <Navigation />

        {/* 🎯 CONTENIDO PRINCIPAL */}
        <main className="min-h-screen">{children}</main>

        {/* 🦶 PIE DE PÁGINA */}
        <Footer />

        {/* 📧 EMAILJS INTEGRATION */}
        {/* 
        <script 
          type="text/javascript" 
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>
        <script type="text/javascript">
          {`emailjs.init("iJQbi1_jIyfXAVhEr")`}
        </script>
        */}

        {/* 💳 PAYPAL INTEGRATION */}
        {/* 
        <script src="https://www.paypal.com/sdk/js?client-id=ATSh6vUohf3I_mBUKEjBwuTgX46cpmbvIQ2Ab93mKBSSCkIialJHaIdBNeenR3WBXY6tX-SHpDgUjAFt&currency=USD"></script>
        */}

        {/* 📅 GOOGLE CALENDAR INTEGRATION */}
        {/* 
        <script src="https://apis.google.com/js/api.js"></script>
        */}
      </body>
    </html>
  )
}
