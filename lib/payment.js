import { homeMenu } from "../index.js";
import { question } from "./question.js";
import { cartItems, orderHistory } from "./storage.js";

export async function payment() {
  if (cartItems.length === 0) {
    console.log("Keranjang Kosong");
    homeMenu();
    return;
  }

  const dateInvoice = new Date().toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const invoice = cartItems.map((item) => ({
    ...item,
    date: dateInvoice,
  }));

  orderHistory.push(...invoice);
  cartItems.length = 0;

  await question("Payment Berhasil");
  homeMenu();
}
