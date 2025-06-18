// 🔧 CONFIGURACIÓN DEL SITIO - FÁCIL DE EDITAR
export const siteConfig = {
  // 🏢 INFORMACIÓN BÁSICA
  name: "Digital First Productions",
  tagline: "Más que visibilidad... dejamos huella con tu esencia",
  description:
    "Agencia de marketing emocional especializada en contenido visual, estrategia con alma y automatización auténtica.",

  // 👩‍💼 INFORMACIÓN DE MARÍA FERNANDA
  founder: {
    name: "María Fernanda Suárez",
    title: "Fundadora & Estratega",
    email: "digitalfirstproductionscorp@gmail.com",
    phone: "+1 786-970-6933",
    location: "Miami, Florida",
    bio: "Estratega de marketing digital, productora audiovisual y consultora de marcas con esencia.",
    experience: "7+ años",
    clients: "500+",
    rating: "4.9",
  },

  // 🎨 COLORES DE MARCA
  colors: {
    primary: "#1a1a1a", // Carbon Gray
    secondary: "#0ABCC6", // Brand Turquoise
    accent: "#7354A0", // Brand Purple
    background: "#ffffff",
    muted: "#f8fafc",
  },

  // 📱 REDES SOCIALES
  social: {
    instagram: "https://instagram.com/digitalfirst",
    youtube: "https://youtube.com/digitalfirst",
    tiktok: "https://tiktok.com/@digitalfirst",
    linkedin: "https://linkedin.com/company/digitalfirst",
  },

  // ⏰ HORARIOS
  schedule: {
    weekdays: "9:00 AM - 6:00 PM EST",
    saturday: "10:00 AM - 2:00 PM EST",
    sunday: "Solo emergencias",
    timezone: "EST",
  },

  // 💰 PRECIOS BASE (fácil de actualizar)
  pricing: {
    consultation: 0, // Sesión de bienvenida gratis
    personalizedCourse: 100,
    photoSession: 200,
    videoSession: 300,
    contentProduction1h: 120,
    contentProduction4h: 400,
  },
}

// 📚 CONFIGURACIÓN DE CURSOS - REEMPLAZA CON TUS CURSOS REALES
export const coursesConfig = [
  // 📝 NOTA: Aquí pondrás tus cursos exactos cuando me los digas
  {
    id: 1,
    title: "Curso de Ejemplo 1",
    description: "Descripción del curso que me vas a dictar",
    price: 199.99,
    originalPrice: 299.99,
    duration: "8 horas",
    modules: 12,
    level: "Principiante",
    category: "Marketing",
    featured: true,
  },
  // Agregar más cursos aquí...
]

// 📂 CONFIGURACIÓN DE RECURSOS
export const resourcesConfig = [
  {
    id: 1,
    title: "Plantillas de Instagram Stories",
    description: "Pack de 50 plantillas profesionales editables en Canva",
    price: 29.99,
    originalPrice: 49.99,
    type: "Plantillas",
    format: "Canva",
    isFree: false,
    category: "Redes Sociales",
    featured: true,
  },
  // Agregar más recursos aquí...
]

// 🎯 CONFIGURACIÓN DE SERVICIOS
export const servicesConfig = [
  {
    id: 1,
    title: "Sesión de Bienvenida",
    description: "Primera consulta gratuita para conocer tus necesidades",
    duration: "30 min",
    price: 0,
    icon: "Users",
    popular: false,
  },
  {
    id: 2,
    title: "Curso Personalizado Online",
    description: "Sesión de aprendizaje uno a uno adaptada a tus necesidades",
    duration: "1 hora",
    price: 100,
    icon: "BookOpen",
    popular: false,
  },
  {
    id: 3,
    title: "Sesión de Fotos",
    description: "Sesión fotográfica profesional para tu marca",
    duration: "2-3 horas",
    price: 200,
    icon: "Camera",
    popular: true,
  },
  // Más servicios...
]
