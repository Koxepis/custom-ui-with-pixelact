import * as React from "react";
import { Container } from "@/components/ui/pixelact-ui/container";
import { Progress } from "@/components/ui/pixelact-ui/progress";
import { Button } from "@/components/ui/pixelact-ui/button";

export default function ProgressPage() {
  const [value, setValue] = React.useState(65);
  const step = 5;
  const max = 100;

  const clamped = Math.max(0, Math.min(max, value));
  const stepsTotal = 20; // example for label (100/5)
  const currentStep = Math.round((clamped / max) * stepsTotal);

  const dec = () => setValue((v) => Math.max(0, v - step));
  const inc = () => setValue((v) => Math.min(max, v + step));

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">Progress</h1>

        {/* Simple Progress Bar */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Simple Progress Bar</h2>
          <Container variant="custom-container-1">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Static Example</h3>
              <div className="flex items-center">
                <Progress value={65} label={"13/20"} />
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Progress */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Interactive</h2>
          <Container variant="custom-container-1">
            <div className="p-6">
              <h3 className="mb-4 text-lg font-medium">Control with Icon Buttons</h3>
              <div className="flex items-center gap-4">
                <Button aria-label="Decrement" title="Decrement" variant="custom-ui-decrement" onClick={dec} />
                <div className="flex-1">
                  <Progress value={clamped} label={`${currentStep}/${stepsTotal}`} />
                </div>
                <Button aria-label="Increment" title="Increment" variant="custom-ui-increment" onClick={inc} />
              </div>
            </div>
          </Container>
        </section>

        {/* Disabled */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Disabled</h2>
          <Container variant="custom-container-1">
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-medium">Disabled Examples</h3>
              <div className="flex items-center">
                <Progress value={40} label={"8/20"} disabled />
              </div>
              <div className="flex items-center gap-4">
                <Button aria-label="Decrement" variant="custom-ui-decrement" disabled />
                <div className="flex-1">
                  <Progress value={1} label={`${10}/${2000}`} disabled />
                </div>
                <Button aria-label="Increment" variant="custom-ui-increment" disabled />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
