



export function CardImgNosotros({ img, text }) {
  return (
    <div className="flex flex-row gap-8 flex-wrap items-center mt-10">
      <div className="flex flex-col justify-center items-center">
        <img src={ img } className="w-56 h-full" alt={ text } />
        <p>{ text }</p>
      </div>
    </div>
  )
}
