import { getRandomNumber } from './getRandomNumber'

export const getRandomColor = () => {
  const colors = [
    '#20dab7',
    '#68da3e',
    '#5AC193',
    '#f49691',
    '#FF9F29',
    '#c501e2',
    '#2ef8a0',
    '#f82d97',
    '#ff0534',
    '#01c4e7',
    '#ffff51'
  ]
  return colors[getRandomNumber(colors.length)]
}
