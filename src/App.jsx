import { Fragment, useEffect, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Facebook,
  Instagram,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from 'lucide-react'

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61583343840418'
const INSTAGRAM_URL = 'https://www.instagram.com/codeboost_/'
const WHATSAPP_URL = 'https://wa.me/524438639056'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Proyectos', href: '#proyectos' },
]

const services = [
  {
    icon: MonitorSmartphone,
    title: 'Sitios web que convierten',
    text: 'Experiencias rápidas, claras y adaptables que convierten visitas en oportunidades reales.',
    number: '01',
  },
  {
    icon: Code2,
    title: 'Software a la medida',
    text: 'Plataformas y herramientas creadas alrededor de tus procesos, no al revés.',
    number: '02',
  },
  {
    icon: Layers3,
    title: 'E-commerce escalable',
    text: 'Tiendas digitales intuitivas y preparadas para crecer contigo desde el primer pedido.',
    number: '03',
  },
]

const plans = [
  {
    name: 'Básico',
    eyebrow: 'Para empezar',
    description: 'Una presencia digital sólida y profesional para lanzar tu marca.',
    price: 'desde $4,500',
    features: ['Diseño web personalizado', 'Hasta 5 secciones', 'Diseño responsive', 'Formulario de contacto', 'Integración con redes sociales'],
    cta: 'Cotizar Básico',
  },
  {
    name: 'Profesional',
    eyebrow: 'Más elegido',
    description: 'Un sitio completo diseñado para comunicar, posicionar y convertir.',
    price: 'desde $7,500',
    features: ['Todo lo del paquete Básico', 'Hasta 10 secciones', 'Galería de imágenes', 'Integración con WhatsApp', 'Optimización SEO básica', 'Dominio y hosting por 1 año'],
    cta: 'Cotizar Profesional',
    featured: true,
  },
  {
    name: 'Empresarial',
    eyebrow: 'A tu medida',
    description: 'Tecnología a la altura de un reto único, sin límites de plantilla.',
    price: 'desde $12,000',
    features: ['Todo lo del paquete Profesional', 'Secciones ilimitadas', 'Carrito de compras', 'Panel de administración', 'Integración con pasarelas de pago', 'Certificado SSL', 'Soporte técnico 24/7'],
    cta: 'Cotizar Empresarial',
  },
]

const projects = [
  {
    type: 'NIAGARA VIAJES',
    title: 'Experiencias que comienzan en la web',
    short: 'Sitio web premium para presentar viajes, experiencias y servicios, con catálogo dinámico y agenda de reuniones integrada.',
    description: 'Plataforma web diseñada para presentar y administrar paquetes, experiencias y servicios turísticos desde un solo lugar. Permite mostrar destinos de forma atractiva, organizar información de viajes, gestionar contenido dinámico y facilitar el contacto con clientes interesados mediante formularios, WhatsApp y agenda de reuniones.',
    metric: '35+',
    metricLabel: 'años de experiencia',
    image: '/niagara-index.png',
    theme: 'commerce',
  },
  {
    type: 'GRUPO BM',
    title: 'Industria con presencia digital',
    short: 'Plataforma corporativa con gestión de servicios, galería, clientes y contenido para mostrar sus soluciones industriales y generar cotizaciones.',
    description: 'Sitio web corporativo con panel administrativo para gestionar servicios industriales, proyectos, galerías, clientes y contenido de la empresa. Permite actualizar la información mostrada en el sitio sin modificar código, presentar soluciones como fabricación, cortes y trabajos especializados, y facilitar que nuevos clientes conozcan los servicios y soliciten información o cotizaciones.',
    metric: '25+',
    metricLabel: 'años de experiencia',
    image: '/grupoBM-index.png',
    theme: 'dashboard',
  },
  {
    type: 'SPACEKIDS',
    title: 'Todo el salón desde un solo sistema',
    short: 'Sistema integral para administrar juegos por tiempo, eventos, pagos y apartados, con cronómetros y notificaciones en tiempo real desde el POS.',
    description: 'Sistema integral de administración para salones de eventos y áreas de juegos con control de tiempo. Permite gestionar desde un POS los accesos de los clientes, iniciar cronómetros individuales según el tiempo contratado y recibir notificaciones cuando una sesión está por finalizar. También incluye calendario para administrar eventos y reservaciones, control de apartados y pagos, seguimiento de saldos, gestión de caja y centralización de la operación en una sola plataforma.',
    metric: 'Tiempo real',
    metricLabel: 'control operativo',
    image: '/index-spaceKids.jpeg',
    theme: 'booking',
  },
]

