import React from 'react'

const Footer = () => {
    const footerItems = ['News','World','Games','References',"Web","eCommerce","Business","Entertainment","media",'Brochure','Nonprofit','Education','Projects','Information','Peronal','Wiki','Forum']
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='space-y-2 mt-2'>
                            {footerItems.slice(0,4).map((item) => (
                                <li key={item} className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                        <ul className='space-y-2 mt-2'>
                            {footerItems.slice(4,8).map((item) => (
                                <li key={item} className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='space-y-2 mt-2'>
                            {footerItems.slice(8,12).map((item) => (
                                <li key={item} className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='space-y-2 mt-2'>
                            {footerItems.slice(12,16).map((item) => (
                                <li key={item} className='text-gray-500 transition-colors duration-300 hover:text-orange-500'>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe for Updates</p>
                        <form className='my-4 flex flex-col md:flex-row'>
                            <input type='email' name='email' id='email' className='flex-groww-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none focus: outline-none'/>
                            <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none border'>Subscribe</button>
                        </form>

                    </div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Footer
