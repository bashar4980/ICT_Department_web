import { useState } from "react"

const usePost = (URL , Document) => {
  const [postData , setPostData] = useState({})
  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Document),
  })
  .then(res =>res.json())
  .then(data =>{
    setPostData(data)
  })
  return  {postData}
}

export default usePost