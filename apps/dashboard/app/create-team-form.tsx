"use client"

import { useState } from "react"
import { CheckCircle2Icon } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function CreateTeamForm() {
  const [planType, setPlanType] = useState("")
  const [teamName, setTeamName] = useState("")

  return (
    <>
      <Label
        className="text-[13px] font-normal text-muted-foreground"
        htmlFor="plan_type"
      >
        Plan Type
      </Label>
      <RadioGroup
        className="mt-1 gap-0"
        id="plan_type"
        value={planType}
        onValueChange={setPlanType}
      >
        <div className="flex w-full items-center font-normal text-muted-foreground">
          <RadioGroupItem
            value="hobby"
            id="r1"
            className="peer sr-only hidden"
          />
          <Label
            htmlFor="r1"
            className="flex w-full items-center justify-between rounded-t-md border-l border-r border-t p-3 font-normal hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex items-center space-x-2">
              {planType === "hobby" && (
                <CheckCircle2Icon className="size-4 fill-blue-500 text-white" />
              )}
              {planType !== "hobby" && (
                <div className="size-4 rounded-full bg-secondary"></div>
              )}
              <span>I&apos;m working on personal projects</span>
            </div>
            <Badge variant="secondary" className="rounded-xl">
              Hobby
            </Badge>
          </Label>
        </div>

        <div className="flex w-full items-center font-normal text-muted-foreground">
          <RadioGroupItem value="pro" id="r2" className="peer sr-only hidden" />
          <Label
            htmlFor="r2"
            className="flex w-full items-center justify-between rounded-b-md border p-3 font-normal hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex items-center space-x-2">
              {planType === "pro" && (
                <CheckCircle2Icon className="size-4 fill-blue-500 text-white" />
              )}
              {planType !== "pro" && (
                <div className="size-4 rounded-full bg-secondary"></div>
              )}
              <span>I&apos;m working on commercial projects</span>
            </div>
            <Badge className="rounded-xl bg-blue-500 text-white hover:bg-blue-500">
              Pro
            </Badge>
          </Label>
        </div>
      </RadioGroup>

      {planType === "hobby" && (
        <div className="mt-10 grid w-full items-center">
          <Label
            className="text-[13px] font-normal text-muted-foreground"
            htmlFor="team_name"
          >
            Your Name
          </Label>
          <Input
            type="text"
            id="team_name"
            name="team_name"
            className="mt-1"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />{" "}
        </div>
      )}

      {planType === "pro" && (
        <div>
          <div className="mt-10 grid w-full items-center">
            <Label
              className="text-[13px] font-normal text-muted-foreground"
              htmlFor="team_name"
            >
              Team Name
            </Label>
            <Input
              type="text"
              id="team_name"
              name="team_name"
              className="mt-1"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
          </div>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="border-none">
              <AccordionTrigger className="text-sm text-muted-foreground">
                Continuing will start a 14-day Pro plan trial.
              </AccordionTrigger>
              <AccordionContent>
                Once the trial period ends for your new Vercel team, you can
                continue on the Pro plan starting at $20 per team seat.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}

      <Button className="mt-4 w-full" disabled={!planType || !teamName}>
        Continue
      </Button>
    </>
  )
}
