import CollapseItem from "../components/CollapseItem"

const FAQSection = () => {
    return (
        <section className="mt-36 pb-80">
            <h1 className="mb-12 text-5xl font-bold tracking-[0.24px] bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">FAQ</h1>
            <div className="w-3/5 flex flex-col gap-8">
                <CollapseItem question="Can education flashcards be used for all age groups?" />
                <CollapseItem question="How do education flashcards work?" />
                <CollapseItem question="Can education flashcards be used for test preparation?" />
            </div>
        </section>
    )
}

export default FAQSection