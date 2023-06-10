

export const MemberCard =(member) => {
  const {Name , title , Image } = member.member
  return (
    <div>
        <div className="rounded-lg shadow-sm m-5 shadow-indigo-100">
  <img
    alt="Home"
    src={Image}
    className=" h-56 w-full rounded-md "
  />

  <div className="mt-2 ml-2">
    
      <div>
        <h2 className="text-lg font-semibold">{Name}</h2>
      </div>

      <div>
       <p>{title}</p>
      </div>
  

    <div className="mt-6 flex items-center gap-8 text-xs">
     
    </div>
  </div>
</div>
    </div>
  )
}
