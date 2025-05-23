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
            <img src={Section1img4} alt="Sec-img" className='h-2 line'/>
            <img src={Section1img2} alt="Sec-img" className='h-40'/>
            <img src={Section1img4} alt="Sec-img" className='h-2 line'/>
            <img src={Section1img1} alt="Sec-img" className='h-40'/>
        </div>
         </div>
         </section> 
       </div>
 
    )
}
export default Section1