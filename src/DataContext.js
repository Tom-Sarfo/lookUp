import { createContext } from "react";

export const DrugData = createContext(null);

export const drugDispatch = createContext(null);

export function drugReducer(drugs, action) {
	switch (action.type) {
		case "matched_drug": {
			return action.data;
		}

		default:
			throw Error("Unknown Error: " + action.type);
	}
}
