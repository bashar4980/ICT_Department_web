
const Event = () => {
    return (
      <>

<div className="event_container container mx-auto ">
      <h1 className="text-2xl font-bold mb-5">Latest Events</h1>
          <article className="flex flex-col lg:flex-row rounded-lg border lg:h-80 border-gray-100 bg-white shadow-sm ">
       
         <div className="block overflow-hidden group lg:w-1/2  w-full">
         <img
              alt="Office"
              src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/335045677_539124191420738_1042549399981532264_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=340051&_nc_ohc=re72Y09hOoQAX9NFwep&_nc_ht=scontent.fdac137-1.fna&oh=00_AfDw8VVsBqwNt_cMA3G1oMUCngQllkFRIg7PhMez1SljBQ&oe=647CCD82"
              className="w-full object-cover transition duration-1000 group-hover:scale-125 cursor-pointer"
            />
         </div>
           
  

            <div className="p-4 sm:p-6 lg:w-1/2 w-full">
                
                
                <h3 className="text-2xl font-medium text-gray-900">
                Webinar On Technological Competence for Career Opportunities
                </h3>
             

              <p className="mt-2 line-clamp-3 text-justify text-sm/relaxed text-gray-500">
              During the webinar, Prof. Dr. Khondoker will provide insights into the latest technological trends and their impact on the job market. He will also discuss the importance of acquiring technical competence for career growth and advancement. This will be an open Q&A session for the students.
              </p>
                


              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                Read more
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        </div>
      
      </>
    );
};

export default Event;