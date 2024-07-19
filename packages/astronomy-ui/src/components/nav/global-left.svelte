<script lang="ts">
  import Home from "lucide-svelte/icons/house";
  import LineChart from "lucide-svelte/icons/line-chart";
  import Package from "lucide-svelte/icons/package";
  import Package2 from "lucide-svelte/icons/package-2";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";
  import Users from "lucide-svelte/icons/users";
  import DocsSidebarNav from "$lib/components/nav/docs-sidebar-nav.svelte";
  import { docsConfig } from "$lib/components/nav/types";
  import { Badge } from "$lib/components/ui/badge";
  import { Button } from "$lib/components/ui/button";
  import * as Card from "$lib/components/ui/card";
</script>

<nav class="grid gap-2 text-lg font-medium">
  <a href="##" class="flex items-center gap-2 text-lg font-semibold">
    <Package2 class="h-6 w-6" />
    <span class="sr-only">DBL C-CMS</span>
  </a>
  <a
    href="##"
    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  >
    <Home class="h-5 w-5" />
    Workspace
  </a>
  <DocsSidebarNav items={docsConfig.sidebarNav} />
  <a
    href="##"
    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
  >
    <ShoppingCart class="h-5 w-5" />
    Compliance
    <Badge
      class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
    >
      6
    </Badge>
  </a>
  <a
    href="##"
    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  >
    <Package class="h-5 w-5" />
    Products
  </a>
  <a
    href="##"
    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  >
    <Users class="h-5 w-5" />
    Customers
  </a>
  <a
    href="##"
    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
  >
    <LineChart class="h-5 w-5" />
    Analytics
  </a>
</nav>
<div class="mt-auto">
  <Card.Root>
    <Card.Header>
      <Card.Title>Working Demo (RAD)</Card.Title>
      <Card.Description>
        This pre-release software is meant to demonstrate some capabilities of the Code-Zen platform and its plugins.
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <Button size="sm" class="w-full">Learn More</Button>
    </Card.Content>
  </Card.Root>
</div>