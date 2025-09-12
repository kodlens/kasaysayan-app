const Title = ( {title}:{title?:string}) => {
    return (
        <div className="my-4">
            <h1 className="mb-2 font-bold text-center text-2xl font-serif">{title}</h1>
            <div className="">
                <img src="/images/horizontal-line.png" className="mx-auto" alt="" />
            </div>
        </div>
    )
}

export default Title