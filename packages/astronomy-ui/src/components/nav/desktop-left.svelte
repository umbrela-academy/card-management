<script lang="ts">
  import Home from "lucide-svelte/icons/house";
  import LineChart from "lucide-svelte/icons/line-chart";
  import Package from "lucide-svelte/icons/package";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import Users from "lucide-svelte/icons/users";
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";

  import DocsSidebarNav from "$lib/components/nav/docs-sidebar-nav.svelte";
  import { docsConfig } from "$lib/components/nav/types";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
</script>
<div class="flex -ml-10 items-center gap-4 border-b bg-muted/40 px-4 ">
  <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
    <ScrollArea class="pl-8 h-full py-6 pr-6 lg:py-8">
    <a
      href="##"
      class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Home class="h-4 w-4" />
      Workspace
    </a>
    <DocsSidebarNav items={docsConfig.sidebarNav} />
    <a
      href="##"
      class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <ShoppingCart class="h-4 w-4" />
      Compliance
      <Badge
        class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
      >
        6
      </Badge>
    </a>
    <a
      href="##"
      class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
    >
      <Package class="h-4 w-4" />
      Products
    </a>
    <a
      href="##"
      class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <Users class="h-4 w-4" />
      Customers
    </a>
    <a
      href="##"
      class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    >
      <LineChart class="h-4 w-4" />
      Analytics
    </a>
  </ScrollArea>
  </nav>
</div>
<div class="mt-auto p-4">
  <Card.Root>
    <Card.Header class="p-2 pt-0 md:p-4">
      <Card.Title>Working Demo (RAD)</Card.Title>
      <Card.Description>
        This pre-release software is meant to demonstrate some capabilities of the Code-Zen platform and its plugins.
      </Card.Description>
    </Card.Header>
    <Card.Content class="p-2 pt-0 md:p-4 md:pt-0">
      <Button size="sm" class="w-full">Learn More</Button>
    </Card.Content> 
  </Card.Root>
</div>