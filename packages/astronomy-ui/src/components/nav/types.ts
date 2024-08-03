import type { ComponentType } from "svelte";
import { sidebarNav } from "./zen";
import {type Icon} from "lucide-svelte";

export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: ComponentType<Icon>;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items?: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs",
		},
		{
			title: "Components",
			href: "/docs/components/accordion",
		},
		{
			title: "Themes",
			href: "/themes",
		},
		{
			title: "Examples",
			href: "/examples/dashboard",
		},
		{
			title: "Blocks",
			href: "/blocks",
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true,
		},
	],
	sidebarNav
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: "Mail",
		href: "/examples/mail",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/mail",
	},
	{
		name: "Dashboard",
		href: "/examples/dashboard",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/dashboard",
	},
	{
		name: "Cards",
		href: "/examples/cards",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/cards",
	},
	{
		name: "Tasks",
		href: "/examples/tasks",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/tasks",
	},
	{
		name: "Playground",
		href: "/examples/playground",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/playground",
	},
	{
		name: "Forms",
		href: "/examples/forms",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/forms",
	},
	{
		name: "Music",
		href: "/examples/music",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/music",
	},
	{
		name: "Authentication",
		href: "/examples/authentication",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/(app)/examples/authentication",
	},
];
