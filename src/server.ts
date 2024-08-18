/* eslint-disable @typescript-eslint/no-floating-promises */

import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function DBconnect() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('🛢Database is connected Successfully ✌✔')

    app.listen(config.port, () => {
      console.log(`Event-App Server listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect to Database ❌', err)
  }
}

DBconnect()
