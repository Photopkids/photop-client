# Photop Client
Photop Client is a library for creating bots for Photop. It works directly with the WebSocket and abstractifies.

## How to get started
Photop Client uses node.js. Meaning it doesn't run in the browser. You will first need to install node. (Google it up: node.js download)
Download this folder if you haven't already.
In your node.js program, put `const {Client} = require("path/to/this/folder")`

Photop Client has heavy influence from discord.js. Every action through Photop happens through an object called the `Client`.

You can instantiate the Photop Client in 3 ways.
1. With username and password.
2. With authorization token and userid. (You can find it in dev console)
3. With nothing (this means you cannot interact with Photop like liking posts but you can see messages)

Using token is suggested because there is an extra step with the username and password.

```js
const { Client } = require("path/to/photopclient")

const clientWithUsername = new Client({username: "PhotopClient", password:"123456"})

const clientWithToken = new Client({token: "1234abcdef56789", userid: "abc123def"})

const guestClient = new Client();
```

### Create a post
```js
const post = client.post("Hey you people");
```
> Photop Client supports images but it is not tested so no guarantees. `client.post(text, image1, image2)`


### Replies to posts that contains "bot"
```js
client.onPost((post)=>{
	if (post) {
		if (post.text.match(/bot/)) {
			post.chat("Bottttt")
		}
	}
})
```

You can take a look in `examples/sockbot.ts` to see how to create a discord-ish bot.

### Architecture
Photop-Client abstractifies the client, users, chats, and posts into classes, defined in their respective files.
A private network class handles everything pertaining to the network and all classes perform their actions by calling methods of it.
The network class is has no 'dependencies' and contains no reference to the client. By doing this, a Post or Chat is separate from the Client.