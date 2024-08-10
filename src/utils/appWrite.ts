import { Client, Databases, Account  } from "appwrite";

export const client = new Client();

const projectID: string = import.meta.env.VITE_APPWRITE_PROJ_ID;


client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject(projectID);

export const databases = new Databases(client);
export const account = new Account(client);

export { ID } from "appwrite";