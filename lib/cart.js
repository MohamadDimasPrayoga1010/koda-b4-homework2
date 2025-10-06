import { homeMenu } from "../index.js";
import { payment } from "./payment.js";
import { question } from "./question.js";
import { cartItems } from "./storage.js";

export async function checkoutCart() {
  if (cartItems.length === 0) {
    console.log(
      "=========================== Keranjang Belanja ==========================="
    );
    console.log("\nKeranjang Kosong \n");
    await question("Tekan Enter untuk kembali");
    homeMenu();
    return;
  }


  console.log(
    "\n=========================== Keranjang Belanja ===========================\n"
  );
  cartItems.forEach((item, index) => {
    console.log(
      `${index + 1}. ${item.name} Rp.${item.price.toLocaleString("id")} x ${
        item.quantity
      } = Rp.${item.subTotal.toLocaleString("id")} \n`
    );
  });

  const totalAmount = cartItems.reduce((sum, item) => sum + item.subTotal, 0);
  console.log(`Total : Rp.${totalAmount.toLocaleString("id")}`);

  // Validasi input bayar (Y/N)
  let checkoutAnswer;
  while (true) {
    checkoutAnswer = (
      await question("Bayar Pesanan ? (Y / N): ")
    ).toLowerCase();
    if (checkoutAnswer === "y") {
      await payment();
      break;
    } else if (checkoutAnswer === "n") {
      await homeMenu();
      break;
    } else {
      console.log("Input tidak valid! Pilih Y atau N.");
    }
  }
}
