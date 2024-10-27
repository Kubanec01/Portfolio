import { useState } from "react"


export const useHoverStatus = () => {
    const [isActive, setIsActive] = useState(false)

    const mouseEnter = () => setIsActive(true)

    const mouseLeave = () => setIsActive(false)

    return {isActive, mouseEnter, mouseLeave}
}