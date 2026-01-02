import getdataCarrers from "./Carrers/data";

export default function CarrerPath() {
    return(
        <div>
            <h1 className="text-2xl font-bold">Carrers</h1>
            {getdataCarrers().map((item) => {
                return (
                        <div className=" mt-2 p-2 border border-gray-200 rounded-xl w-full mt-4">
                            <h1 className="text-xl font-bold text-gray-500">{item.time}</h1>
                            <h2 className="font-bold text-lg mb-2">{item.role} at {item.companyName}</h2>
                            <p className="text-gray-500 text-left mt-1 ">
                                {item.responsibilities}
                            </p>
                        </div>
                );
            })};
        </div>
    );
}