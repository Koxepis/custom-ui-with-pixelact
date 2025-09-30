import { Button } from "../components/ui/pixelact-ui/button";
import { Container } from "@/components/ui/pixelact-ui/container";

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Button Components</h1>
        
        {/* Pixel Buttons Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Pixel Buttons</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Default Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Default</h3>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button size="sm">Small</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
            </Container>

            {/* Secondary Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Secondary</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="secondary" size="sm">Small</Button>
                  <Button variant="secondary" size="lg">Large</Button>
                </div>
              </div>
            </Container>

            {/* Warning Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Warning</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="warning">Warning</Button>
                  <Button variant="warning" size="sm">Small</Button>
                  <Button variant="warning" size="lg">Large</Button>
                </div>
              </div>
            </Container>

            {/* Success Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Success</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="success">Success</Button>
                  <Button variant="success" size="sm">Small</Button>
                  <Button variant="success" size="lg">Large</Button>
                </div>
              </div>
            </Container>

            {/* Destructive Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Destructive</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="destructive" size="sm">Small</Button>
                  <Button variant="destructive" size="lg">Large</Button>
                </div>
              </div>
            </Container>

            {/* Link Button */}
            <Container variant="default">
              <div className="p-6">
                <h3 className="mb-4 text-lg font-medium">Link</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="link">Link Button</Button>
                  <Button variant="link" size="sm">Small Link</Button>
                  <Button variant="link" size="lg">Large Link</Button>
                </div>
              </div>
            </Container>
          </div>
        </section>

        {/* Custom UI Button Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Custom UI Buttons</h2>
          <Container variant="default">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Custom UI Button with Background Image</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="custom-ui">Default Size</Button>
                  <Button variant="custom-ui" className="min-w-48">Wide Button</Button>
                  <Button variant="custom-ui" className="min-w-96">Extra Wide Button</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button variant="custom-ui" className="min-w-32">Short Text</Button>
                  <Button variant="custom-ui" className="min-w-64">Medium Length Button Text</Button>
                  <Button variant="custom-ui" className="min-w-80">Very Long Button Text Example</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive Examples</h2>
          <Container variant="default">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Button States</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Normal State</Button>
                  <Button disabled>Disabled State</Button>
                  <Button variant="custom-ui">Custom UI Normal</Button>
                  <Button variant="custom-ui" disabled>Custom UI Disabled (Grayscale)</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
