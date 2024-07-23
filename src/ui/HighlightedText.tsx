
type HighlightedTextProps = {
    children: React.ReactNode
}
const HighlightedText: React.FC<HighlightedTextProps> = ({children}) => {
    return (
    <span className="text-secondary font-bold">{children}</span>)
}

export default HighlightedText