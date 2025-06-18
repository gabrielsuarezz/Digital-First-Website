import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react"

// 🦶 PIE DE PÁGINA PROFESIONAL
export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 🏢 INFORMACIÓN DE LA EMPRESA */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-lg">DF</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Digital First</h3>
                <p className="text-sm text-gray-300">Productions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformamos ideas en experiencias digitales extraordinarias. Educación, creatividad y tecnología en un
              solo lugar.
            </p>
          </div>

          {/* 🔗 ENLACES RÁPIDOS */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navegación</h4>
            <div className="space-y-2">
              {[
                { href: "/cursos", label: "Cursos" },
                { href: "/recursos", label: "Recursos" },
                { href: "/portafolio", label: "Portafolio" },
                { href: "/reservas", label: "Reservas" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* 📞 CONTACTO */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">info@digitalfirst.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300">Ciudad, País</span>
              </div>
            </div>
          </div>

          {/* 📱 REDES SOCIALES */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/digitalfirst"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/digitalfirst"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@digitalfirst"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 📜 COPYRIGHT */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 Digital First Productions. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
