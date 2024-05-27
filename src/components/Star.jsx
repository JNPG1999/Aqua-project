
export function Star( { numStar, ...props } ) {
 
  return (
    <div className="flex">
      {
        Array.from({ length: numStar }, (_, i) => (
          <img src='star.svg' alt={`estrella ${i}`} key={ i } {...props} />
        ))
      }
    </div>
  )
}
