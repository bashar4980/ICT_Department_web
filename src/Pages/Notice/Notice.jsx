// import Notice from "../../Components/HomeComponent/Notice"

import NoticeCard from "./NoticeCard"

const NoticeContainer = () => {
  return (
    <div className="container mx-auto  max-w-[1080px]">
      <h2 className="text-center text-2xl font-bold">All Notice:</h2>
         <NoticeCard></NoticeCard>
         <NoticeCard></NoticeCard>
         <NoticeCard></NoticeCard>
         <NoticeCard></NoticeCard>
         <NoticeCard></NoticeCard>
         <NoticeCard></NoticeCard>
    </div>
  )
}

export default NoticeContainer