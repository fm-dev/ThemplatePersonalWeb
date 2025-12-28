import Marquee from "@/components/self/Marquee";

export default function Education(){
    return(
        <div>
            <h1 className="text-2xl font-bold">Education & Skill</h1>
            <Marquee />
            <div className="mt-2 p-2 border border-gray-200 rounded-xl">
                <img width={400}  src="https://upload.wikimedia.org/wikipedia/commons/7/70/Politeknik_Caltex_Riau.png" alt="Politeknik Caltex Riau" className="bg-auto  mb-2"/>
                <h2 className="font-bold text-lg mb-2">Bachelor's Degree in Information Systems</h2>
                <p className="text-gray-500 text-left mt-1 ">
                    Politeknik Caltex Riau (PCR) <br/>
                    2020 - 2024 <br/>
                    GPA: 3.70/4.00 <br/>
                    Relevant Coursework: Web Development, Software Engineering,.NET Developer, Network Security.
                </p>
            </div>
            <h1 className="text-2xl font-bold mt-2">Organization</h1>
            <div className="mt-2 p-2 border border-gray-200 rounded-xl">
                <h2 className="font-bold text-lg mb-2">Himpunan Mahasiswa Sistem Informasi (HIMASI PCR)</h2>
                <p className="text-gray-500 text-left mt-1 ">
                    Role: Staff of Research and Development Division <br/>
                    Duration: 2021 - 2022 <br/>
                    Description: Actively contributed to the development and implementation of various research projects within the organization. Collaborated with team members to enhance organizational processes and promote innovation among members.
                </p>
                <h2 className="font-bold text-lg mb-2">Himpunan Mahasiswa Sistem Informasi (HIMASI PCR)</h2>
                <p className="text-gray-500 text-left mt-1 ">
                    Role: Staff of Research and Development Division <br/>
                    Duration: 2021 - 2022 <br/>
                    Description: Actively contributed to the development and implementation of various research projects within the organization. Collaborated with team members to enhance organizational processes and promote innovation among members.
                </p>
            </div>
            <h1 className="text-2xl font-bold mt-2">Community Service</h1>
            <div className="mt-2 p-2 border border-gray-200 rounded-xl">
                <h2 className="font-bold text-lg mb-2">Community Service at Desa Sekijang</h2>
                <p className="text-gray-500 text-left mt-1 ">
                    Role: Volunteer <br/>
                    Duration: July 2023 - August 2023 <br/>
                    Description: Participated in community service activities aimed at improving local infrastructure and providing educational support to underprivileged children. Worked closely with community members to identify needs and implement effective solutions.
                </p>
            </div>
        </div>
    );
}