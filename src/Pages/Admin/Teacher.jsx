const Teachers = () => {
  return (
    <div className="addnotice_container mt-20">
      <div className="all_teachers">
        <div className="addNotice flex justify-center mb-5">
          <button
            className="btn "
            onClick={() => window.my_modal_1.showModal()}
          >
            Add Teacher
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
             
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
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