import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Target, Users } from "lucide-react"

// 👋 SECCIÓN SOBRE TI - Personaliza tu historia:
export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* 📢 TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mi Historia</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            De empleada corporativa a emprendedora exitosa: mi camino hacia el marketing digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 🖼️ IMAGEN PERSONAL - REEMPLAZA CON TU FOTO */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-200 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">👩‍💼</div>
            </div>
            {/* 📝 NOTA: Aquí puedes poner tu foto real más adelante */}
          </div>

          {/* 📝 TU HISTORIA - CAMBIA TODO ESTE CONTENIDO */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Hola, soy María González</h3>

            <p className="text-gray-600 leading-relaxed">
              Con más de 5 años de experiencia en marketing digital, he ayudado a más de 50 pequeñas empresas a
              transformar su presencia online y multiplicar sus ventas por 3.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Mi pasión nació cuando trabajaba en una corporación y vi cómo las pequeñas empresas luchaban por competir
              online. Decidí especializarme para nivelar el campo de juego.
            </p>

            {/* ✅ TUS FORTALEZAS - CAMBIA ESTAS POR LAS TUYAS */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Estrategias de redes sociales que generan ventas reales</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Campañas de Google Ads con ROI comprobado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Acompañamiento personalizado durante todo el proceso</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🎯 TUS VALORES - CAMBIA ESTOS POR LOS TUYOS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Pasión</h4>
              <p className="text-gray-600">Amo lo que hago y eso se refleja en cada proyecto</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Precisión</h4>
              <p className="text-gray-600">Cada estrategia está diseñada para alcanzar tus objetivos</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Colaboración</h4>
              <p className="text-gray-600">Trabajamos juntos para lograr el éxito de tu negocio</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
