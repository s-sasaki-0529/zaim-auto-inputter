import Zaim from 'zaim'
import { Template } from './template'
import * as dotenv from 'dotenv'
dotenv.config()

export async function createIncomes(zaim: Zaim, template: Template) {
  for (const income of template.income) {
    await zaim.createIncome({
      date: new Date(),
      category_id: income.category_id,
      amount: income.amount,
      place: income.place,
      comment: income.comment
    })
  }
}

export async function createPayment(zaim: Zaim, template: Template) {
  for (const payment of template.payment) {
    await zaim.createPay({
      date: new Date(),
      category_id: payment.category_id,
      genre_id: payment.genre_id,
      amount: payment.amount,
      place: payment.place,
      comment: payment.comment
    })
  }
}

export const privateZaimClient = new Zaim({
  consumerKey: process.env.PRIVATE_ZAIM_KEY as string,
  consumerSecret: process.env.PRIVATE_ZAIM_SECRET as string,
  accessToken: process.env.PRIVATE_ZAIM_TOKEN as string,
  accessTokenSecret: process.env.PRIVATE_ZAIM_TOKEN_SECRET as string
})

export const publicZaimClient = new Zaim({
  consumerKey: process.env.PUBLIC_ZAIM_KEY as string,
  consumerSecret: process.env.PUBLIC_ZAIM_SECRET as string,
  accessToken: process.env.PUBLIC_ZAIM_TOKEN as string,
  accessTokenSecret: process.env.PUBLIC_ZAIM_TOKEN_SECRET as string
})
