

const NoticeCard = () => {
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
        <th>1</th>
        <td className="text-justify">অত্র বিভাগের ২০২১-২০২২ শিক্ষাবর্ষের বিএসসি (ইঞ্জিনিয়ারিং) প্রথম সেমিস্টার পরীক্ষা -২০২২ এর ছাত্র-ছাত্রীদের জানানো যাচ্ছে যে, তাদের পরীক্ষার ফরম বিভাগীয় অফিস থেকে সংগ্রহ পূর্বক ১৫.06.2023 এর মধ্যে সমস্ত কার্যক্রম সম্পন্ন করে নিম্নস্বাক্ষরকারী অফিসে জমা দেওয়ার জন্য বলা হলো।</td>
        
        <th>
            <button className='btn btn-sm btn-primary'>Details</button>
        </th>
      </tr>
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default NoticeCard