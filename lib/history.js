import { homeMenu } from "../index.js";
import { orderHistory } from "./storage.js";

export function history() {
  let historyCart = 0;
  if (orderHistory.length === 0) {
    console.log("Belum ada pembelian");
  }

  while (orderHistory[historyCart] !== undefined) {
    console.log(
      `${historyCart + 1}. ${orderHistory[historyCart].name} ${
        orderHistory[historyCart].price
      }` +
        `x ${orderHistory[historyCart].quantity} Total ${orderHistory[historyCart].subTotal}` +
        ` Date: ${orderHistory[historyCart].date}`
    );
    historyCart++;
  }
  homeMenu();
}
