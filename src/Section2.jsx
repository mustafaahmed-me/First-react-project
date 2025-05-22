import Section2img1 from "./assets/Section2/img-1.png"


const Section2 = () => {
    return (
        // <div className="w-[100%]">
        //     <section id="maindiv-sec2">
        //     <h1 id="problem">Problem</h1>
        //     <div id="bg-div"></div>
        //     <div id="sec2-div">
        //         <p>Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.</p>
        //         <img src={Section2img1} alt="Sec2-img" />
        //     </div>
        // </section>
        // </div><div>
        // </div>
      <section className="my-[60px] lg:my-[150px] w-[90%] m-auto md:w-[80%]" id="problem">
        <h2 className="text-3xl font-bold text-green-600 md:text-4xl lg:text-5xl">Problem</h2>
        <p className="border-2 rounded-full border-[#84d1a6] mb-6 mt-2 lg:mb-12 lg:mt-4"></p>
        <div className="w-fit sm:flex sm:items-center sm:gap-5 md:justify-between sm:m-auto lg:w-[95%]">
            <div className="sm:w-[70%] lg:w-[60%]">
                <p className="sm:text-[20px] lg:text-[25px]">Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.</p>
            </div>
            <div className="w-fit m-auto my-7 sm:w-[30%] sm:my-0 md:w-fit">
                <img className="h-[223px] lg:h-[330px]" src={Section2img1} alt="bookImage" />
            </div>
        </div>
      </section>
    )
}

export default Section2