import { Home, Hand, UtensilsCrossed, Brain, UserRound, WalletCards } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Rehabilitación a domicilio",
    description: "no puedes venir, no te preocupes, te acompañamos en tu proceso de recuperación.",
  },
  {
    icon: UtensilsCrossed,
    title: "Ferulaje",
    description: "férulas a medida, para los mejores resultados. Será como tener al terapeuta en casa.",
  },
  {
    icon: WalletCards,
    title: "Fabricación de productos de apoyo",
    description: "valoración y fabricación para que puedas seguir haciendo lo que te importa.",
  },
  {
    icon: Hand,
    title: "Terapia de mano",
    description: "Fracturas de radio, escafoides, dedos, son nuestra especialidad.",
  },
  {
    icon: Hand,
    title: "Alteraciones sensoriales",
    description: "Abordaje específico de dolor.",
  },
  {
    icon: Hand,
    title: "MAPS Therapy",
    description: "Terapeuta acreditada en el uso de la tabla MAPS (movimiento analítico, progresivo, secuencial).",
  },
  {
    icon: UserRound,
    title: "Neuropatías",
    description: "Atrapamientos nerviosos, hormigueos, dolores nocturnos...",
  },
  {
    icon: Brain,
    title: "Rehabilitación neurológica",
    description:
      "Concepto Bobath, Perfetti, Affolter, Kinesthetics, INN (neurodinamia), Basale Stimulation, aprendizaje motor, entrenamiento motor orientado a tareas, entrenamiento bimanual, realidad virtual...",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <h2 className="text-3xl lg:text-5xl font-light text-center mb-16 text-gray-800">
          ¿Qué hacemos en <span className="font-semibold">Fisioterapia La Pinza</span>{" "}
          <span className="font-light">Rehabilitación?</span>
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="flex gap-6 items-start group">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Icon
                      size={48}
                      strokeWidth={1.5}
                      className="text-gray-700 group-hover:text-gray-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-light text-gray-700 mb-3 group-hover:text-gray-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
