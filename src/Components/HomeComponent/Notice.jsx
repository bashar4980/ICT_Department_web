import useFetch from "../../Hook/useFetch";
import { Link } from "react-router-dom";

const Notice = () => {

  const {data , isLoading , error} = useFetch(
    "http://localhost:3000/notices", "notices"

  )

  
  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message
  return (
    <div>
      <article className="rounded-xl  p-0.5 shadow-xl transition hover:shadow-sm">
        <div className="rounded-[10px] bg-white p-4  lg:h-80">
          <h1 className="text-2xl font-bold mb-5">Recent Notice</h1>
          <div className="notice_content">
            <time className="block text-xs text-gray-500">10th Oct 2022</time>

           
            {
              data && data.map(notice =>{
                return(
                  <>
                  <a href="#" key={notice._id}>
              <h3 className="mt-0.5 font-medium text-gray-900">
                {notice.Name}
              </h3>
            </a></>
                )
              })
            }
          </div>
         

          <Link
            to="/notice"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            All Notices
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
          
        </div>
      </article>
    </div>
  );
};

export default Notice;
