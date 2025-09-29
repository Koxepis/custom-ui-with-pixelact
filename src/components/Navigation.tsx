import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/pixelact-ui/button";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/buttons", label: "Buttons" },
    { path: "/inputs", label: "Inputs" },
  ];

  return (
    <nav className="border-b bg-background">
      <div className="mx-auto max-w-4xl px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              Custom UI
            </Link>
            <div className="hidden space-x-4 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="custom-ui" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
