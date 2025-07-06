import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function DatenschutzPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Datenschutzerklärung</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Transparenz und Schutz Ihrer personenbezogenen Daten
            </p>
          </div>
        </div>
      </section>

      {/* Datenschutz Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-3xl text-[#1E1E1E] font-headlines flex items-center gap-2">
                  <Shield className="h-8 w-8 text-[#00968F]" />
                  Datenschutzerklärung
                </CardTitle>
                <CardDescription className="font-body text-lg">
                  Gültig ab: 01.01.2024 | Gemäß Art. 13 DSGVO
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">1. Verantwortlicher</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>Verantwortlicher im Sinne der DSGVO ist:</p>
                    <div className="bg-[#F5F7FA] p-4 rounded-lg">
                      <p className="font-semibold">Jan Marciniak</p>
                      <p>DIZT - Zentrum für Deutsche Innovation, Zukunft und Transformation</p>
                      <p>Sengelmannstr 23</p>
                      <p>22297 Hamburg</p>
                      <p>E-Mail: info@zentrum-dizt.de</p>
                      <p>Telefon: +49 176 93047429</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">2. Erhebung und Verarbeitung personenbezogener Daten</h3>
                  <div className="font-body text-gray-700 space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1E1E1E] mb-2">2.1 Besuch unserer Website</h4>
                      <p>
                        Beim Besuch unserer Website werden automatisch Informationen an den Server unserer Website gesendet. 
                        Diese Informationen werden temporär in einem sog. Logfile gespeichert. Folgende Informationen werden 
                        dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung gespeichert:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>IP-Adresse des anfragenden Rechners</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Name und URL der abgerufenen Datei</li>
                        <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                        <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E1E1E] mb-2">2.2 Kontaktformular</h4>
                      <p>
                        Bei der Nutzung des Kontaktformulars erheben wir folgende Daten:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Vor- und Nachname</li>
                        <li>E-Mail-Adresse</li>
                        <li>Telefonnummer (optional)</li>
                        <li>Unternehmen (optional)</li>
                        <li>Inhalt der Nachricht</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">3. Zweck der Datenverarbeitung</h3>
                  <div className="font-body text-gray-700 space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#1E1E1E] mb-2">3.1 Logfiles</h4>
                      <p>
                        Die vorübergehende Speicherung der IP-Adresse durch das System ist notwendig, um eine Auslieferung 
                        der Website an den Rechner des Nutzers zu ermöglichen. Die Speicherung in Logfiles erfolgt, 
                        um die Funktionsfähigkeit der Website sicherzustellen.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1E1E1E] mb-2">3.2 Kontaktformular</h4>
                      <p>
                        Die Verarbeitung der personenbezogenen Daten aus dem Kontaktformular dient uns allein zur 
                        Bearbeitung der Kontaktaufnahme und zur Beantwortung Ihrer Anfrage.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">4. Rechtsgrundlage</h3>
                  <div className="font-body text-gray-700">
                    <p>
                      Die Verarbeitung der personenbezogenen Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO 
                      (berechtigte Interessen) bzw. Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bei Kontaktanfragen.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">5. Speicherdauer</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>
                      Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr 
                      erforderlich sind.
                    </p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Logfiles: Automatische Löschung nach 7 Tagen</li>
                      <li>Kontaktdaten: Löschung nach Bearbeitung der Anfrage oder nach 3 Jahren</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">6. Ihre Rechte</h3>
                  <div className="font-body text-gray-700 space-y-2">
                    <p>Sie haben folgende Rechte:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                      <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                      <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                      <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                      <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                      <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
                      <li>Recht auf Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">7. Cookies</h3>
                  <div className="font-body text-gray-700">
                    <p>
                      Unsere Website verwendet derzeit keine Cookies. Sollten zukünftig Cookies eingesetzt werden, 
                      werden Sie entsprechend informiert und um Ihre Einwilligung gebeten.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#1E1E1E] mb-3 font-headlines">8. Änderungen der Datenschutzerklärung</h3>
                  <div className="font-body text-gray-700">
                    <p>
                      Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                      rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                      Datenschutzerklärung umzusetzen.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <p className="font-body text-gray-700">
                    <strong>Kontakt bei Fragen:</strong> Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer 
                    personenbezogenen Daten wenden Sie sich bitte an: info@zentrum-dizt.de
                  </p>
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