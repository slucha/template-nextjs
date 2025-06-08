import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Your App</h1>
          <nav className="flex gap-4">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Contact</Button>
            <Button>Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Welcome to Your Next.js App
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Built with Next.js, shadcn/ui, and Tailwind CSS. Ready for your v0.dev design integration.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>⚡ Fast</CardTitle>
              <CardDescription>Built with Next.js for optimal performance</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Server-side rendering and static generation for lightning-fast load times.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🎨 Beautiful</CardTitle>
              <CardDescription>Styled with shadcn/ui components</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Pre-built components that look great and are fully customizable.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🚀 Modern</CardTitle>
              <CardDescription>Latest web technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <p>TypeScript, Tailwind CSS, and modern React patterns out of the box.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>Built with ❤️ using Next.js and shadcn/ui</p>
        </div>
      </footer>
    </div>
  )
}
