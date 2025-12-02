import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { UploadForm } from "@/components/upload-form"
import { Card, CardContent } from "@/components/ui/card"
import { FileCheck, Upload, CreditCard, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Upload Your Design | PrintPro Design Upload",
  description:
    "Upload your custom print design files. We accept PDF, AI, PSD, and more. Get instant quotes and place your order online.",
  keywords: ["upload design", "print file upload", "custom design printing", "design file requirements"],
}

export default function UploadPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Upload Your Design</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Ready to print? Upload your design files and we'll take care of the rest. We accept various file formats
                for your convenience.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 border-y bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <Upload className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Upload Files</h3>
                  <p className="text-sm text-muted-foreground">Select and upload your design files</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <FileCheck className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Review Options</h3>
                  <p className="text-sm text-muted-foreground">Choose product, quantity, and finish</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Make Payment</h3>
                  <p className="text-sm text-muted-foreground">Secure online payment processing</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <CheckCircle className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold mb-1">Receive Prints</h3>
                  <p className="text-sm text-muted-foreground">Fast delivery to your doorstep</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upload Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <UploadForm />
            </div>
          </div>
        </section>

        {/* File Requirements */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">File Requirements & Guidelines</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="font-semibold text-lg">Accepted File Formats</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• PDF (Preferred)</li>
                      <li>• Adobe Illustrator (.ai)</li>
                      <li>• Photoshop (.psd)</li>
                      <li>• JPEG, PNG (High resolution)</li>
                      <li>• TIFF files</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="font-semibold text-lg">Design Specifications</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• CMYK color mode</li>
                      <li>• 300 DPI minimum resolution</li>
                      <li>• Include 0.125" bleed</li>
                      <li>• Outline all fonts</li>
                      <li>• Max file size: 100MB</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="font-semibold text-lg">Color Matching</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use CMYK for best results</li>
                      <li>• Pantone colors available</li>
                      <li>• Color proof service available</li>
                      <li>• Monitor calibration recommended</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6 space-y-3">
                    <h3 className="font-semibold text-lg">Need Help?</h3>
                    <p className="text-sm text-muted-foreground">
                      Not sure if your file is ready? Our team offers free design review. We'll check your files and
                      provide feedback before printing.
                    </p>
                    <p className="text-sm font-medium text-primary">Email: design@printpro.com</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
