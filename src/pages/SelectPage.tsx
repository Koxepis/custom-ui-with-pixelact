import { useState } from "react";
import { Button } from "../components/ui/pixelact-ui/button";
import { Container } from "../components/ui/pixelact-ui/container";

// Import default shadcn select
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Import pixelact-ui select
import {
  Select as PixelSelect,
  SelectContent as PixelSelectContent,
  SelectItem as PixelSelectItem,
  SelectTrigger as PixelSelectTrigger,
  SelectValue as PixelSelectValue,
} from "../components/ui/pixelact-ui/select";

export default function SelectPage() {
  const [defaultValue, setDefaultValue] = useState<string>("");
  const [pixelValue, setPixelValue] = useState<string>("");
  const [altValue, setAltValue] = useState<string>("");

  const selectOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" },
    { value: "option5", label: "Option 5" },
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">Select Components</h1>
          <p className="text-lg text-muted-foreground">
            Compare default shadcn select with custom pixelact-ui select
            variants
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Default shadcn Select */}
          <Container variant="default">
            <div className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Default shadcn Select
              </h2>
              <p className="mb-6 text-muted-foreground">
                Standard select component with clean, modern styling
              </p>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Basic Select
                  </label>
                  <Select value={defaultValue} onValueChange={setDefaultValue}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option..." />
                    </SelectTrigger>
                    <SelectContent>
                      {selectOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {defaultValue && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected:{" "}
                      {
                        selectOptions.find((opt) => opt.value === defaultValue)
                          ?.label
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Disabled Select
                  </label>
                  <Select disabled>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="This is disabled" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="disabled">Disabled Option</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </Container>

          {/* Pixelact-ui Select */}
          <Container variant="golden">
            <div className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Pixelact-ui Select
              </h2>
              <p className="mb-6 text-muted-foreground">
                Custom pixel-style select with RPG-inspired aesthetics
              </p>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Pixel Select
                  </label>
                  <PixelSelect value={pixelValue} onValueChange={setPixelValue}>
                    <PixelSelectTrigger className="w-full" font="pixel">
                      <PixelSelectValue placeholder="Choose wisely..." />
                    </PixelSelectTrigger>
                    <PixelSelectContent>
                      {selectOptions.map((option) => (
                        <PixelSelectItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </PixelSelectItem>
                      ))}
                    </PixelSelectContent>
                  </PixelSelect>
                  {pixelValue && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected:{" "}
                      {
                        selectOptions.find((opt) => opt.value === pixelValue)
                          ?.label
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                  Disabled Select
                  </label>
                  <PixelSelect disabled>
                    <PixelSelectTrigger className="w-full" font="normal">
                      <PixelSelectValue placeholder="This is disabled" />
                    </PixelSelectTrigger>
                    <PixelSelectContent>
                      {selectOptions.slice(0, 3).map((option) => (
                        <PixelSelectItem
                          key={option.value}
                          value={option.value}
                        >
                          {option.label}
                        </PixelSelectItem>
                      ))}
                    </PixelSelectContent>
                  </PixelSelect>
                </div>
              </div>
            </div>
          </Container>

          {/* Custom UI Alt Variant Select */}
          <Container variant="golden2">
            <div className="p-6">
              <h2 className="mb-4 text-2xl font-semibold">
                Custom UI Alt Variant
              </h2>
              <p className="mb-6 text-muted-foreground">
                Modern gradient styling with enhanced hover effects and custom
                icon animations
              </p>

              <div className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Alt Variant Select
                  </label>
                  <PixelSelect value={altValue} onValueChange={setAltValue}>
                    <PixelSelectTrigger
                      className="w-full bg-red-400"
                      variant="custom-ui"
                      font="normal"
                    >
                      <PixelSelectValue placeholder="Choose your destiny..." />
                    </PixelSelectTrigger>
                    <PixelSelectContent variant="custom-ui">
                      {selectOptions.map((option) => (
                        <PixelSelectItem
                          key={option.value}
                          value={option.value}
                          variant="custom-ui"
                        >
                          {option.label}
                        </PixelSelectItem>
                      ))}
                    </PixelSelectContent>
                  </PixelSelect>
                  {altValue && (
                    <p className="mt-2 text-sm text-muted-foreground">
                      Selected:{" "}
                      {
                        selectOptions.find((opt) => opt.value === altValue)
                          ?.label
                      }
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                  Disabled Select
                  </label>
                  <PixelSelect disabled>
                    <PixelSelectTrigger
                      className="w-full"
                      variant="custom-ui"
                      font="normal"
                    >
                      <PixelSelectValue placeholder="This is disabled" />
                    </PixelSelectTrigger>
                    <PixelSelectContent variant="custom-ui">
                      {selectOptions.slice(0, 3).map((option) => (
                        <PixelSelectItem
                          key={option.value}
                          value={option.value}
                          variant="default"
                        >
                          {option.label}
                        </PixelSelectItem>
                      ))}
                    </PixelSelectContent>
                  </PixelSelect>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* Interactive Demo */}
        <div className="mt-8">
          <Container variant="default">
            <div className="p-6">
              <h2 className="mb-6 text-2xl font-semibold">Interactive Demo</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Button
                  onClick={() => setDefaultValue("option3")}
                  className="flex-1"
                >
                  Set Default
                </Button>
                <Button
                  onClick={() => setPixelValue("option4")}
                  className="flex-1"
                  variant="custom-ui"
                >
                  Set Pixel
                </Button>
                <Button
                  onClick={() => setAltValue("option2")}
                  className="flex-1"
                  variant="warning"
                >
                  Set Alt
                </Button>
                <Button
                  onClick={() => {
                    setDefaultValue("");
                    setPixelValue("");
                    setAltValue("");
                  }}
                  className="flex-1"
                  variant="secondary"
                >
                  Clear All
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
