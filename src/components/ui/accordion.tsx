"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDownIcon } from "lucide-react"

type AccordionContextType = {
  openValues: string[]
  toggle: (value: string) => void
}
const AccordionContext = React.createContext<AccordionContextType>({ openValues: [], toggle: () => {} })

function Accordion({ className, children, ...props }: React.ComponentProps<"div">) {
  const [openValues, setOpenValues] = React.useState<string[]>([])
  const toggle = (value: string) =>
    setOpenValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  return (
    <AccordionContext.Provider value={{ openValues, toggle }}>
      <div data-slot="accordion" className={cn("flex w-full flex-col", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

type AccordionItemContextType = { value: string; isOpen: boolean; toggle: () => void }
const AccordionItemContext = React.createContext<AccordionItemContextType>({
  value: "", isOpen: false, toggle: () => {},
})

function AccordionItem({ className, value, children, ...props }: React.ComponentProps<"div"> & { value: string }) {
  const { openValues, toggle } = React.useContext(AccordionContext)
  const isOpen = openValues.includes(value)
  return (
    <AccordionItemContext.Provider value={{ value, isOpen, toggle: () => toggle(value) }}>
      <div data-slot="accordion-item" className={cn("border-b last:border-b-0", className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

function AccordionTrigger({ className, children, ...props }: React.ComponentProps<"button">) {
  const { isOpen, toggle } = React.useContext(AccordionItemContext)
  return (
    <div className="flex">
      <button
        data-slot="accordion-trigger"
        onClick={toggle}
        aria-expanded={isOpen}
        className={cn(
          "flex flex-1 items-start justify-between py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          className={cn(
            "ml-auto size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
    </div>
  )
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<"div">) {
  const { isOpen } = React.useContext(AccordionItemContext)
  if (!isOpen) return null
  return (
    <div
      data-slot="accordion-content"
      className={cn("overflow-hidden text-sm pb-2.5", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
