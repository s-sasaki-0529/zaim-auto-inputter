import { loadTemplate } from './template'
import { createIncomes, createPayment, privateZaimClient, publicZaimClient } from './zaim'

const publicTemplate = loadTemplate('publicTemplate.json')
const privateTemplate = loadTemplate('privateTemplate.json')

async function main() {
  createIncomes(publicZaimClient, publicTemplate)
  createPayment(publicZaimClient, publicTemplate)
  createIncomes(privateZaimClient, privateTemplate)
  createPayment(privateZaimClient, privateTemplate)
}

;(async () => {
  await main()
})()
