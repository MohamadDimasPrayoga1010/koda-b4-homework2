import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export async function askUser(promptMessage) {
  return new Promise((resolve) => {
    rl.question(promptMessage, (answer) => resolve(answer.trim()));
  });
}

export function closeApp() {
  rl.close();
}
