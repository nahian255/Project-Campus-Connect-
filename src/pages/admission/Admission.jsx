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
        console.log(candidateData);
    };

    return (
        <div >
            <PagesBanner image={image} title={'Sellect College'}></PagesBanner>
            <div className="container mx-auto mb-20">
                <h2>Select a College:</h2>
                <ul className="bg-gray-300">
                    {collegeList.map((college) => (
                        <li key={college.id} onClick={() => handleCollegeSelection(college.name)}>
                            {college.name}
                        </li>
                    ))}
                </ul>

                {selectedCollege && (
                    <form onSubmit={handleSubmit}>
                        <h2>Admission Form for {selectedCollege}</h2>
                        {/* <label>
                            College Name:
                            <input type="text" name="collegeName" value={candidateData.collegeName} onChange={handleChange} required />
                        </label> */}
                        <label>
                            Candidate Name:
                            <input type="text" name="candidateName" value={candidateData.candidateName} onChange={handleChange} required />
                        </label>
                        <label>
                            Subject:
                            <input type="text" name="subject" value={candidateData.subject} onChange={handleChange} required />
                        </label>
                        <label>
                            Candidate Email:
                            <input type="email" name="candidateEmail" value={candidateData.candidateEmail} onChange={handleChange} required />
                        </label>
                        <label>
                            Candidate Phone number:
                            <input type="tel" name="candidatePhone" value={candidateData.candidatePhone} onChange={handleChange} required />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" value={candidateData.address} onChange={handleChange} required />
                        </label>
                        <label>
                            Date of Birth:
                            <input type="date" name="dateOfBirth" value={candidateData.dateOfBirth} onChange={handleChange} required />
                        </label>
                        <label>
                            Image:
                            <input type="file" name="image" onChange={handleChange} required />
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>

        </div>
    );
};

export default Admission;