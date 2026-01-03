import { BadgeWithDot } from "@/components/base/badges/badges";
import { Avatar } from "@/components/base/avatar/avatar";
import { ProgressBarCircle } from "@/components/base/progress-indicators/progress-circles";
import CustomizedTimeline from "@/components/self/CustomizedTimeline";
import Marquee from "@/components/self/Marquee";

export default function Dashboard() {
    return(
        <div>
                <h1 className="text-2xl font-bold">Introduce Page <a href="/AboutMe" className="text-xl ms-2 text-purple-700 underline">Detail here</a></h1>
                <div className="flex flex-col xl:flex-row gap-2 mt-4">
                    <div className="flex flex-col col-5 p-2 border border-gray-200 rounded-xl justify-center items-center flex mt-4 ">
                        <Avatar size="xl" initials="MF" />
                        <a className="font-bold mt-2 text-center">Muhammad Fajri Afriyansyah</a>
                        <p className="text-center text-gray-500">
                            FullStack Developer |ASP.NET.CORE | ReactJS | TypeScript | .NET Developer
                        </p>
                        <BadgeWithDot className="mt-2" type="pill-color" color="success">
                            Open To Work
                        </BadgeWithDot>
                        <div>
                            <a  href="https://www.linkedin.com/in/muhammad-fajri-afriyansyah/" className="text-blue-500 font-semibold mt-2">Visit My Linkedin</a>
                        </div>
                        <a href="https://proyek1.appfajriproject.my.id/file/download/16" className="p-2 bg-blue-500 text-white border border-blue-200 rounded-xl mt-2 hover:bg-blue-200">Download My CV</a>
                    </div>
                    <div className=" p-2 border border-gray-200 rounded-xl col-5 w-full mt-4">
                        <div className="">
                            <h2 className="font-bold text-lg mb-2">About Me</h2>
                            <p className="text-gray-500 text-left mt-1 ">
                                A graduate of Politeknik Caltex Riau with a high level of enthusiasm and motivation to pursue a career in
                                information technology. Procient in fundamental concepts of software development, computer networks,
                                and information systems. Skilled in developing applications using various programming languages such as
                                Java, PHP, VB.NET, and C#, as well as web technologies (HTML, CSS) and popular frameworks. Experienced
                                in PHP frameworks like CodeIgniter and Laravel for backend development. Procient in frontend
                                technologies, including React JS for web applications and React Native for mobile development. Well-versed
                                in REST API concepts and their practical implementation. Experienced in academic projects that hone
                                technical skills and problem-solving abilities. Highly initiative, responsible, and always eager to learn new
                                technologies. Detail-oriented, hardworking, and adaptable to change. Passionate about continuous self-
                                development and contributing positively to the IT industry.
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-2">Education & Skill<a className="text-xl ms-2 text-purple-700 underline">Detail here</a></h1>
                <div className="flex flex-col xl:flex-row p-2 border border-gray-200 rounded-xl w-full mt-4 gap-2">
                    <div className="col-5 w-full">
                        <div className=" h-full flex flex-wrap place-content-center justify-center gap-10 ">
                            <ProgressBarCircle size="xs" label="Web developer" min={0} max={100} value={90} />
                            <ProgressBarCircle size="xs" label="Backend Developer" min={0} max={100} value={89} />
                            <ProgressBarCircle size="xs" label="Mobile Developer" min={0} max={100} value={70} />
                            
                        </div>
                    </div>
                    <div className="col-5">
                        <img width={400}  src="https://upload.wikimedia.org/wikipedia/commons/7/70/Politeknik_Caltex_Riau.png" alt="Politeknik Caltex Riau" className="bg-auto  mb-2"/>
                        <h2 className="font-bold text-lg mb-2">Bachelor's Degree in Information Systems</h2>
                        <p className="text-gray-500 text-left mt-1 ">
                            Politeknik Caltex Riau (PCR) <br/>
                            2020 - 2024 <br/>
                            GPA: 3.70/4.00 <br/>
                            Relevant Coursework: Web Development, Software Engineering,.NET Developer, Network Security.
                        </p>
                    </div>
                </div>
                <Marquee />
                <h1 className="text-2xl font-bold mt-2">Carrer Path <a className="text-xl ms-2 text-purple-700 underline">Detail here</a></h1>
                <div className="relative p-2 border border-gray-200 rounded-xl w-full mt-4">
                    <CustomizedTimeline />
                </div>
            </div>

    );
}