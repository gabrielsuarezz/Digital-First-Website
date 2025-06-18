// 🎓 CONFIGURACIÓN COMPLETA DE CURSOS - MARÍA FERNANDA SUÁREZ
export const coursesData = [
  {
    id: 1,
    title: "¿Cómo empezar en redes sociales si no sé por dónde empezar?",
    slug: "empezar-redes-sociales",
    description:
      "Ayudar a vencer la inseguridad inicial, aprender a mostrarse con confianza y construir una marca personal desde lo real.",
    objective:
      "Vencer la inseguridad inicial, aprender a mostrarse con confianza y construir una marca personal desde lo real.",
    price: 149.99,
    originalPrice: 199.99,
    duration: "3 horas",
    level: "Principiante",
    category: "Redes Sociales",
    color: "#22c55e", // Verde
    featured: true,
    students: 1250,
    rating: 4.9,
    welcomeVideo: "video-bienvenida-curso-1.mp4",
    modules: [
      {
        id: 1,
        title: "Building Confidence",
        lessons: [
          {
            id: 1,
            title: "Entiende tus fortalezas",
            description: "Descubre qué te hace única y cómo convertir eso en tu superpoder digital",
            videoUrl: "leccion-1-1.mp4",
            duration: "25 min",
            resources: ["Worksheet: Mis fortalezas únicas.pdf", "Plantilla: Perfil de marca personal.canva"],
            reflection: "¿Cuáles son las 3 fortalezas que más te definen y cómo podrías mostrarlas en redes?",
          },
          {
            id: 2,
            title: "Mentalidad positiva",
            description: "Transforma tus miedos en motivación y construye una mentalidad ganadora",
            videoUrl: "leccion-1-2.mp4",
            duration: "30 min",
            resources: ["Guía: Afirmaciones para creadores de contenido.pdf"],
            reflection: "Escribe 3 afirmaciones personales que te ayuden a sentirte segura frente a la cámara",
          },
          {
            id: 3,
            title: "Marca personal",
            description: "Define tu esencia y crea una marca personal auténtica que conecte",
            videoUrl: "leccion-1-3.mp4",
            duration: "35 min",
            resources: ["Plantilla: Canvas de marca personal.pdf", "Ejemplos: Marcas personales exitosas.pdf"],
            reflection: "Define en una frase: ¿Qué quieres que la gente sienta cuando ve tu contenido?",
          },
        ],
      },
    ],
    bonus: {
      title: "Plantillas de primeros posts",
      description: "5 plantillas listas para usar en tu primera semana en redes",
      resources: ["Pack: Primeros posts templates.canva"],
    },
  },

  {
    id: 2,
    title: "Primeros pasos con IA para tu marca",
    slug: "ia-para-tu-marca",
    description: "Enseñar los fundamentos de IA, asistentes, modelos LLM y cómo aplicarlos al marketing emocional.",
    objective: "Dominar los fundamentos de IA y aplicarlos al marketing emocional sin perder tu esencia humana.",
    price: 199.99,
    originalPrice: 299.99,
    duration: "5 horas",
    level: "Intermedio",
    category: "Inteligencia Artificial",
    color: "#eab308", // Amarillo
    featured: true,
    students: 890,
    rating: 4.8,
    welcomeVideo: "video-bienvenida-curso-2.mp4",
    modules: [
      {
        id: 1,
        title: "Introducción al mundo IA",
        lessons: [
          {
            id: 1,
            title: "¿Qué es un asistente?",
            description: "Comprende qué son los asistentes de IA y cómo pueden ayudarte",
            videoUrl: "leccion-2-1-1.mp4",
            duration: "20 min",
            resources: ["Guía: Tipos de asistentes IA.pdf"],
            reflection: "¿Qué tareas repetitivas en tu negocio podrías automatizar con un asistente?",
          },
          {
            id: 2,
            title: "¿Qué son los modelos LLM?",
            description: "Entiende la tecnología detrás de ChatGPT y otros modelos de lenguaje",
            videoUrl: "leccion-2-1-2.mp4",
            duration: "25 min",
            resources: ["Infografía: Cómo funcionan los LLM.pdf"],
            reflection: "¿Cómo podrías usar un LLM para mejorar tu comunicación con tu audiencia?",
          },
          {
            id: 3,
            title: "Casos prácticos de uso en redes y marca",
            description: "Ejemplos reales de cómo usar IA en tu estrategia de marca",
            videoUrl: "leccion-2-1-3.mp4",
            duration: "30 min",
            resources: ["Casos de estudio: IA en marcas reales.pdf", "Plantilla: Plan de implementación IA.pdf"],
            reflection: "Elige 3 casos de uso que implementarías en tu marca esta semana",
          },
        ],
      },
      {
        id: 2,
        title: "Marketing con IA humana",
        lessons: [
          {
            id: 1,
            title: "Automatizar sin perder tu esencia",
            description: "Cómo usar IA manteniendo tu voz y personalidad única",
            videoUrl: "leccion-2-2-1.mp4",
            duration: "35 min",
            resources: ["Guía: Prompts para mantener tu voz.pdf"],
            reflection: "Define 3 elementos de tu personalidad que nunca delegarías a la IA",
          },
          {
            id: 2,
            title: "Crear sistemas visuales con ayuda de IA",
            description: "Herramientas de IA para crear contenido visual coherente con tu marca",
            videoUrl: "leccion-2-2-2.mp4",
            duration: "40 min",
            resources: ["Tutorial: Midjourney para marcas.pdf", "Prompts: Estilo visual consistente.pdf"],
            reflection: "¿Qué estilo visual representa mejor tu marca y cómo lo describirías a una IA?",
          },
          {
            id: 3,
            title: "Tu primer flujo con IA: contenido emocional automatizado",
            description: "Crea tu primer sistema automatizado que genere contenido con alma",
            videoUrl: "leccion-2-2-3.mp4",
            duration: "45 min",
            resources: ["Plantilla: Flujo de contenido automatizado.pdf", "Checklist: Implementación paso a paso.pdf"],
            reflection: "Diseña tu primer flujo automatizado: ¿qué problema resolverá para tu audiencia?",
          },
        ],
      },
    ],
    bonus: {
      title: "Prompts exclusivos de María Fernanda",
      description: "50 prompts probados para crear contenido emocional con IA",
      resources: ["Pack: 50 Prompts emocionales.pdf", "Video: Cómo personalizar prompts.mp4"],
    },
  },

  {
    id: 3,
    title: "Crear tu comunidad con propósito",
    slug: "comunidad-con-proposito",
    description: "Enseñar estrategias prácticas de conexión, crecimiento y fidelización orgánica.",
    objective: "Construir una comunidad leal y comprometida que crezca orgánicamente con estrategias auténticas.",
    price: 179.99,
    originalPrice: 249.99,
    duration: "6 horas",
    level: "Intermedio",
    category: "Community Building",
    color: "#a855f7", // Púrpura
    featured: true,
    students: 650,
    rating: 4.9,
    welcomeVideo: "video-bienvenida-curso-3.mp4",
    modules: [
      {
        id: 1,
        title: "Conecta con tu audiencia",
        lessons: [
          {
            id: 1,
            title: "Define tu audiencia ideal",
            description: "Conoce profundamente a quién le hablas y qué necesita de ti",
            videoUrl: "leccion-3-1-1.mp4",
            duration: "30 min",
            resources: ["Worksheet: Avatar de audiencia.pdf"],
            reflection: "Describe a tu persona ideal como si fuera tu mejor amiga",
          },
          {
            id: 2,
            title: "Lenguaje que conecta",
            description: "Desarrolla un tono de voz que resuene con tu comunidad",
            videoUrl: "leccion-3-1-2.mp4",
            duration: "25 min",
            resources: ["Guía: Tono de voz para marcas.pdf"],
            reflection: "¿Cómo hablarías con tu audiencia si estuvieran tomando café juntas?",
          },
        ],
      },
      {
        id: 2,
        title: "Lead Magnets con esencia",
        lessons: [
          {
            id: 1,
            title: "Crea imanes de audiencia irresistibles",
            description: "Diseña lead magnets que aporten valor real y atraigan a tu tribu",
            videoUrl: "leccion-3-2-1.mp4",
            duration: "35 min",
            resources: ["Plantilla: Lead magnet canvas.pdf", "Ejemplos: Lead magnets exitosos.pdf"],
            reflection: "¿Qué problema urgente de tu audiencia podrías resolver en 5 minutos?",
          },
        ],
      },
      {
        id: 3,
        title: "Crea tu estrategia de engagement",
        lessons: [
          {
            id: 1,
            title: "Engagement auténtico vs. vanity metrics",
            description: "Enfócate en métricas que realmente importan para tu negocio",
            videoUrl: "leccion-3-3-1.mp4",
            duration: "30 min",
            resources: ["Guía: Métricas que importan.pdf"],
            reflection: "¿Qué métrica te haría sentir que realmente estás impactando vidas?",
          },
        ],
      },
      {
        id: 4,
        title: "Community management sin burnout",
        lessons: [
          {
            id: 1,
            title: "Sistemas para gestionar tu comunidad",
            description: "Crea procesos que te permitan estar presente sin agotarte",
            videoUrl: "leccion-3-4-1.mp4",
            duration: "40 min",
            resources: ["Plantilla: Sistema de community management.pdf"],
            reflection: "¿Cuánto tiempo puedes dedicar diariamente a tu comunidad de forma sostenible?",
          },
        ],
      },
    ],
    bonus: {
      title: "Templates de engagement",
      description: "20 plantillas de posts que generan conversación genuina",
      resources: ["Pack: Templates de engagement.canva"],
    },
  },

  {
    id: 4,
    title: "Creación de contenido emocional y estratégico",
    slug: "contenido-emocional-estrategico",
    description: "Crear contenido masivo sin perder calidad ni conexión.",
    objective: "Dominar la creación de contenido que conecta emocionalmente y convierte estratégicamente.",
    price: 189.99,
    originalPrice: 269.99,
    duration: "7 horas",
    level: "Intermedio",
    category: "Creación de Contenido",
    color: "#3b82f6", // Azul
    featured: false,
    students: 780,
    rating: 4.8,
    welcomeVideo: "video-bienvenida-curso-4.mp4",
    modules: [
      {
        id: 1,
        title: "Plataformas: ¿cuál es la ideal para vos?",
        lessons: [
          {
            id: 1,
            title: "Análisis de plataformas por personalidad",
            description: "Descubre qué plataforma se alinea mejor con tu forma de ser",
            videoUrl: "leccion-4-1-1.mp4",
            duration: "35 min",
            resources: ["Quiz: Tu plataforma ideal.pdf"],
            reflection: "¿En qué plataforma te sientes más cómoda siendo tú misma?",
          },
        ],
      },
      {
        id: 2,
        title: "Creación consciente de contenido",
        lessons: [
          {
            id: 1,
            title: "Contenido con propósito",
            description: "Cada post debe tener una intención clara y un impacto positivo",
            videoUrl: "leccion-4-2-1.mp4",
            duration: "40 min",
            resources: ["Framework: Contenido con propósito.pdf"],
            reflection: "¿Qué transformación quieres generar en tu audiencia con tu contenido?",
          },
        ],
      },
      {
        id: 3,
        title: "Guiones que convierten sin perder autenticidad",
        lessons: [
          {
            id: 1,
            title: "Storytelling emocional",
            description: "Cuenta historias que toquen el corazón y muevan a la acción",
            videoUrl: "leccion-4-3-1.mp4",
            duration: "45 min",
            resources: ["Plantilla: Estructura de storytelling.pdf"],
            reflection: "¿Cuál es la historia más transformadora de tu vida que podrías compartir?",
          },
        ],
      },
      {
        id: 4,
        title: "Cómo analizar tus resultados",
        lessons: [
          {
            id: 1,
            title: "Métricas con alma",
            description: "Analiza resultados enfocándote en el impacto real, no solo números",
            videoUrl: "leccion-4-4-1.mp4",
            duration: "30 min",
            resources: ["Dashboard: Métricas emocionales.pdf"],
            reflection: "¿Qué comentario de tu audiencia te ha hecho sentir más orgullosa?",
          },
        ],
      },
    ],
    bonus: {
      title: "Banco de ideas infinito",
      description: "Sistema para nunca quedarte sin ideas de contenido",
      resources: ["Plantilla: Generador de ideas.pdf", "Video: Cómo usar el sistema.mp4"],
    },
  },

  {
    id: 5,
    title: "Trabajar con marcas (principiantes)",
    slug: "trabajar-con-marcas",
    description: "Enseñar a colaborar con marcas de forma estratégica y auténtica.",
    objective: "Aprender a colaborar con marcas manteniendo tu autenticidad y creando valor mutuo.",
    price: 159.99,
    originalPrice: 219.99,
    duration: "4 horas",
    level: "Principiante",
    category: "Colaboraciones",
    color: "#f97316", // Naranja
    featured: false,
    students: 420,
    rating: 4.7,
    welcomeVideo: "video-bienvenida-curso-5.mp4",
    modules: [
      {
        id: 1,
        title: "Encontrando marcas con propósito",
        lessons: [
          {
            id: 1,
            title: "Marcas que se alinean con tus valores",
            description: "Cómo identificar marcas que realmente resuenen contigo",
            videoUrl: "leccion-5-1-1.mp4",
            duration: "30 min",
            resources: ["Checklist: Evaluación de marcas.pdf"],
            reflection: "¿Qué valores son innegociables para ti al elegir una marca?",
          },
        ],
      },
      {
        id: 2,
        title: "Si tú fueras la marca…",
        lessons: [
          {
            id: 1,
            title: "Piensa como empresaria",
            description: "Entiende qué buscan las marcas y cómo puedes aportar valor",
            videoUrl: "leccion-5-2-1.mp4",
            duration: "35 min",
            resources: ["Guía: Mentalidad empresarial.pdf"],
            reflection: "¿Qué resultados concretos podrías ofrecer a una marca?",
          },
        ],
      },
      {
        id: 3,
        title: "Construyendo relaciones con valor",
        lessons: [
          {
            id: 1,
            title: "Networking auténtico",
            description: "Crea relaciones genuinas que beneficien a ambas partes",
            videoUrl: "leccion-5-3-1.mp4",
            duration: "40 min",
            resources: ["Plantilla: Propuesta de colaboración.pdf"],
            reflection: "¿Cómo podrías aportar valor a una marca antes de pedirles algo?",
          },
        ],
      },
    ],
    bonus: {
      title: "Kit de colaboraciones",
      description: "Plantillas y contratos para tus primeras colaboraciones",
      resources: ["Pack: Kit colaboraciones.pdf", "Plantilla: Media kit.canva"],
    },
  },

  {
    id: 6,
    title: "Content Day",
    slug: "content-day",
    description: "Enseñar a preparar un día de producción de contenido emocional y estratégico.",
    objective: "Maximizar tu productividad creando contenido de calidad en sesiones intensivas organizadas.",
    price: 99.99,
    originalPrice: 149.99,
    duration: "2.5 horas",
    level: "Principiante",
    category: "Productividad",
    color: "#10b981", // Verde esmeralda
    featured: false,
    students: 890,
    rating: 4.8,
    welcomeVideo: "video-bienvenida-curso-bonus.mp4",
    isBonusCourse: true,
    modules: [
      {
        id: 1,
        title: "Planificación estratégica",
        lessons: [
          {
            id: 1,
            title: "Cómo planear tu día de contenido",
            description: "Organiza tu Content Day para máxima eficiencia y creatividad",
            videoUrl: "leccion-bonus-1.mp4",
            duration: "45 min",
            resources: ["Plantilla: Planificador Content Day.pdf"],
            reflection: "¿Cuántas horas puedes dedicar mensualmente a crear contenido?",
          },
          {
            id: 2,
            title: "Checklists y logística",
            description: "Todo lo que necesitas tener listo antes de empezar",
            videoUrl: "leccion-bonus-2.mp4",
            duration: "30 min",
            resources: ["Checklist: Pre-producción.pdf", "Lista: Equipos básicos.pdf"],
            reflection: "¿Qué elementos de tu espacio de grabación podrías mejorar?",
          },
          {
            id: 3,
            title: "Cómo mantener tu esencia frente a la cámara",
            description: "Técnicas para estar natural y auténtica durante largas sesiones",
            videoUrl: "leccion-bonus-3.mp4",
            duration: "35 min",
            resources: ["Guía: Mantener la energía.pdf"],
            reflection: "¿Qué te ayuda a sentirte más segura y natural frente a la cámara?",
          },
        ],
      },
    ],
    bonus: {
      title: "Calendario de contenido anual",
      description: "Plantilla con fechas importantes y temas estacionales",
      resources: ["Calendario: Contenido anual.pdf"],
    },
  },

  {
    id: 7,
    title: "Edición práctica de videos con CapCut",
    slug: "edicion-capcut",
    description: "Aprender a editar reels y contenido corto con intención.",
    objective: "Dominar CapCut para crear videos que conecten emocionalmente y se vean profesionales.",
    price: 129.99,
    originalPrice: 179.99,
    duration: "4 horas",
    level: "Principiante",
    category: "Edición de Video",
    color: "#22c55e", // Verde
    featured: false,
    students: 1100,
    rating: 4.9,
    welcomeVideo: "video-bienvenida-curso-7.mp4",
    modules: [
      {
        id: 1,
        title: "Introducción a CapCut",
        lessons: [
          {
            id: 1,
            title: "Interface y herramientas básicas",
            description: "Familiarízate con CapCut y sus funciones principales",
            videoUrl: "leccion-7-1-1.mp4",
            duration: "25 min",
            resources: ["Guía: Interface CapCut.pdf"],
            reflection: "¿Qué tipo de videos quieres crear con CapCut?",
          },
        ],
      },
      {
        id: 2,
        title: "Edición emocional en pocos pasos",
        lessons: [
          {
            id: 1,
            title: "Cortes que mantienen la atención",
            description: "Técnicas de edición que mantienen a tu audiencia enganchada",
            videoUrl: "leccion-7-2-1.mp4",
            duration: "40 min",
            resources: ["Tutorial: Cortes dinámicos.pdf"],
            reflection: "¿Qué emociones quieres transmitir en tus videos?",
          },
        ],
      },
      {
        id: 3,
        title: "Música, texto y ritmo para tu marca",
        lessons: [
          {
            id: 1,
            title: "Sincronización perfecta",
            description: "Cómo usar música y texto para potenciar tu mensaje",
            videoUrl: "leccion-7-3-1.mp4",
            duration: "45 min",
            resources: ["Pack: Música libre de derechos.zip", "Plantilla: Estilos de texto.capcut"],
            reflection: "¿Qué estilo musical representa mejor tu marca?",
          },
        ],
      },
    ],
    bonus: {
      title: "Plantillas CapCut exclusivas",
      description: "10 plantillas editables para diferentes tipos de contenido",
      resources: ["Pack: Plantillas CapCut.zip"],
    },
  },

  {
    id: 8,
    title: "Inteligencia emocional para enfrentar la negatividad en redes",
    slug: "inteligencia-emocional-redes",
    description: "Aprender a cuidar tu energía y comunicar con madurez emocional.",
    objective: "Desarrollar herramientas emocionales para manejar críticas y mantener tu bienestar mental.",
    price: 169.99,
    originalPrice: 229.99,
    duration: "4.5 horas",
    level: "Intermedio",
    category: "Bienestar Mental",
    color: "#8b5cf6", // Púrpura
    featured: false,
    students: 560,
    rating: 4.9,
    welcomeVideo: "video-bienvenida-curso-8.mp4",
    collaborator: "Autentikaimente",
    modules: [
      {
        id: 1,
        title: "Identificar tipos de crítica",
        lessons: [
          {
            id: 1,
            title: "Crítica constructiva vs. destructiva",
            description: "Aprende a diferenciar feedback valioso de comentarios tóxicos",
            videoUrl: "leccion-8-1-1.mp4",
            duration: "35 min",
            resources: ["Guía: Tipos de crítica.pdf"],
            reflection: "¿Cómo reaccionas normalmente ante las críticas? ¿Qué patrón notas?",
          },
        ],
      },
      {
        id: 2,
        title: "Fortalecer límites digitales",
        lessons: [
          {
            id: 1,
            title: "Crear tu escudo emocional",
            description: "Técnicas para proteger tu energía en el mundo digital",
            videoUrl: "leccion-8-2-1.mp4",
            duration: "40 min",
            resources: ["Ejercicios: Límites digitales.pdf"],
            reflection: "¿Qué límites necesitas establecer para cuidar tu bienestar mental?",
          },
        ],
      },
      {
        id: 3,
        title: "Responder con conciencia, no desde el ego",
        lessons: [
          {
            id: 1,
            title: "Comunicación consciente",
            description: "Cómo responder desde la madurez emocional, no desde la reactividad",
            videoUrl: "leccion-8-3-1.mp4",
            duration: "45 min",
            resources: ["Plantilla: Respuestas conscientes.pdf"],
            reflection: "¿Qué te ayuda a mantener la calma cuando recibes críticas?",
          },
        ],
      },
    ],
    bonus: {
      title: "Meditaciones para creadores",
      description: "Audio-meditaciones específicas para manejar la presión digital",
      resources: ["Pack: Meditaciones.mp3", "Guía: Rutina de autocuidado.pdf"],
    },
  },

  {
    id: 9,
    title: "Cómo perder el miedo a la cámara",
    slug: "perder-miedo-camara",
    description: "Vencer bloqueos para mostrarte tal como sos.",
    objective: "Superar la timidez y los bloqueos para comunicarte con confianza y naturalidad en video.",
    price: 139.99,
    originalPrice: 189.99,
    duration: "3.5 horas",
    level: "Principiante",
    category: "Confianza Personal",
    color: "#f59e0b", // Ámbar
    featured: false,
    students: 920,
    rating: 4.8,
    welcomeVideo: "video-bienvenida-curso-9.mp4",
    collaborator: "Autentikaimente",
    modules: [
      {
        id: 1,
        title: "Entender tu voz y presencia",
        lessons: [
          {
            id: 1,
            title: "Descubre tu estilo natural",
            description: "Identifica tu forma auténtica de comunicarte y poténciale",
            videoUrl: "leccion-9-1-1.mp4",
            duration: "30 min",
            resources: ["Ejercicio: Tu estilo de comunicación.pdf"],
            reflection: "¿Cómo te comunicas cuando estás con tus personas de confianza?",
          },
        ],
      },
      {
        id: 2,
        title: "Técnicas para grabar con confianza",
        lessons: [
          {
            id: 1,
            title: "Preparación mental y física",
            description: "Rutinas y técnicas para sentirte segura antes de grabar",
            videoUrl: "leccion-9-2-1.mp4",
            duration: "40 min",
            resources: ["Checklist: Pre-grabación.pdf", "Ejercicios: Relajación.pdf"],
            reflection: "¿Qué necesitas para sentirte cómoda y segura al grabar?",
          },
        ],
      },
      {
        id: 3,
        title: "Grabarte con propósito, no con perfección",
        lessons: [
          {
            id: 1,
            title: "Autenticidad sobre perfección",
            description: "Aprende a valorar la conexión real por encima de la perfección técnica",
            videoUrl: "leccion-9-3-1.mp4",
            duration: "35 min",
            resources: ["Mantra: Propósito sobre perfección.pdf"],
            reflection: "¿Qué mensaje importante quieres compartir que vale más que tu miedo?",
          },
        ],
      },
    ],
    bonus: {
      title: "Ejercicios de confianza",
      description: "Rutina diaria para fortalecer tu confianza frente a la cámara",
      resources: ["Video: Ejercicios diarios.mp4", "Tracker: Progreso de confianza.pdf"],
    },
  },
]

// 🎯 CONFIGURACIÓN DE PRECIOS Y OFERTAS
export const coursePricing = {
  individual: {
    discount: 0.25, // 25% descuento
    validUntil: "2024-12-31",
  },
  bundle: {
    allCourses: {
      price: 999.99,
      originalPrice: 1599.99,
      savings: 600,
      description: "Acceso completo a todos los cursos + bonuses exclusivos",
    },
    starter: {
      courses: [1, 2, 6], // Empezar redes + IA + Content Day
      price: 299.99,
      originalPrice: 449.99,
      savings: 150,
      description: "Pack perfecto para empezar tu transformación digital",
    },
    advanced: {
      courses: [3, 4, 8, 9], // Comunidad + Contenido + Inteligencia emocional + Cámara
      price: 499.99,
      originalPrice: 699.99,
      savings: 200,
      description: "Para quienes quieren llevar su marca al siguiente nivel",
    },
  },
}
