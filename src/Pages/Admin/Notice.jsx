
const Notice = () => {
  return (
    <div className="addnotice_container mt-20">
         <div className="all_notice">
          
          <div className="addNotice flex justify-center mb-5">
          <button className="btn ">Add Notice</button>
          </div>
          <h1 className="text-xl font-semibold">All Notice</h1>

<div className="overflow-x-auto">
<div className="overflow-x-auto">
  <table className="table">
  
    <thead>
      <tr>
        
        <th>Title</th>
        
        <th>Customize</th>
      </tr>
    </thead>
    <tbody>
  
      <tr>
       
        <td>Cy Ganderton</td>
         <button className="btn btn-warning btn-sm mr-5 mt-2 ">Edit</button>
         <button className="btn btn-warning btn-sm ">Delete</button>
      </tr>
    
    
    </tbody>
  </table>
</div>
</div>
         </div>
    </div>
  )
}

export default Notice