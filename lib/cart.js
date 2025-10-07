import { cartList } from "./storage.js";

export function showCart() {
  console.log("\n=== KERANJANG BELANJA ===\n");

  if (cartList.length === 0) {
    console.log("Keranjang kosong!");
    return 0;
  }

  let total = 0;
  cartList.forEach((item, i) => {
    console.log(`${i + 1}. ${item.name}`);
    console.log(`   Harga: Rp ${item.price}`);
    console.log(`   Jumlah: ${item.quantity}`);
    console.log(`   Subtotal: Rp ${item.subTotal}\n`);
    total += item.subTotal;
  });

  console.log("===========================");
  console.log(`TOTAL BELANJA: Rp ${total}`);
  console.log("===========================");

  return total;
}
