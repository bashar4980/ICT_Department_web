
const Event = () => {
    return (
      <>

<div className="event_container container mx-auto ">
      <h1 className="text-2xl font-bold mb-5">Latest Events</h1>
          <article className="flex flex-col lg:flex-row rounded-lg border lg:h-80 border-gray-100 bg-white shadow-sm ">
       
         <div className="block overflow-hidden group lg:w-1/2  w-full">
         <img
              alt="Office"
              src="https://i.ibb.co/vzYhrFW/event01.jpg"
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