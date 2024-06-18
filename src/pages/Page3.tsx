import { Navigation } from "../components/Navigation"
import { PageWrapper } from "../components/PageWrapper"

export const Page3 = () => {
    return <PageWrapper props={{ $backgroundColor: "blue" }}><Navigation /><h1>page 3</h1></PageWrapper>
}