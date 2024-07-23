import TitleBox from "@/ui/TitleBox"

type SectionContainerProps = {
    children: React.ReactNode
    sectionTitle: string
    margin?: string
}
export default function SectionContainer({children, sectionTitle, margin} : SectionContainerProps){
    const m = margin ? margin : "mb-44"
    return (
        <section className={`flex flex-col items-start justify-center mb-44 w-fit px-5 
                            tablet:items-start tablet:px-20 laptop:px-28 desktop:px-72 ${m}`}> 
            <TitleBox>{sectionTitle}</TitleBox> 
            {children}
        </section>
    )
}  