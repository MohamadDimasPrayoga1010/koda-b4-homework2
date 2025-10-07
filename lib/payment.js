import { askUser } from "./question.js";
import {
  cartList,
  orderHistory,
  generateInvoiceNumber,
  getFormattedDate,
} from "./storage.js";
import { showCart } from "./cart.js";
import { showMainMenu } from "../index.js";

export async function handlePayment() {
  try {
    const totalAmount = showCart();
    if (totalAmount === 0) {
      await askUser("\nTekan enter untuk kembali...");
      return showMainMenu();
    }

    const confirmation = await askUser(
      "\nCheckout pesanan (y/n/0 untuk kembali): "
    );
    if (confirmation === "0" || confirmation.toLowerCase() === "n")
      return showMainMenu();
    if (confirmation.toLowerCase() !== "y")
      throw new Error("Input tidak valid!");

    const invoice = generateInvoiceNumber();
    const date = getFormattedDate();

    const newTransaction = {
      invoice,
      date,
      items: [...cartList],
      total: totalAmount,
    };

    orderHistory.push(newTransaction);
    cartList.length = 0; 

    console.log("\nPembayaran berhasil!");
    console.log(`Invoice: ${invoice}`);
    console.log(`Tanggal: ${date}`);
  } catch (error) {
    console.log(`${error.message}`);
  }

  await askUser("\nTekan enter untuk kembali...");
  return showMainMenu();
}
