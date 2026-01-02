import { dataCarres } from "./type";

const getdataCarrers = () : dataCarres[] => {
    var result :dataCarres[] = [
        {
            time : "Feb 2025 - Des 2025",
            role:".NET Developer",
            companyName : "Mandiri Inhealth",
            responsibilities :"The responsibilities and day-to-day tasks involve developing and maintaining the Cervia application using ASP.NET Core, implementing backend logic with C# and ASP.NET Core, and utilizing LINQ for efficient database queries with SQL Server. Additionally, the role includes developing and integrating RESTful APIs, conducting unit testing, debugging, and optimizing code. Collaboration with frontend, QA, and product teams is also a key aspect, along with maintaining application performance and applying regular updates. Ensuring data security and optimizing backend performance are also crucial aspects of the role."
        },
        {
            time : "Oct 2024 - Jan 2025",
            role:"Fullstack Developer",
            companyName : "PT. Sumatra Timurindonesia",
            responsibilities :"The responsibilities and day-to-day tasks include performing maintenance on existing applications, such as bug fixes and feature additions, to ensure smooth functionality. The role involves developing new applications across multiple platforms: web applications using Laravel and CodeIgniter 3 for efficient and scalable solutions, mobile applications with React Native for cross-platform development, backend development using ASP.NET Core Web API for robust and scalable server-side solutions, and full-stack development with Laravel and CodeIgniter for integrated solutions across both the frontend and backend. Additionally, collaboration with the team is crucial to identify and resolve technical issues, providing actionable solutions to enhance system performance and reliability. Proactively engaging in troubleshooting and debugging processes is essential to minimize downtime and maintain high-quality standards."
        },
        {
            time : "Mar 2025 - Jun 2025",
            role:"Fullstack Developer",
            companyName : "PT. Inovindo Digital Media",
            responsibilities :"The responsibilities and day-to-day tasks included contributing to the development of the company website, Inovindoacademy.com, and designing and implementing a web-based application for internship management. This involved developing a daily reporting feature for intern participants and implementing a project progress tracking system to monitor their activities. The development process utilized Laravel 9 and the ASP.NET framework for website creation, while modern web development practices and best practices were applied throughout the project. Collaboration with the team was essential to ensure the functionality and quality of the website. Additionally, this role provided valuable practical experience in enterprise-scale web application development."
        },
    ]
    return result;
}

export default getdataCarrers;