import { Models } from "appwrite";

export interface IPayload {
	title: string;
	description: string;
	due_date: Date;
	done?: boolean;
	priority?: string;
}

export interface ITask extends Models.Document {
	title: string;
	description: string;
	due_date: Date;
	done: boolean;
	priority?: string;
}