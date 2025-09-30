import { useState } from "react";
import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { Checkbox as PixelCheckbox } from "@/components/ui/pixelact-ui/checkbox";
import { Container } from "@/components/ui/pixelact-ui/container";
import { Button } from "@/components/ui/pixelact-ui/button";

export default function CheckboxPage() {
  const [newsletter, setNewsletter] = useState<boolean>(true);
  const [terms, setTerms] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Checkbox Components</h1>
          <p className="text-lg text-muted-foreground">
            Compare the base shadcn checkbox with the pixelact-styled checkbox.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Shadcn Checkbox */}
          <Container variant="default">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Shadcn Checkbox</h2>
              <div className="flex items-center space-x-2">
                <ShadcnCheckbox id="shadcn-newsletter" defaultChecked />
                <label htmlFor="shadcn-newsletter" className="text-sm font-medium leading-none">
                  Subscribe to newsletter
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <ShadcnCheckbox id="shadcn-terms" />
                <label htmlFor="shadcn-terms" className="text-sm font-medium leading-none">
                  Accept terms and conditions
                </label>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <ShadcnCheckbox id="shadcn-disabled" disabled />
                <label htmlFor="shadcn-disabled" className="text-sm font-medium leading-none">
                  Disabled option
                </label>
              </div>
            </div>
          </Container>

          {/* Pixelact Checkbox */}
          <Container variant="golden">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Pixelact Checkbox</h2>
              <div className="flex items-center space-x-2">
                <PixelCheckbox id="pixel-newsletter" defaultChecked />
                <label htmlFor="pixel-newsletter" className="text-sm font-medium leading-none text-white">
                  Subscribe to newsletter
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <PixelCheckbox id="pixel-terms" />
                <label htmlFor="pixel-terms" className="text-sm font-medium leading-none text-white">
                  Accept terms and conditions
                </label>
              </div>
              <div className="flex items-center space-x-2 opacity-70">
                <PixelCheckbox id="pixel-disabled" disabled />
                <label htmlFor="pixel-disabled" className="text-sm font-medium leading-none text-white">
                  Disabled option
                </label>
              </div>
            </div>
          </Container>

          {/* Custom UI (CSS-based) */}
          <Container variant="grey">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Custom UI (CSS-based)</h2>
              <div>
                <input type="checkbox" id="css-checkbox-1" className="custom-ui-checkbox" />
                <label htmlFor="css-checkbox-1" className="text-sm font-medium leading-none text-white">
                  Accept terms
                </label>
              </div>
              <div>
                <input type="checkbox" id="css-checkbox-2" className="custom-ui-checkbox" defaultChecked />
                <label htmlFor="css-checkbox-2" className="text-sm font-medium leading-none text-white">
                  Subscribe to newsletter
                </label>
              </div>
            </div>
          </Container>

          {/* Controlled Example (Custom UI CSS-based) */}
          <Container variant="golden2">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Controlled State</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <PixelCheckbox
                    id="css-controlled-newsletter"
                    variant="custom-ui"
                    checked={newsletter}
                    onCheckedChange={(v) => setNewsletter(Boolean(v))}
                  />
                  <label htmlFor="css-controlled-newsletter" className="text-sm font-medium leading-none text-white">
                    Newsletter: {newsletter ? "On" : "Off"}
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <PixelCheckbox
                    id="css-controlled-terms"
                    variant="custom-ui"
                    checked={terms}
                    onCheckedChange={(v) => setTerms(Boolean(v))}
                  />
                  <label htmlFor="css-controlled-terms" className="text-sm font-medium leading-none text-white">
                    Terms accepted: {terms ? "Yes" : "No"}
                  </label>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <Button size="sm" onClick={() => setNewsletter(true)}>Enable Newsletter</Button>
                  <Button size="sm" variant="secondary" onClick={() => setNewsletter(false)}>Disable Newsletter</Button>
                  <Button size="sm" variant="success" onClick={() => setTerms(true)}>Accept Terms</Button>
                  <Button size="sm" variant="warning" onClick={() => setTerms(false)}>Reset Terms</Button>
                  <Button size="sm" variant="custom-ui" onClick={() => { setNewsletter(true); setTerms(true); }}>Enable All</Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
