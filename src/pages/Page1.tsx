import { Navigation } from "../components/Navigation"
import { PageWrapper } from "../components/PageWrapper"

export const Page1 = () => {
    return <PageWrapper props={{ $backgroundColor: "red" }}><Navigation /><h1>page 1</h1></PageWrapper>
}