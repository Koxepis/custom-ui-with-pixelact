import { useState } from "react";
import { List, type ListItem } from "@/components/ui/pixelact-ui/list";
import { Container } from "@/components/ui/pixelact-ui/container";
import { Button } from "@/components/ui/pixelact-ui/button";

export default function ListPage() {
  const basicItems: ListItem[] = [
    { id: "warrior", label: "Warrior" },
    { id: "mage", label: "Mage" },
    { id: "ranger", label: "Ranger" },
    { id: "cleric", label: "Cleric" },
  ];

  const longItems: ListItem[] = Array.from({ length: 20 }).map((_, i) => ({
    id: `item-${i + 1}`,
    label: `Item ${i + 1}`,
  }));

  const [selected, setSelected] = useState<string>("mage");

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold">List Component</h1>
          <p className="text-lg text-muted-foreground">
            Custom pixel-style list with RPG-inspired aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Basic List */}
          <Container variant="custom-container-1">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Basic List</h2>
              <p className="text-muted-foreground">
                Click to select items. Use Up/Down, Home/End to navigate.
              </p>
              <List items={basicItems} defaultSelectedId="warrior" maxHeight={160} />
            </div>
          </Container>

          {/* Scrollable List */}
          <Container variant="custom-container-2">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Scrollable List</h2>
              <p className="text-muted-foreground">
                Demonstrates overflow with a taller list.
              </p>
              <List items={longItems} defaultSelectedId="item-10" maxHeight={220} />
            </div>
          </Container>

          {/* Controlled List */}
          <Container variant="custom-container-3">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Controlled Selection</h2>
              <p className="text-muted-foreground">
                Selection controlled by parent state.
              </p>
              <div className="flex flex-wrap gap-2">
                <Button size="sm" onClick={() => setSelected("warrior")}>Warrior</Button>
                <Button size="sm" variant="warning" onClick={() => setSelected("mage")}>
                  Mage
                </Button>
                <Button size="sm" variant="success" onClick={() => setSelected("ranger")}>
                  Ranger
                </Button>
                <Button size="sm" variant="secondary" onClick={() => setSelected("cleric")}>
                  Cleric
                </Button>
              </div>

                <Button size="sm" className="w-full" onClick={() => setSelected("")}>Clear</Button>
              <List
                items={basicItems}
                selectedId={selected || undefined}
                onValueChange={setSelected}
                maxHeight={160}
              />
            </div>
          </Container>
        </div>

        {/* Disabled Example */}
        <div className="mt-8">
          <Container variant="custom-container-4">
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Disabled</h2>
              <p className="text-muted-foreground">List with disabled interactions and grayscale.</p>
              <List className="w-56" items={basicItems} defaultSelectedId="cleric" maxHeight={140} disabled />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
