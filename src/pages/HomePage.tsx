import { Link } from "react-router-dom";
import { Button } from "../components/ui/pixelact-ui/button";
import { Container } from "../components/ui/pixelact-ui/container";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="mb-6 text-5xl font-bold">Custom UI Library</h1>
          <p className="mb-8 text-xl text-muted-foreground">
            A collection of pixel-perfect UI components built with React,
            TypeScript, and Tailwind CSS.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-start">
            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Buttons</h2>
              <p className="text-white/50">
                Explore our collection of button variants including pixel
                buttons and custom UI buttons.
              </p>
              <Link to="/buttons">
                <Button variant="custom-ui" className="w-full">View Buttons</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Inputs</h2>
              <p className="text-white/50">
                Check out our input components with both shadcn and pixel
                styling options.
              </p>
              <Link to="/inputs">
                <Button variant="custom-ui" className="w-full">View Inputs</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Selects</h2>
              <p className="text-white/50">
                Compare default shadcn select with custom pixelact-ui select
                components.
              </p>
              <Link to="/selects">
                <Button variant="custom-ui" className="w-full">View Selects</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Checkboxes</h2>
              <p className="text-white/50">
                Compare shadcn checkbox with pixelact-ui styled checkbox.
              </p>
              <Link to="/checkboxes">
                <Button variant="custom-ui" className="w-full">View Checkboxes</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Lists</h2>
              <p className="text-white/50">
                Explore our custom-ui list component with RPG-inspired styling
                and keyboard support.
              </p>
              <Link to="/lists">
                <Button variant="custom-ui" className="w-full">View Lists</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Containers</h2>
              <p className="text-white/50">
                Discover our custom container components with RPG-inspired
                aesthetics.
              </p>
              <Link to="/containers">
                <Button variant="custom-ui" className="w-full">View Containers</Button>
              </Link>
            </Container>

            <Container variant="default" className="flex flex-col justify-between items-center rounded-lg border bg-card p-8 h-64">
              <h2 className="text-2xl font-semibold text-white">Progress</h2>
              <p className="text-white/50">
                Check out our custom progress bar with handles and stepper fill.
              </p>
              <Link to="/progress">
                <Button variant="custom-ui" className="w-full">View Progress</Button>
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
