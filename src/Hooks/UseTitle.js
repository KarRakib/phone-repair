import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `${title} - Phone Repair`
    },[title])
} 
export default useTitle