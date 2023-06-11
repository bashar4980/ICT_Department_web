// import { useQuery } from "@tanstack/react-query";
import { MemberCard } from "./MemberCard";
import useFetch from "../../Hook/useFetch";
// import { useState } from "react";

const FaculityMember = () => {

  const {data , isLoading , error} = useFetch(
    "http://localhost:3000/teachers", "teachers"

  )

  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  



  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-lg text-center">Our Faculty Members</h1>
      <div className="grid  grid-cols-2   md:grid-cols-3 lg:grid-cols-4">
       {
        data && (
          <>
          {
            data.map((member)=>{
              return(
                   <MemberCard key={member._id} member={member}></MemberCard>
              );
            })
          }
          
          </>
        )
       }
       
      </div>
    </div>
  );
};

export default FaculityMember;
