import { homeMenu } from "../index.js";
import { question } from "./question.js";
import { cartItems, menu } from "./storage.js";

export async function addMenu() {
  
  let count = 0;
  for (count = 0; count < menu.length; count++) {
    console.log(`${count + 1}. ${menu[count].name} ${menu[count].price}`);
  }

  let selectedMenuIndex = await question("Pilih Menu : ");
  selectedMenuIndex = parseInt(selectedMenuIndex);

  let dataInput;
  if (selectedMenuIndex > 0 && selectedMenuIndex < count + 1) {
    dataInput = { ...menu[selectedMenuIndex - 1] };
  }

  let quantity = await question("Jumlah Pesanan : ");
  quantity = parseInt(quantity);

  if (quantity > 0) {
    dataInput = {
      ...dataInput,
      quantity: quantity,
      subTotal: quantity * dataInput.price,
    };
  }

  cartItems.push(dataInput);

  let index = 0;
  while (cartItems[index] !== undefined) {
    console.log(
      `${index + 1}. ${cartItems[index].name} ${cartItems[index].price} ` +
        `x ${cartItems[index].quantity} Total ${cartItems[index].subTotal}`
    );
    index++;
  }

  let addMoreMenu = await question("Tambah Menu? (Y / N) : ");
  if (addMoreMenu.toLowerCase() === "y") {
    await addMenu();
  } else if (addMoreMenu.toLowerCase() === "n") {
    await homeMenu();
  } else {
    console.log("Pilih (y/n)");
    addMenu();
  }
}
