const cron = require("node-cron");
const axios = require("axios");

async function execute() {
  console.log("Cron job executed at:", new Date().toLocaleString());
  try {
    const response = await axios.get("https://tic-tac-toe-9jyw.onrender.com");

    console.log(`response - ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error(error);
  }
}

// Schedule the cron job to run every minute
cron.schedule("*/12 * * * *", () => {
  execute();
});
