import { BookingCalendar } from "@/components/booking/booking-calendar"
import { ServicesGrid } from "@/components/booking/services-grid"

// 📅 PÁGINA DE RESERVAS - Sistema de citas
export default function ReservasPage() {
  return (
    <div className="min-h-screen bg-vapor-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 📢 ENCABEZADO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-carbon-gray mb-4">Reserva tu Sesión</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agenda una sesión personalizada y comencemos a humanizar tu marca juntos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 🎯 SERVICIOS DISPONIBLES */}
          <div className="lg:col-span-1">
            <ServicesGrid />
          </div>

          {/* 📅 CALENDARIO */}
          <div className="lg:col-span-2">
            <BookingCalendar />
          </div>
        </div>
      </div>
    </div>
  )
}
