import FlashCard from "../components/FlashCard"
import FlashCardControls from "../components/FlashCardControls"

const FlashcardSection = () => {
    return (
        <section className="max-w-3xl mx-auto mb-20">
            <nav className="max-w-xl mx-auto">
                <ul className="flex justify-evenly">
                    <li className="border-b-2 border-[#06286E]"><a className="px-3 pb-4 text-xl font-bold text-[#06286E]">Study</a></li>
                    <li className=""><a className="px-3 pb-4 text-xl font-medium text-[#696671]">Quiz</a></li>
                    <li className=""><a className="px-3 pb-4 text-xl font-medium text-[#696671]">Test</a></li>
                    <li className=""><a className="px-3 pb-4 text-xl font-medium text-[#696671]">Game</a></li>
                    <li className=""><a className="px-3 pb-4 text-xl font-medium text-[#696671]">Others</a></li>
                </ul>
            </nav>
            <FlashCard />
            <FlashCardControls />
        </section>
    )
}

export default FlashcardSection