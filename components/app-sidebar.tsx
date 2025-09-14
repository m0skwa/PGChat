import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu, BadgeX, Search, Plus, Archive, MessageSquare, Settings, Star, Sparkles, LogOut } from "lucide-react"

export function AppSidebar() {
    return (
        <Sidebar className="w-96 border-r sidebar-border bg-sidebar">
            <SidebarHeader className="flex flex-row items-center justify-between space-y-0 p-4">
                <DropdownMenu>
                    <DropdownMenuTrigger className="w-10 cursor-pointer" asChild>
                        <Button variant="outline"><Menu /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                        <DropdownMenuLabel>PGChat - Messenger</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="flex items-center cursor-pointer">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                cristiano
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup className="cursor-pointer">
                            <DropdownMenuItem className="cursor-pointer">
                                <Sparkles />
                                Premium
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup className="cursor-pointer">
                            <DropdownMenuItem className="cursor-pointer">
                                <MessageSquare />
                                My Chats
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Archive />
                                Archived Chats
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Settings />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Star />
                                Saved Messages
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="flex items-center cursor-pointer">
                                <Avatar className="h-6 w-6">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                johndoe
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <Plus />
                                Add Account
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="cursor-pointer">
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input type="text" placeholder="Search..." className="pl-8" />
                </div>

                <Button variant="destructive" className="cursor-pointer"><BadgeX /></Button>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <Button variant="ghost" className="flex h-15 w-full justify-start gap-5 cursor-pointer px-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        John Doe
                    </Button>

                    <Button variant="ghost" className="flex h-15 w-full justify-start gap-5 cursor-pointer px-4">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        John Doe
                        <span className="ml-auto text-sm text-muted-foreground">1</span>
                    </Button>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}