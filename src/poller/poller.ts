import {AxiosInstance} from "axios";
import parseHlocData from "./hloc-parser";
import {QuoteData} from "../types/types";

let pollingFrequency: number = 1000
const symbols: string[] = []

const poller = {
  poll: (axios: AxiosInstance) => {
    setInterval(async () => {
      try {
        const querySymbols = symbols.join(',')
        const apiToken = process.env.IEX_CLOUD_API_KEY
        const url = `/stock/market/batch?symbols=${querySymbols}&types=quote&token=${apiToken}`;
        const response = await axios.get(url)

        for (const data of Object.values(response.data)) {
          const {open, close, high, low, volume, latestUpdate} = (data as QuoteData)?.quote || {}
          const hloc = parseHlocData(open, high, low, close, volume, latestUpdate)
          console.log(hloc)
        }
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