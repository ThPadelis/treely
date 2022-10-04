import { FileUpload } from "../components/FileUpload"

export const Home = () => {
    return (<main className="container mx-auto px-4 lg:px-2">
        <div className="p-5 flex items-center justify-center bg-white border border-dashed border-slate-300">
            <FileUpload />
        </div>
    </main>)
}