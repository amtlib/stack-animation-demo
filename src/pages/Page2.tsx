import { Navigation } from "../components/Navigation"
import { PageWrapper } from "../components/PageWrapper"

export const Page2 = () => {
    return <PageWrapper props={{ $backgroundColor: "green" }}><Navigation /><h1>page 2</h1></PageWrapper>
}