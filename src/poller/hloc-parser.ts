import {Hloc} from '../types/types'

const MILLIS_PER_MIN = 60000

const formatDate = (date: number | undefined): Date | undefined => {
  if (!date) {
    return undefined
  }
  const minuteCandle = date - (date % MILLIS_PER_MIN)
  return new Date(minuteCandle)
}

const parseHlocData = (
  open?: number,
  high?: number,
  low?: number,
  close?: number,
  volume?: number,
  date?: number
): Hloc => {
  return {
    h: high,
    l: low,
    o: open,
    c: close,
    volume: volume,
    candle: formatDate(date),
  }
}

export default parseHlocData