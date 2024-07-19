export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	icon?: any;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
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
	sidebarNav: [
		{
			title: "User Account Admin",
			items: [
				{
					title: "Users",
					href: "/dashboard/user-list",
					items: [],
				},
				{
					title: "User Profiles",
					href: "/dashboard/user-profile-list",
					items: [],
				},
				{
					title: "User Groups",
					href: "/dashboard/user-group-list",
					items: [],
				},
				{
					title: "User Assets",
					href: "/dashboard/user-asset-list",
					items: [],
				}
			],
		},
		{
			title: "Card & Score Admin",
			items: [
				{
					title: "Cards",
					href: "/dashboard/card-list",
					items: [],
				},
				{
					title: "Credit Scores",
					href: "/dashboard/card-score-list",
					items: [],
				},
				{
					title: "Prepaid Limits",
					href: "/dashboard/card-limit-list",
					items: [],
				},
				{
					title: "Issuance Request",
					href: "/dashboard/card-issuance-request-list",
					items: [],
				},
				{
					title: "Application Review",
					href: "/dashboard/card-application-review-list",
					items: [],
				},
				{
					title: "Update Request",
					href: "/dashboard/card-update-request-list",
					items: [],
				},
				{
					title: "Cancellation Request",
					href: "/dashboard/card-cancellation-request-list",
					items: [],
				}
			],
		},
	],
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
