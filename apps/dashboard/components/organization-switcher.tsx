"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  CaretSortIcon,
  CheckIcon,
  ExternalLinkIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"
import { toast } from "sonner"

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
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { createOrganization } from "./organization-switcher-actions"
import { SubmitButton } from "./submit-button"
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
  const [showNewOrgDialog, setShowNewOrgDialog] = useState(false)

  const organization = organizations.find((org) => org.id === currentOrgId)!

  return (
    <Dialog open={showNewOrgDialog} onOpenChange={setShowNewOrgDialog}>
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
                  <DialogTrigger asChild>
                    <CommandItem
                      onSelect={() => {
                        setOpen(false)
                        setShowNewOrgDialog(true)
                      }}
                    >
                      <PlusCircledIcon className="h-5 w-5" />
                      Create Team
                    </CommandItem>
                  </DialogTrigger>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <DialogContent className="px-0">
        <DialogHeader className="border-b">
          <DialogTitle className="px-4 pb-4 text-2xl tracking-tight">
            Create a team
          </DialogTitle>
        </DialogHeader>
        <form
          className="px-4"
          action={async (formData: FormData) => {
            const { error } = await createOrganization(formData)

            if (error) {
              toast.error(error)
            } else {
              toast.success("Your organization has been created.")
            }
          }}
        >
          <p className="py-2 text-sm">
            Continue to start collaborating on Pro with increased usage,
            additional security features, and support.
          </p>
          <div>
            <div className="space-y-6 py-2 pb-4">
              <div className="space-y-1">
                <Label
                  htmlFor="name"
                  className="text-xs font-normal text-muted-foreground"
                >
                  Team name
                </Label>
                <Input
                  id="name"
                  name="organization_name"
                  placeholder="Acme Inc."
                />
              </div>
              <div className="space-y-2">
                <RadioGroup
                  defaultValue="pro"
                  className="grid grid-cols-2 gap-4"
                >
                  <div>
                    <RadioGroupItem
                      value="pro-trial"
                      id="pro-trial"
                      className="peer sr-only"
                      aria-label="pro-trial"
                    />
                    <Label
                      htmlFor="pro-trial"
                      className="flex flex-col items-start justify-between space-y-1 rounded-md border border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#0068d6] peer-data-[state=checked]:bg-[#f0f7ff] peer-data-[state=checked]:text-[#0068d6] dark:peer-data-[state=checked]:border-[#52a8ff] dark:peer-data-[state=checked]:bg-[#0f1c2e] dark:peer-data-[state=checked]:text-[#52a8ff]"
                    >
                      <p className="font-semi text-sm">Pro Trial</p>
                      <p className="text-sm font-normal">Free for two weeks</p>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem
                      value="pro"
                      id="pro"
                      className="peer sr-only"
                      aria-label="pro"
                    />
                    <Label
                      htmlFor="pro"
                      className="flex flex-col items-start justify-between space-y-1 rounded-md border border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-[#0068d6] peer-data-[state=checked]:bg-[#f0f7ff] peer-data-[state=checked]:text-[#0068d6] dark:peer-data-[state=checked]:border-[#52a8ff] dark:peer-data-[state=checked]:bg-[#0f1c2e] dark:peer-data-[state=checked]:text-[#52a8ff]"
                    >
                      <p className="font-semi text-sm">Pro</p>
                      <p className="text-sm font-normal">Get started now</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="flex text-sm">
                Continuing will start a monthly Pro plan subscription.{" "}
                <Link
                  href="https://vercel.com/docs/accounts/plans/pro/trials"
                  className="ml-1 flex items-center space-x-1 text-blue-600 underline-offset-4 hover:underline"
                  target="_blank"
                >
                  <span>Learn More</span>
                  <ExternalLinkIcon className="size-3" />
                </Link>
              </div>
            </div>
          </div>
          <DialogFooter className="mt-2">
            <Button
              variant="outline"
              onClick={() => setShowNewOrgDialog(false)}
            >
              Cancel
            </Button>
            <SubmitButton>Continue</SubmitButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
