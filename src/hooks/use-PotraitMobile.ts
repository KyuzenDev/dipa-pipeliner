import * as React from "react"

const POTRAIT_MOBILE_BREAKPOINT = 414

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${POTRAIT_MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsTablet(window.innerWidth < POTRAIT_MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsTablet(window.innerWidth < POTRAIT_MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isTablet
}
