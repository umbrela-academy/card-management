<script lang="ts">
  import type { SidebarNavItem } from "$lib/components/nav/types";
	
  import { cn } from "$lib/utils";
  let pathname = window.location.pathname;

  $: console.log("pathname", pathname);

  export let items: SidebarNavItem[] = [];

</script>

{#if items.length}
  <div class="grid grid-flow-row auto-rows-max text-sm">
    {#each items as item, index (index)}
      {#if item.href}
        <div class="flex flex-row">
					<svelte:component this={item.icon} class="ml-3 mt-2 h-4 w-4"/>
          <a
            href={item.href}
            class={cn(
              "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "font-medium underline underline-offset-4 decoration-violet-700 decoration-2 text-backdrop text-foreground"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            {item.title}
            {#if item.label}
              <span
                class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
              >
                {item.label}
              </span>
            {/if}
          </a>
        </div>
      {:else}
        <span
          class="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
        >
          {item.title}
        </span>
      {/if}
    {/each}
  </div>
{/if}
