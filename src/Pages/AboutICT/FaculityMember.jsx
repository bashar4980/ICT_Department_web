import { MemberCard } from "./MemberCard";


const FaculityMember = () => {
    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-lg text-center">Our Faculty Members</h1>
             <div className="grid  grid-cols-2   md:grid-cols-3 lg:grid-cols-4">
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>
                <MemberCard></MemberCard>

             </div>
        </div>
    );
};

export default FaculityMember;