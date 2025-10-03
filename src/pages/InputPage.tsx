import { useState } from "react";
import { Input as ShadcnInput } from "../components/ui/input";
import { Input as CustomInput } from "../components/ui/pixelact-ui/input";
// Removed custom textarea; using native textarea
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

        {/* Form Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Form Examples</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Shadcn Form */}
            <Container variant="custom-container-5">
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
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Pixel Form</h3>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">Name</label>
                  <CustomInput variant="custom-input-1" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Email</label>
                  <CustomInput variant="custom-input-1" placeholder="Enter your email" type="email" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">Message</label>
                  <CustomInput variant="custom-input-1" placeholder="Enter your message" />
                  </div>
                </form>
              </div>
            </Container>
          </div>
        </section>

        {/* Custom UI Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Custom UI Input */}
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Basic Custom UI Input</h3>
                <div className="space-y-3">
                  <CustomInput variant="custom-input-1" placeholder="Enter your text..." />
                  <CustomInput variant="custom-input-1" placeholder="Email address" type="email" />
                  <CustomInput variant="custom-input-1" placeholder="Password" type="password" />
                </div>
              </div>
            </Container>

            {/* Custom UI Input States */}
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Custom UI Input States</h3>
                <div className="space-y-3">
                  <CustomInput variant="custom-input-1" placeholder="Normal state" />
                  <CustomInput variant="custom-input-1" placeholder="Disabled state (grayscale)" disabled />
                  <CustomInput variant="custom-input-1" placeholder="With value" defaultValue="Hello World" />
                </div>
              </div>
            </Container>

            {/* Custom UI Input Sizes */}
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Custom UI Input Sizes</h3>
                <div className="flex flex-col space-y-3">
                  <CustomInput variant="custom-input-1" placeholder="Background input (medium)" className="w-3/5" />
                  <CustomInput variant="custom-input-1" placeholder="Custom height via class" className="h-8 text-sm w-2/5" />
                  <CustomInput variant="custom-input-1" placeholder="Full width via class" className="w-full" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Custom Input 1 (Background-based) */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom Input 1</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Basic States */}
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Basic States</h3>
                <div className="space-y-3">
                  <CustomInput variant="custom-input-1" placeholder="Default / Hover / Focus use same background" />
                  <CustomInput variant="custom-input-1" placeholder="Disabled (grayscale)" disabled />
                  <CustomInput variant="custom-input-1" placeholder="Readonly" readOnly defaultValue="Read only value" />
                </div>
              </div>
            </Container>

            {/* Validation */}
            <Container variant="custom-container-5">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Validation</h3>
                <div className="space-y-3">
                  <CustomInput variant="custom-input-1" placeholder="Error/invalid background" aria-invalid />
                  <CustomInput variant="custom-input-1" placeholder="Active state triggers on mousedown" />
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive Examples</h2>
          <Container variant="custom-container-5">
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
                  <CustomInput variant="custom-input-1" placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Pixel Number Only (with error)</label>
                  <CustomInput variant="custom-input-1"
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
                  <CustomInput variant="custom-input-1" placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Email (with error)</label>
                  <CustomInput variant="custom-input-1"
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
          <Container variant="custom-container-5">
            <div className="p-6">
            <h3 className="mb-4 text-lg font-medium">Complete Custom UI Form</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Name</label>
                  <CustomInput variant="custom-input-1" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white">Email</label>
                  <CustomInput variant="custom-input-1" placeholder="Enter your email" type="email" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Subject</label>
                <CustomInput variant="custom-input-1" placeholder="Enter subject" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-white">Message</label>
                <textarea placeholder="Enter your message..." className="w-full h-24 rounded-none border-0 outline-none p-2 bg-[#4e4a4e] text-white" />
              </div>
            </form>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
