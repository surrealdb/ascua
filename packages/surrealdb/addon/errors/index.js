import Database from 'surrealdb.js';

export const ServerError = Database.ServerError;
export const RecordError = Database.RecordError;
export const PermsError = Database.PermsError;
export const ExistError = Database.ExistError;
export const FieldError = Database.FieldError;
export const IndexError = Database.IndexError;
export const TimerError = Database.TimerError;

export class DestroyedError extends Error {
	constructor() {
		super();
		this.name = 'DestroyedError';
	}
}

export default {
	ServerError: Database.ServerError,
	RecordError: Database.RecordError,
	PermsError: Database.PermsError,
	ExistError: Database.ExistError,
	FieldError: Database.FieldError,
	IndexError: Database.IndexError,
	TimerError: Database.TimerError,
	DestroyedError: DestroyedError,
};
