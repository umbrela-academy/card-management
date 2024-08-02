<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import UserAuthForm from "$lib/components/sso/auth-form.svelte";
</script>

<div
  class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
>
  <Button
    href="/nepwork/purchase"
    variant="outline"
    class="absolute right-4 top-4 md:right-8 md:top-8 font-semibold border-gradient bg-gradient-to-r from-primary to-secondary"
  >
	Buy <span class="text-gradient ml-1">Now</span>
  </Button>
  <div
    class="relative hidden h-screen flex-col bg-muted p-10 text-white dark:border-r lg:flex"
  >
    <div
      class="absolute inset-0 bg-cover"
      style="
				background-image:
					url('/pascal-tower.jpeg');"
    ></div>
    <div class="relative z-20 flex items-center text-lg font-medium">
      <!-- <Command class="mr-2 h-6 w-6" /> -->
      Development Bank Ltd
    </div>
    <div class="relative z-20 mt-auto">
      <blockquote class="space-y-2">
        <p class="text-lg text-backdrop">
          This software was created as a part of the Code Zen Workshop 2024 by
          Anarchitecture Foundation.
        </p>
        <footer class="text-sm">Risav Karna</footer>
      </blockquote>
    </div>
  </div>
  <div class="lg:p-8">
    <div
      class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
    >
      <h1 class="h1-main -mx-10">
        Card<span class="text-gradient">Manager</span>
      </h1>
      <div class="flex flex-col space-y-2 text-center">
        <h2 class="text-2xl font-semibold tracking-tight">Welcome to the Live Demo</h2>
        <p class="text-sm text-muted-foreground">
          Please enter your email to create your demo account
        </p>
      </div>
      <UserAuthForm />
      <p class="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our
        <a
          href="/terms"
          class="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </a>
        and
        <a
          href="/privacy"
          class="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p>
    </div>
  </div>
</div>

<style>
  .h1-main {
    font-size: 4rem;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 1em;
  }
</style>
