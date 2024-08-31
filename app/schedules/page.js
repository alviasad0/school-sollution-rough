import Image from "next/image";

const Schedules = () => {
    return (
        <div className="bg-[#F5F6FA] h-[100vh]">
            <h1 className="text-[#202224] text-[28px] font-bold mt-4 ml-7"> Schedule </h1>
            <div className="bg-[#FFFFFF]   mt-8 ml-7 mr-10 rounded-xl">
                <div className="h-[121px] flex items-center ">
                    <div className="flex-1 flex  items-center gap-6 pl-9">
                        <Image
                        src="/assets/edit-2.png"
                        alt="edit logo"
                        width="50"
                        height="50"
                        className=" p-3  bg-[#FF993A33] rounded-xl "></Image>
                        <h1 className="text-2xl font-semibold text-[#000000]">Final Exam Routine 2024</h1>
                    </div>
                    <div className="flex-0">
                     <button className="btn btn-primary text-[#FFFFFF] font-semibold bg-[#646CFF]  rounded-3xl border-none px-4 py-[10px] mr-9"> Download pdf</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedules;