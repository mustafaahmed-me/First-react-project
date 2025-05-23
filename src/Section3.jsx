import Section3img1 from './assets/Section3/img-1.png'
import Section3img2 from './assets/Section3/img-2.png'
import Section3img3 from './assets/Section3/img-3.png'
import Section3img4 from './assets/Section3/img-4.png'
import Section3img5 from './assets/Section3/img-5.png'
import Section3img6 from './assets/Section3/img-6.png'
import Section3img7 from './assets/Section3/img-7.png'
import Section3img8 from './assets/Section3/img-8.png'

const Section3 = () => {
    return (
        <div  id="solution" className="w-[100%]">
            <section id="maindiv-sec3" className="pt-40">
            <h1>Solution</h1>
            <div id="bg-div"></div>
            <div id='main-8div' className=' grid grid-cols-4 p-10 items-center'>
                <div className='dg-div flex flex-col justify-center items-center p-20 h-90'> 
                    <img src={Section3img1} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Green Energy</h3>
                </div>
                <div className='lg-div flex flex-col justify-center items-center p-20 h-90 '>
                    <img src={Section3img2} alt="img-1" className='h-35' />
                    <h3 className='text-center'>Automated agriculture</h3>
                </div>
               <div className='dg-div flex flex-col justify-center items-center p-20 h-90'>
                    <img src={Section3img3} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Depuration rain water</h3>
                </div>
                <div className='lg-div flex flex-col justify-center items-center p-20 h-90'>
                    <img src={Section3img4} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Mosquito Prevention</h3>
                </div>
                 <div className='lg-div flex flex-col justify-center items-center p-20 h-90'> 
                    <img src={Section3img5} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Electrical mobility</h3>
                </div>
                <div className='dg-div flex flex-col justify-center items-center p-20 h-90'>
                    <img src={Section3img6} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Solar charging station</h3>
                </div>
              <div className='lg-div flex flex-col justify-center items-center p-20 h-90'>
                    <img src={Section3img7} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>Recycling Plastic</h3>
                </div>
                <div className='dg-div flex flex-col justify-center items-center p-20 h-90'>
                    <img src={Section3img8} alt="img-1" className='h-35'/>
                    <h3 className='text-center'>CleaningOcean</h3>
                </div>
            </div>

        </section>
        </div>

    )
}

export default Section3