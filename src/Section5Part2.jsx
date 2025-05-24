import Section5part2img1 from './assets/Section5/img-8.png'
import Section5part2img2 from './assets/Section5/img-9.png'



const Section5Part2 = () => {
    return (
        <div>
            <section className='w-[75%] mx-auto flex pb-40 pt-20' id='maindiv-sec5-2'>
                <div className='flex flex-col justify-center items-center w-[50%] py-30 gap-y-5' id='grey-div'>
                    <img src={Section5part2img1} alt="" className='h-35'/>
                    <h3 className='w-[45%] text-center'>Buy NFT to helpthe environment and get passive income</h3>
                </div>
                <div className='flex flex-col justify-center items-center w-[50%] py-30 gap-y-5'  id='green-div'>
                    <img src={Section5part2img2} alt="" className='h-35'/>
                    <h3 className='w-[45%] text-center' id='h3-2'>Advantage: Resale the ownership Borrow Generate profit</h3>
                </div>
            </section>
        </div>
    )
}

export  default Section5Part2