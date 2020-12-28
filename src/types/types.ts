export interface QuoteData {
  quote?: {
    symbol: string,
    open: number,
    openTime: number,
    close: number,
    closeTime: number,
    high: number,
    highTime: number,
    low: number,
    lowTime: number,
    latestPrice: number,
    latestUpdate: number,
    volume: number,
    isUSMarketOpen: boolean
  }
}

export interface Hloc {
  h?: number,
  l?: number,
  o?: number,
  c?: number,
  volume?: number,
  candle?: Date,
}
