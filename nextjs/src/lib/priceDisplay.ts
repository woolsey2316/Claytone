export function displayPrice(price: number) {
  const alreadyFormatted = price.toString().split("").includes(".")
  if (!alreadyFormatted) {
    return price.toString() + ".00"
  }
  return price.toFixed(2)
}