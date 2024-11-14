'use client'

import { BarChart2, Briefcase, Globe, MessageCircle, Palette, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'

const skillCategories = [
  {
    name: 'Data & Analytics',
    icon: BarChart2,
    skills: ['Data Analytics', 'ERP Systems Implementation', 'MS Excel', 'MS PowerPoint', 'Performance Optimization']
  },
  {
    name: 'Marketing & Branding',
    icon: Briefcase,
    skills: ['Brand development', 'Campaign coordination', 'Market segmentation analysis', 'Brand strategy', 'Social Media Marketing', 'Email Marketing', 'Public Relations']
  },
  {
    name: 'Digital Marketing',
    icon: Globe,
    skills: ['Keyword Research', 'Social Media Management', 'Search Engine Optimization (SEO)']
  },
  {
    name: 'Languages',
    icon: MessageCircle,
    skills: ['English (Fluent)', 'Marathi (Fluent)', 'Hindi (Fluent)', 'Japanese (Can Understand)']
  },
  {
    name: 'Design',
    icon: Palette,
    skills: ['Graphic Design']
  },
  {
    name: 'Management',
    icon: Users,
    skills: ['Project Management', 'Sales Techniques']
  }
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width
      const y = (e.clientY - top) / height

      container.style.setProperty('--mouse-x', `${x}`)
      container.style.setProperty('--mouse-y', `${y}`)
    }

    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="py-16 bg-black text-white overflow-hidden relative pt-32" ref={containerRef}>
      <div className="container mx-auto p-8">
        <h2 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-slate-800 to-slate-50 pb-10 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className="relative border border-white/20 rounded-lg shadow-md p-6 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative h-72 z-10">
                <div className="flex items-center mb-4">
                  <category.icon className="w-6 h-6 mr-3 text-white" />
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light pointer-events-none"></div>
      </div>
      <style jsx>{`
        @keyframes noise {
          0% { transform: translate(0,0) }
          10% { transform: translate(-5%,-5%) }
          20% { transform: translate(-10%,5%) }
          30% { transform: translate(5%,-10%) }
          40% { transform: translate(-5%,15%) }
          50% { transform: translate(-10%,5%) }
          60% { transform: translate(15%,0) }
          70% { transform: translate(0,10%) }
          80% { transform: translate(-15%,0) }
          90% { transform: translate(10%,5%) }
          100% { transform: translate(5%,0) }
        }

        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          animation: noise 1s steps(2) infinite;
        }
      `}</style>
    </section>
  )
}