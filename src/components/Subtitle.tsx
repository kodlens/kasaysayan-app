const Subtitle = ( { subtitle } : { subtitle?:string } ) => {
  return (
    <div className="my-4">
      <div className="font-bold border px-4 py-2 rounded-4xl flex gap-2 items-center border-black">
        <div className="h-10 w-10 border-2 rounded-full border-black"></div>
        <div>{ subtitle }</div>
      </div>
    </div>
  )
}

export default Subtitle