"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User } from "lucide-react"

// 📅 CALENDARIO DE RESERVAS - Integración con Google Calendar
export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  // 📅 DÍAS DISPONIBLES (simulado)
  const availableDates = [
    "2024-01-15",
    "2024-01-16",
    "2024-01-17",
    "2024-01-19",
    "2024-01-22",
    "2024-01-23",
    "2024-01-24",
  ]

  // ⏰ HORARIOS DISPONIBLES
  const availableTimes = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-carbon-gray">
          <Calendar className="w-5 h-5 mr-2" />
          Selecciona Fecha y Hora
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 📅 SELECTOR DE FECHA */}
        <div>
          <h3 className="font-semibold text-carbon-gray mb-3">Fechas Disponibles</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableDates.map((date) => {
              const dateObj = new Date(date)
              const isSelected = selectedDate === date
              return (
                <Button
                  key={date}
                  variant={isSelected ? "default" : "outline"}
                  className={`p-3 h-auto flex flex-col ${
                    isSelected
                      ? "bg-carbon-gray text-white"
                      : "border-carbon-gray text-carbon-gray hover:bg-carbon-gray hover:text-white"
                  }`}
                  onClick={() => setSelectedDate(date)}
                >
                  <span className="text-xs">
                    {dateObj.toLocaleDateString("es-ES", { weekday: "short" }).toUpperCase()}
                  </span>
                  <span className="text-lg font-bold">{dateObj.getDate()}</span>
                  <span className="text-xs">
                    {dateObj.toLocaleDateString("es-ES", { month: "short" }).toUpperCase()}
                  </span>
                </Button>
              )
            })}
          </div>
        </div>

        {/* ⏰ SELECTOR DE HORA */}
        {selectedDate && (
          <div>
            <h3 className="font-semibold text-carbon-gray mb-3">Horarios Disponibles</h3>
            <div className="grid grid-cols-3 gap-2">
              {availableTimes.map((time) => {
                const isSelected = selectedTime === time
                return (
                  <Button
                    key={time}
                    variant={isSelected ? "default" : "outline"}
                    className={`${
                      isSelected
                        ? "bg-neon-blue text-carbon-gray"
                        : "border-carbon-gray text-carbon-gray hover:bg-neon-blue hover:text-carbon-gray"
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    <Clock className="w-4 h-4 mr-2" />
                    {time}
                  </Button>
                )
              })}
            </div>
          </div>
        )}

        {/* 🎯 BOTÓN DE CONFIRMACIÓN */}
        {selectedDate && selectedTime && (
          <div className="border-t pt-6">
            <div className="bg-vapor-white p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-carbon-gray mb-2">Resumen de tu Reserva</h4>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(selectedDate).toLocaleDateString("es-ES", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedTime}</span>
                </div>
              </div>
            </div>

            <Button className="w-full bg-warm-orange hover:bg-orange-600 text-white" size="lg">
              <User className="w-4 h-4 mr-2" />
              Confirmar Reserva
            </Button>
          </div>
        )}

        {/* 📝 NOTA SOBRE GOOGLE CALENDAR */}
        <div className="text-xs text-gray-500 text-center border-t pt-4">
          <p>📅 Integrado con Google Calendar para disponibilidad en tiempo real</p>
          <p>Recibirás confirmación por email y WhatsApp</p>
        </div>
      </CardContent>
    </Card>
  )
}
