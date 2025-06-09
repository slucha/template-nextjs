import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Lightbulb, Target, Mail, ArrowRight, Phone, MapPin, Clock, Send, User, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function KontaktPage() {
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
              <Button className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">Beratung anfragen</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-headlines">Kontakt</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-body">
              Lassen Sie uns gemeinsam über Ihre Innovationsvorhaben sprechen.
              Wir freuen uns auf den Dialog mit Ihnen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-l-4 border-l-[#00968F] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#00968F]/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-[#00968F]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Hauptsitz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-body text-gray-700">
                  <p className="font-semibold">DIZT - Zentrum für Deutsche Innovation</p>
                  <p>Innovationsstraße 42</p>
                  <p>10115 Berlin</p>
                  <p>Deutschland</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#F47C27] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#F47C27]/10 rounded-lg flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-[#F47C27]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Direktkontakt</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 font-body text-gray-700">
                  <div>
                    <p className="font-semibold">Telefon</p>
                    <p>+49 (0) 30 1234 5678</p>
                  </div>
                  <div>
                    <p className="font-semibold">E-Mail</p>
                    <p>info@dizt.de</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[#A5E53D] hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[#A5E53D]/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-[#A5E53D]" />
                </div>
                <CardTitle className="text-[#1E1E1E] font-headlines">Erreichbarkeit</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 font-body text-gray-700">
                  <div>
                    <p className="font-semibold">Montag - Freitag</p>
                    <p>09:00 - 18:00 Uhr</p>
                  </div>
                  <div>
                    <p className="font-semibold">Termine</p>
                    <p>Nach Vereinbarung</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Ihre Anfrage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Nutzen Sie unser Kontaktformular für eine erste Beratung oder vereinbaren Sie direkt einen Termin mit unserem Team.
              </p>
            </div>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#1E1E1E] font-headlines">Kostenlose Erstberatung anfragen</CardTitle>
                <CardDescription className="font-body">
                  Beschreiben Sie uns Ihr Vorhaben – wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        Vorname *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                        placeholder="Max"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        Nachname *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                        placeholder="Mustermann"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                        placeholder="max.mustermann@unternehmen.de"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                        placeholder="+49 (0) 123 456789"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        Unternehmen
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                        placeholder="Ihr Unternehmen"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                        Interessensgebiet
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body">
                        <option value="">Bitte wählen...</option>
                        <option value="innovation">Innovationsanalyse</option>
                        <option value="digital">Digitale Transformation</option>
                        <option value="research">Forschung & Entwicklung</option>
                        <option value="business">Geschäftsmodell-Innovation</option>
                        <option value="sustainability">Nachhaltigkeits-Innovation</option>
                        <option value="startup">Startup Support</option>
                        <option value="industrie4">Industrie 4.0</option>
                        <option value="other">Sonstiges</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#1E1E1E] mb-2 font-body">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00968F] focus:border-transparent font-body"
                      placeholder="Beschreiben Sie uns Ihr Vorhaben, Ihre Herausforderungen oder Ihre Ziele. Je detaillierter Ihre Beschreibung, desto besser können wir Sie beraten."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-[#00968F] border-gray-300 rounded focus:ring-[#00968F]"
                    />
                    <label htmlFor="privacy" className="text-sm text-gray-600 font-body">
                      Ich habe die{" "}
                      <Link href="/datenschutz" className="text-[#00968F] hover:underline">
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body"
                    >
                      Anfrage senden
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">Direkte Ansprechpartner</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Wenden Sie sich direkt an unsere Experten für spezifische Fragen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#00968F] to-[#00968F]/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    MF
                  </div>
                  <div>
                    <CardTitle className="text-[#1E1E1E] font-headlines">Dr. Maria Fischer</CardTitle>
                    <CardDescription className="font-body">Geschäftsführung</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">m.fischer@dizt.de</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">+49 (0) 30 1234 5671</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Strategie</Badge>
                  <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27]">Innovation</Badge>
                </div>
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
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">j.marciniak@dizt.de</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">+49 (0) 30 1234 5672</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Programme</Badge>
                  <Badge variant="secondary" className="bg-[#F47C27]/10 text-[#F47C27]">Koordination</Badge>
                </div>
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
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">t.klein@dizt.de</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#00968F]" />
                  <span className="font-body text-gray-600">+49 (0) 30 1234 5673</span>
                </div>
                <div className="flex gap-1 mt-2">
                  <Badge variant="secondary" className="bg-[#00968F]/10 text-[#00968F]">Digital</Badge>
                  <Badge variant="secondary" className="bg-[#A5E53D]/10 text-[#A5E53D]">Analytics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Directions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#1E1E1E] mb-4 font-headlines">So finden Sie uns</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Unser Hauptsitz befindet sich im Herzen Berlins, gut erreichbar mit öffentlichen Verkehrsmitteln
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-[#00968F]">
                <CardHeader>
                  <CardTitle className="text-[#1E1E1E] font-headlines">Anfahrt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-gray-700">
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-2">Öffentliche Verkehrsmittel</h4>
                    <ul className="space-y-1">
                      <li>• S-Bahn: S1, S2, S25 bis "Friedrichstraße"</li>
                      <li>• U-Bahn: U6 bis "Friedrichstraße"</li>
                      <li>• Bus: 100, 200, TXL bis "Unter den Linden"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-2">Mit dem Auto</h4>
                    <ul className="space-y-1">
                      <li>• A100 Abfahrt "Friedrichstraße"</li>
                      <li>• Parkmöglichkeiten in der Tiefgarage</li>
                      <li>• Parkgebühren: 2€/Stunde</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-[#F47C27]">
                <CardHeader>
                  <CardTitle className="text-[#1E1E1E] font-headlines">Wegbeschreibung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-body text-gray-700">
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-2">Vom Hauptbahnhof</h4>
                    <p>5 Minuten zu Fuß über die Friedrichstraße in Richtung Süden</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-2">Orientierung</h4>
                    <p>Modernes Bürogebäude mit grauer Glasfassade, Eingang über den Innenhof</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E1E] mb-2">Barrierefreiheit</h4>
                    <p>Das Gebäude ist vollständig barrierefrei zugänglich</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#00968F] to-[#00968F]/80">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 font-headlines">
              Wir freuen uns auf Sie!
            </h2>
            <p className="text-xl mb-8 opacity-90 font-body">
              Vereinbaren Sie noch heute einen Termin und lassen Sie uns gemeinsam an Ihren Innovationszielen arbeiten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F47C27] hover:bg-[#F47C27]/90 text-white font-body">
                Termin vereinbaren
                <Phone className="ml-2 h-5 w-5" />
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