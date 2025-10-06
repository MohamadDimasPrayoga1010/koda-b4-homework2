import { homeMenu } from "../index.js";
import { question } from "./question.js";
import { cartItems, orderHistory } from "./storage.js";

export async function payment() {
  // Validasi cartItems
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    console.log("Keranjang Kosong");
    await homeMenu();
    return;
  }

  // Validasi orderHistory
  if (!Array.isArray(orderHistory)) {
    console.error("Error: orderHistory tidak valid");
    return;
  }

  const dateInvoice = new Date().toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const invoice = cartItems.map((item) => {
    const { name, price, quantity, subTotal } = item;
    return { name, price, quantity, subTotal, date: dateInvoice };
  });

  orderHistory.push(...invoice);

  cartItems.length = 0;

  await question("Payment Berhasil. Tekan Enter untuk kembali.");
  await homeMenu();
}
