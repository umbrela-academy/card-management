<script lang="ts">
	import type { SidebarNavItem } from "$lib/components/nav/types";
	import { cn } from "$lib/utils.js";
	import DocsSidebarNavItems from "./docs-sidebar-nav-items.svelte";

	export let items: SidebarNavItem[] = [];

</script>

{#if items.length}
	<div class="w-full ml-2">
		{#each items as item, index (index)}
			<div class={cn("pb-4")}>
				<h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold flex flex-row">
					<svelte:component this={item.icon} class="mr-2 mt-[2px] h-4 w-4"/><p>{item.title}</p>
				</h4>
				{#if item?.items}
					{#if item?.items?.length}
						<DocsSidebarNavItems items={item.items} />
					{/if}
				{/if}
			</div>
		{/each}
	</div>
{/if}
