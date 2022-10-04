import { useCallback, useState } from "react"
import { useDropzone, FileRejection } from "react-dropzone"
import { UploadableFile } from "../interfaces/UploadableFile";
import { SingleFile } from "./SingleFile";

export const FileUpload = () => {
    const [files, setFiles] = useState<UploadableFile[]>([])

    const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
        const tempFiles: UploadableFile[] = accFiles.map(file => ({ file, errors: [] }));
        setFiles(current => [...current, ...tempFiles, ...rejFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div className="flex flex-col items-center hover:cursor-pointer">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here...</p> :
                        <p>Drag and drop some files here, or click to select files</p>
                }
            </div>
            {/* {files.length > 0 && (<div className="my-5">
                {files && files.map((fileWrapper, i) => <SingleFile key={i} file={fileWrapper.file} />)}
            </div>)} */}
        </div>
    )
}
