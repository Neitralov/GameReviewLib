import {FC} from "react";

interface SmallStarIconProps {
  index: number
}

interface StarIconProps {
  index: number,
  action: (index: number) => void
}

export const ResetIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
         fill="#000">
      <path
        d="M444-144q-107-14-179.5-94.5T192-430q0-61 23-113.5t63-91.5l51 51q-30 29-47.5 69T264-430q0 81 51.5 140T444-217v73Zm72 0v-73q77-13 128.5-72.5T696-430q0-90-63-153t-153-63h-7l46 46-51 50-132-132 132-132 51 51-45 45h6q120 0 204 84t84 204q0 111-72.5 192T516-144Z"/>
    </svg>
  )
}

export const SmallStarIcon: FC<SmallStarIconProps> = ({index}) => {
  return (
    <svg key={index} className={"fill-star"} width="14" height="14" viewBox="0 0 32 32">
      <path
        d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
    </svg>
  )
}

export const StarIcon: FC<StarIconProps> = ({index, action}) => {
  return (
    <svg key={index} className={"fill-star cursor-pointer"} width="32" height="32" viewBox="0 0 32 32"
         onClick={() => action(index)}>
      <path
        d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
    </svg>
  )
}

export const BlankStarIcon: FC<StarIconProps> = ({index, action}) => {
  return (
    <svg key={index} className={"fill-background cursor-pointer"} width="32" height="32" viewBox="0 0 32 32"
         onClick={() => action(index)}>
      <path
        d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z"/>
    </svg>
  )
}

export const BackIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
         fill="#000">
      <path
        d="M384-192q-80 0-136-56t-56-136q0-80 56-136t136-56h246l-93-93 51-51 180 180-180 180-51-51 93-93H384q-50 0-85 35t-35 85q0 50 35 85t85 35h288v72H384Z"/>
    </svg>
  )
}

export const TrashBinIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
         fill="#fff">
      <path
        d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z"/>
    </svg>
  )
}

export const SaveIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
         fill="#fff">
      <path
        d="M240-144v-600q0-30.11 21-51.56Q282-817 312-816h216v72H312v493l168-67 168 67v-277h72v384l-240-96-240 96Zm72-600h216-216Zm372 132v-72h-72v-72h72v-72h72v72h72v72h-72v72h-72Z"/>
    </svg>
  )
}

export const CheckMarkIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
      <path
        d="m429-336 238-237-51-51-187 186-85-84-51 51 136 135ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z"/>
    </svg>
  )
}

export const BlankCheckMarkIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
      <path
        d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Z"/>
    </svg>
  )
}

export const ArrowIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
      <path d="M480-384 288-576h384L480-384Z"/>
    </svg>
  )
}