// import Notice from "../../Components/HomeComponent/Notice"

import useFetch from "../../Hook/useFetch"
import NoticeCard from "./NoticeCard"

const NoticeContainer = () => {
  const {data , isLoading , error} = useFetch(
    "http://localhost:3000/notices", "notices"

  )

  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div className="container mx-auto  max-w-[1080px]">
      <h2 className="text-center text-2xl font-bold">All Notice:</h2>

         {
          data.map((notice)=> <NoticeCard key={notice._id} notice = {notice}></NoticeCard>)
         }
        
         
    </div>
  )
}

export default NoticeContainer