import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function AGBPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">AGB</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Allgemeine Geschäftsbedingungen für Beratungsleistungen
            </p>
          </div>
        </div>
      </section>

      {/* AGB Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1E1E1E] font-headlines flex items-center gap-2">
                  <FileText className="h-8 w-8 text-[#00968F]" />
                  Allgemeine Geschäftsbedingungen
                </CardTitle>
                <CardDescription className="font-body text-lg">
                  Gültig ab: 01.01.2024 | DIZT - Zentrum für Deutsche Innovation, Zukunft und Transformation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 1 Geltungsbereich</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Beratungsleistungen, die von 
                      DIZT - Zentrum für Deutsche Innovation, Zukunft und Transformation (nachfolgend "DIZT" genannt) 
                      erbracht werden.
                    </p>
                    <p>
                      Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, DIZT stimmt 
                      ihrer Geltung ausdrücklich schriftlich zu.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 2 Vertragsschluss</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Der Vertrag kommt durch schriftliche Auftragsbestätigung von DIZT oder durch Beginn der 
                      Leistungserbringung zustande.
                    </p>
                    <p>
                      Angebote von DIZT sind freibleibend und unverbindlich, sofern nicht ausdrücklich als 
                      verbindlich bezeichnet.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 3 Leistungsumfang</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Der Umfang der zu erbringenden Leistungen ergibt sich aus der jeweiligen Auftragsbestätigung 
                      bzw. dem Beratungsvertrag.
                    </p>
                    <p>
                      DIZT erbringt Beratungsleistungen in den Bereichen Innovation, digitale Transformation, 
                      Forschung & Entwicklung sowie Geschäftsmodell-Innovation.
                    </p>
                    <p>
                      Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 4 Honorar und Zahlungsbedingungen</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Die Höhe des Honorars ergibt sich aus der jeweiligen Auftragsbestätigung. Sofern nichts 
                      anderes vereinbart ist, erfolgt die Berechnung nach Aufwand zu den vereinbarten Stundensätzen.
                    </p>
                    <p>
                      Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug zur Zahlung fällig.
                    </p>
                    <p>
                      Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                      Basiszinssatz der Europäischen Zentralbank berechnet.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 5 Mitwirkungspflichten</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Der Auftraggeber verpflichtet sich, DIZT die für die Durchführung des Auftrags erforderlichen 
                      Informationen und Unterlagen vollständig und rechtzeitig zur Verfügung zu stellen.
                    </p>
                    <p>
                      Verzögerungen, die durch unvollständige oder verspätete Mitwirkung des Auftraggebers 
                      entstehen, gehen zu Lasten des Auftraggebers.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 6 Vertraulichkeit</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      DIZT verpflichtet sich, über alle im Rahmen der Beratungstätigkeit bekannt gewordenen 
                      Geschäfts- und Betriebsgeheimnisse des Auftraggebers Stillschweigen zu bewahren.
                    </p>
                    <p>
                      Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 7 Haftung</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      DIZT haftet für Schäden nur bei Vorsatz und grober Fahrlässigkeit. Die Haftung für 
                      einfache Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten 
                      betroffen sind.
                    </p>
                    <p>
                      Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.
                    </p>
                    <p>
                      Die Haftung ist der Höhe nach auf das vereinbarte Honorar begrenzt.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 8 Kündigung</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Beide Parteien können den Vertrag jederzeit mit einer Frist von 4 Wochen zum Monatsende 
                      kündigen, soweit nichts anderes vereinbart ist.
                    </p>
                    <p>
                      Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                    </p>
                    <p>
                      Die Kündigung bedarf der Schriftform.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 9 Urheberrecht</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Alle von DIZT erstellten Konzepte, Analysen und sonstigen Arbeitsergebnisse bleiben 
                      Eigentum von DIZT. Dem Auftraggeber wird ein einfaches Nutzungsrecht eingeräumt.
                    </p>
                    <p>
                      Eine Weitergabe an Dritte ist nur mit schriftlicher Zustimmung von DIZT gestattet.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 10 Datenschutz</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      DIZT verpflichtet sich, die geltenden datenschutzrechtlichen Bestimmungen zu beachten.
                    </p>
                    <p>
                      Nähere Informationen zum Datenschutz finden Sie in unserer{" "}
                      <Link href="/datenschutz" className="text-[#00968F] hover:underline">
                        Datenschutzerklärung
                      </Link>.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">§ 11 Schlussbestimmungen</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                    </p>
                    <p>
                      Gerichtsstand ist Hamburg, sofern der Auftraggeber Kaufmann ist.
                    </p>
                    <p>
                      Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, berührt dies 
                      nicht die Wirksamkeit der übrigen Bestimmungen.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg border-l-4 border-l-[#00968F]">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-[#00968F] mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1E1E1E] mb-1">Kontaktinformationen</h4>
                      <p className="font-body text-gray-700 text-sm">
                        DIZT - Zentrum für Deutsche Innovation, Zukunft und Transformation<br />
                        Jan Marciniak<br />
                        Sengelmannstr 23, 22297 Hamburg<br />
                        E-Mail: info@zentrum-dizt.de<br />
                        Telefon: +49 176 93047429
                      </p>
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
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Startseite
                  </Link>
                </li>
                <li>
                  <Link href="/ueber-uns" className="text-gray-400 hover:text-white transition-colors">
                    Über uns
                  </Link>
                </li>
                <li>
                  <Link href="/leistungen" className="text-gray-400 hover:text-white transition-colors">
                    Leistungen
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-gray-400 hover:text-white transition-colors">
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-headlines">Kontakt</h4>
              <ul className="space-y-2 text-gray-400 font-body">
                <li>info@zentrum-dizt.de</li>
                <li>+49 176 93047429</li>
                <li>zentrum-dizt.de</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-headlines">Rechtliches</h4>
              <ul className="space-y-2 font-body">
                <li>
                  <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                    Datenschutz
                  </Link>
                </li>
                <li>
                  <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
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