import { House, NotebookPen, Smartphone, Wifi, ShieldCheck } from 'lucide-react';

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';

const items = [
	{
		title: 'Overview',
		url: '#',
		icon: House,
	},
	{
		title: 'Digital Literacy Programs',
		url: '#',
		icon: NotebookPen,
	},
	{
		title: 'Device Access',
		url: '#',
		icon: Smartphone,
	},
	{
		title: 'Broadband Connectivity',
		url: '#',
		icon: Wifi,
	},
	{
		title: 'Impact',
		url: '#',
		icon: ShieldCheck,
	},
];

export function AppSidebar() {
	return (
		<Sidebar collapsible="icon">
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Hawai&apos;i Digital Equity Dashboard</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
