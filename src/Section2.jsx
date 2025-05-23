import Section2img1 from "./assets/Section2/img-1.png"


const Section2 = () => {
    return (
        <div  id="problem" className="w-[100%]">
            <section id="maindiv-sec2" className="pt-40">
            <h1    >Problem</h1>
            <div id="bg-div"></div>
            <div id="sec2-div">
                <p>Major current environmental issues may include climate change, pollution, environmental degradation, and resource depletion. The conservation movement lobbies for protection of endangered species and protection of any ecologically valuable natural areas, genetically modified foods and global warming.</p>
                <img src={Section2img1} alt="Sec2-img" />
            </div>
        </section>
        </div>

    )
}

export default Section2