function Logo({ className = '' }) {
  return (
    <span className={`relative block h-10 w-[127px] overflow-hidden ${className}`}>
      <img
        className="absolute -left-[21px] -top-[61px] h-[165px] w-[165px] max-w-none"
        src="/codeboost-logo.png"
        alt="CodeBoost"
      />
    </span>
  )
}

function SocialLink({ href, label, children, className = '' }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center transition-colors ${className}`}
    >
      {children}
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b09]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" aria-label="CodeBoost, volver al inicio">
          <Logo />
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola CodeBoost, quiero impulsar mi idea.')}`}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[#00e57f] px-5 py-2.5 text-sm font-semibold text-[#04130c] shadow-[0_0_28px_rgba(0,229,127,.28)] transition hover:bg-[#84ffbd] hover:shadow-[0_0_40px_rgba(0,229,127,.4)] md:inline-flex"
        >
          Cotiza tu proyecto <ArrowUpRight size={16} />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-white/10 p-2.5 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/5 bg-[#080d0a] px-5 py-5 md:hidden">
          <nav className="flex flex-col">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-4 text-zinc-200">
                {item.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#00e57f] px-5 py-3 font-semibold text-[#04130c]">
              Cotiza tu proyecto <ArrowUpRight size={17} />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

function CodePanel() {
  return (
    <div className="glass green-shadow relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] p-3 sm:p-4">
      <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#00e57f]/20 blur-3xl" />
      <div className="rounded-[1.4rem] border border-white/6 bg-[#090f0c] p-5 sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-[#00e57f]" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /></div>
          <span className="font-mono text-[10px] tracking-[.24em] text-zinc-600">CODEBOOST / BUILD</span>
        </div>
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <p><span className="text-violet-400">const</span> <span className="text-[#84ffbd]">yourIdea</span> <span className="text-zinc-500">=</span> <span className="text-amber-200">'ambitious'</span>;</p>
          <p><span className="text-violet-400">const</span> <span className="text-[#84ffbd]">solution</span> <span className="text-zinc-500">=</span> codeboost<span className="text-zinc-400">.build</span>({'{'} </p>
          <p className="pl-5 text-zinc-400">strategy: <span className="text-sky-300">true</span>,</p>
          <p className="pl-5 text-zinc-400">design: <span className="text-sky-300">'meaningful'</span>,</p>
          <p className="pl-5 text-zinc-400">technology: <span className="text-sky-300">'scalable'</span></p>
          <p className="text-zinc-400">{'}'});</p>
        </div>
        <div className="mt-10 flex items-end justify-between border-t border-white/6 pt-5">
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-[.2em] text-zinc-600">Estado</p>
            <p className="flex items-center gap-2 text-xs text-zinc-300"><span className="h-1.5 w-1.5 rounded-full bg-[#00e57f] shadow-[0_0_12px_#00e57f]" /> Listo para despegar</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00e57f] text-[#04130c]"><Rocket size={22} /></div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-18">
      <div className="grid-surface absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -left-44 top-16 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#00e57f]/12 blur-[130px]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#00e57f]/8 blur-[150px]" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_.92fr] lg:py-12">
        <div>
          <div className="reveal mb-7 inline-flex items-center gap-2 rounded-full border border-[#00e57f]/20 bg-[#00e57f]/6 px-3.5 py-2 text-xs font-medium text-[#84ffbd] shadow-[0_0_30px_rgba(0,229,127,.14)]">
            <Sparkles size={14} /> Tecnología que impulsa negocios
          </div>
          <h1 className="reveal reveal-delay-1 text-balance text-5xl font-semibold leading-[.96] tracking-[-.055em] text-white sm:text-6xl lg:text-7xl xl:text-[5.35rem]">
            Convertimos ideas en <span className="text-glow text-[#00e57f]">productos digitales</span> que avanzan.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            Diseñamos y desarrollamos experiencias web rápidas, intuitivas y listas para llevar tu negocio al siguiente nivel.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola CodeBoost, tengo una idea y quiero convertirla en un producto digital.')}`} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#00e57f] px-6 py-3.5 font-semibold text-[#04130c] shadow-[0_8px_34px_rgba(0,229,127,.35)] transition hover:bg-[#84ffbd] hover:shadow-[0_10px_44px_rgba(0,229,127,.45)]">
              Impulsar mi idea <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#proyectos" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 px-6 py-3.5 font-medium text-white transition hover:border-white/25 hover:bg-white/5">
              Explorar proyectos <ChevronRight size={18} />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs text-zinc-500">
            <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#00e57f]" /> Código confiable</span>
            <span className="flex items-center gap-2"><Zap size={15} className="text-[#00e57f]" /> Entregas ágiles</span>
            <span className="flex items-center gap-2"><MessageCircle size={15} className="text-[#00e57f]" /> Trato directo</span>
          </div>
        </div>
        <div className="reveal reveal-delay-2 lg:pl-6"><CodePanel /></div>
      </div>
    </section>
  )
}

function Marquee() {
  const items = ['Diseño UX/UI', 'Desarrollo web', 'E-commerce', 'Software a medida', 'Automatización']
  return (
    <div className="overflow-hidden border-y border-white/6 bg-white/[.018] py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((loop) => (
          <Fragment key={loop}>
            {items.map((item) => <div key={`${loop}-${item}`} className="flex items-center gap-7 px-7 text-xs font-medium uppercase tracking-[.24em] text-zinc-500"><span>{item}</span><span className="h-1.5 w-1.5 rotate-45 bg-[#00e57f]" /></div>)}
          </Fragment>
        ))}
      </div>
    </div>
  )
}

