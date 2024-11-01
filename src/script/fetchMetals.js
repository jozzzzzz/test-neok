export const fetchMetals = async () => {
  const url = "https://api.metalpriceapi.com/v1/latest?api_key=de330d8f6b172be7592e3d4b6eed85a8&base=EUR&currencies=XAU,XAG"
  const response = await fetch(url)
  const data = await response.json()

  console.log("data", data)

  const rawGoldPrice = data.rates.EURXAU / 31.1035
  const rawSilverPrice = data.rates.EURXAG / 31.1035

  return {
    gold: rawGoldPrice.toFixed(2),
    silver: rawSilverPrice.toFixed(2)
  }
}