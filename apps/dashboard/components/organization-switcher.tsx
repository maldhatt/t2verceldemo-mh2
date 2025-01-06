"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { Badge } from "./ui/badge"

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface OrganizationSwitcherProps extends PopoverTriggerProps {
  organizations: {
    id: string
    slug: string
    displayName: string
    logoUrl?: string
  }[]
  currentOrgId: string
}

export function OrganizationSwitcher({
  organizations,
  currentOrgId,
}: OrganizationSwitcherProps) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const organization = organizations.find((org) => org.id === currentOrgId)!

  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="flex items-center justify-between">
        <Avatar className="mr-2 size-5">
          <AvatarImage
            src={`https://avatar.vercel.sh/${organization.displayName}.png`}
            alt={organization.displayName}
          />
          <AvatarFallback className="rounded-sm">
            {organization.displayName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <Link
          className="min-w-16 space-x-2 truncate text-left text-sm font-medium"
          href="/dashboard"
        >
          <span>{organization.displayName}</span>
          <Badge variant="secondary" className="rounded-xl">
            Hobby
          </Badge>
        </Link>
      </div>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            role="combobox"
            aria-expanded={open}
            aria-label="Select an organization"
            size="icon"
            className="px-0"
          >
            <CaretSortIcon className="size-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Search organizations..." />
              <CommandEmpty>No organization found.</CommandEmpty>

              <CommandGroup heading="Organizations">
                {organizations.map((org) => (
                  <CommandItem
                    key={org.id}
                    onSelect={() => {
                      router.push(
                        `/api/auth/login?organization=${org.id}&returnTo=/dashboard`
                      )
                      setOpen(false)
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 size-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${organization.displayName}.png`}
                        alt={org.displayName}
                      />
                      <AvatarFallback className="rounded-sm">
                        {org.displayName[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="truncate">{org.displayName}</span>
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        organization.slug === org.slug
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    router.push("/onboarding/create")
                    setOpen(false)
                  }}
                  className="cursor-pointer"
                >
                  <PlusCircledIcon className="mr-2 size-4" />
                  Create Organization
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}
