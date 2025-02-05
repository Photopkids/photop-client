import { decode } from "html-entities";
import { Network } from "./network";
import { Post } from "./post";
import { BaseObject, DocumentObject } from "./types";
import { User } from "./user";

export class Chat implements BaseObject {
	createdAt: Date;
	id: string;
	text: string;
	replyTo?: Chat;

	/**
	 * Update is for when some values are unknown at instantiation time
	 */
	update(raw: RawChat){
		this.raw = raw;
		this.createdAt = new Date(raw.Timestamp);
		this.id = raw._id;
		this.text = decode(raw.Text);
	}

	reply(text: string){
		this._network.reply(this.post.id, this.id, text)
	}

	constructor(private _network: Network, public user: User, public post: Post, public raw: RawChat, replyTo?: Chat) {
		this.createdAt = new Date(raw.Timestamp);
		this.id = raw._id;
		this.text = decode(raw.Text);
		this.replyTo = replyTo;
	}
}

export interface RawChat extends DocumentObject {
	PostID: string;
	ReplyID?: string;
	Text: string;
	UserID: string;
	Timestamp: number;
}