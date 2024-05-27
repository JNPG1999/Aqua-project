import { Star } from "./Star";




export function Testimoniales({ image, name = 'Anibal Jeremy', ocupation='Ingeniero de Sistemas Google Developer', testimonio }) {
  return (

<>
  <div className="mycontainer2 max-sm:mx-3">
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0  text-gray-700 shadow-none">
        <img
          src={ image ? image : 'https://i.pinimg.com/550x/8d/e7/fa/8de7fa2af12330350613ede63532c4fb.jpg' }
          alt="tania andrew"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex justify-between">
            <h5 className="max-sm:flex-1 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              { name }
            </h5>
            <div className="flex items-center">
              <Star numStar={5} height={'20px'} width={'20px'} />
            </div>
          </div>
          <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
            { ocupation }
          </p>
        </div>
      </div>
      <div className="mb-4 p-0">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {
            testimonio ? testimonio : `&ldquo;I found solution to all my design needs from Creative Tim. I use them
            as a freelancer in my hobby projects for fun! And its really affordable,
            very humble guys !!!&ldquo;`
          }
          
        </p>
      </div>
    </div>
  </div>
  
</>


  )
}
