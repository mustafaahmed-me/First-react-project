import Section1img1 from './assets/Section1/img-1.png'
import Section1img2 from './assets/Section1/img-2.png'
import Section1img3 from './assets/Section1/img-3.png'
import Section1img4 from './assets/Section1/img-4.png'
const Section1 = () => {
    return (
       <div id='main-divsec1'>
        <section id='sec1'>
         <div id='sec1'>
            <h1>Green Protocol</h1> 
         <div>
            <img src={Section1img3} alt="Sec-img" className='h-40'/>
            <img src={Section1img4} alt="Sec-img" className='h-2'/>
            <img src={Section1img2} alt="Sec-img" className='h-40'/>
            <img src={Section1img4} alt="Sec-img" className='h-2'/>
            <img src={Section1img1} alt="Sec-img" className='h-40'/>
        </div>
         </div>
         </section> 
       </div>
    //        <div className="bg-[#00ae47]">
    //     <section className="lg:h-[88vh] lg:gap-6 flex justify-center items-center hero-container">
    //         <div>
    //             <h2 className="text-center text-[50px] font-bold text-white mb-[70px] mt-[10px] hero-heading">Green Protocol</h2>
    //             <div className="flex items-center md:gap-3">
    //                 <img className="lg:h-[160px] border border-[#00ae47]" src={Section1img3} alt="Hero Image 1" id="hero-images"/>
    //                 <img className="w-20 dashes" src={Section1img4} alt="dashes" />
    //                 <img className="lg:h-[160px] border border-[#00ae47]" src={Section1img2} alt="Hero Image 2" id="hero-images"/>
    //                 <img className="w-20 dashes" src={Section1img4} alt="dashes" />
    //                 <img className="lg:h-[160px] border border-[#00ae47]" src={Section1img1} alt="Hero Image 3" id="hero-images"/>
    //             </div>
    //         </div>
    //     </section>
    // </div>
 
    )
}
export default Section1