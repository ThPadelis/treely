import { useSelector } from "react-redux"
import { FileSelection } from "../components/FileSelection";
import { FileUpload } from "../components/FileUpload";
import { SingleFile } from "../components/SingleFile";
import { RootState } from "../store";

/**
 * Home page
 * This page is a wrapper component that includes the rest child components.
 * This is the main page that the user sees when the application is being started.
 * @returns The Home component
 */
export const Home = () => {
    const selectedFile = useSelector((state: RootState) => state.files.selectedFile);

    return (<main className="container mx-auto px-4 lg:px-2 space-y-4">
        <FileUpload /> {/* Component that handles the file uploading */}
        <FileSelection /> {/* Component that handles the selection of a file in order to preview it */}
        {selectedFile && <SingleFile file={selectedFile} />} {/* Component that previews the current selected file */}
    </main>)
}