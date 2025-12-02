import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Printing Pricing | Transparent & Competitive Rates",
  description:
    "View our competitive pricing for all printing services. No hidden fees, volume discounts available. Use our price calculator for instant quotes.",
  keywords: ["printing prices", "printing rates", "printing costs", "printing quotes"],
}

const pricingData = [
  {
    category: "Business Cards",
    items: [
      { quantity: "250 cards", price: "$19.99", turnaround: "3-5 days" },
      { quantity: "500 cards", price: "$29.99", turnaround: "3-5 days" },
      { quantity: "1000 cards", price: "$49.99", turnaround: "3-5 days" },
      { quantity: "2500 cards", price: "$99.99", turnaround: "5-7 days" },
    ],
  },
  {
    category: "Brochures (Tri-fold)",
    items: [
      { quantity: "100 brochures", price: "$49.99", turnaround: "3-5 days" },
      { quantity: "250 brochures", price: "$89.99", turnaround: "3-5 days" },
      { quantity: "500 brochures", price: "$149.99", turnaround: "5-7 days" },
      { quantity: "1000 brochures", price: "$249.99", turnaround: "5-7 days" },
    ],
  },
  {
    category: "Posters",
    items: [
      { quantity: '18" x 24" (5 posters)', price: "$29.99", turnaround: "2-3 days" },
      { quantity: '24" x 36" (5 posters)', price: "$49.99", turnaround: "2-3 days" },
      { quantity: '18" x 24" (25 posters)', price: "$119.99", turnaround: "3-5 days" },
      { quantity: '24" x 36" (25 posters)', price: "$199.99", turnaround: "3-5 days" },
    ],
  },
  {
    category: "Flyers",
    items: [
      { quantity: '250 flyers (8.5" x 11")', price: "$39.99", turnaround: "2-3 days" },
      { quantity: '500 flyers (8.5" x 11")', price: "$59.99", turnaround: "2-3 days" },
      { quantity: '1000 flyers (8.5" x 11")', price: "$99.99", turnaround: "3-5 days" },
      { quantity: '2500 flyers (8.5" x 11")', price: "$199.99", turnaround: "5-7 days" },
    ],
  },
  {
    category: "Banners",
    items: [
      { quantity: "2' x 4' banner", price: "$79.99", turnaround: "3-5 days" },
      { quantity: "3' x 6' banner", price: "$129.99", turnaround: "3-5 days" },
      { quantity: "4' x 8' banner", price: "$199.99", turnaround: "5-7 days" },
      { quantity: "5' x 10' banner", price: "$299.99", turnaround: "5-7 days" },
    ],
  },
  {
    category: "Catalogs",
    items: [
      { quantity: "50 catalogs (20 pages)", price: "$99.99", turnaround: "5-7 days" },
      { quantity: "100 catalogs (20 pages)", price: "$179.99", turnaround: "5-7 days" },
      { quantity: "50 catalogs (40 pages)", price: "$149.99", turnaround: "7-10 days" },
      { quantity: "100 catalogs (40 pages)", price: "$249.99", turnaround: "7-10 days" },
    ],
  },
]

const features = [
  "Free design review",
  "High-quality materials",
  "Fast turnaround times",
  "Volume discounts available",
  "Free shipping on orders over $150",
  "100% satisfaction guarantee",
]

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Transparent Pricing</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                No hidden fees or surprises. Get instant pricing with our calculator or browse our standard rates below.
              </p>
              <Button asChild size="lg">
                <Link href="/calculator">Calculate Your Price</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tables */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8">
              {pricingData.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                    <CardDescription>Standard pricing for {category.category.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                        >
                          <div>
                            <p className="font-medium">{item.quantity}</p>
                            <p className="text-sm text-muted-foreground">{item.turnaround}</p>
                          </div>
                          <p className="text-xl font-bold">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Additional Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Rush Service</CardTitle>
                    <CardDescription>Need it faster?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Get your order in 24-48 hours with our rush service. Additional fees apply.
                    </p>
                    <p className="font-semibold">+50% of order total</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Design Services</CardTitle>
                    <CardDescription>Professional design help</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Our designers can create custom artwork for your project.
                    </p>
                    <p className="font-semibold">Starting at $99/hour</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Place Your Order?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your design or use our price calculator to get started
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/upload">Upload Design</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/calculator">Price Calculator</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
