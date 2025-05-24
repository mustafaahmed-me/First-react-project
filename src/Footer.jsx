import Footer1img1 from './assets/Section1/img-1.png'
import Footer1img2 from './assets/Section1/img-2.png'
import Footer1img3 from './assets/Section1/img-3.png'
import Footer1img4 from './assets/Section1/img-4.png'
const Footer = () => {
    return (
       <div id='main-divsec1'>
        <section id='sec1'>
         <div id='sec1'>
         <div>
            <img src={Footer1img3} alt="Sec-img" className='h-40'/>
            <img src={Footer1img4} alt="Sec-img" className='h-2 line'/>
            <img src={Footer1img2} alt="Sec-img" className='h-40'/>
            <img src={Footer1img4} alt="Sec-img" className='h-2 line'/>
            <img src={Footer1img1} alt="Sec-img" className='h-40'/>
        </div>
            <h1>Thank You</h1> 
         </div>
         </section> 
       </div>
 
    )
}
export default Footer