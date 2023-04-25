import Router, { useRouter } from "next/router"

import { useEffect } from "react"

export default function Book(props) {
  console.log(props)



  const router = useRouter()
  const { bookDetails } = router.query

  
}