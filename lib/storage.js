export const menuData = [
  { name: "Bangor Pitik Lava", price: 29000 },
  { name: "Bangor Pitik Lava Premium", price: 29000 },
  { name: "Bangor Cheese Lava", price: 31000 },
  { name: "Bangor Lava Sausage", price: 27500 },
  { name: "Bangor Jelata Cheese", price: 24700 },
  { name: "Bangor Juragan Cheese", price: 31700 },
  { name: "Bangor Ningrat Cheese", price: 49200 },
  { name: "Bangor Juragan", price: 29000 },
  { name: "Bangor Ningrat", price: 44200 },
  { name: "Bangor Sultan", price: 55500 },
  { name: "Bangor Fish", price: 27500 },
  { name: "Tea", price: 9500 },
  { name: "Soft Drink", price: 10500 },
];

export let cartList = [];
export let orderHistory = [];
let invoiceCounter = 1000;

export function generateInvoiceNumber() {
  return `INV${invoiceCounter++}`;
}

export function getFormattedDate() {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
