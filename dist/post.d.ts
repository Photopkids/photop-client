import { User } from ".";
import { Chat } from "./chat";
import { Network } from "./network";
import { DocumentObject } from "./types";
export declare class Post {
    private _network;
    raw: RawPost;
    author: User;
    createdAt: Date;
    text: string;
    likes: number;
    chatCount: number;
    chats: Chat[];
    id: string;
    usersLiked: ({
        user: User;
        likedAt: Date;
        raw: DocumentObject & {
            Timestamp: number;
        };
    })[];
    private _connected;
    _chatListeners: Array<(chat: Chat) => void>;
    /**
     * Subscribe to when a chat is made. Use `Post.connect()` before subscribing.
     */
    onChat(callback: (chat: Chat) => void): Promise<void>;
    /**
     * Start listening to chats from this post
     */
    connect(): Promise<void>;
    /**
     * Stop listening to chats from this post
     */
    disconnect(): Promise<void>;
    /**
     * Likes a post. The like count will not be updated.
     */
    like(): Promise<import("./types").SocketResponse<unknown>>;
    /**
     * Unlikes a post. The like count will not be updated.
     */
    unlike(): Promise<import("./types").SocketResponse<unknown>>;
    /**
     * Creates a chat on the target post.
     */
    chat(text: string): Promise<Chat>;
    /**
     * Deletes a post.
     * Warning: you can only delete your only posts.
     * This will error if it isn't your post.
     */
    delete(): Promise<import("./types").SocketResponse<unknown>>;
    /**
     * Pins a post. Can only pin your own.
     */
    pin(): Promise<import("./types").SocketResponse<unknown>>;
    /**
     * Pins a post. Can only unpin your own.
     */
    unpin(): Promise<import("./types").SocketResponse<unknown>>;
    /**
     * @internal Do not create
     */
    constructor(_network: Network, raw: RawPost, author: User);
}
export interface RawPost extends DocumentObject {
    Chats?: number;
    Likes?: number;
    Text: string;
    UserID: string;
    Timestamp: number;
}
