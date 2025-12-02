import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PriceCalculator } from "@/components/price-calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Price Calculator | Instant Printing Quote",
  description:
    "Calculate printing costs instantly with our price calculator. Get accurate quotes for business cards, brochures, posters, and more.",
  keywords: ["printing calculator", "printing quote", "printing cost", "instant quote"],
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Price Calculator</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Get an instant quote for your printing project. Adjust options below to see real-time pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <PriceCalculator />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
