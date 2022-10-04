import { useEffect, useState } from "react";
import { parseString } from "xml2js";
import { JSONTree } from 'react-json-tree';
import { UploadableFile } from "../interfaces/UploadableFile";

interface SingleFileProps {
    file: UploadableFile;
}

export const SingleFile = ({ file }: SingleFileProps) => {
    const [view, setView] = useState<any>();

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsText(file.file);
        reader.onload = (event) => {
            parseString(String(reader.result), (error, data) => {
                setView(data);
            });
        };
    }, [view, file])
    return file.errors?.length === 0 ? <div>
        <JSONTree data={view} labelRenderer={raw => <strong>{raw}</strong>}
            valueRenderer={raw => <span>{raw}</span>}
        />
    </div> : <div>Unable to read file</div>
}