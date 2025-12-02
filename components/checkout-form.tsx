"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Lock, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

export function CheckoutForm() {
  const router = useRouter()
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Payment successful! Your order has been placed. Check your email for confirmation.")

    setProcessing(false)

    // Redirect to success page (would be implemented in real app)
    setTimeout(() => {
      router.push("/")
    }, 1500)
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Payment Form */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Payment Information
          </CardTitle>
          <CardDescription>All transactions are secure and encrypted</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Billing Information */}
            <div className="space-y-4">
              <h3 className="font-semibold">Billing Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" name="firstName" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" name="lastName" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input id="address" name="address" required />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" name="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" name="state" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code *</Label>
                  <Input id="zip" name="zip" required />
                </div>
              </div>
            </div>

            <Separator />

            {/* Card Information */}
            <div className="space-y-4">
              <h3 className="font-semibold">Card Information</h3>

              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date *</Label>
                  <Input id="expiry" name="expiry" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV *</Label>
                  <Input id="cvv" name="cvv" placeholder="123" maxLength={4} required />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="h-4 w-4" />
              <span>Your payment information is encrypted and secure</span>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={processing}>
              {processing ? "Processing..." : "Complete Purchase"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Product:</span>
                <span className="font-medium">Business Cards</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Quantity:</span>
                <span className="font-medium">500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Finish:</span>
                <span className="font-medium">Gloss</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Turnaround:</span>
                <span className="font-medium">Standard (5-7 days)</span>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>$29.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping:</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax:</span>
                <span>$2.40</span>
              </div>
            </div>

            <Separator />

            <div className="flex justify-between items-baseline">
              <span className="font-semibold">Total:</span>
              <span className="text-2xl font-bold text-primary">$32.39</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

