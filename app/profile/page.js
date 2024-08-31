
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProfilePage = () => {
    const [student, setStudent] = useState(null);
    const [guardian, setGuardian] = useState(null);

    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                const res = await fetch('/data/studentData.json');
                const data = await res.json();
                setStudent(data.student);
                setGuardian(data.guardian);
            } catch (error) {
                console.error('Error fetching student data:', error);
            }
        };

        fetchStudentData();
    }, []);

    if (!student || !guardian) {
        return <p>Loading...</p>;
    }

    return (
        <div className="flex bg-[#F5F6FA] h-[100vh] p-7">
            {/*--------------- Student Details Box ----------------*/}
            <div className="bg-white w-[260px] h-[485px] p-4 flex flex-col items-center border-none rounded-2xl">
                <div className="w-[107px] h-[107px]  bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1   mb-4">
                <Image src={student.profilePicture} alt="Profile Picture" width={105} height={105} className='w-full h-full rounded-full object-cover' />
                </div>
                <h2 className="text-xl font-bold mb-2">{student.name}</h2>
                <p className="text-xl text-[#5A5A5A] mb-4">ID: {student.roll}</p>
                <div className="text-left text-xl text-[#5A5A5A]">
                    <p className=" mb-2">Class: {student.class}</p>
                    <p className=" mb-2">Mobile: {student.mobileNumber}</p>
                    <p className="">Present Address:<br /><span className='ml-8'>{student.address}</span></p>
                </div>
            </div>

            {/*----------------- Guardian Information Box--------------- */}
            <div className="bg-white w-[822px] h-[236px] p-4 ml-6 border-none rounded-2xl ">
                <h2 className="text-xl ml-8 mb-6 text-black ">Guardian Info. </h2>
                <div className='pl-[76px] text-xl  text-black font-light'>
                    <p className=" mb-1">Fathers Name : {guardian.name}</p>
                <p className=" mb-1">Mobile Number : {guardian.mobileNumber}</p>
                <p className="">Occupation: {guardian.occupation}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
