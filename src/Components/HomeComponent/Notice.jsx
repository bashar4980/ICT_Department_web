const Notice = () => {
  return (
    <div>
      <article className="rounded-xl bg-gradient-to-r  from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm">
        <div className="rounded-[10px] bg-white p-4  lg:h-80">
            <h1 className="text-2xl font-bold mb-5">Recent Notice</h1>
          <div className="notice_content">
            <time className="block text-xs text-gray-500">10th Oct 2022</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>
          </div>
          <div className="notice_content my-5">
            <time className="block text-xs text-gray-500">10th Oct 2022</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>
          </div>
          <div className="notice_content">
            <time className="block text-xs text-gray-500">10th Oct 2022</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                How to center an element using JavaScript and jQuery
              </h3>
            </a>
          </div>
          
          <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                All Notices
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
  );
};

export default Notice;
