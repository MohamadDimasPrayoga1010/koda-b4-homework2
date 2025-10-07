import { orderHistory } from "./storage.js";
import { askUser } from "./question.js";
import { showMainMenu } from "../index.js";

export async function showOrderHistory() {
  console.log("\n=== HISTORI PEMBELIAN ===");

  if (orderHistory.length === 0) {
    console.log("\nBelum ada histori transaksi.");
    await askUser("\nTekan enter untuk kembali...");
    return showMainMenu();
  }

  orderHistory.forEach((transaction, i) => {
    console.log("\n=================================");
    console.log(`Transaksi #${i + 1}`);
    console.log(`Invoice: ${transaction.invoice}`);
    console.log(`Tanggal: ${transaction.date}`);
    console.log("---------------------------------");

    transaction.items.forEach((item, j) => {
      console.log(
        `${j + 1}. ${item.name} (${item.quantity}x) - Rp ${item.subTotal}`
      );
    });

    console.log("---------------------------------");
    console.log(`TOTAL: Rp ${transaction.total}`);
    console.log("=================================");
  });

  await askUser("\nTekan enter untuk kembali...");
  return showMainMenu();
}
