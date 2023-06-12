const Department = () => {
  return (
    <div className="container mx-auto py-10">
      <img
        className="mx-auto mb-10 max-w-[1020px]"
        src="https://i.ibb.co/7b0KhBD/IMG-1192.jpg"
        alt="department"
      />

      <section className="max-w-[780px] mx-auto text-justify">
        <h3 className="text-2xl font-bold mb-10">About ICT</h3>
        <p className="text-justify">
          The Department of Information and Communication Technology was
          established in harmony with the progress of current information
          technology under the Faculty of Applied Science and Technology in
          1998. The Department is so underlying and contemporary because of the
          adaptation and uses of Information and Communication Technology is
          increasingly being linked to the national economic development and
          subsequent human development for the countries of the world. The
          Department first introduced in the Islamic University, Kushtia-7003,
          among all the universities in Bangladesh has already reached 20 years.
          With the help of modern and advanced software, hardware, electronic,
          communication laboratories and multimedia library, this department is
          being run in accordance with the various technical changes in
          technology as well as educational curriculum per year. In the era of
          globalization, the first and foremost purpose of this department is to
          create the appropriate information expert and technologist for the
          advancement of our country. The students who were graduated from the
          department are working in different positions with good reputation in
          home and aboard.
        </p>
      </section>
      <section className="max-w-[780px] mx-auto text-justify">
        <h3 className="text-2xl font-bold my-10">About ICT</h3>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>SL Student Info</th>
                <th>Number of Student</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover">
                <th>1</th>
                <td>Current Students </td>
                <td>255</td>
              </tr>
              <tr className="hover">
                <th>2</th>
                <td>Current MPhil Students</td>
                <td>03</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>3</th>
                <td>Current PhD Students </td>

                <td>09</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>4</th>
                <td>Awarded M.Sc. Degree </td>
                <td>420</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="max-w-[780px] mx-auto text-justify">
        <h3 className="text-2xl font-bold my-10">Course Overview:</h3>
        <p className="text-justify">
          The undergraduate program offers diverse courses in different fields
          namely: information processing, communication system, communication
          network and radio engineering. The information processing track offers
          such as Programming Language Concepts, Object Oriented Programming
          with C++, Database Management Systems, Programming in Java and System
          analysis and Software Engineering; the communication system track
          offers such courses as Communication Systems, Optical Communications,
          Mobile and Cellular Communications, Multimedia Communications; the
          communication network track offers such courses as Data Communication
          and Computer Networking; the radio engineering track offers such
          courses as Electromagnetic Theory and Antenna, Electronic
          Communication and Microwave Engineering. <br></br><br></br>The graduate program of
          Information and Communication Technology pursues research on advanced
          communication as well as signal processing with nationwide
          infrastructure of the mobile communication networks and radio
          engineering. In most cases, alumni of our department are working in
          many fields as researchers at major companies, public enterprises,
          research institutions and so on. Moreover, many students go on to
          graduate school on abroad for more in-depth and specialized study. We
          hope that all the talents will be equipped with a creative mind and
          personality and will become our new leaders for the future.
        </p>
      </section>
      <section className="max-w-[780px] mx-auto text-justify">
        <h3 className="text-2xl font-bold my-10">Number of Laboratories:   26</h3>
        <p className="text-justify">
        Electricity and Electronics, Digital Electronics, Structured Programming, Numerical Analysis, Digital Switching, Circuit Design and Simulation, OOP with Java, Data Structure with C++, Database Management System, Computer Graphics, Analog Communication, Communication Signal and Systems, Telecommunication, Computer Networking, Microprocessor, Data Communication, Simulation and Modeling, Digital Signal Processing, Multimedia & Web Technology, Artificial Intelligence, Information Processing, Field Work & Presentation, Advanced DSP, Advanced AI, Digital Image Processing, Communication Systems Simulation, Advanced Digital Communication laboratories.


        </p>
        <div className="overflow-x-auto">
  <table className="table mt-5 font-bold">
   
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>No. of OffICTrs: </td>
        <td>4</td>
        
      </tr>
      {/* row 2 */}
      <tr>
       
       <td>No. of offICT staff:    </td>
       <td>5</td>
       
     </tr>
      {/* row 3 */}
      <tr>
       
       <td>Number of teachers:   </td>
       <td>15</td>
       
     </tr>
    </tbody>
  </table>
</div>
      </section>
    </div>
  );
};

export default Department;
