// components/FaqSection.js

const FaqSection = () => {
    const faqData = [
        {
            question: 'What facilities does the college offer?',
            answer: 'The college offers state-of-the-art facilities such as a library, sports complex, laboratories, and computer centers.',
        },
        {
            question: 'What are the different things to consider when choosing a college?',
            answer: 'There are many factors to consider when choosing a college. The most important factor is your interests and goals. You should choose a college that has a strong program in the field you want to study. You should also choose a college that has the resources and support you need to achieve your goals. Other important factors include the cost, location, size, academics, student life, and financial aid. You should weigh all of these factors carefully when choosing a college. There is no right or wrong answer, and the best college for you will depend on your individual needs and goals',
        },
        {
            question: 'Are there any scholarship opportunities?',
            answer: 'Yes, the college provides various scholarship programs for eligible students based on their academic performance and financial needs.',
        },
        {
            question: 'What are the different costs of college?',
            answer: 'The cost of college varies depending on the type of college, the location, and the financial aid that you are eligible for. In general, the cost of college has been rising steadily in recent years. The average cost of tuition and fees for the 2021-2022 school year was $38,076 for private colleges, $10,740 for public colleges in-state, and $27,023 for public colleges out-of-state.',
        },

    ];

    return (
        <div className="container mx-auto my-10">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="grid gap-4">
                {faqData.map((item, index) => (
                    <div key={index} className="p-4 border border-gray-300 rounded">
                        <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqSection;
