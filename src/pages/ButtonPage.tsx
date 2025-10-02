import { Button } from "../components/ui/pixelact-ui/button";
import { Container } from "@/components/ui/pixelact-ui/container";
import * as React from "react";

export default function ButtonPage() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Button Components</h1>
        
        {/* Pixel Buttons Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Pixel Buttons</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Default Button */}
            <Container variant="custom-container-1">
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
            <Container variant="custom-container-1">
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
            <Container variant="custom-container-1">
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
            <Container variant="custom-container-1">
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
            <Container variant="custom-container-1">
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
            <Container variant="custom-container-1">
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

        {/* Wide Buttons Section (formerly Custom UI) */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Wide Buttons</h2>
          <Container variant="custom-container-1">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Buttons with Various Widths</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Default Size</Button>
                  <Button className="min-w-48">Wide Button</Button>
                  <Button className="min-w-96">Extra Wide Button</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button className="min-w-32">Short Text</Button>
                  <Button className="min-w-64">Medium Length Button Text</Button>
                  <Button className="min-w-80">Very Long Button Text Example</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Increment/Decrement Icon Buttons */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Increment / Decrement</h2>
          <Container variant="custom-container-1">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Increment / Decrement</h3>
              <div className="flex items-center gap-4">
                <Button aria-label="Decrement" title="Decrement" variant="custom-ui-decrement" onClick={() => setCount((c) => c - 1)} />
                <span className="min-w-10 text-center text-xl font-bold">{count}</span>
                <Button aria-label="Increment" title="Increment" variant="custom-ui-increment" onClick={() => setCount((c) => c + 1)} />
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Button aria-label="Decrement (disabled)" variant="custom-ui-decrement" disabled />
                <Button aria-label="Increment (disabled)" variant="custom-ui-increment" disabled />
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Examples */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive Examples</h2>
          <Container variant="custom-container-1">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Button States</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button>Normal State</Button>
                  <Button disabled>Disabled State</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
