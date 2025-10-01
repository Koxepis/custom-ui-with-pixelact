import { useState } from "react";
import { Input as ShadcnInput } from "../components/ui/input";
import { Input as PixelInput } from "../components/ui/pixelact-ui/input";
import { Textarea as PixelTextarea } from "../components/ui/pixelact-ui/textarea";
import { Container } from "@/components/ui/pixelact-ui/container";

export default function InputPage() {
  // Validation states
  const [shadcnEmail, setShadcnEmail] = useState("");
  const [shadcnEmailError, setShadcnEmailError] = useState<string | null>(null);
  const [pixelNumber, setPixelNumber] = useState("");
  const [pixelNumberError, setPixelNumberError] = useState<string | null>(null);
  const [customEmail, setCustomEmail] = useState("");
  const [customEmailError, setCustomEmailError] = useState<string | null>(null);

  const isEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const isDigits = (val: string) => /^\d*$/.test(val);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Input Components</h1>
        
        {/* Shadcn Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Shadcn Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Input */}
            <Container variant="custom-container-1">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Basic Input</h3>
                <div className="space-y-3">
                  <ShadcnInput placeholder="Enter your text..." />
                  <ShadcnInput placeholder="Email address" type="email" />
                  <ShadcnInput placeholder="Password" type="password" />
                </div>
              </div>
            </Container>

            {/* Input States */}
            <Container variant="custom-container-1">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Input States</h3>
                <div className="space-y-3">
                  <ShadcnInput placeholder="Normal state" />
                  <ShadcnInput placeholder="Disabled state" disabled />
                  <ShadcnInput placeholder="With value" defaultValue="Hello World" />
                </div>
              </div>
            </Container>

            {/* Input Sizes */}
            <Container variant="custom-container-1">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Input Sizes</h3>
                <div className="space-y-3">
                  <ShadcnInput placeholder="Default size" />
                  <ShadcnInput placeholder="Small size" className="h-8 text-sm" />
                  <ShadcnInput placeholder="Large size" className="h-12 text-lg" />
                </div>
              </div>
            </Container>

            {/* Input Variants */}
            <Container variant="custom-container-1">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Input Variants</h3>
                <div className="space-y-3">
                  <ShadcnInput placeholder="Default variant" />
                  <ShadcnInput placeholder="Error state" className="border-destructive focus-visible:ring-destructive" />
                  <ShadcnInput placeholder="Success state" className="border-green-500 focus-visible:ring-green-500" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Pixel Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Pixel Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Pixel Input */}
            <Container variant="custom-container-2">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Basic Pixel Input</h3>
                <div className="space-y-3">
                  <PixelInput placeholder="Enter your text..." />
                  <PixelInput placeholder="Email address" type="email" />
                  <PixelInput placeholder="Password" type="password" />
                </div>
              </div>
            </Container>

            {/* Pixel Input States */}
            <Container variant="custom-container-2">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Pixel Input States</h3>
                <div className="space-y-3">
                  <PixelInput placeholder="Normal state" />
                  <PixelInput placeholder="Disabled state" disabled />
                  <PixelInput placeholder="With value" defaultValue="Hello World" />
                </div>
              </div>
            </Container>

            {/* Pixel Input Sizes */}
            <Container variant="custom-container-2">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Pixel Input Sizes</h3>
                <div className="space-y-3">
                  <PixelInput placeholder="Default size" />
                  <PixelInput placeholder="Small size" className="h-8 text-sm" />
                  <PixelInput placeholder="Large size" className="h-12 text-lg" />
                </div>
              </div>
            </Container>

            {/* Pixel Input Widths */}
            <Container variant="custom-container-2">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Pixel Input Widths</h3>
                <div className="space-y-3">
                  <PixelInput placeholder="Full width" className="w-full" />
                  <PixelInput placeholder="Half width" className="w-1/2" />
                  <PixelInput placeholder="Fixed width" className="w-64" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Form Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Form Examples</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Shadcn Form */}
            <Container variant="custom-container-1">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Shadcn Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <ShadcnInput placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <ShadcnInput placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <ShadcnInput placeholder="Enter your message" />
                  </div>
                </form>
              </div>
            </Container>

            {/* Pixel Form */}
            <Container variant="custom-container-2">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Pixel Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                    <PixelInput placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                    <PixelInput placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                    <PixelInput placeholder="Enter your message" />
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </section>

        {/* Custom UI Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom UI Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Custom UI Input */}
            <Container variant="custom-container-3">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Basic Custom UI Input</h3>
                <div className="space-y-3">
                  <PixelInput variant="custom-ui" placeholder="Enter your text..." />
                  <PixelInput variant="custom-ui" placeholder="Email address" type="email" />
                  <PixelInput variant="custom-ui" placeholder="Password" type="password" />
                </div>
              </div>
            </Container>

            {/* Custom UI Input States */}
            <Container variant="custom-container-3">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Custom UI Input States</h3>
                <div className="space-y-3">
                  <PixelInput variant="custom-ui" placeholder="Normal state" />
                  <PixelInput variant="custom-ui" placeholder="Disabled state (grayscale)" disabled />
                  <PixelInput variant="custom-ui" placeholder="With value" defaultValue="Hello World" />
                </div>
              </div>
            </Container>

            {/* Custom UI Textarea */}
            <Container variant="custom-container-3">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Custom UI Textarea</h3>
                <div className="space-y-3">
                  <PixelTextarea variant="custom-ui" placeholder="Enter your message..." />
                  <PixelTextarea variant="custom-ui" placeholder="Disabled textarea (grayscale)" disabled />
                  <PixelTextarea variant="custom-ui" placeholder="With content" defaultValue="This is some sample text content." />
                </div>
              </div>
            </Container>

            {/* Custom UI Input Sizes */}
            <Container variant="custom-container-3">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Custom UI Input Sizes</h3>
                <div className="space-y-3">
                  <PixelInput variant="custom-ui" placeholder="Default size" />
                  <PixelInput variant="custom-ui" placeholder="Small size" className="h-8 text-sm" />
                  <PixelInput variant="custom-ui" placeholder="Large size" className="h-12 text-lg" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive Examples</h2>
          <Container variant="custom-container-2">
            <div className="p-6">
            <h3 className="mb-4 text-lg font-medium">Focus States & Validation</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Shadcn Required Field</label>
                  <ShadcnInput placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Shadcn Email (with error)</label>
                  <ShadcnInput
                    placeholder="name@example.com"
                    type="email"
                    value={shadcnEmail}
                    onChange={(e) => {
                      const v = e.target.value;
                      setShadcnEmail(v);
                      setShadcnEmailError(v.length === 0 || isEmail(v) ? null : "Invalid email format");
                    }}
                    aria-invalid={Boolean(shadcnEmailError) || undefined}
                  />
                  {shadcnEmailError && (
                    <p className="mt-1 text-xs text-destructive">{shadcnEmailError}</p>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Pixel Required Field</label>
                  <PixelInput placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Pixel Number Only (with error)</label>
                  <PixelInput
                    placeholder="Numbers only"
                    value={pixelNumber}
                    onChange={(e) => {
                      const v = e.target.value;
                      setPixelNumber(v);
                      setPixelNumberError(isDigits(v) ? null : "Please enter numbers only");
                    }}
                    aria-invalid={Boolean(pixelNumberError) || undefined}
                  />
                  {pixelNumberError && (
                    <p className="mt-1 text-xs text-destructive">{pixelNumberError}</p>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Custom UI Required Field</label>
                  <PixelInput variant="custom-ui" placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Custom UI Email (with error)</label>
                  <PixelInput
                    variant="custom-ui"
                    placeholder="name@example.com"
                    value={customEmail}
                    onChange={(e) => {
                      const v = e.target.value;
                      setCustomEmail(v);
                      setCustomEmailError(v.length === 0 || isEmail(v) ? null : "Invalid email format");
                    }}
                    aria-invalid={Boolean(customEmailError) || undefined}
                  />
                  {customEmailError && (
                    <p className="mt-1 text-xs text-destructive">{customEmailError}</p>
                  )}
                </div>
              </div>
            </div>
            </div>
          </Container>
        </section>

        {/* Custom UI Form Example */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom UI Form Example</h2>
          <Container variant="custom-container-3">
            <div className="p-6">
            <h3 className="mb-4 text-lg font-medium">Complete Custom UI Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Name</label>
                  <PixelInput variant="custom-ui" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Email</label>
                  <PixelInput variant="custom-ui" placeholder="Enter your email" type="email" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Subject</label>
                <PixelInput variant="custom-ui" placeholder="Enter subject" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Message</label>
                <PixelTextarea variant="custom-ui" placeholder="Enter your message..." />
              </div>
            </form>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
