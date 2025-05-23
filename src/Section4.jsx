import Section4img1 from './assets/Section4/img-1.png'
import Section4img2 from './assets/Section4/img-2.png'
import Section4img3 from './assets/Section4/img-3.png'
import Section4img4 from './assets/Section4/img-4.png'
import Section4img5 from './assets/Section4/img-5.png'





const Section4 = () => {
    return (
         <div id='bussiness model'>
            <section id="maindiv-sec4" className="pt-35">
            <h1>Bussiness Model</h1>
            <div id="bg-div"></div>
            <div>
                <h3 className='text-center pt-15 pb-5'>Crowd-funding ownership of</h3>
                <div className='flex w-[80%] flex-wrap justify-center items-center gap-20 mx-auto'>
                    <div className='grid justify-center items-center text-center'>
                        <img src={Section4img1} alt="" className='h-55'/>
                        <h3>Fruits and Vegetable Sale Out</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                    <img src={Section4img2} alt="" className='h-55'/>
                        <h3>Electrical Distribution Profit</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                         <img src={Section4img3} alt="" className='h-55'/>
                        <h3>Plastic Recycling</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                         <img src={Section4img4} alt="" className='h-55'/>
                        <h3>Electrical Mobility </h3>
                    </div>
                   <div className='grid justify-center items-center text-center'>
                    <img src={Section4img5} alt="" className='h-55'/>
                        <h3>Mosquito System</h3>
                   </div>
                </div>
                    <div>
                    </div>
            </div>
            </section>
         </div>
    )
}
export default Section4