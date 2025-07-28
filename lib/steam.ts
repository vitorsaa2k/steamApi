import { getPlayerSummaries } from "./methods/getPlayerSummaries";
export class SteamAPI {
	constructor(key: string) {
		this.key = key;
	}

	private key: string;

	getPlayerSummaries(id: string) {
		return getPlayerSummaries(id, this.key);
	}
}
