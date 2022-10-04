import { FileSelection } from "../components/FileSelection"
import { FileUpload } from "../components/FileUpload"

export const Home = () => {
    return (<main className="container mx-auto px-4 lg:px-2 space-y-4">
        <FileUpload />
        <FileSelection />
    </main>)
}