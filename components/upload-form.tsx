"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Upload, X, FileIcon } from "lucide-react"
import Link from "next/link"

export function UploadForm() {
  const { toast } = useToast()
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (files.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload at least one design file.",
        variant: "destructive",
      })
      return
    }

    setUploading(true)

    // Simulate file upload
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: "Files uploaded successfully!",
      description: "We'll review your design and contact you shortly.",
    })

    setUploading(false)
    setFiles([])
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Design Files</CardTitle>
        <CardDescription>Fill in the details below and upload your print-ready files</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* File Upload */}
          <div className="space-y-2">
            <Label>Design Files *</Label>
            <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
              <input
                type="file"
                id="fileUpload"
                multiple
                accept=".pdf,.ai,.psd,.jpg,.jpeg,.png,.tiff"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="fileUpload" className="cursor-pointer">
                <Upload className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                <p className="font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-sm text-muted-foreground">PDF, AI, PSD, JPEG, PNG, TIFF (max 100MB)</p>
              </label>
            </div>

            {/* Uploaded Files List */}
            {files.length > 0 && (
              <div className="space-y-2 mt-4">
                {files.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileIcon className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">{file.name}</p>
                        <p className="text-xs text-muted-foreground">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    </div>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeFile(index)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="product">Product Type *</Label>
              <Select name="product" required>
                <SelectTrigger id="product">
                  <SelectValue placeholder="Select product" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business-cards">Business Cards</SelectItem>
                  <SelectItem value="brochures">Brochures</SelectItem>
                  <SelectItem value="posters">Posters</SelectItem>
                  <SelectItem value="flyers">Flyers</SelectItem>
                  <SelectItem value="banners">Banners</SelectItem>
                  <SelectItem value="catalogs">Catalogs</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity *</Label>
              <Select name="quantity" required>
                <SelectTrigger id="quantity">
                  <SelectValue placeholder="Select quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">50</SelectItem>
                  <SelectItem value="100">100</SelectItem>
                  <SelectItem value="250">250</SelectItem>
                  <SelectItem value="500">500</SelectItem>
                  <SelectItem value="1000">1000</SelectItem>
                  <SelectItem value="2500">2500+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="finish">Finish *</Label>
              <Select name="finish" required>
                <SelectTrigger id="finish">
                  <SelectValue placeholder="Select finish" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gloss">Gloss</SelectItem>
                  <SelectItem value="matte">Matte</SelectItem>
                  <SelectItem value="satin">Satin</SelectItem>
                  <SelectItem value="uncoated">Uncoated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="turnaround">Turnaround Time *</Label>
              <Select name="turnaround" required>
                <SelectTrigger id="turnaround">
                  <SelectValue placeholder="Select turnaround" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard (5-7 days)</SelectItem>
                  <SelectItem value="rush">Rush (2-3 days) +50%</SelectItem>
                  <SelectItem value="express">Express (24-48 hours) +100%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" />
            </div>
          </div>

          {/* Special Instructions */}
          <div className="space-y-2">
            <Label htmlFor="instructions">Special Instructions</Label>
            <Textarea
              id="instructions"
              name="instructions"
              rows={4}
              placeholder="Any special requirements or notes for your order..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button type="submit" size="lg" disabled={uploading} className="flex-1">
              {uploading ? "Uploading..." : "Upload & Continue to Payment"}
            </Button>
            <Button asChild variant="outline" size="lg" type="button">
              <Link href="/calculator">Calculate Price First</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            By uploading, you agree to our terms of service and confirm that you own the rights to the uploaded content.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
