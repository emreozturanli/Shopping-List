import { useEffect } from "react"


export const Alert = ({alertText,hideAlert}) => {

    useEffect(()=>{
        setTimeout(()=>{
            hideAlert()
        },2000)
    })

  return (
    <p className="alert">{alertText}</p>
  )
}
