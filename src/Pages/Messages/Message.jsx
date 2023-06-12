const Message = () => {
  return (
    <div className=" container  mx-auto pt-32 " >
      
     <div className="grid  grid-cols-1 lg:grid-cols-2 gap-">
       
      <div className="mx-auto mb-10">
      <img className="w-[350px] rounded-sm shadow-lg  " src="https://www.iu.ac.bd/public/images/teacher/8720fbd3805c7a4541b20eef174b4666.jpg" alt="" />
      </div>
      <div className="mx-[5%]">
       <h1 className="text-3xl font-semibold ">Welcome to ICT Department</h1>
       <p className="text-justify my-10  text-[16px]">The Department of Information and Communication Technology aims to prepare students  to become engineers and equip them with the knowledge of the Fourth Industrial Revolution (4IR) in order to serve society, the country and more.<br></br> 
       <br></br>
       To achieve this, the department offers students engineering courses that can be ideally applied to the rapidly changing sectors such as Big Data, Machine Learning, Artificial Intelligence, Blockchain, Cloud Computing, Cyber-security and so on.This department not only establishes an educational system to develop specialist engineers, but also strives to develop professional engineers in the workplace in cooperation with other institutions/industries who can lead the future information society and respond to a smart society.</p>
     <h3 className="text-xl font-bold">Md. Alamgir Hossain, Ph.D.</h3>
     <h3 className="text-xl font-bold">Chairman</h3>
       </div>


     </div>

    </div>
  );
};

export default Message;
