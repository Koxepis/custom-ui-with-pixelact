import { Input as ShadcnInput } from "../components/ui/input";
import { Input as PixelInput } from "../components/ui/pixelact-ui/input";
import { Textarea as PixelTextarea } from "../components/ui/pixelact-ui/textarea";

export default function InputPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Input Components</h1>
        
        {/* Shadcn Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Shadcn Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Input */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Basic Input</h3>
              <div className="space-y-3">
                <ShadcnInput placeholder="Enter your text..." />
                <ShadcnInput placeholder="Email address" type="email" />
                <ShadcnInput placeholder="Password" type="password" />
              </div>
            </div>

            {/* Input States */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Input States</h3>
              <div className="space-y-3">
                <ShadcnInput placeholder="Normal state" />
                <ShadcnInput placeholder="Disabled state" disabled />
                <ShadcnInput placeholder="With value" defaultValue="Hello World" />
              </div>
            </div>

            {/* Input Sizes */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Input Sizes</h3>
              <div className="space-y-3">
                <ShadcnInput placeholder="Default size" />
                <ShadcnInput placeholder="Small size" className="h-8 text-sm" />
                <ShadcnInput placeholder="Large size" className="h-12 text-lg" />
              </div>
            </div>

            {/* Input Variants */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Input Variants</h3>
              <div className="space-y-3">
                <ShadcnInput placeholder="Default variant" />
                <ShadcnInput placeholder="Error state" className="border-destructive focus-visible:ring-destructive" />
                <ShadcnInput placeholder="Success state" className="border-green-500 focus-visible:ring-green-500" />
              </div>
            </div>
          </div>
        </section>

        {/* Pixel Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Pixel Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Pixel Input */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Basic Pixel Input</h3>
              <div className="space-y-3">
                <PixelInput placeholder="Enter your text..." />
                <PixelInput placeholder="Email address" type="email" />
                <PixelInput placeholder="Password" type="password" />
              </div>
            </div>

            {/* Pixel Input States */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Pixel Input States</h3>
              <div className="space-y-3">
                <PixelInput placeholder="Normal state" />
                <PixelInput placeholder="Disabled state" disabled />
                <PixelInput placeholder="With value" defaultValue="Hello World" />
              </div>
            </div>

            {/* Pixel Input Sizes */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Pixel Input Sizes</h3>
              <div className="space-y-3">
                <PixelInput placeholder="Default size" />
                <PixelInput placeholder="Small size" className="h-8 text-sm" />
                <PixelInput placeholder="Large size" className="h-12 text-lg" />
              </div>
            </div>

            {/* Pixel Input Widths */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Pixel Input Widths</h3>
              <div className="space-y-3">
                <PixelInput placeholder="Full width" className="w-full" />
                <PixelInput placeholder="Half width" className="w-1/2" />
                <PixelInput placeholder="Fixed width" className="w-64" />
              </div>
            </div>
          </div>
        </section>

        {/* Form Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Form Examples</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Shadcn Form */}
            <div className="rounded-lg border bg-card p-6">
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

            {/* Pixel Form */}
            <div className="rounded-lg border bg-card p-6">
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
          </div>
        </section>

        {/* Custom UI Inputs Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom UI Inputs</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Basic Custom UI Input */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Basic Custom UI Input</h3>
              <div className="space-y-3">
                <PixelInput variant="custom-ui" placeholder="Enter your text..." />
                <PixelInput variant="custom-ui" placeholder="Email address" type="email" />
                <PixelInput variant="custom-ui" placeholder="Password" type="password" />
              </div>
            </div>

            {/* Custom UI Input States */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Custom UI Input States</h3>
              <div className="space-y-3">
                <PixelInput variant="custom-ui" placeholder="Normal state" />
                <PixelInput variant="custom-ui" placeholder="Disabled state (grayscale)" disabled />
                <PixelInput variant="custom-ui" placeholder="With value" defaultValue="Hello World" />
              </div>
            </div>

            {/* Custom UI Textarea */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Custom UI Textarea</h3>
              <div className="space-y-3">
                <PixelTextarea variant="custom-ui" placeholder="Enter your message..." />
                <PixelTextarea variant="custom-ui" placeholder="Disabled textarea (grayscale)" disabled />
                <PixelTextarea variant="custom-ui" placeholder="With content" defaultValue="This is some sample text content." />
              </div>
            </div>

            {/* Custom UI Input Sizes */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-medium">Custom UI Input Sizes</h3>
              <div className="space-y-3">
                <PixelInput variant="custom-ui" placeholder="Default size" />
                <PixelInput variant="custom-ui" placeholder="Small size" className="h-8 text-sm" />
                <PixelInput variant="custom-ui" placeholder="Large size" className="h-12 text-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive Examples</h2>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Focus States & Validation</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Shadcn Required Field</label>
                  <ShadcnInput placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Shadcn With Pattern</label>
                  <ShadcnInput placeholder="Enter 5 digits" pattern="[0-9]{5}" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Pixel Required Field</label>
                  <PixelInput placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Pixel With Pattern</label>
                  <PixelInput placeholder="Enter 5 digits" pattern="[0-9]{5}" />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium">Custom UI Required Field</label>
                  <PixelInput variant="custom-ui" placeholder="This field is required" required />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">Custom UI With Pattern</label>
                  <PixelInput variant="custom-ui" placeholder="Enter 5 digits" pattern="[0-9]{5}" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom UI Form Example */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom UI Form Example</h2>
          <div className="rounded-lg border bg-card p-6">
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
        </section>
      </div>
    </div>
  );
}
