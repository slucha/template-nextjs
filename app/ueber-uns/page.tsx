import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Lightbulb, Target, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-[#00968F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1E1E1E] font-headlines">DIZT</h1>
                <p className="text-xs text-gray-600 font-body">Zentrum für Deutsche Innovation</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Startseite
              </Link>
              <Link href="/#leistungen" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Leistungen
              </Link>
              <Link href="/kontakt" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Kontakt
              </Link>
              <Button className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">Beratung anfragen</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Über uns</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Wir sind das Zentrum für Deutsche Innovation, Zukunft und Transformation – Ihr Partner für wissenschaftlich
              fundierte Innovationsimpulse und praxisnahe Zukunftslösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-[#00968F] shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1E1E1E] font-headlines">Unsere Mission</CardTitle>
                <CardDescription className="font-body">
                  Wo Innovation auf Wissenschaft trifft
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700 font-body">
                  Das DIZT ist das führende Zentrum für Deutsche Innovation, Zukunft und Transformation. 
                  Wir verbinden wissenschaftliche Exzellenz mit praxisnaher Umsetzung und schaffen 
                  Brücken zwischen Forschung und Anwendung.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 font-body">
                  Unser interdisziplinäres Team aus Wissenschaftlern, Innovatoren und Praktikern 
                  arbeitet daran, nachhaltige Lösungen für die Herausforderungen von heute und morgen 
                  zu entwickeln. Dabei stehen Seriosität, Zukunftsorientierung und Praxisnähe 
                  im Mittelpunkt unseres Handelns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unsere Kernkompetenzen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Wissenschaftlich fundiert, zukunftsorientiert und praxisnah – so gestalten wir gemeinsam mit Ihnen die
              Transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Wissenschaftliche Fundierung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Unsere Lösungen basieren auf solider Forschung und bewährten wissenschaftlichen Methoden,
                  die nachhaltige Ergebnisse garantieren.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F47C27] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47C27]/10 rounded-lg flex items-center justify-center mb-4">
                  <ArrowRight className="h-6 w-6 text-[#F47C27]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Zukunftsorientierung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Fokus auf nachhaltige, digitale und unternehmerische Transformation für eine erfolgreiche
                  und zukunftsfähige Entwicklung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#A5E53D] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A5E53D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#A5E53D]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Praxisnahe Umsetzung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Konkrete Lösungen für Unternehmen und Wirtschaft – von der Theorie zur erfolgreichen
                  praktischen Implementierung.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unser Expertenteam</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Interdisziplinäre Kompetenz für ganzheitliche Innovationslösungen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00968F] to-[#00968F]/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    DM
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Dr. Maria Fischer</CardTitle>
                    <CardDescription className="font-body">Geschäftsführung & Innovation</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Forschung</Badge>
                      <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27]">Strategy</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Promovierte Innovationsforscherin mit über 15 Jahren Erfahrung in der Entwicklung
                  zukunftsweisender Geschäftsmodelle und wissenschaftlicher Transferprojekte.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F47C27] to-[#F47C27]/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JS
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Prof. Dr. Jürgen Schmidt</CardTitle>
                    <CardDescription className="font-body">Wissenschaftlicher Beirat</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Technologie</Badge>
                      <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Beratung</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Universitätsprofessor für Digitale Transformation mit Schwerpunkt auf nachhaltige
                  Innovationsprozesse und wissenschaftlich fundierte Beratungsansätze.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A5E53D] to-[#A5E53D]/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    LW
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Lisa Weber</CardTitle>
                    <CardDescription className="font-body">Projektmanagement</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27]">Umsetzung</Badge>
                      <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Transfer</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Expertin für die praktische Umsetzung von Innovationsprojekten mit Fokus auf
                  nachhaltigen Wissenstransfer zwischen Wissenschaft und Wirtschaft.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00968F] to-[#00968F]/60 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JM
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Jan Marciniak</CardTitle>
                    <CardDescription className="font-body">Program Manager</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Programme</Badge>
                      <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27]">Koordination</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Strategischer Programmmanager mit Expertise in der Koordination komplexer
                  Innovationsprogramme und der Vernetzung verschiedener Stakeholder-Gruppen.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F47C27] to-[#F47C27]/60 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    TK
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Dr. Thomas Klein</CardTitle>
                    <CardDescription className="font-body">Digitale Transformation</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Digital</Badge>
                      <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Analytics</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Spezialist für digitale Transformationsprozesse mit Schwerpunkt auf Data Analytics
                  und der Implementierung zukunftsfähiger IT-Strategien in Unternehmen.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#A5E53D] to-[#A5E53D]/60 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    SK
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Sarah Krüger</CardTitle>
                    <CardDescription className="font-body">Nachhaltigkeitsberatung</CardDescription>
                    <div className="flex gap-1 mt-2">
                      <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Sustainability</Badge>
                      <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">ESG</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-body text-gray-600">
                  Nachhaltigkeitsexpertin mit Fokus auf ESG-Strategien und der Integration von
                  Nachhaltigkeitsprinzipien in Geschäftsmodelle und Innovationsprozesse.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 font-headlines">
              Bereit für Ihre Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90 font-body">
              Lassen Sie uns gemeinsam wissenschaftlich fundierte Innovationslösungen für Ihr Unternehmen entwickeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">
                Beratung anfragen
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#00968F] font-body">
                  Zurück zur Startseite
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-[#00968F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-headlines">DIZT</h3>
                <p className="text-sm text-gray-400 font-body">Zentrum für Deutsche Innovation</p>
              </div>
            </div>
            <p className="text-gray-400 font-body">© 2024 DIZT. Wissenschaftlich fundiert. Zukunftsorientiert. Praxisnah.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}