import { useQuery } from "@tanstack/react-query";
import { MemberCard } from "./MemberCard";
// import { useState } from "react";

const FaculityMember = () => {


  const {data:faculty , isLoading , error} = useQuery({
        queryKey:['teachers'],
        queryFn:async()=>{
            const res = await fetch('http://localhost:3000/teachers');
            const data = await res.json();
            return data;
            
        }
  })
  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  

  console.log("all teachers" , faculty)

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-lg text-center">Our Faculty Members</h1>
      <div className="grid  grid-cols-2   md:grid-cols-3 lg:grid-cols-4">
       {
        faculty && (
          <>
          {
            faculty.map((member)=>{
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