function SectionHeading({ eyebrow, title, copy, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="eyebrow-glow mb-4 text-xs font-semibold uppercase tracking-[.24em] text-[#00e57f]">{eyebrow}</p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-.04em] text-white sm:text-5xl">{title}</h2>
      {copy && <p className="mt-5 leading-7 text-zinc-400">{copy}</p>}
    </div>
  )
}

function Services() {
  return (
    <section id="servicios" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Lo que hacemos" title="Menos fricción. Más crecimiento." copy="Combinamos estrategia, diseño y tecnología para crear productos que se sienten simples y funcionan en serio." />
          <p className="max-w-sm text-sm leading-6 text-zinc-500 lg:text-right">Cada solución nace de tus objetivos, se construye con buenas prácticas y queda preparada para evolucionar.</p>
        </div>
        <div className="pointer-events-none absolute -left-44 top-1/3 -z-10 h-[24rem] w-[24rem] rounded-full bg-[#00e57f]/10 blur-[140px]" aria-hidden="true" />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text, number }) => (
            <article key={title} className="glass group rounded-[1.75rem] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#00e57f]/30 hover:shadow-[0_24px_70px_rgba(0,229,127,.13)] sm:p-8">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00e57f]/20 bg-[#00e57f]/10 text-[#00e57f] shadow-[0_0_22px_rgba(0,229,127,.18)] transition group-hover:bg-[#00e57f]/15 group-hover:shadow-[0_0_34px_rgba(0,229,127,.35)]"><Icon size={22} /></div>
                <span className="font-mono text-xs text-zinc-700 transition group-hover:text-[#00e57f]/70">/{number}</span>
              </div>
              <h3 className="mt-9 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{text}</p>
              <div className="mt-8 h-px w-full overflow-hidden bg-white/6"><div className="h-full w-0 bg-[#00e57f] transition-all duration-500 group-hover:w-full" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  return (
    <section id="paquetes" className="relative scroll-mt-20 overflow-hidden border-y border-white/6 bg-[#0a0f0c] py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[22rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#00e57f]/8 blur-[150px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading centered eyebrow="Paquetes" title="Una solución para cada etapa." copy="Elige un punto de partida. Ajustamos alcance, tiempos y tecnología a las necesidades reales de tu proyecto." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative flex flex-col overflow-hidden rounded-[1.75rem] border p-7 transition duration-300 sm:p-8 ${plan.featured ? 'green-shadow border-[#00e57f]/40 bg-gradient-to-b from-[#10231a] to-[#09110d] lg:-translate-y-3' : 'border-white/8 bg-[#0c120f] hover:-translate-y-1 hover:border-[#00e57f]/30 hover:shadow-[0_24px_70px_rgba(0,229,127,.13)]'}`}>
              {plan.featured && <div className="absolute right-5 top-5 rounded-full bg-[#00e57f] px-3 py-1 text-[10px] font-bold uppercase tracking-[.16em] text-[#04130c]">Recomendado</div>}
              <p className="text-xs font-medium uppercase tracking-[.18em] text-[#00e57f]">{plan.eyebrow}</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{plan.name}</h3>
              <p className="mt-1 text-2xl font-bold text-white">{plan.price} <span className="text-xl font-normal text-white/60">MXN</span></p>
              <p className="mt-4 min-h-12 text-sm leading-6 text-zinc-400">{plan.description}</p>
              <div className="my-7 h-px bg-white/8" />
              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3 text-sm text-zinc-300"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#00e57f]/10 text-[#00e57f]"><Check size={13} /></span>{feature}</li>)}
              </ul>
              <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola CodeBoost, me interesa el paquete ${plan.name}.`)}`} target="_blank" rel="noreferrer" className={`mt-9 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-[#00e57f] text-[#04130c] hover:bg-[#84ffbd]' : 'border border-white/12 text-white hover:border-[#00e57f]/30 hover:bg-[#00e57f]/6'}`}>
                Solicitar
              </a>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-[#00e57f]/20 bg-[#00e57f]/5 p-6 text-center sm:p-7">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-semibold text-[#84ffbd]">Todos los paquetes incluyen <span className="text-white">por 1 año</span> <span className="text-white">dominio</span> · <span className="text-white">hosting</span> · <span className="text-white">1 email corporativo</span> · <span className="text-white">certificado SSL</span> · <span className="text-white">plugins de seguridad</span> · <span className="text-white">renovación por $2,500</span></p>
          <p className="mt-2 text-xs text-zinc-400">Sin costos ocultos ni soluciones genéricas.</p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  )
}

