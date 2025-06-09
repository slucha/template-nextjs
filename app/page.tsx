import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Building2, Users, Lightbulb, Target, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#00968F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#1E1E1E] font-headlines">DIZT</h1>
                <p className="text-xs text-gray-600 font-body">Zentrum für Deutsche Innovation</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/ueber-uns" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Über uns
              </Link>
              <Link href="/leistungen" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Wo Zukunft Gestalt annimmt.</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Das Zentrum für Deutsche Innovation, Zukunft und Transformation – Ihr Partner für wissenschaftlich
              fundierte Innovationsimpulse und praxisnahe Zukunftslösungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">
                Jetzt entdecken
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#00968F] bg-transparent font-body"
              >
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Markenwerte Section */}
      <section id="ueber-uns" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unsere Markenwerte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Wissenschaftlich fundiert, zukunftsorientiert und praxisnah – so gestalten wir gemeinsam mit Ihnen die
              Transformation Ihres Unternehmens.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Seriosität</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Wissenschaftlich fundiert und vertrauenswürdig – unsere Lösungen basieren auf solider Forschung und
                  bewährten Methoden.
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
                  Fokus auf nachhaltige, digitale und unternehmerische Transformation für eine erfolgreiche Zukunft.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#A5E53D] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A5E53D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#A5E53D]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Praxisnähe</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Konkrete Lösungen für Unternehmen und Wirtschaft – von der Theorie zur erfolgreichen Umsetzung.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Interdisziplinarität</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Brücke zwischen Forschung, Anwendung und Transfer – wir verbinden verschiedene Disziplinen für
                  optimale Ergebnisse.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F47C27] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47C27]/10 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-[#F47C27]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Gestaltungskraft</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Entwicklung und Umsetzung innovativer Geschäftsmodelle – wir gestalten aktiv die Zukunft mit Ihnen.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zielgruppen Section */}
      <section id="zielgruppen" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unsere Zielgruppen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Wir arbeiten mit verschiedenen Partnern zusammen, um Innovationen voranzutreiben und Zukunftschancen zu
              realisieren.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#00968F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-10 w-10 text-[#00968F]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">Unternehmen & Mittelstand</h3>
              <p className="text-gray-600 font-body">
                Industrie, IT und Dienstleistungsunternehmen auf dem Weg der digitalen Transformation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#F47C27]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-[#F47C27]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">Wirtschaftsförderungen</h3>
              <p className="text-gray-600 font-body">
                Kammern, Cluster und regionale Wirtschaftsförderungen für nachhaltige Entwicklung.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#A5E53D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-[#A5E53D]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">Öffentliche Fördergeber</h3>
              <p className="text-gray-600 font-body">
                BMBF, EU-Programme und Stiftungen für innovative Förderprojekte.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#00968F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-10 w-10 text-[#00968F]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">Hochschulen</h3>
              <p className="text-gray-600 font-body">
                Universitäten, Fachhochschulen und Transferstellen für Wissenstransfer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen Section */}
      <section id="leistungen" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Unsere Leistungen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Ein praxisorientiertes Transferzentrum, das wissenschaftlich fundierte Innovationsimpulse liefert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-[#00968F] text-white font-body">Innovation</Badge>
                <CardTitle className="text-[#1E1E1E] font-headlines">Innovationsberatung</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Entwicklung innovativer Geschäftsmodelle und Strategien für nachhaltige Transformation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-[#F47C27] text-white font-body">Transformation</Badge>
                <CardTitle className="text-[#1E1E1E] font-headlines">Digitale Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Begleitung bei der digitalen Transformation und Implementierung zukunftsfähiger Technologien.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-[#A5E53D] text-[#1E1E1E] font-body">Transfer</Badge>
                <CardTitle className="text-[#1E1E1E] font-headlines">Wissenstransfer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-body">
                  Brücke zwischen Forschung und Praxis für erfolgreiche Umsetzung wissenschaftlicher Erkenntnisse.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00968F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 font-headlines">Bereit für die Zukunft?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-body">
            Lassen Sie uns gemeinsam Ihre Zukunftschancen realisieren. Kontaktieren Sie uns für ein unverbindliches
            Beratungsgespräch.
          </p>
          <Button size="lg" className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">
            Jetzt Beratung anfragen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Kontakt</h2>
            <p className="text-xl text-gray-600 font-body">
              Nehmen Sie Kontakt mit uns auf – wir freuen uns auf Ihre Anfrage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00968F]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#00968F]" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">E-Mail</h3>
              <p className="text-gray-600 font-body">kontakt@zentrum-dizt.de</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F47C27]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#F47C27]" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">Telefon</h3>
              <p className="text-gray-600 font-body">+49 (0) 123 456 789</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#A5E53D]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="h-8 w-8 text-[#A5E53D]" />
              </div>
              <h3 className="text-lg font-bold text-[#1E1E1E] mb-2 font-headlines">LinkedIn</h3>
              <p className="text-gray-600 font-body">DIZT Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E1E1E] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-[#00968F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Z</span>
                </div>
                <div>
                  <h3 className="font-bold font-headlines">DIZT</h3>
                  <p className="text-sm text-gray-400 font-body">Wo Zukunft Gestalt annimmt.</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-headlines">Navigation</h4>
              <ul className="space-y-2 font-body">
                <li>
                  <Link href="#ueber-uns" className="text-gray-400 hover:text-white transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="#leistungen" className="text-gray-400 hover:text-white transition-colors">
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link href="#zielgruppen" className="text-gray-400 hover:text-white transition-colors">
                    Zielgruppen
                  </Link>
                </li>
                <li>
                  <Link href="#kontakt" className="text-gray-400 hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-headlines">Kontakt</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li>kontakt@zentrum-dizt.de</li>
                <li>+49 (0) 123 456 789</li>
                <li>zentrum-dizt.de</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-headlines">Rechtliches</h4>
              <ul className="space-y-2 font-body">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 font-body">
              © {new Date().getFullYear()} Zentrum für Deutsche Innovation, Zukunft und Transformation. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
