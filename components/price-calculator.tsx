"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { Calculator, Check } from "lucide-react"

type ProductType = "business-cards" | "brochures" | "posters" | "flyers" | "banners" | "catalogs"

const productPricing = {
  "business-cards": {
    name: "Business Cards",
    basePrice: 0.08,
    quantities: [250, 500, 1000, 2500, 5000],
  },
  brochures: {
    name: "Brochures",
    basePrice: 0.5,
    quantities: [100, 250, 500, 1000, 2500],
  },
  posters: {
    name: "Posters",
    basePrice: 6.0,
    quantities: [5, 10, 25, 50, 100],
  },
  flyers: {
    name: "Flyers",
    basePrice: 0.16,
    quantities: [250, 500, 1000, 2500, 5000],
  },
  banners: {
    name: "Banners",
    basePrice: 40.0,
    quantities: [1, 2, 5, 10, 25],
  },
  catalogs: {
    name: "Catalogs",
    basePrice: 2.0,
    quantities: [50, 100, 250, 500, 1000],
  },
}

const finishPricing = {
  gloss: { name: "Gloss", multiplier: 1.0 },
  matte: { name: "Matte", multiplier: 1.1 },
  satin: { name: "Satin", multiplier: 1.15 },
  uncoated: { name: "Uncoated", multiplier: 0.95 },
}

const turnaroundPricing = {
  standard: { name: "Standard (5-7 days)", multiplier: 1.0 },
  rush: { name: "Rush (2-3 days)", multiplier: 1.5 },
  express: { name: "Express (24-48 hours)", multiplier: 2.0 },
}

export function PriceCalculator() {
  const [product, setProduct] = useState<ProductType>("business-cards")
  const [quantity, setQuantity] = useState("500")
  const [finish, setFinish] = useState("gloss")
  const [turnaround, setTurnaround] = useState("standard")
  const [price, setPrice] = useState(0)

  useEffect(() => {
    calculatePrice()
  }, [product, quantity, finish, turnaround])

  const calculatePrice = () => {
    const productData = productPricing[product]
    const basePrice = productData.basePrice
    const qty = Number.parseInt(quantity)

    // Volume discount
    let volumeMultiplier = 1.0
    if (qty >= 1000) volumeMultiplier = 0.85
    else if (qty >= 500) volumeMultiplier = 0.9
    else if (qty >= 250) volumeMultiplier = 0.95

    const finishMultiplier = finishPricing[finish as keyof typeof finishPricing].multiplier
    const turnaroundMultiplier = turnaroundPricing[turnaround as keyof typeof turnaroundPricing].multiplier

    const totalPrice = basePrice * qty * volumeMultiplier * finishMultiplier * turnaroundMultiplier
    setPrice(Math.max(totalPrice, 19.99)) // Minimum price
  }

  const savingsPercent = turnaround === "standard" && Number.parseInt(quantity) >= 500 ? 15 : 0

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Calculator Form */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Configure Your Order
            </CardTitle>
            <CardDescription>Select your options below to calculate the price</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="calc-product">Product Type</Label>
              <Select value={product} onValueChange={(v) => setProduct(v as ProductType)}>
                <SelectTrigger id="calc-product">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(productPricing).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calc-quantity">Quantity</Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger id="calc-quantity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {productPricing[product].quantities.map((qty) => (
                    <SelectItem key={qty} value={qty.toString()}>
                      {qty} {productPricing[product].name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calc-finish">Finish</Label>
              <Select value={finish} onValueChange={setFinish}>
                <SelectTrigger id="calc-finish">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(finishPricing).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="calc-turnaround">Turnaround Time</Label>
              <Select value={turnaround} onValueChange={setTurnaround}>
                <SelectTrigger id="calc-turnaround">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(turnaroundPricing).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {value.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Price Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Price Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Product:</span>
                  <span className="font-medium">{productPricing[product].name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Quantity:</span>
                  <span className="font-medium">{quantity}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Finish:</span>
                  <span className="font-medium">{finishPricing[finish as keyof typeof finishPricing].name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Turnaround:</span>
                  <span className="font-medium">
                    {turnaroundPricing[turnaround as keyof typeof turnaroundPricing].name}
                  </span>
                </div>
              </div>

              <Separator />

              {savingsPercent > 0 && (
                <div className="bg-green-500/10 text-green-700 dark:text-green-400 p-3 rounded-lg text-sm flex items-start gap-2">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>You're saving {savingsPercent}% with this quantity!</span>
                </div>
              )}

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-lg font-semibold">Total Price:</span>
                  <span className="text-3xl font-bold text-primary">${price.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground">Price includes printing and standard shipping</p>
              </div>

              <div className="space-y-2 pt-2">
                <Button asChild className="w-full" size="lg">
                  <Link href="/upload">Continue to Upload</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contact">Questions? Contact Us</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-2">
              <h3 className="font-semibold mb-3">What's Included:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Free design review</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>Standard shipping included</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-0.5" />
                  <span>100% satisfaction guarantee</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
