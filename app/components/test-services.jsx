"use client"
import { Button } from "../../components/ui/button"

export function TestServices() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto min-h-[600px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">
        {/* Top Left - General Contracting */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
          <div className="relative h-48 md:h-full flex items-end p-6">
            <h3 className="text-white text-xl font-bold">GENERAL CONTRACTING</h3>
          </div>
        </div>

        {/* Center - Large card spanning 2 rows */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer md:row-span-2 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
          <div className="relative h-48 md:h-full flex items-end p-6">
            <h3 className="text-white text-2xl font-bold">CONSTRUCTION SERVICES</h3>
          </div>
        </div>

        {/* Top Right - Renovations */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
          <div className="relative h-48 md:h-full flex items-end p-6">
            <h3 className="text-white text-xl font-bold">RENOVATIONS</h3>
          </div>
        </div>

        {/* Bottom Left - Project Management */}
        <div className="relative rounded-2xl overflow-hidden group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/project.png')"
            }}
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all duration-500" />
          <div className="relative h-48 md:h-full flex items-end p-6">
            <h3 className="text-white text-xl font-bold">PROJECT MANAGEMENT</h3>
          </div>
        </div>

        {/* Bottom Right - CTA Card */}
        <div className="relative rounded-2xl overflow-hidden bg-orange-500 p-6 flex flex-col justify-center group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:bg-orange-400">
          <h3 className="text-white text-2xl font-bold mb-6 leading-tight">Interested in starting a project?</h3>
          <Button variant="secondary" className="bg-black text-white hover:bg-gray-800 w-fit">
            GET A QUOTE →
          </Button>
        </div>
      </div>
    </section>
  )
}