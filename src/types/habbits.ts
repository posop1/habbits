import { IconsType } from './common'

export interface IDay {
  number: number
  text: string
}

export interface IHabbit {
  id: number
  name: string
  days: IDay[]
  goalDays: number
  icon: IconsType
}
