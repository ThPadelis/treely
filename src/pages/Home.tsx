import { useSelector } from "react-redux"
import { FileSelection } from "../components/FileSelection";
import { FileUpload } from "../components/FileUpload";
import { SingleFile } from "../components/SingleFile";
import { RootState } from "../store";

export const Home = () => {
    const selectedFile = useSelector((state: RootState) => state.files.selectedFile);

    return (<main className="container mx-auto px-4 lg:px-2 space-y-4">
        <FileUpload />
        <FileSelection />
        {selectedFile && <SingleFile file={selectedFile} />}
    </main>)
}