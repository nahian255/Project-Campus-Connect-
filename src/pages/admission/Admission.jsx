import { useContext, useState } from "react";
import PagesBanner from "../shared/PagesBanner";
import image from "../../assets/college/college.jpg"
import { AuthContext } from "../../provider/AuthProvider";


const Admission = () => {

    const { setCollegeData } = useContext(AuthContext)
    // const { collegeName, setCollegeName } = useState('')

    const [collegeList, setCollegeList] = useState([
        { id: 1, name: 'Massachusetts Institute of Technology (MIT)' },
        { id: 2, name: 'Yale University' },
        { id: 3, name: 'Princeton University' },
        { id: 4, name: 'University of Chicago' },
        { id: 5, name: 'University of Manitoba' },
        { id: 6, name: 'University of Auckland' },
        // Add more colleges as needed
    ]);

    const [selectedCollege, setSelectedCollege] = useState('');
    const [candidateData, setCandidateData] = useState({
        // collegeName: '',
        candidateName: '',
        subject: '',
        candidateEmail: '',
        candidatePhone: '',
        address: '',
        dateOfBirth: '',
        image: '',
    });

    const handleCollegeSelection = (college) => {
        setSelectedCollege(college);
        // setCollegeName(college)
        setCollegeData(college)
        console.log(college);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCandidateData({ ...candidateData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCollegeData(collegeList, candidateData)

    };

    return (
        <div >
            <PagesBanner image={image} title={'Sellect College'}></PagesBanner>
            <div className="container mx-auto px-20 mb-20">
                <h2 className="text-center text-4xl py-10 ">Select Your Favourite College</h2>
                <ul className=" text-4xl text-bold italic py-10">
                    {collegeList.map((college) => (
                        <>
                            <li className="text-4xl" key={college.id} onClick={() => handleCollegeSelection(college.name)}>
                                <button className="btn btn-secondary"># {college.name}</button>
                            </li>
                        </>

                    ))}
                </ul>

                {selectedCollege && (
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-xl">Admission Form for <span className="text-purple-600 text-4xl mb-8">{selectedCollege}</span> </h2>
                        <label className="block text-gray-700 text-xl font-bold  mb-2" >
                            Candidate Name :
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="candidateName" value={candidateData.candidateName} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Subject:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="subject" value={candidateData.subject} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Candidate Email:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" name="candidateEmail" value={candidateData.candidateEmail} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Candidate Phone number:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="tel" name="candidatePhone" value={candidateData.candidatePhone} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Address:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="address" value={candidateData.address} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Date of Birth:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="dateOfBirth" value={candidateData.dateOfBirth} onChange={handleChange} required />
                        </label>
                        <label className="block text-gray-700 text-xl font-bold  mb-2">
                            Image:
                            <input className="appearance-none bg-white border rounded w-1/2 py-3 pl-20 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" name="image" onChange={handleChange} required />
                        </label>

                        <button className="btn btn-ghost text-purple-500 bg-blue-200" type="submit">Submit</button>
                    </form>
                )}
            </div>

        </div>
    );
};

export default Admission;