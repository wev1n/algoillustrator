"use client";

import * as React from "react";

import { SidebarAlgorithms } from "~/app/_components/sidebar/sidebar-algorithms";
import { SidebarDataStructures } from "~/app/_components/sidebar/sidebar-data-structures";
import { NavUser } from "~/app/_components/sidebar/sidebar-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/app/_components/ui/sidebar";
import { sidebarData } from "./sidebar-data";
import { Command } from "lucide-react";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link
          href="/"
          className="flex gap-3 rounded-sm hover:bg-sidebar-accent"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <Command className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">AlgoIllustrator</span>
            <span className="truncate text-xs">Hobby</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarAlgorithms items={sidebarData.algorithms} />
        <SidebarDataStructures items={sidebarData.dataStructures} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