function ProjectPreview({ theme }) {
  if (theme === 'commerce') {
    return <div className="h-full p-5 sm:p-7"><div className="mx-auto h-full max-w-[88%] rounded-t-2xl border border-white/10 bg-[#f4f0e7] p-4 text-[#111] shadow-2xl"><div className="flex items-center justify-between border-b border-black/8 pb-3"><b className="text-xs">NØRTH</b><div className="flex gap-2"><i className="h-1.5 w-1.5 rounded-full bg-black/25"/><i className="h-1.5 w-1.5 rounded-full bg-black/25"/></div></div><div className="grid grid-cols-2 gap-3 pt-4"><div className="rounded-xl bg-[#cfd6c7] p-3"><div className="h-20 rounded-lg bg-gradient-to-br from-[#62755e] to-[#a6b29e]"/><p className="mt-3 text-[8px] font-semibold">Essential Series</p><p className="mt-1 text-[7px] text-black/40">$1,280 MXN</p></div><div className="pt-3"><p className="text-[7px] uppercase tracking-widest text-black/40">Nueva colección</p><p className="mt-2 text-lg font-semibold leading-none">Everyday<br/>objects.</p><span className="mt-4 inline-block rounded-full bg-black px-3 py-1.5 text-[7px] text-white">Explorar</span></div></div></div></div>
  }
  if (theme === 'dashboard') {
    return <div className="h-full p-5 sm:p-7"><div className="h-full rounded-2xl border border-white/8 bg-[#0c1511] p-4 shadow-2xl"><div className="flex h-full gap-3"><div className="w-10 rounded-xl bg-[#121e18] p-2"><div className="mb-5 h-5 rounded-md bg-[#00e57f]"/>{[1,2,3,4].map((i)=><div key={i} className="mx-auto mb-3 h-2 w-2 rounded-sm bg-white/10"/>)}</div><div className="flex-1"><div className="flex items-center justify-between"><div><p className="text-[7px] text-zinc-500">Bienvenido</p><p className="text-xs font-semibold">Performance</p></div><span className="rounded-full bg-[#00e57f]/10 px-2 py-1 text-[6px] text-[#00e57f]">Live</span></div><div className="mt-4 grid grid-cols-3 gap-2">{['24.8k','8.4%','1.2k'].map((n)=><div key={n} className="rounded-lg border border-white/6 bg-white/[.025] p-2"><p className="text-[9px] font-semibold">{n}</p><p className="mt-1 text-[5px] text-zinc-600">Este mes</p></div>)}</div><div className="mt-3 flex h-20 items-end gap-1 rounded-lg border border-white/6 bg-white/[.02] px-3 pb-3">{[35,58,42,75,63,88,70,94,78,100].map((h,i)=><div key={i} className="flex-1 rounded-t-sm bg-[#00e57f] opacity-70" style={{height:`${h}%`}}/>)}</div></div></div></div></div>
  }
  return <div className="flex h-full items-center justify-center p-5 sm:p-7"><div className="relative h-full w-full max-w-[88%] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#f5ede2] to-[#ddc9aa] p-5 text-[#172019] shadow-2xl"><div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#56715a]/20"/><div className="relative"><div className="flex items-center justify-between"><b className="text-[9px] tracking-widest">ATELIER</b><span className="text-[7px]">Menu</span></div><div className="mt-7 max-w-[70%]"><p className="text-[7px] uppercase tracking-[.2em] text-black/45">Agenda tu espacio</p><p className="mt-2 font-serif text-2xl leading-none">Tiempo para ti.</p><p className="mt-3 text-[7px] leading-3 text-black/55">Elige el servicio y horario ideal. Nosotros nos encargamos del resto.</p><span className="mt-4 inline-block rounded-full bg-[#243b2d] px-3 py-1.5 text-[7px] text-white">Reservar ahora</span></div></div></div></div>
}

