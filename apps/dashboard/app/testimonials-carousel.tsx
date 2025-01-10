"use client"

import Autoplay from "embla-carousel-autoplay"
import { useTheme } from "next-themes"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const customers = [
  {
    companyName: "Parachute",
    useCase: (
      <span className="text-[0.875rem] text-muted-foreground">
        saw pages load{" "}
        <span className="text-[0.875rem] font-medium leading-[1.25rem]">
          60% faster
        </span>
      </span>
    ),
    lightLogo:
      "https://vercel.com/_next/static/media/parachute-light.5f3c1a6d.svg",
    darkLogo:
      "https://vercel.com/_next/static/media/parachute-dark.ba1219bf.svg",
    width: "107.89",
    height: "10",
  },
  {
    companyName: "Ebay",
    useCase: (
      <span className="text-[0.875rem] text-muted-foreground">
        has{" "}
        <span className="text-[0.875rem] font-medium leading-[1.25rem]">
          6x faster{" "}
        </span>
        release cycles
      </span>
    ),
    lightLogo:
      "https://vercel.com/_next/static/media/ebay-color-light.04f2a0da.svg",
    darkLogo:
      "https://vercel.com/_next/static/media/ebay-color-dark.04f2a0da.svg",
    width: "60",
    height: "24",
  },
  {
    companyName: "Chick Fil a",
    useCase: (
      <span className="self-end text-[0.875rem] text-muted-foreground">
        build times dropped from{" "}
        <span className="text-[0.875rem] font-medium leading-[1.25rem]">
          25m to 5ms
        </span>
      </span>
    ),
    lightLogo:
      "https://vercel.com/_next/static/media/chick-fil-a-color-light.7c6922d0.svg",
    darkLogo:
      "https://vercel.com/_next/static/media/chick-fil-a-color-dark.baa95872.svg",
    width: "65.5",
    height: "32",
  },
  {
    companyName: "Stripe",
    useCase: (
      <span className="text-[0.875rem] text-muted-foreground">
        had{" "}
        <span className="text-[0.875rem] font-medium leading-[1.25rem]">
          100% uptime{" "}
        </span>
        at peak Black Friday volume
      </span>
    ),
    lightLogo:
      "https://vercel.com/_next/static/media/stripe-color-light.4858bc6d.svg",
    darkLogo:
      "https://vercel.com/_next/static/media/stripe-color-dark.4858bc6d.svg",
    width: "47.85",
    height: "20",
  },
  {
    companyName: "Adobe",
    useCase: (
      <span className="text-[0.875rem] text-muted-foreground">
        has{" "}
        <span className="text-[0.875rem] font-medium leading-[1.25rem]">
          6x faster{" "}
        </span>
        preview builds & deployments
      </span>
    ),
    lightLogo:
      "https://vercel.com/_next/static/media/adobe-color-light.233a89e1.svg",
    darkLogo:
      "https://vercel.com/_next/static/media/adobe-color-dark.233a89e1.svg",
    width: "68.1",
    height: "18",
  },
]

export function TestimonialsCarousel() {
  const { theme = "light", systemTheme } = useTheme()
  const isDarkMode =
    theme === "dark" || (theme === "system" && systemTheme === "dark")

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="mx-auto mt-[48px] w-full max-w-md"
      orientation="vertical"
    >
      <CarouselContent className="h-[100px] w-full">
        {customers.map((customer, idx) => {
          return (
            <CarouselItem className="h-[10px] w-full" key={idx}>
              <div className="flex w-full items-center justify-center gap-[8px] p-1">
                <img
                  src={isDarkMode ? customer.darkLogo : customer.lightLogo}
                  alt={customer.companyName}
                  loading="eager"
                  width={`${customer.width}`}
                  height={`${customer.height}`}
                  decoding="async"
                  style={{ color: "transparent" }}
                  className=""
                />
                {customer.useCase}
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
    </Carousel>
  )
}
