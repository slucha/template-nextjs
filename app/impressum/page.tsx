import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function ImpressumPage() {
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
              <Link href="/leistungen" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Leistungen
              </Link>
              <Link href="/kontakt" className="text-[#1E1E1E] hover:text-[#00968F] font-body transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Impressum</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Angaben gemäß § 5 TMG (Telemediengesetz)
            </p>
          </div>
        </div>
      </section>

      {/* Impressum Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1E1E1E] font-headlines">
                  Zentrum für Deutsche Innovation, Zukunft und Transformation (DIZT)
                </CardTitle>
                <CardDescription className="font-body text-lg">
                  Angaben gemäß § 5 TMG
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-[#00968F]">
                    <CardHeader>
                      <CardTitle className="text-[#1E1E1E] font-headlines flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#00968F]" />
                        Anschrift
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 font-body text-gray-700">
                        <p className="font-semibold">Jan Marciniak</p>
                        <p>DIZT</p>
                        <p>Sengelmannstr 23</p>
                        <p>22297 Hamburg</p>
                        <p>Deutschland</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-[#F47C27]">
                    <CardHeader>
                      <CardTitle className="text-[#1E1E1E] font-headlines flex items-center gap-2">
                        <Phone className="h-5 w-5 text-[#F47C27]" />
                        Kontakt
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 font-body text-gray-700">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[#F47C27]" />
                          <span>+49 176 93047429</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[#00968F]" />
                          <span>info@zentrum-dizt.de</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">
                      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                    </h3>
                    <div className="font-body text-gray-700">
                      <p>Jan Marciniak</p>
                      <p>Sengelmannstr 23</p>
                      <p>22297 Hamburg</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">
                      Haftungsausschluss
                    </h3>
                    <div className="space-y-4 font-body text-gray-700">
                      <div>
                        <h4 className="font-semibold text-[#1E1E1E] mb-2">Haftung für Inhalte</h4>
                        <p>
                          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                          allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                          unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1E1E1E] mb-2">Haftung für Links</h4>
                        <p>
                          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1E1E1E] mb-2">Urheberrecht</h4>
                        <p>
                          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                          Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
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