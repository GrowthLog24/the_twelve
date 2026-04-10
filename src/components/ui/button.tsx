import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-medium whitespace-nowrap transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:opacity-90",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 gap-1.5 px-2.5",
        xs: "h-6 gap-1 px-2 text-xs",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem]",
        lg: "h-9 gap-1.5 px-2.5",
        icon: "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
  target?: string
  rel?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
  nativeButton?: boolean
  render?: React.ReactElement
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  href,
  nativeButton,
  render,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, className }))

  // render prop으로 <a> 전달된 경우 → 링크로 렌더
  if (render && React.isValidElement(render)) {
    const renderEl = render as React.ReactElement<React.AnchorHTMLAttributes<HTMLAnchorElement>>
    return React.cloneElement(renderEl, {
      ...renderEl.props,
      className: cn(classes, renderEl.props.className),
      children,
    } as React.AnchorHTMLAttributes<HTMLAnchorElement>)
  }

  // href가 있으면 <a> 태그로
  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

export { Button, buttonVariants }
