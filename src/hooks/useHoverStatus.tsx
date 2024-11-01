import { useState } from "react"
import { useScreenWidth } from "./useScreenWidth"


export const useHoverStatus = () => {

    const screenWidth = useScreenWidth()

    const [isActive, setIsActive] = useState(false)

    const mouseEnter = () => {
        if(screenWidth > 1240){
            return setIsActive(true)
        }
    }

    const mouseLeave = () => setIsActive(false)

    return {isActive, mouseEnter, mouseLeave}
}