import { Bot } from "https://deno.land/x/grammy/mod.ts";
import axiod from "https://deno.land/x/axiod/mod.ts";
import getLink from "./insta.ts";
import { serve } from 'https://deno.land/x/sift@0.5.0/mod.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const bot = new Bot("5637608745:AAGtRxuOEjivmMq1OvO5VYwEZeiXlQzGjuQ");
const handleUpdate = webhookCallback(bot, 'std/http');

if (
  !Deno.env.get('BOT_TOKEN') ||
  !Deno.env.get('WEBHOOK_URL') ||
  !Deno.env.get('MODE')
) {
  console.log('Environment variables not set, please see .env.example');
  Deno.exit(1);
}

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

serve({
  ['/' + Deno.env.get('BOT_TOKEN')]: async (req) => {
    if (req.method == 'POST') {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
    return new Response();
  },
  '/': () => {
    return new Response('Hello world!');
  },
});

Deno.env.get('MODE') === 'development' && bot.start();
Deno.env.get('MODE') === 'production' &&
  bot.api.setWebhook(
    Deno.env.get('WEBHOOK_URL')! + '/' + Deno.env.get('BOT_TOKEN')!,
  );