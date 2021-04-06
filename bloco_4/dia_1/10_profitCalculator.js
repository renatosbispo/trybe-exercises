const TAX = 0.2;
let cost = 10;
let salePrice = 40;
let profitPerSale;

if (cost < 0 || salePrice < 0) {
  console.log('ERROR: Enter only positive values.');
} else {
  profitPerSale = salePrice - cost * (1 + TAX);
  console.log('Profit =', profitPerSale * 1000);
}