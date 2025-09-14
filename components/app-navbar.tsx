import { Button } from "@/components/ui/button";

import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Search, EllipsisVertical } from "lucide-react";

export default function AppNavbar() {
    return (
        <nav
            className="fixed top-0 left-96 h-16 bg-sidebar text-foreground border-b border-border flex items-center justify-between px-4 z-10"
            style={{ width: `calc(100% - 24rem)` }}
        >
            <div className="flex items-center">
                <Avatar className="h-10 w-10">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Button variant="link" className=" text-lg font-semibold cursor-pointer" >John Doe</Button>
            </div>
            <div className="flex items-center">
                <Button className="cursor-pointer size-8" variant="ghost" size="icon"><Search /></Button>
                <Button className="cursor-pointer size-8" variant="ghost" size="icon"><EllipsisVertical /></Button>
            </div>
        </nav>
    );
}
