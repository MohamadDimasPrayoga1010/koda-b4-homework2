import { homeMenu } from "../index.js";
import { question } from "./question.js";
import { cartItems, menu } from "./storage.js";

export async function addMenu() {
  menu.forEach(({ name, price }, index) => {
    console.log(`${index + 1}. ${name} Rp.${price.toLocaleString("id")}`);
  });

  let selectedMenuIndex = parseInt(await question("\nPilih Menu : "), 10);

  // Validasi input menu
  if (
    isNaN(selectedMenuIndex) ||
    selectedMenuIndex < 1 ||
    selectedMenuIndex > menu.length
  ) {
    console.log("Menu tidak valid! Silakan pilih lagi.");
    return addMenu();
  }

  let selectedMenu = { ...menu[selectedMenuIndex - 1] };
  let quantity = parseInt(await question("\nJumlah Pesanan : "), 10);

  // Validasi quantity
  if (isNaN(quantity) || quantity <= 0) {
    console.log("Jumlah tidak valid! Masukkan angka > 0.");
    return addMenu();
  }


  const orderItem = {
    ...selectedMenu,
    quantity,
    subTotal: quantity * selectedMenu.price,
  };

  // Push ke cart
  cartItems.push(orderItem);

  console.log("\n====================== Pesanan ======================");
  cartItems.forEach(({ name, price, quantity, subTotal }, index) => {
    console.log(
      `\n${index + 1}. ${name} Rp.${price.toLocaleString(
        "id"
      )} x ${quantity} Total: Rp.${subTotal.toLocaleString("id")} \n`
    );
  });

  const addMoreMenu = (await question("Tambah Menu? (Y / N) : ")).toLowerCase();

  if (addMoreMenu === "y") {
    await addMenu();
  } else if (addMoreMenu === "n") {
    await homeMenu();
  } else {
    console.log("Pilih (y/n)");
    await addMenu();
  }
}
