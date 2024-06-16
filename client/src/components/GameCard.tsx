export const GameCard = () => {
  return (
    <div
      className="flex flex-col-reverse min-w-[150px] w-[150px] h-[225px] shadow-[inset_0_-35px_12px_-12px_rgba(0,0,0,35%)] px-3 py-1.5 bg-cover rounded-lg snap-start"
      style={{backgroundImage: "url('/minecraft.png')"}}>
      <div className="flex justify-between">
        <p className="text-sm text-white">2009</p>
        <div className="flex gap-[1px] items-center">
          { DisplayStars(5) }
        </div>
      </div>
    </div>
  )
}

function DisplayStars(value: number) {
  let stars = []

  for (let index = 0; index < value; index++) {
    stars.push(
      <svg key={index} className="fill-star" width="14" height="14" viewBox="0 0 32 32">
        <path
          d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
      </svg>
    )
  }

  return stars
}