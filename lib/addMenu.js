import { askUser } from "./question.js";
import { menuData, cartList } from "./storage.js";
import { showMainMenu } from "../index.js";

export async function handleAddMenu() {
  try {
    console.log("\n=== DAFTAR MENU ===\n");
    menuData.forEach((item, i) =>
      console.log(`${i + 1}. ${item.name} - Rp ${item.price}`)
    );
    console.log("0. Kembali");

    const inputMenu = await askUser("\nPilih menu (angka): ");
    const menuIndex = parseInt(inputMenu) - 1;

    if (inputMenu === "0") return showMainMenu();
    if (
      Number.isNaN(menuIndex) ||
      menuIndex < 0 ||
      menuIndex >= menuData.length
    )
      throw new Error("Pilihan tidak valid!");

    const selectedMenu = menuData[menuIndex];
    const inputQuantity = await askUser("Jumlah pesanan (0 untuk kembali): ");
    const quantity = parseInt(inputQuantity);

    if (inputQuantity === "0") return showMainMenu();
    if (Number.isNaN(quantity) || quantity <= 0)
      throw new Error("Jumlah tidak valid!");

    const itemToAdd = {
      name: selectedMenu.name,
      price: selectedMenu.price,
      quantity,
      subTotal: selectedMenu.price * quantity,
    };

    cartList.push(itemToAdd);
    console.log(
      `\n ${quantity}x ${selectedMenu.name} ditambahkan ke keranjang.`
    );
  } catch (error) {
    console.log(` ${error.message}`);
  }

  await askUser("\nTekan enter untuk melanjutkan...");
  return handleAddMenu();
}
