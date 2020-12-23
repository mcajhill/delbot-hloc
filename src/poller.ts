import {AxiosInstance} from "axios";

let pollingFrequency: number = 1000
const symbols: string[] = []

const poller = {
  poll: (axios: AxiosInstance) => {
    setInterval(async () => {
      try {
        const querySymbols = symbols.join(',')
        const apiToken = process.env.IEX_CLOUD_API_KEY
        const url = `/stock/market/batch?symbols=${querySymbols}&types=ohlc&token=${apiToken}`;
        const response = await axios.get(url)
        console.log(`Poll: `, JSON.stringify(response.data))
      } catch (err) {
        console.log(err)
      }
    }, pollingFrequency);
  },

  registerSymbol: (symbol: string) => {
    if (symbol) {
      console.log(`Adding ${symbol} to polling schedule`)
      symbols.push(symbol)
    }
  },

  setPollingFrequency: (frequencyInMs: number) => {
    console.log(`Polling frequency set to ${frequencyInMs}ms`)
    pollingFrequency = frequencyInMs
  },
}

export default poller