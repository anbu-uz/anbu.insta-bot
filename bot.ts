import { Bot } from "https://deno.land/x/grammy/mod.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";
import getLink from "./insta.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";

const TOKEN = Deno.env.get("TOKEN");

const bot = new Bot(TOKEN);

bot.command("start", (ctx) => {
  bot.api.sendMessage(
    ctx.message.chat.id,
    "Send me a link from Instagram to download a video.",
  );
});

let main_url = "https://alirabie.host/APIs/D.php?url=";

bot.on("message:text", async (ctx) => {
  // Checking if link is available
  if (ctx.message.entities) {
    // Checking if link is really from Instagram
    if (ctx.message.text.includes("instagram.com")) {
      // Checking if link is single
      if (ctx.message.entities.length > 1) {
        ctx.reply("Send only 1 link.");
      } else {

        // Getting link of media

        let video_url = main_url + ctx.message.text;
        let send_url = await getLink(video_url);
        bot.api.sendVideo(ctx.message.chat.id, send_url);
      }
    } else {
      ctx.reply("Send me only Instagram media link");
    }
  } else {
    ctx.reply("Send me a link.");
  }
});

bot.start();
console.log("Bot is running!");
