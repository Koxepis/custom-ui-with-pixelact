import { useState } from "react";
import { Container } from "../components/ui/pixelact-ui/container";
import { Button } from "../components/ui/pixelact-ui/button";
import { Input as PixelInput } from "../components/ui/pixelact-ui/input";

export default function ContainerPage() {
  const [defaultOn, setDefaultOn] = useState(false);
  const [goldenOn, setGoldenOn] = useState(false);
  const [golden2On, setGolden2On] = useState(false);
  const [greyOn, setGreyOn] = useState(false);
  const [custom5On, setCustom5On] = useState(false);
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-4xl font-bold">Container Components</h1>
        
        {/* Basic Container Variants */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Basic Container Variants</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Default Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Custom 1</h3>
              <Container variant="custom-container-1" className="p-4 space-y-2">
                <p className="text-white text-sm">Default container with standard border and background.</p>
                <Button variant="custom-ui" size="sm" className="mt-1"
                  onClick={() => setDefaultOn((v) => !v)}>
                  Toggle
                </Button>
                <p className="text-xs text-white/80">Status: {defaultOn ? <span className="text-green-400">On</span> : <span className="text-red-400">Off</span>}</p>
              </Container>
            </div>

            {/* Golden Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Custom 2</h3>
              <Container variant="custom-container-2" className="p-4 space-y-2">
                <p className="text-white text-sm">Golden container with luxurious appearance.</p>
                <Button variant="custom-ui" size="sm" className="mt-1"
                  onClick={() => setGoldenOn((v) => !v)}>
                  Toggle
                </Button>
                <p className="text-xs text-white/80">Status: {goldenOn ? <span className="text-green-400">On</span> : <span className="text-red-400">Off</span>}</p>
              </Container>
            </div>

            {/* Golden2 Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Custom 3</h3>
              <Container variant="custom-container-3" className="p-4 space-y-2">
                <p className="text-white text-sm">Alternative golden container design.</p>
                <Button variant="custom-ui" size="sm" className="mt-1"
                  onClick={() => setGolden2On((v) => !v)}>
                  Toggle
                </Button>
                <p className="text-xs text-white/80">Status: {golden2On ? <span className="text-green-400">On</span> : <span className="text-red-400">Off</span>}</p>
              </Container>
            </div>

            {/* Grey Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Custom 4</h3>
              <Container variant="custom-container-4" className="p-4 space-y-2">
                <p className="text-white text-sm">Grey container for subtle appearance.</p>
                <Button variant="custom-ui" size="sm" className="mt-1"
                  onClick={() => setGreyOn((v) => !v)}>
                  Toggle
                </Button>
                <p className="text-xs text-white/80">Status: {greyOn ? <span className="text-green-400">On</span> : <span className="text-red-400">Off</span>}</p>
              </Container>
            </div>

            {/* Custom 5 Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Custom 5</h3>
              <Container variant="custom-container-5" className="p-4 space-y-2">
                <p className="text-white text-sm">New variant backed by custom-5 assets.</p>
                <Button variant="custom-ui" size="sm" className="mt-1"
                  onClick={() => setCustom5On((v) => !v)}>
                  Toggle
                </Button>
                <p className="text-xs text-white/80">Status: {custom5On ? <span className="!text-green-400">On</span> : <span className="!text-red-400">Off</span>}</p>
              </Container>
            </div>
          </div>
        </section>

        {/* Container Sizes */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Container Sizes</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            
            {/* Small Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Small</h3>
              <Container variant="custom-container-2">
                <p className="text-white text-sm">Small container with reduced padding and border.</p>
              </Container>
            </div>

            {/* Default Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Default</h3>
              <Container variant="custom-container-2">
                <p className="text-white text-sm">Default container size with standard padding and border.</p>
              </Container>
            </div>

            {/* Large Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Large</h3>
              <Container variant="custom-container-2">
                <p className="text-white text-sm">Large container with increased padding and border.</p>
              </Container>
            </div>
          </div>
        </section>

        {/* Container Layouts */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Container Layouts</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Fixed Width Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Fixed Width</h3>
              <Container variant="custom-container-1" className="w-[400px]">
                <p className="text-white text-sm">Container with fixed width of 400px.</p>
                <div className="mt-4 space-y-2">
                  <PixelInput variant="custom-ui" placeholder="Input field" className="w-full" />
                  <Button variant="custom-ui" size="sm" className="w-full">Full Width Button</Button>
                </div>
              </Container>
            </div>

            {/* Fixed Height Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Fixed Height</h3>
              <Container variant="custom-container-2" className="min-h-[300px] h-[300px]">
                <p className="text-white text-sm">Container with fixed height of 300px.</p>
                <div className="mt-4 space-y-2">
                  <p className="text-white text-xs">This container has a fixed height and will maintain it regardless of content.</p>
                  <p className="text-white text-xs">You can add more content here to test the height constraint.</p>
                </div>
              </Container>
            </div>
          </div>
        </section>

        {/* Scrollable Container */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Scrollable Container</h2>
          <div className="max-w-2xl">
            <Container variant="custom-container-4" className="p-4 max-h-[400px] overflow-y-auto scrollable">
              <h4 className="text-white text-lg font-medium mb-4">Scrollable Content</h4>
              <div className="space-y-3">
                <p className="text-white text-sm">This container has a maximum height and will show a scrollbar when content overflows.</p>
                {Array.from({ length: 18 }).map((_, i) => (
                  <p key={i} className="text-white text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                ))}
              </div>
            </Container>
          </div>
        </section>

        {/* Container with Form Elements */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Container with Form Elements</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Form Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Contact Form</h3>
              <Container variant="custom-container-2">
                <h4 className="text-white text-lg font-medium mb-4">Contact Us</h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white text-sm mb-2">Name</label>
                    <PixelInput variant="custom-ui" placeholder="Enter your name" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Email</label>
                    <PixelInput variant="custom-ui" placeholder="Enter your email" type="email" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Message</label>
                    <PixelInput variant="custom-ui" placeholder="Enter your message" className="w-full" />
                  </div>
                  <Button variant="custom-ui" size="sm" className="w-full">Send Message</Button>
                </div>
              </Container>
            </div>

            {/* Info Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Information Panel</h3>
              <Container variant="custom-container-1">
                <h4 className="text-white text-lg font-medium mb-4">System Status</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Server Status</span>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Database</span>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">API Response</span>
                    <span className="text-yellow-400 text-sm">Slow</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm">Memory Usage</span>
                    <span className="text-white text-sm">67%</span>
                  </div>
                </div>
                <Button variant="custom-ui" size="sm" className="w-full mt-4">Refresh Status</Button>
              </Container>
            </div>
          </div>
        </section>

        {/* Container States */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Container States</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            
            {/* Normal Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Normal State</h3>
              <Container variant="custom-container-2">
                <p className="text-white text-sm">This container is in its normal state and fully interactive.</p>
                <Button variant="custom-ui" size="sm" className="mt-4">Interactive Button</Button>
              </Container>
            </div>

            {/* Disabled Container */}
            <div>
              <h3 className="mb-4 text-lg font-medium">Disabled State (Grayscale)</h3>
              <Container variant="custom-container-2" disabled>
                <p className="text-white text-sm">This container is disabled with grayscale filter applied.</p>
                <Button variant="custom-ui" size="sm" className="mt-4" disabled>Disabled Button</Button>
              </Container>
            </div>
          </div>
        </section>

        {/* Complex Container Example */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">Complex Container Example</h2>
          <div className="max-w-4xl">
              <Container variant="custom-container-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">User Profile</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-white text-sm mb-2">Username</label>
                      <PixelInput variant="custom-ui" placeholder="username" className="w-full" />
                    </div>
                    <div>
                      <label className="block text-white text-sm mb-2">Email</label>
                      <PixelInput variant="custom-ui" placeholder="email@example.com" type="email" className="w-full" />
                    </div>
                    <Button variant="custom-ui" size="sm" className="w-full">Update Profile</Button>
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-lg font-medium mb-4">Settings</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Notifications</span>
                      <Button variant="custom-ui" size="sm">Toggle</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Dark Mode</span>
                      <Button variant="custom-ui" size="sm">Toggle</Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Auto-save</span>
                      <Button variant="custom-ui" size="sm">Toggle</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </section>
      </div>
    </div>
  );
}
