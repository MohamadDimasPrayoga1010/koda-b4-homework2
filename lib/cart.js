import { homeMenu } from "../index.js";
import { payment } from "./payment.js";
import { question } from "./question.js";
import { cartItems } from "./storage.js";

export async function checkoutCart() {
  if (cartItems.length === 0) {
    console.log("Keranjang Kosong");
    await question("Tekan Enter untuk kembali");
    homeMenu();
    return;
  }

  let index = 0;

  while (cartItems[index] !== undefined) {
    console.log(
      `${index + 1}. ${cartItems[index].name} ${cartItems[index].price} x ${
        cartItems[index].quantity
      } = ${cartItems[index].subTotal}`
    );
    index++;
  }

  let totalAmount = cartItems.reduce((sum, item) => sum + item.subTotal, 0);
  console.log(`Total : ${totalAmount}`);

  let checkoutAnswer = await question("Bayar Pesanan ?(Y / N): ");
  if (checkoutAnswer.toLowerCase() === "y") {
    await payment();
  } else if (checkoutAnswer.toLowerCase() === "n") {
    await homeMenu();
  } else {
    await question("Gagal Input");
    homeMenu();
  }
}
