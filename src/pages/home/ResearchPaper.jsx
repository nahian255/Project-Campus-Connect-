// ResearchPapers.js

import { Link } from "react-router-dom";

const ResearchPapers = () => {
    const researchPapers = [
        {
            title: 'Gender Inequality in the Workplace: Identifying Barriers and Strategies for Equality.',
            link: '/research-paper-1',
        },
        {
            title: 'Artificial Intelligence and Ethics: Exploring the Ethical Implications of AI in Various Industries.',
            link: '/research-paper-2',
        },
        // Add more research paper objects as needed
    ];

    return (
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4">Recommended Research Papers</h2>
            <div className="grid gap-4">
                {researchPapers.map((paper, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded">
                        <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                        <Link to={paper.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                            View Paper
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResearchPapers;
