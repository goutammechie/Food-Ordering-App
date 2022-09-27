import aboutImage from "../assets/images/about-image.png"

export const About =() =>{
    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium "> About us</h2>
                    <p className="text-lg">
                        Food delivery apps are the new favorite of the people and that is the final verdict. 
                        The ease food delivery apps offer to the people who don’t want to cook at the end of the 
                        day is what makes it more loved than any other apps out there
                    </p>

                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt=""  className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>

        </div>
    )
}