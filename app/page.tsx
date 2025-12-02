import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Star, Zap, Shield, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
                Professional Printing Services for Your Business
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                From business cards to large format posters, we deliver exceptional quality with fast turnaround times
                and competitive pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/products">
                    Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/upload">Upload Your Design</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrintPro?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with years of expertise to deliver outstanding results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Fast Turnaround</h3>
                  <p className="text-muted-foreground">
                    Get your prints within 24-48 hours with our express service option
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Quality Guarantee</h3>
                  <p className="text-muted-foreground">
                    Premium materials and state-of-the-art printing technology ensure perfect results
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">24/7 Support</h3>
                  <p className="text-muted-foreground">
                    Our team is always ready to help with your printing needs and questions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Design Examples Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Work</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our portfolio of stunning print designs created for satisfied clients
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src="https://placehold.co/600x450?text=Modern+minimalist+business+card+design+with+clean+typography+and+professional+layout"
                  alt="Modern minimalist business card design with clean typography and professional layout"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Business Cards</h3>
                    <p className="text-white/80 text-sm">Premium finish, multiple options</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src="https://placehold.co/600x450?text=Elegant+tri-fold+brochure+with+vibrant+colors+and+engaging+product+photography"
                  alt="Elegant tri-fold brochure with vibrant colors and engaging product photography"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Brochures</h3>
                    <p className="text-white/80 text-sm">Bi-fold and tri-fold options</p>
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg aspect-[4/3]">
                <img
                  src="https://placehold.co/600x450?text=Eye-catching+event+poster+with+bold+graphics+and+dynamic+composition"
                  alt="Eye-catching event poster with bold graphics and dynamic composition"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Posters</h3>
                    <p className="text-white/80 text-sm">Various sizes available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Outstanding quality and incredibly fast service. PrintPro has become our go-to printing partner for
                    all business materials."
                  </p>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The price calculator made it easy to budget, and the online ordering system is straightforward.
                    Highly recommended!"
                  </p>
                  <div>
                    <p className="font-semibold">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, Bloom Co.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Exceptional customer service and beautiful print quality. They brought our design vision to life
                    perfectly."
                  </p>
                  <div>
                    <p className="font-semibold">Emma Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Owner, Creative Studio</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Upload your design or browse our products to begin your order today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/upload">Upload Design</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link href="/calculator">Calculate Price</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
