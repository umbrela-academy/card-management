<script lang="ts">
  import { Badge } from "$lib/components/ui/badge";
  import Home from "lucide-svelte/icons/house";
  import LineChart from "lucide-svelte/icons/line-chart";
  import Package from "lucide-svelte/icons/package";
  import ShoppingCart from "lucide-svelte/icons/shopping-cart";

  import DocsSidebarNav from "$lib/components/nav/docs-sidebar-nav.svelte";
  import { docsConfig } from "$lib/components/nav/types";
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import UserRoundPlus from "lucide-svelte/icons/user-round-plus";
</script>

<ScrollArea orientation="vertical" class="pl-4 h-full py-2 pr-4 lg:py-8">
  <div class="flex -ml-8 items-center gap-4 border-b bg-muted/40 px-2">
    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
      <a
        href="/clinic"
        class="flex items-center gap-3 rounded-lg px-3 py-3 text-xl text-muted-foreground transition-all hover:text-primary"
      >
        <UserRoundPlus class="h-7 w-7 ml-1" />
        Clinic
      </a>
      <DocsSidebarNav items={docsConfig.sidebarPatientNav} />
      <a
        href="/cardman"
        class="flex items-center gap-3 rounded-lg px-3 py-3 text-xl text-muted-foreground transition-all hover:text-primary"
      >
        <Home class="h-7 w-7" />
        Workspace
      </a>
      <DocsSidebarNav items={docsConfig.sidebarEmployeeNav} />
      <a
        href="##"
        class="flex items-center gap-3 rounded-lg px-3 py-3 text-xl text-muted-foreground transition-all hover:text-primary"
      >
        <LineChart class="h-7 w-7" />
        Analytics
      </a>

      <a
        href="##"
        class="flex items-center gap-3 rounded-lg px-3 py-3 text-xl text-muted-foreground transition-all hover:text-primary"
      >
        <ShoppingCart class="h-7 w-7" />
        Compliance
        <Badge
          class="ml-auto flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
        >
          6
        </Badge>
      </a>
      <a
        href="##"
        class="flex items-center gap-3 rounded-lg bg-muted px-3 py-3 text-xl text-primary transition-all hover:text-primary"
      >
        <Package class="h-7 w-7" />
        Products
      </a>
    </nav>
  </div>
</ScrollArea>
