import React, { useEffect, useState } from 'react'
import '../css/authentication.css'

const Trade = ({ metal, money, metalQty, priceOfMetal}) => {
  const [quantityBuy, setQuantityBuy] = useState(0)
  const [priceBuy, setPriceBuy] = useState(0)

  const [reload, setReload] = useState(false)

  const [quantitySell, setQuantitySell] = useState(0)
  const [priceSell, setPriceSell] = useState(0)

  const value = priceOfMetal

  useEffect(() => {
    console.log("component")
  }, [reload])

  const handleChangeBuy = (e) => {
    setQuantityBuy(e.target.value)
    setPriceBuy(e.target.value * value)
  }

  const handleChangeSell = (e) => {
    setQuantitySell(e.target.value)
    setPriceSell(e.target.value * value)
  }

  const handleSubmitBuy = (e) => {
    e.preventDefault()
    alert(`You bought ${quantityBuy} gold for $${priceBuy}`)
    localStorage.setItem(metal, metalQty + quantityBuy)
    localStorage.setItem('money', money - priceBuy)
  }

  const handleSubmitSell = (e) => {
    e.preventDefault()
    alert(`You sold ${quantitySell} gold for $${priceSell}`)
    localStorage.setItem(metal, metalQty - quantitySell)
    localStorage.setItem('money', money + priceSell)
  }

  return (
    <div className='trade-component'>
      <img src="" />

      { metal === 'gold' ?
        <div>
          <p>Gold price by gram</p>
          <p>{value}</p>
        </div> :
        <div>
          <p>Silver price by gram</p>
          <p>{value}</p>
        </div>
        }

      <form onSubmit={handleSubmitBuy}>
        <input type="number" value={quantityBuy} onChange={handleChangeBuy} />
        <p>{ priceBuy }</p>
        <button type="submit">Buy</button>
      </form>

      <form onSubmit={handleSubmitSell}>
        <input type="number" value={quantitySell} onChange={handleChangeSell} />
        <p>{ priceSell }</p>
        <button type="submit">Sell</button>
      </form>
    </div>
  )
}

export default Trade