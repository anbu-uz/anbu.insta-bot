import axiod from "https://deno.land/x/axiod/mod.ts"

export default async function getLink(url: string ){
	const response = await axiod.get(url)

	let video_link = response.data.url[0].url

	return video_link
}