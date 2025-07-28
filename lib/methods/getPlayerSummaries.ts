import { baseSteamUrl, getPlayerSummariesPath } from "../consts";
import { GetPlayerSummariesResponse } from "../types/user";

export async function getPlayerSummaries(
	id: string,
	key: string
): Promise<GetPlayerSummariesResponse> {
	return await fetch(
		`${baseSteamUrl}${getPlayerSummariesPath}/?key=${key}&steamids=${id}`
	).then(res => res.json());
}
