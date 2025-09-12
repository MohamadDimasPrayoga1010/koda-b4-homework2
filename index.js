import { exit, question } from "./lib/question.js";
import { addMenu } from "./lib/addMenu.js";
import { checkoutCart } from "./lib/cart.js";
import { history } from "./lib/history.js";

export async function homeMenu() {
  console.log("Burger Bangor");
  console.log("1. Menu");
  console.log("2. Cart");
  console.log("3. History");
  console.log("4. Exit");

  let input = await question("Pilih :  ");
  input = parseInt(input);

  switch (input) {
    case 1:
      await addMenu();
      break;
    case 2:
      await checkoutCart();
      break;
    case 3:
      await history();
      break;
    case 4:
      console.log("====== TERIMA KASIH ======");
      exit();
      break;
    default:
      await question("Salah Input (press enter) ");
      homeMenu();
  }
}

homeMenu();
