import Section4Part2img1 from './assets/Section4/img-6.png'
import Section4Part2img2 from './assets/Section4/img-7.png'
import Section4Part2img3 from './assets/Section4/img-8.png'
import Section4Part2img4 from './assets/Section4/img-4.png'
import Section4Part2img5 from './assets/Section4/img-9.png'
import Section4Part2img6 from './assets/Section4/img-5.png'




const Section4Part2 = () => {
    return (
        <div>
            <section id='maindiv-sec4-2' className='pt-40'>
                <h3 className='text-center mb-5'>Buy (as <span>NFT</span>) and get the profit</h3>
                <div className='grid grid-cols-3 w-[60%] mx-auto justify-center items-center gap-y-10'>
                    <div className='grid justify-center items-center text-center'>
                        <h3><span>Trash</span></h3>
                        <img src={Section4Part2img1} alt="" className='h-55'/>
                        <h3 className='text-center'>when recycled</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                        <h3><span>GreenHouse</span></h3>
                        <img src={Section4Part2img2} alt="" className='h-55' />
                        <h3>Fruits, vegetable sale </h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                        <h3><span>Solar Station</span></h3>
                        <img src={Section4Part2img3} alt="" className='h-55' />
                        <h3>When used for charging</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                        <h3><span>TraElectrical Mobilitysh</span></h3>
                        <img src={Section4Part2img4} alt="" className='h-55' />
                        <h3>on the rental</h3>
                    </div>
                    <div className='grid justify-center items-center text-center'>
                        <h3><span>Green Energy</span></h3>
                        <img src={Section4Part2img5} alt="" className='h-55' />
                        <h3>energy sale</h3>
                    </div>
                    <div  className='grid justify-center items-center text-center'>
                        <h3><span>Mosquito System</span></h3>
                        <img src={Section4Part2img6} alt="" className='h-55' />
                        <h3>Refill products sale</h3>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Section4Part2