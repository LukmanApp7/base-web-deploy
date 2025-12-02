import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout | Complete Your Order",
  description: "Secure checkout for your printing order. We accept all major credit cards and payment methods.",
}

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Checkout</h1>
                <p className="text-muted-foreground">Complete your order securely with our encrypted payment system</p>
              </div>

              <CheckoutForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
