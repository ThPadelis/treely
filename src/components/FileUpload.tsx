import { useCallback } from "react";
import { useDispatch } from 'react-redux';
import { useDropzone, FileRejection } from "react-dropzone"
import { UploadableFile } from "../interfaces/UploadableFile";
import { setFiles } from "../store/features/files/filesSlice";

export const FileUpload = () => {
    const dispatch = useDispatch();

    const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
        const tempFiles: UploadableFile[] = accFiles.map(file => ({ file, errors: [] }));
        dispatch(setFiles([...tempFiles, ...rejFiles]))
    }, [dispatch]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: { 'applicaion/xml': [], 'text/xml': [] } })

    return (
        <div className="p-5 duration-300 bg-white border border-dashed border-slate-300 hover:border-blue-600 hover:cursor-pointer ">
            <div {...getRootProps()} className="flex flex-col justify-center items-center">
                <input {...getInputProps()} />
                <div className="flex flex-col items-center text-blue-400 hover:text-blue-600 duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                    <p className="uppercase font-bold mb-3">drag and drop here</p>
                </div>

                <p>Drag and drop your files or <span className="text-blue-400">browse</span> from the computer</p>
                <p className="text-sm text-slate-500 italic my-1">(Only *.xml files will be accepted)</p>
            </div>
        </div>
    )
}
