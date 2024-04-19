import React from 'react'

function Rented_prop() {

    const rental_details =[
        {
            address:'33',
            image:'https://imagecdn.99acres.com/media1/24216/18/484338264M-1712299277511.jpg',
            heading:'4 Bedroom House for rent in Sector 33 Chandigarh',
            price:'1.75 Lac',
            area:'9,000',
            bhk:'4',
            description:'A lovely 4 bhk house for rent in sector 33 chandigarh is now available. This is one of the most preferred areas to rent a home in chandigarh.',
            contact:'+91-1234567890',
            owner_name:'Nalin'
        },
        {
            address:'21',
            image:'https://imagecdn.99acres.com/media1/24276/8/485528392M-1712809381094.jpg',
            heading:'5 Bedroom House for rent in Sector 21 Chandigarh',
            price:'1.25 Lac',
            area:'4500',
            bhk:'5',
            description:'Rent this 5 bhk house in chandigarh most sought after destination, sector 21 chandigarh. This 5 bhk house comes with 2 bathrooms ',
            contact:'+91-1234567890',
            owner_name:'Ethan'
        },
        {
            address:'22',
            image:'https://imagecdn.99acres.com/media1/23024/4/460484820M-1712411339361.jpg',
            heading:'3 BHK Independent Builder Floor for rent in Sector 16 Chandigarh',
            price:'45,000',
            area:'5000',
            bhk:'3',
            description:'Welcome to your new home in sector 16 d, chandigarh! Recently renovated and ready for immediate move-In! ',
            contact:'+91-1234567890',
            owner_name:'Noah'
        },
        {
            address:'6',
            image:'https://imagecdn.99acres.com/media1/23024/4/460484814M-1712411337310.jpg',
            heading:'3 BHK Independent Builder Floor for rent in Sector 6 Chandigarh',
            price:'17,000',
            area:'1,770',
            bhk:'3',
            description:'Find this 3 bhk apartment for rent in dera bassi, chandigarh. This 3 bhk apartment in ubber palm heights is situated in chandigarh.',
            contact:'+91-1234567890',
            owner_name:'William'
        },
        {
            address:'22 B',
            image:'https://imagecdn.99acres.com/media1/23024/4/460484816M-1712411339129.jpg',
            heading:'2 BHK Independent Builder Floor for rent in Sector 22 B Chandigarh',
            price:'23,000',
            area:'1,000',
            bhk:'2',
            description:'Chandigarh s most popular society ambika florence park in mullanpur offers 2 bhk apartment. This flat consists of 2 bathrooms & 2 balconies.',
            contact:'+91-1234567890',
            owner_name:'James'
        },
        {
            address:'8',
            image:'https://imagecdn.99acres.com/media1/24208/11/484171190M-1712224965174.jpg',
            heading:'3 BHK Independent Builder Floor for rent in Sector 8 Chandigarh',
            price:'1.75 Lac',
            area:'3,000',
            bhk:'3',
            description:'A 3 bhk flat for rent in Chands close to all basic civic amenities is available for just 18,000 in sushma chandigarh grande, chandigarh.',
            contact:'+91-1234567890',
            owner_name:'Lucas'
        },
        {
            address:'32',
            image:'https://imagecdn.99acres.com/media1/24208/11/484171836M-1712225053990.jpg',
            heading:'2 Bedroom House for rent in Sector 32 Chandigarh',
            price:'30,000',
            area:'1,125',
            bhk:'2',
            description:'Property in posh area of chandigarh sector 32a Near hanuman mandir Its too good for family',
            contact:'+91-1234567890',
            owner_name:'Benjamin'
        },
        {
            address:'38',
            image:'https://imagecdn.99acres.com/media1/24208/11/484171692M-1712225028179.jpg',
            heading:'4 Bedroom House for rent in Sector 38 West, Chandigarh',
            price:'65,000',
            area:'2,250',
            bhk:'4',
            description:'Independent duplex house with 4 bedrooms attached washrooms, drawing, dining, modular kitchen, huge crockery cabinet and bar, park facing',
            contact:'+91-1234567890',
            owner_name:'Alexander'
        },
    ]
  return (
<>
<br /><br /><br /><br /><br /><br />
<div className="bg-white rounded-lg p-4 my-8 mx-auto w-full md:max-w-2xl custom-shadow">
      <div className="mb-4 flex justify-around">
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          Buy
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          Rent
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          New Launch
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          PG/Co-living
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          Commercial
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900 mx-2">
          Projects
        </a>
      </div>
      <hr className="my-4" />
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-l-lg px-4 py-2 w-full sm:max-w-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg ml-2">
          Search
        </button>
      </div>
    </div>
    <br />
    <div className='justify-center flex flex-col items-center w-full bg-white-200'>
        {rental_details.map((details, i) => (
            <div key={i} className='flex flex-col md:flex-row gap-4 bg-white rounded-lg w-full md:w-2/3 lg:w-3/4 mb-8'>
                <div className='md:w-[150px] h-64 md:h-auto'>
                    <img src={details.image} alt="" className='object-cover w-[150px] h-full rounded-t-lg md:rounded-l-lg md:rounded-t-none' />
                </div>
                <div className='flex flex-col justify-between p-4 flex-grow'>
                    <div className='mb-2'>
                        <span className='font-semibold'>Sector:</span> {details.address} Chandigarh
                    </div>
                    <div className='mb-2'>
                        <span className='font-semibold'>{details.heading}:</span> in Sector {details.address} Chandigarh
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <span className='font-semibold'>₹{details.price}</span>/month
                        </div>
                        <div>
                            <span className='font-semibold'>{details.area} sqft</span>
                        </div>
                        <div>
                            <span className='font-semibold'>{details.bhk} BHK</span>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <span>{details.description}</span>
                    </div>
                    <div className='flex justify-between'>
                        <div>{details.owner_name}</div>
                        <div>{details.contact}</div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</>





  )
}

export default Rented_prop