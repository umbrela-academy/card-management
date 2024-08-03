<script lang="ts">
  import type { SidebarNavItem } from "$lib/components/nav/types";
  import ArrowDownUp from "lucide-svelte/icons/arrow-down-up";
  import Button from "../ui/button/button.svelte";
  import * as Collapsible from "../ui/collapsible";
  import DocsSidebarNavItems from "./docs-sidebar-nav-items.svelte";

  export let items: SidebarNavItem[] = [];
</script>

{#if items.length}
    {#each items as item, index (index)}
		<Collapsible.Root open class="w-full ml-2">
      <div class="pb-4">
        <div class="flex justify-between">
          <h4
            class="mb-1 rounded-md px-2 py-1 text-sm font-semibold flex flex-row"
          >
            <svelte:component this={item.icon} class="mr-2 mt-[2px] h-6 w-6" />
            <p class="text-lg">{item.title}</p>
          </h4>
          <Collapsible.Trigger asChild let:builder>
            <Button
              builders={[builder]}
              variant="ghost"
              size="sm"
              class="w-9 p-0"
            >
              <ArrowDownUp class="h-4 w-4" />
              <span class="sr-only">Toggle</span>
            </Button>
          </Collapsible.Trigger>
        </div>
				<Collapsible.Content class="space-y-2">
        {#if item?.items}
          {#if item?.items?.length}
            <DocsSidebarNavItems items={item.items} />
          {/if}
        {/if}
				</Collapsible.Content>
      </div>
		</Collapsible.Root>
    {/each}

{/if}
