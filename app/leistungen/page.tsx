import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Lightbulb, Target, Mail, ArrowRight, Search, BookOpen, Briefcase, Zap, Globe, Cpu } from "lucide-react"
import Link from "next/link"

export default function LeistungenPage() {
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
              <Link href="/ueber-uns" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Über uns
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Unsere Leistungen</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Wissenschaftlich fundierte Innovationslösungen für die Transformation von heute und morgen.
              Vom Konzept bis zur erfolgreichen Umsetzung.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Kernleistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Umfassende Beratung und Begleitung für Ihre Innovations- und Transformationsprojekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-2xl text-[#1E1E1E] font-headlines">Innovationsanalyse & Strategieentwicklung</CardTitle>
                <CardDescription className="font-body text-lg">
                  Wissenschaftlich fundierte Analyse Ihrer Innovationspotentiale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-gray-700">
                  Wir analysieren systematisch Ihre Innovationslandschaft und entwickeln datenbasierte Strategien
                  für nachhaltiges Wachstum und Transformation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Markt- und Technologieanalyse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Innovationspotential-Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Strategische Roadmap-Entwicklung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Fördermittel-Screening</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F47C27] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47C27]/10 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-[#F47C27]" />
                </div>
                <CardTitle className="text-2xl text-[#1E1E1E] font-headlines">Digitale Transformation</CardTitle>
                <CardDescription className="font-body text-lg">
                  Ganzheitliche Digitalisierungsstrategien und -umsetzung
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-gray-700">
                  Von der Digital Readiness Assessment bis zur Implementierung: Wir begleiten Sie auf dem Weg
                  zur erfolgreichen digitalen Transformation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F47C27] rounded-full"></div>
                    <span className="font-body text-gray-600">Digital Readiness Assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F47C27] rounded-full"></div>
                    <span className="font-body text-gray-600">Digitalisierungsstrategie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F47C27] rounded-full"></div>
                    <span className="font-body text-gray-600">Technologie-Implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#F47C27] rounded-full"></div>
                    <span className="font-body text-gray-600">Change Management</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#A5E53D] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A5E53D]/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-[#A5E53D]" />
                </div>
                <CardTitle className="text-2xl text-[#1E1E1E] font-headlines">Forschung & Entwicklung</CardTitle>
                <CardDescription className="font-body text-lg">
                  Wissenschaftliche F&E-Projekte und Kooperationen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-gray-700">
                  Wir initiieren und begleiten anwendungsorientierte Forschungsprojekte und schaffen
                  Brücken zwischen Wissenschaft und Praxis.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#A5E53D] rounded-full"></div>
                    <span className="font-body text-gray-600">Antragsstellung & Projektmanagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#A5E53D] rounded-full"></div>
                    <span className="font-body text-gray-600">Wissenschafts-Industrie-Kooperationen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#A5E53D] rounded-full"></div>
                    <span className="font-body text-gray-600">Prototypentwicklung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#A5E53D] rounded-full"></div>
                    <span className="font-body text-gray-600">Technologietransfer</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-2xl text-[#1E1E1E] font-headlines">Geschäftsmodell-Innovation</CardTitle>
                <CardDescription className="font-body text-lg">
                  Entwicklung zukunftsfähiger Geschäftsmodelle
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-body text-gray-700">
                  Von der Ideenfindung bis zur Markteinführung: Wir entwickeln innovative Geschäftsmodelle
                  und begleiten deren Umsetzung.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Business Model Canvas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Marktvalidierung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Prototyping & Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#00968F] rounded-full"></div>
                    <span className="font-body text-gray-600">Go-to-Market Strategien</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Spezialisierte Beratung</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Branchenspezifische Expertise für Ihre individuellen Herausforderungen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A5E53D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#A5E53D]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Nachhaltigkeits-Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  ESG-konforme Innovationsstrategien und nachhaltige Geschäftsmodelle für zukunftsfähige Unternehmen.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D] mr-2 mb-2">Circular Economy</Badge>
                  <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D] mr-2 mb-2">ESG Strategy</Badge>
                  <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D] mr-2 mb-2">Green Tech</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47C27]/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#F47C27]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Startup & Scale-up Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Umfassende Unterstützung für Startups und wachsende Unternehmen von der Ideenvalidierung bis zur Skalierung.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27] mr-2 mb-2">Accelerator</Badge>
                  <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27] mr-2 mb-2">Investor Readiness</Badge>
                  <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27] mr-2 mb-2">Scaling</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Industrie 4.0 Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Spezialisierte Beratung für produzierende Unternehmen auf dem Weg zur smarten Fabrik und vernetzten Produktion.
                </CardDescription>
                <div className="mt-4">
                  <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F] mr-2 mb-2">IoT Integration</Badge>
                  <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F] mr-2 mb-2">Smart Factory</Badge>
                  <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F] mr-2 mb-2">Automation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unser Beratungsprozess</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Strukturiert, transparent und zielorientiert – so arbeiten wir mit Ihnen zusammen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#00968F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">Analyse</h3>
                <p className="text-gray-600 font-body text-sm">
                  Umfassende Ist-Analyse Ihrer Situation und Herausforderungen
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#F47C27] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">Strategie</h3>
                <p className="text-gray-600 font-body text-sm">
                  Entwicklung maßgeschneiderter Lösungsansätze und Roadmaps
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#A5E53D] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">Umsetzung</h3>
                <p className="text-gray-600 font-body text-sm">
                  Begleitung bei der praktischen Implementierung Ihrer Projekte
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#00968F] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">Monitoring</h3>
                <p className="text-gray-600 font-body text-sm">
                  Kontinuierliche Erfolgsmessung und Optimierung der Ergebnisse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 font-headlines">
              Starten Sie Ihre Innovation
            </h2>
            <p className="text-xl mb-8 opacity-90 font-body">
              Lassen Sie uns gemeinsam Ihre Innovationspotentiale entdecken und erfolgreiche Transformationsprojekte realisieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">
                Kostenlose Erstberatung
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