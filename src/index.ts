import { loadTemplate } from './template'
import { createIncomes, createPayment, privateZaimClient, publicZaimClient } from './zaim'

const date = new Date()
date.setDate(1)

const publicTemplate = loadTemplate('publicTemplate.json')
const privateTemplate = loadTemplate('privateTemplate.json')

async function main() {
  createIncomes(publicZaimClient, publicTemplate, date)
  createPayment(publicZaimClient, publicTemplate, date)
  createIncomes(privateZaimClient, privateTemplate, date)
  createPayment(privateZaimClient, privateTemplate, date)
}

;(async () => {
  await main()
})()
