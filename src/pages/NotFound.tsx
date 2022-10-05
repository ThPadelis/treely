import { Link } from "react-router-dom"

/**
 * Not found page
 * When a user tries to access a page that doesn't exist, they are shown this page.
 * @returns The NotFound component
 */
export const NotFound = () => {
    return <div className="flex flex-col h-[calc(100vh-48px-1rem)] justify-center items-center text-slate-600">
        <h1 className="text-[50px] font-bold pr-3 animate-type ">Error 404</h1>
        <p className="mt-3 text-lg">Let us take you back. Click <Link className="text-blue-600 font-semibold underline" to="/">here</Link>.</p>
    </div>
}