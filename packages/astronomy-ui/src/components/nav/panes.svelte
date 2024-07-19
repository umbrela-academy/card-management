<script lang="ts">
  import { ScrollArea } from "$lib/components/ui/scroll-area";
  import DocsSidebarNav from "$lib/components/nav/docs-sidebar-nav.svelte";
  import { docsConfig } from "$lib/components/nav/types";
  import { Pane, Handle, PaneGroup } from "$lib/components/ui/resizable";
</script>

<div class="h-[96vh]">
<PaneGroup
  direction="horizontal"
  class="w-full bg-secondary"
>
  <Pane defaultSize={25}>
    <ScrollArea class="pl-8 h-full py-6 pr-6 lg:py-8">
      <DocsSidebarNav items={docsConfig.sidebarNav} />
    </ScrollArea>
  </Pane>
  <Handle withHandle />
  <Pane defaultSize={75}>
      <slot />
  </Pane>
</PaneGroup>
</div>