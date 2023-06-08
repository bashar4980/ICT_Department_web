import Notice from "./Notice";

const Message = () => {
  return (
    <div className="container mx-auto my-20 ">
      <h1 className="text-center text-2xl">
        Welcome to the Dept. of Information & Communication Technology (ICT)
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-20">
        <div className="chairmain_content  ">
          <article className="flex flex-col lg:flex-row rounded-lg border lg:h-80 border-gray-100 bg-white shadow-sm ">
            <img
              alt="Office"
              src="https://www.iu.ac.bd/public/images/teacher/8720fbd3805c7a4541b20eef174b4666.jpg"
              className=" w-[50%]  object-cover "
            />
           

            <div className="p-4 sm:p-6">
                
                
                <h3 className="text-2xl font-medium text-gray-900">
                Message From Chairman
                </h3>
             

              <p className="mt-2 line-clamp-3 text-justify text-sm/relaxed text-gray-500">
              The Department of Information and Communication Technology aims to prepare students  to become engineers and equip them with the knowledge of the Fourth Industrial Revolution (4IR) in order to serve society, the country and more.
              </p>
                
              <h3 className="text-[16px] mt-5 font-medium text-gray-900">
              Md. Alamgir Hossain, Ph.D.
                </h3>
             


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
        <div className="notice_content">

        <Notice></Notice>
        </div>
      </div>
    </div>
  );
};

export default Message;
