import { useSelector, useDispatch } from "react-redux"
import { UploadableFile } from "../interfaces/UploadableFile";
import { RootState } from "../store";
import { cleanFiles, setSelected } from "../store/features/files/filesSlice";

export const FileSelection = () => {
    const { selectedFile, files } = useSelector((state: RootState) => state.files);
    const dispatch = useDispatch();

    const setSelectedFile = (file: UploadableFile) => {
        dispatch(setSelected(file))
    }

    const removeFiles = () => {
        dispatch(cleanFiles())
    }

    const isSelectedFile = (val: UploadableFile) => {
        const name = selectedFile?.file?.name;
        return name === val?.file?.name;
    }

    const hasErrors = (val: UploadableFile) => {
        return val.errors && val.errors?.length > 0;
    }

    return <>
        {files.length > 0 && <div className="flex flex-wrap gap-2 justify-evenly">
            {files.map((f, i) => <div key={i} className={`border ${isSelectedFile(f) ? 'bg-blue-600 text-white border-transparent' : 'bg-white  border-slate-300'} hover:bg-blue-600 hover:text-white text-center p-3 duration-300 hover:cursor-pointer shadow-sm ${hasErrors(f) ? 'bg-red-500 text-white hover:bg-red-600 border-transparent' : ''}`} data-tip="hello world" onClick={() => setSelectedFile(f)}>
                {f.file.name}
            </div>)}
            <div className="p-3 duration-300 hover:cursor-pointer bg-red-500 hover:bg-red-600 text-white text-center shadow-sm" onClick={removeFiles}>Remove files</div>
        </div>}
    </>

}