import { Link } from "react-router-dom";
import { Button } from "../components/ui/pixelact-ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">Custom UI Library</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            A collection of pixel-perfect UI components built with React, TypeScript, and Tailwind CSS.
          </p>
          
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
              <p className="mb-6 text-muted-foreground">
                Explore our collection of button variants including pixel buttons and custom UI buttons.
              </p>
              <Link to="/buttons">
                <Button className="w-full">View Buttons</Button>
              </Link>
            </div>
            
            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-semibold">Inputs</h2>
              <p className="mb-6 text-muted-foreground">
                Check out our input components with both shadcn and pixel styling options.
              </p>
              <Link to="/inputs">
                <Button className="w-full">View Inputs</Button>
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-semibold">Selects</h2>
              <p className="mb-6 text-muted-foreground">
                Compare default shadcn select with custom pixelact-ui select components.
              </p>
              <Link to="/selects">
                <Button className="w-full">View Selects</Button>
              </Link>
            </div>

            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-4 text-2xl font-semibold">Containers</h2>
              <p className="mb-6 text-muted-foreground">
                Discover our custom container components with RPGUI-inspired styling.
              </p>
              <Link to="/containers">
                <Button className="w-full">View Containers</Button>
              </Link>
            </div>
          </div>

          {/* Quick Preview */}
          <div className="rounded-lg border bg-card p-8">
            <h2 className="mb-6 text-2xl font-semibold">Quick Preview</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="success">Success</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
              <Button variant="custom-ui">Custom UI</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
