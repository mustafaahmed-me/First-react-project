import Section5img1 from './assets/Section5/img-1.png'
import Section5img2 from './assets/Section5/img-2.png'
import Section5img3 from './assets/Section5/img-3.png'
import Section5img4 from './assets/Section5/img-4.png'
import Section5img5 from './assets/Section5/img-5.png'
import Section5img6 from './assets/Section5/img-6.png'
import Section5img7 from './assets/Section5/img-7.png'



const Section5 = () => {
    return (
             <div className="w-[100%]">
            <section id="maindiv-sec5" className="pt-40 pb-20">
            <h1>Example</h1>
            <div id="bg-div"></div>
            <h3 className='text-center mb-5 pt-15'>1 Greenhouse = <span>100 NFT = 100 USD</span> Price</h3>

        <div>
            <div className='flex justify-center items-center  gap-x-1 gap-y-30'>
                <img src={Section5img1} alt="" className='h-45'/>
                <img src={Section5img2} alt="" className='h-9'/>
                <img src={Section5img3} alt="" className='h-45'/>
                <img src={Section5img2} alt="" className='h-9'/>
                <img src={Section5img4} alt="" className='h-45'/>
            </div>
            <div className='flex justify-center items-center'>
                <img src={Section5img5} alt="" className='h-50'/>
                <img src={Section5img6} alt=""  className='h-50'/>
                <img src={Section5img7} alt=""  className='h-50'/>
            </div>
        </div>
            </section>
        </div>
    )
}

export default Section5