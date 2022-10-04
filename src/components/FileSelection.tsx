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

    return <>
        {files.length > 0 && <div className="flex flex-wrap gap-2 justify-evenly">
            {files.map((f, i) => <div key={i} className={`${isSelectedFile(f) ? 'bg-blue-600 text-white' : 'bg-white'} hover:bg-blue-600 hover:text-white text-center p-3 duration-300 hover:cursor-pointer`} onClick={() => setSelectedFile(f)}>
                {f.file.name}
            </div>)}
            <div className="p-3 duration-300 hover:cursor-pointer bg-red-500 hover:bg-red-600 text-white text-center" onClick={removeFiles}>Remove files</div>
        </div>}
    </>

}