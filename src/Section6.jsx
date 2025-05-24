import Section6img1 from './assets/Section6/img-1.png'
import Section6img2 from './assets/Section6/img-2.png'
import Section6img3 from './assets/Section6/img-3.png'




const Section6 = () => {
    return (
        <div  id="profitDistribution" className="w-[100%]">
            <section id="maindiv-sec6" className="py-30">
            <h1>Profit Distribution</h1>
            <div id="bg-div"></div>
            <div className=' grid grid-cols-3 mt-10'>
                <div className='flex flex-col justify-center items-center drkg-div py-20'>
                    <img src={Section6img1} alt="" className='h-50'/>
                    <h3 className='h3-0'>Owner</h3>
                    <h3 className='h3-1'>75%</h3>
                </div>
                <div className='flex flex-col justify-center items-center lgtg-div  py-20'>
                    <img src={Section6img2} alt="" className='h-50'/>
                    <h3 className='h3-0'>Company</h3>
                    <h3 className='h3-1'>25%</h3>
                </div>
                <div className='flex flex-col justify-center items-center drkg-div  py-20'>
                    <img src={Section6img3} alt="" className='h-50'/>
                    <h3 className='h3-0'>Charity</h3>
                    <h3 className='h3-1'>5%</h3>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Section6