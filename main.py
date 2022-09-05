import requests
from telebot import TeleBot

link = "https://media.videodownloaderpro.net/get?__sig=CfUlIcyADKOiYgv4LdE4WQ&__expires=1662393281&uri=https%3A%2F%2Fscontent.cdninstagram.com%2Fv%2Ft50.2886-16%2F299146462_1161935557723294_887153431427359627_n.mp4%3F_nc_ht%3Dscontent.cdninstagram.com%26_nc_cat%3D110%26_nc_ohc%3DS0kU6zIxuL0AX89wXDP%26edm%3DAJBgZrYBAAAA%26ccb%3D7-5%26oe%3D631891FA%26oh%3D00_AT_AfHj6HpRsmF1o799P6YDMjO3z6QhqvxFAeWT6p_FCTA%26_nc_sid%3D78c662%26dl%3D1&filename=SasukeFollow%20%40reposts_007Cr%20%40vib3ae%20Bro%20%40naruto_fy_editsTAGS%20--%C2%A0%23naruto%C2%A0%23narutoedits%C2%A0%23narutomemes%C2%A0%23narutoshippuden%C2%A0%23narutoedit%C2%A0%23narutohinata%C2%A0%23narutocosplay%C2%A0%23narutouzumaki%C2%A0%23narutoquotes%C2%A0%23narutoamv%C2%A0%23narutotattoo%C2%A0%23narutoanime%C2%A0%23narutobrasil%C2%A0%23rocklee%C2%A0%23rockleeedit%C2%A0%23sasuke%C2%A0%23sasukeuchiha%C2%A0%23narutoedits%23narutoedits%C2%A0%23narutoedit%C2%A0%23narutoamv%C2%A0%23narutoamvs%C2%A0%23narutoanime%C2%A0%23sasuke%C2%A0%23sasukeuchihaedit%C2%A0%23sasukeedits%C2%A0%23sasukeeditz%C2%A0%23madara%C2%A0%23madarauchiha%C2%A0%23madaraedit%C2%A0%23madaraamv%C2%A0%23uchiha%C2%A0%23uchihaclan%C2%A0%23kakashiedit%C2%A0%23narutoshippudenedit%20%23reposts_007.mp4&ua=-&referer=https%3A%2F%2Fwww.instagram.com%2F"

r = requests.get(link).json()

bot = TeleBot("5637608745:AAGtRxuOEjivmMq1OvO5VYwEZeiXlQzGjuQ")

@bot.message_handler(commands=['start'])
def send_vd(msg):
	bot.send_video(msg.chat.id,video=r["url"][0]["url"])

bot.infinity_polling()