import { homeMenu } from "../index.js";
import { orderHistory } from "./storage.js";
import { question } from "./question.js"; 

export async function history() {
  // Validasi apakah orderHistory ada dan array
  if (!Array.isArray(orderHistory) || orderHistory.length === 0) {
    console.log("=============== Histori Belanja ===============");
    console.log("\nBelum ada pembelian\n");
    console.log("===============================================\n");
    await question("Tekan Enter untuk kembali.");
    await homeMenu();
    return;
  }
   

  orderHistory.forEach(({ name, price, quantity, subTotal, date }, index) => {
    console.log("=============== Histori Belanja ===============");
    console.log(
      `${index + 1}. ${name} Rp.${price.toLocaleString(
        "id"
      )} x ${quantity} Total: Rp.${subTotal.toLocaleString(
        "id"
      )} Date: ${date} \n`
    );
    console.log("===============================================\n");
  });
 
  await homeMenu();
}
