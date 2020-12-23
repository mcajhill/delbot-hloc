import axios from "axios";
import dotenv from 'dotenv'
import express from "express";
import poller from './poller'

dotenv.config({path: `.env.${process.env.NODE_ENV}`})

const app = express();
const port = process.env.PORT || 8080

const axiosInstance = axios.create({
  baseURL: process.env.IEX_CLOUD_API_URI
});

app.listen(port, async () => {
  console.log(`Server started on port ${port}`)

  const symbols = process.env.SYMBOLS || '';

  for (const symbol of symbols?.split(',')) {
    poller.registerSymbol(symbol)
  }

  const pollingFrequency = process.env.POLLING_FREQUENCY_MS
  if (pollingFrequency) {
    poller.setPollingFrequency(parseInt(pollingFrequency, 10))
  }

  poller.poll(axiosInstance)
})