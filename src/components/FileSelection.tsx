import { useEffect, useState } from "react"

export const FileSelection = () => {
    const [selected, setSelected] = useState(0);
    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        const _items = Array(Math.floor(Math.random() * 10)).fill(null).map(x => Math.floor(Math.random() * 100));
        setItems(_items)
    }, []);

    const removeFiles = () => {
        setItems([])
    }

    return <>
        {items.length > 0 && <div className="flex flex-wrap gap-2 justify-evenly">
            {items.map((x, i) => <div key={i} className={`${selected === i ? 'bg-blue-600 text-white' : 'bg-white'} hover:bg-blue-600 hover:text-white w-40 p-3 duration-300 hover:cursor-pointer`} onClick={() => setSelected(i)}>s</div>)}
            <div className="w-40 p-3 duration-300 hover:cursor-pointer bg-red-500 hover:bg-red-600 text-white text-center" onClick={removeFiles}>Remove files</div>
        </div>}
    </>

}