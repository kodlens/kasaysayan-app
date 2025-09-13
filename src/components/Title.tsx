import { ArrowLeft } from "lucide-react"

const Title = ( {title}:{title?:string}) => {
    return (
        <div className="my-4">
            <button className="my-2 px-4 py-2 flex gap-2 hover:cursor-pointer" onClick={ ()=>window.history.back() }>
                <ArrowLeft />
                Back
            </button>
            <h1 className="mb-2 font-bold text-center text-2xl font-serif">{title}</h1>
            <div className="">
                <img src="/images/horizontal-line.png" className="mx-auto" alt="" />
            </div>
        </div>
    )
}

export default Title