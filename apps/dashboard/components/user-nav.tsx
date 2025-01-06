import Image from "next/image"
import Link from "next/link"

import { appClient } from "@/lib/auth0"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export async function UserNav() {
  const session = await appClient.getSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage
              src={session?.user.picture || "/avatar.svg"}
              alt="User avatar"
            />
            <AvatarFallback>
              <Image
                className="grayscale"
                src="/avatar.svg"
                alt="User avatar"
                width={36}
                height={36}
              />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 py-2" align="end" forceMount>
        <DropdownMenuLabel className="py-2.5 font-normal">
          <p className="text-sm font-medium leading-none">
            {session?.user.name}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuItem className="py-2.5" asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="py-2.5" asChild>
          <Link href="/dashboard/account/profile">Account Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="py-2.5" asChild>
          <a href="/api/auth/logout">Log Out</a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
