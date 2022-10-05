import { useEffect, useState } from "react";
import { parseString } from "xml2js";
import { JSONTree } from 'react-json-tree';
import { UploadableFile } from "../interfaces/UploadableFile";

interface SingleFileProps {
    file: UploadableFile;
}

const theme = {
    scheme: 'tomorrow',
    author: 'chris kempson (http://chriskempson.com)',
    base00: '#1d1f21',
    base01: '#282a2e',
    base02: '#373b41',
    base03: '#969896',
    base04: '#b4b7b4',
    base05: '#c5c8c6',
    base06: '#e0e0e0',
    base07: '#ffffff',
    base08: '#cc6666',
    base09: '#de935f',
    base0A: '#f0c674',
    base0B: '#b5bd68',
    base0C: '#8abeb7',
    base0D: '#81a2be',
    base0E: '#b294bb',
    base0F: '#a3685a'
};


export const SingleFile = ({ file }: SingleFileProps) => {
    const [view, setView] = useState<any>();
    const { file: actFile, errors } = file;

    useEffect(() => {
        const reader = new FileReader();
        reader.readAsText(actFile);
        reader.onload = (event) => {
            parseString(String(reader.result), (error, data) => {
                setView(data);
            });
        };
    }, [view, file, actFile])
    return file.errors?.length === 0 ? <div className="bg-white px-3 py-1 border border-dashed border-slate-300">
        <JSONTree data={view} theme={theme} labelRenderer={raw => <strong>{raw}</strong>} valueRenderer={raw => <span>{raw}</span>} />
    </div> : <div className="bg-white p-3 border border-dashed border-slate-300 text-center">
        <p className="text-lg font-semibold">Unable to read file</p>
        <div className="mt-2">
            {errors?.map(x => <p>{x.message}</p>)}
        </div>
    </div>
}