function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null)
  return (
    <section id="proyectos" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#00e57f]/8 blur-[150px]" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Trabajo seleccionado" title="Productos que hablan por sí solos." copy="Una muestra del tipo de experiencias que construimos: útiles para el negocio, memorables para las personas." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-white/8 bg-[#0b110e] transition duration-300 hover:-translate-y-1 hover:border-[#00e57f]/25 hover:shadow-[0_24px_70px_rgba(0,229,127,.13)]">
              <div aria-hidden="true" className={`h-64 overflow-hidden border-b border-white/8 ${index === 0 ? 'bg-[#18231b]' : index === 1 ? 'bg-[#080d0a]' : 'bg-[#253128]'}`}>{index === 0 ? <div className="flex h-full items-center justify-center p-1 transition-transform duration-500 group-hover:scale-[1.025] sm:p-2"><img src="/niagara.jpeg" alt="E-commerce" className="max-h-full w-full max-w-[calc(100%-0.5rem)] rounded-2xl border border-white/10 object-contain" /></div> : index === 1 ? <div className="flex h-full items-center justify-center p-1 transition-transform duration-500 group-hover:scale-[1.025] sm:p-2"><img src="/grupoBM.jpeg" alt="Dashboard" className="max-h-full w-full max-w-[calc(100%-0.5rem)] rounded-2xl border border-white/10 object-contain" /></div> : <div className="flex h-full items-center justify-center p-1 transition-transform duration-500 group-hover:scale-[1.025] sm:p-2"><img src="/spaceKids.jpeg" alt="SpaceKids" className="max-h-full w-full max-w-[calc(100%-0.5rem)] rounded-2xl border border-white/10 object-contain" /></div>}</div>
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-center justify-between"><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#00e57f]">{project.type}</p></div>
                <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.short || project.description}</p>
                <div className="mt-auto flex items-center justify-between pt-8">
                  <button type="button" onClick={() => setExpandedProject(project.title)} className="inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition hover:border-[#00e57f]/40 hover:bg-[#00e57f]/6">Detalles <ChevronRight size={15} /></button>
                  <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola CodeBoost, quiero conocer el caso: ${project.title}.`)}`} target="_blank" rel="noreferrer" aria-label={`Contactar por WhatsApp sobre ${project.title}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-[#00e57f] transition hover:border-[#00e57f]/40 hover:bg-[#00e57f]/6"><WhatsAppIcon /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      {expandedProject && (() => {
        const project = projects.find((p) => p.title === expandedProject)
        if (!project) return null
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setExpandedProject(null)} />
            <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-[#0b110e] shadow-2xl">
              <button type="button" onClick={() => setExpandedProject(null)} aria-label="Cerrar" className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"><X size={18} /></button>
              <div className="no-scrollbar max-h-[85vh] overflow-y-auto">
                <div className="grid md:grid-cols-[50%_1fr]">
                  <div className="relative flex min-h-64 items-center justify-center bg-black md:min-h-[36rem]">
                    {project.image && (
                      <img src={project.image} alt={project.title} className="h-full w-full object-contain p-4 pb-14 md:pl-10 md:pr-6 md:pb-20" />
                    )}
                  </div>
                  <div className="p-6 sm:p-8 lg:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#00e57f]">{project.type}</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
                    <div className="mt-5 h-px w-12 bg-[#00e57f]" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[.18em] text-[#00e57f]">Descripción</p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-[15px]">{project.description}</p>
                    <a href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hola CodeBoost, quiero conocer el caso: ${project.title}.`)}`} target="_blank" rel="noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#00e57f] px-5 py-2.5 text-sm font-semibold text-[#04130c] transition hover:bg-[#84ffbd]"><WhatsAppIcon /> ¿Te interesa este proyecto?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}

function CTA() {
  return (
    <section id="contacto" className="px-5 pb-24 pt-8 sm:px-8 sm:pb-32">
      <div className="green-shadow relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#00e57f]/25 bg-[#0c1b13] px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
        <div className="pointer-events-none absolute inset-x-0 -bottom-28 mx-auto h-72 w-72 rounded-full bg-[#00e57f]/14 blur-[120px]" aria-hidden="true" /><div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border border-[#00e57f]/10"/><div className="absolute -right-4 -top-16 h-56 w-56 rounded-full border border-[#00e57f]/15"/><div className="absolute right-14 top-10 h-2 w-2 rounded-full bg-[#00e57f] shadow-[0_0_18px_#00e57f]"/>
        <div className="relative max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.24em] text-[#84ffbd]">Tu siguiente gran paso</p>
          <h2 className="text-balance text-4xl font-semibold tracking-[-.045em] text-white sm:text-5xl lg:text-6xl">Tu idea merece salir del borrador.</h2>
          <p className="mt-5 max-w-xl leading-7 text-zinc-300">Cuéntanos qué tienes en mente. La primera conversación es simple, directa y sin compromiso.</p>
          <a href={`${WHATSAPP_URL}?text=${encodeURIComponent('Hola CodeBoost, quiero platicarles sobre mi proyecto.')}`} target="_blank" rel="noreferrer" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#00e57f] px-6 py-3.5 font-semibold text-[#04130c] shadow-[0_10px_40px_rgba(0,229,127,.35)] transition hover:bg-[#84ffbd] hover:shadow-[0_14px_50px_rgba(0,229,127,.5)]">Comenzar una conversación <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6">
      <div className="pointer-events-none absolute -right-32 -bottom-24 -z-10 h-80 w-80 rounded-full bg-[#00e57f]/6 blur-[130px]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><Logo /><p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">Diseño y desarrollo de software para negocios que quieren avanzar con claridad.</p></div>
        <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-300">Navegación</p><nav className="mt-5 flex flex-col gap-3">{navigation.slice(1).map((item)=><a key={item.href} href={item.href} className="text-sm text-zinc-500 transition hover:text-white">{item.label}</a>)}</nav></div>
        <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-zinc-300">Conecta</p><div className="mt-5 flex gap-2"><SocialLink href={FACEBOOK_URL} label="Facebook" className="h-10 w-10 rounded-full border border-white/10 text-zinc-400 hover:border-[#00e57f]/30 hover:text-[#00e57f]"><Facebook size={17}/></SocialLink><SocialLink href={INSTAGRAM_URL} label="Instagram" className="h-10 w-10 rounded-full border border-white/10 text-zinc-400 hover:border-[#00e57f]/30 hover:text-[#00e57f]"><Instagram size={17}/></SocialLink><SocialLink href={WHATSAPP_URL} label="WhatsApp" className="h-10 w-10 rounded-full border border-white/10 text-zinc-400 hover:border-[#00e57f]/30 hover:text-[#00e57f]"><MessageCircle size={17}/></SocialLink></div><a href="tel:+524438639056" className="mt-4 inline-block text-sm text-zinc-500 hover:text-white">+52 443 863 9056</a></div>
      </div>
      <div className="border-t border-white/5"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-zinc-700 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© {new Date().getFullYear()} CodeBoost. Todos los derechos reservados.</p><p>Diseñado para impulsar ideas.</p></div></div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="noise">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Pricing />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
