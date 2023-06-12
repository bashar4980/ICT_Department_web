import { saveAs } from 'file-saver';

const NoticeCard = (notice) => {
  const { Name, Image, Date } = notice.notice;

  const downloadImage = ()=>{
    saveAs(Image , Date)
  }
  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>{Date}</th>
              <td className="text-justify">{Name} ...................</td>
              <th>
                <a onClick={downloadImage} className="btn btn-sm btn-primary">Details</a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NoticeCard;
