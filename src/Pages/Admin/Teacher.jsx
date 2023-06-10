const Teachers = () => {
  return (
    <div className="addnotice_container mt-20">
      <div className="all_teachers">
        <div className="addNotice flex justify-center mb-5">
          {/* Add teachers form  */}

          {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">Add Teachers</h1>
            </div>

            <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
              <div>
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                />
              </div>

              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>
            </form>
          </div>

          {/* Add teachers form  */}
        </div>
        <h1 className="text-xl font-semibold">All Teachers</h1>

        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Customize</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cy Ganderton</td>
                  <td>Assistance</td>
                  <button className="btn btn-warning btn-sm mr-5 mt-2 ">
                    Edit
                  </button>
                  <button className="btn btn-warning btn-sm ">Delete</button>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
