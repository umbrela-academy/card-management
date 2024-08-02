<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { cn } from "$lib/utils";
  import LoaderCircle from "lucide-svelte/icons/loader-circle";

	let className: string | undefined | null = undefined;
	export { className as class };

	let isLoading = false;
	async function onSubmit() {
		isLoading = true;

		setTimeout(() => {
			isLoading = false;
			window.location.href = '/dashboard'
		}, 1200);
	}
</script>

<div class={cn("grid gap-6", className)} {...$$restProps}>
	<form on:submit|preventDefault={onSubmit}>
		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Email</Label>
				<Input class="placeholder-gray-600 placeholder-opacity-75"
					id="email"
					placeholder="e.g. name@dbl.gov.np"
					type="email"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
		</div>
	<div class="relative">
		<div class="absolute inset-0 flex items-center">
			<span class="w-full border-t" ></span>
		</div>
		<div class="relative flex justify-center text-xs my-4 uppercase">
			<span class="bg-background px-2 text-backdrop text-muted-foreground"> Or continue with demo token </span>
		</div>
	</div>

		<div class="grid gap-2">
			<div class="grid gap-1">
				<Label class="sr-only" for="email">Token</Label>
				<Input class="placeholder-gray-600 placeholder-opacity-75"
					id="email"
					placeholder="e.g meza9in4b"
					type="text"
					autocapitalize="none"
					autocomplete="email"
					autocorrect="off"
					disabled={isLoading}
				/>
			</div>
			<Button type="submit" disabled={isLoading} class="font-semibold border-gradient bg-gradient-to-r from-primary to-secondary">
				{#if isLoading}
					<LoaderCircle class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				<span>Proceed to Live Demo</span>
			</Button>
		</div>
	</form>
</div>
