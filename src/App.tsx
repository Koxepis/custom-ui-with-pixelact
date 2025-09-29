import { Button } from "./components/ui/pixelact-ui/button";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="mx-auto w-full max-w-xl rounded-2xl border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-semibold tracking-tight">React + Vite + Tailwind + shadcn/ui</h1>
        <p className="mt-2 text-muted-foreground">
          You’re set. Edit <code className="font-mono">src/App.tsx</code> and save to test HMR.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
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
  )
}
