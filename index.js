import { askUser, closeApp } from "./lib/question.js";
import { handleAddMenu } from "./lib/addMenu.js";
import { handlePayment } from "./lib/payment.js";
import { showOrderHistory } from "./lib/history.js";

export async function showMainMenu() {
  try {
    console.log("\n=== BURGER BANGOR ===");
    console.log("1. Lihat Menu");
    console.log("2. Keranjang & Bayar");
    console.log("3. Histori Transaksi");
    console.log("4. Keluar");

    const inputChoice = await askUser("\nPilih menu (angka): ");
    const choice = parseInt(inputChoice);

    if (Number.isNaN(choice)) throw new Error("Input harus berupa angka!");

    switch (choice) {
      case 1:
        return handleAddMenu();
      case 2:
        return handlePayment();
      case 3:
        return showOrderHistory();
      case 4:
        console.log("\nTerima kasih sudah berbelanja!");
        closeApp();
        break;
      default:
        throw new Error("Pilihan tidak valid! (1-4)");
    }
  } catch (error) {
    console.log(`${error.message}`);
    await askUser("\nTekan enter untuk melanjutkan...");
    return showMainMenu();
  }
}

showMainMenu();
