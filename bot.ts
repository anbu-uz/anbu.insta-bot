import { Bot } from "https://deno.land/x/grammy/mod.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";
import getLink from "./insta.ts";

const bot = new Bot("5637608745:AAGtRxuOEjivmMq1OvO5VYwEZeiXlQzGjuQ");

bot.command("start", (ctx) => {
  bot.api.sendMessage(ctx.message.chat.id, "salom");
});

let main_url = "https://alirabie.host/APIs/D.php?url=";

bot.on("message:text", async(ctx) => {
  if (ctx.message.entities) {
    if (ctx.message.entities.length > 1) {
      ctx.reply("1ta link jo'nating!");
    } else {
      let video_url = main_url + ctx.message.text
      let send_url = await getLink(video_url)
      bot.api.sendVideo(ctx.message.chat.id,send_url)
    }
  }else{
    ctx.reply("Link jo'nating")
  }
});

bot.start();
