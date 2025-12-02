import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { CreditCard, FileText, ImageIcon, Bookmark, Album, Newspaper } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Printing Products | Business Cards, Brochures, Posters & More",
  description:
    "Explore our wide range of professional printing products including business cards, brochures, flyers, posters, banners, and custom printing services.",
  keywords: ["business cards", "brochures", "posters", "flyers", "banners", "printing products"],
}

const products = [
  {
    id: 1,
    name: "Business Cards",
    description: "Make a lasting impression with premium business cards",
    icon: CreditCard,
    features: ["Standard & Premium stock", "Gloss or Matte finish", "Multiple sizes", "Quick turnaround"],
    startingPrice: 19.99,
    popular: true,
  },
  {
    id: 2,
    name: "Brochures",
    description: "Showcase your business with professional brochures",
    icon: FileText,
    features: ["Bi-fold & Tri-fold", "Various paper weights", "Full color printing", "Custom sizes"],
    startingPrice: 49.99,
    popular: true,
  },
  {
    id: 3,
    name: "Posters",
    description: "Eye-catching posters for events and promotions",
    icon: ImageIcon,
    features: ["Multiple sizes available", "Gloss or Matte finish", "Indoor & Outdoor", "Mounting options"],
    startingPrice: 29.99,
    popular: false,
  },
  {
    id: 4,
    name: "Flyers",
    description: "Cost-effective marketing materials for campaigns",
    icon: Newspaper,
    features: ["Various sizes", "Single or double-sided", "Bulk discounts", "Fast production"],
    startingPrice: 39.99,
    popular: true,
  },
  {
    id: 5,
    name: "Banners",
    description: "Large format banners for maximum visibility",
    icon: Bookmark,
    features: ["Weather resistant", "Custom sizes", "Hemming & grommets", "Vinyl material"],
    startingPrice: 79.99,
    popular: false,
  },
  {
    id: 6,
    name: "Catalogs",
    description: "Professional catalogs for product showcases",
    icon: Album,
    features: ["Multiple binding options", "Various page counts", "Premium paper", "Full color"],
    startingPrice: 99.99,
    popular: false,
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Our Printing Products</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Professional printing solutions for all your business and marketing needs. High quality materials,
                competitive pricing, and fast turnaround.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => {
                const Icon = product.icon
                return (
                  <Card key={product.id} className="relative flex flex-col">
                    {product.popular && <Badge className="absolute right-4 top-4">Popular</Badge>}
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <ul className="space-y-2 mb-6 flex-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-0.5">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-3">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold">${product.startingPrice}</span>
                          <span className="text-sm text-muted-foreground">starting from</span>
                        </div>
                        <div className="flex gap-2">
                          <Button asChild className="flex-1">
                            <Link href="/calculator">Get Quote</Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link href="/upload">Order Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">Need Something Custom?</h2>
              <p className="text-muted-foreground">
                We offer custom printing solutions for unique projects. Contact our team to discuss your specific
                requirements and get a personalized quote.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
