import React from "react"
import { Search } from "lucide-react"
import { BiChevronDown } from "react-icons/bi"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function SearchSection() {
  return (
    <div className="flex w-full gap-3">
      <div className="relative w-full">
        <Search className="absolute left-2 top-2.5 size-4" />
        <Input
          placeholder="Search Repositories and Projects..."
          className="w-full bg-primary-foreground pl-8"
        />
      </div>

      <Button className="flex items-center gap-2">
        <span>Add New... </span>
        <BiChevronDown className="text-xl" />
      </Button>
    </div>
  )
}
