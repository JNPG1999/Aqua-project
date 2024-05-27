import { Testimoniales } from "./Testimoniales";

export function ContainerTestimoniales({ data }) {
  return (
    <div className="flex flex-wrap max-sm:flex-col items-center max-sm:py-9 max-sm:px-3 max-lg:flex-wrap">
      {
        data.map( ({ id, img, testimony, name, ocupation }) => (
          <Testimoniales key={ id } image={ img } testimonio={ testimony } name={ name } 
            ocupation={ ocupation }
          />
        ))
      }
    </div>
  )
}
