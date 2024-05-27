export function Button({ title = 'button', color, icon, background, clases,text='text-sm px-3 py-1' }) {
  return (
    <button type="button" className={`${ color ? color : 'text-blue-600' }
     ${ background ? background : 'bg-transparent' } ${clases ? clases : ''} font-semibold ${text} rounded-full max-sm:text-[16px]`}>
      {
        icon ? (
          <>
            <span>{ icon }</span>
            <span>{ title }</span>
            
          </>
        ) : (
          <span>{ title }</span>
        )
      }
    </button>
  )
}
