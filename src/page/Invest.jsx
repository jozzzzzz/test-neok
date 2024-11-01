import Trade from "../components/Trade"
import '../css/authentication.css'
import { fetchMetals } from "../script/fetchMetals"
import { useEffect, useState } from "react"

const Invest = () => {
  const email = localStorage.getItem('email')
  const money = localStorage.getItem('money')
  const gold = localStorage.getItem('gold')
  const silver = localStorage.getItem('silver')
  const [rawGoldPrice, setRawGoldPrice] = useState(0)
  const [rawSilverPrice, setRawSilverPrice] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const { gold: rawGoldPrice, silver: rawSilverPrice } = await fetchMetals()
      setRawGoldPrice(rawGoldPrice)
      setRawSilverPrice(rawSilverPrice)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <div>
        <p>{money}</p>
        <p>{gold}</p>
        <p>{silver}</p>
      </div>

      <div className="trade-container">
        <Trade metal='gold' money={money} metalQty={gold} priceOfMetal={rawGoldPrice}/> <br />
        <Trade metal='silver' money={money} metalQty={silver} priceOfMetal={rawSilverPrice} />
      </div>
    </div>
  )
}

export default Invest