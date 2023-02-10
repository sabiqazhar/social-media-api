
# REST API SOCIAL MEDIA 🤳

this is social media API project, i'm implement some concept on common social media like follow/unfollow user, like/dislike post and create timeline for user

In this backend project, we use tech stacks:
- NodeJS
- Express JS
- Mongoose
- MongoDB Atlas


## Before running 🧪

- Setup the database local, you can read stuff for install mongo in [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (for windows, mac and linux) and [here](https://www.linode.com/docs/guides/set-up-mongodb-on-docker/) (for docker)

- Setup database on atlas mongoo, you can read stuff [here](https://docs.rackspace.com/blog/creating-and-connecting-to-a-database-in-mongodb-atlas/)

- if you choose database at atlas mongoo, add and edit  .env adjust your mongoo atlas account


## Run Locally 🚀

Clone the project

```bash
  git clone https://github.com/sabiqazhar/social-media-api.git
```

Go to the project directory

```bash
  cd social-media-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features ✨

#### Post route 
- ✔️PASSED // POST Create post
- ✔️PASSED // PUT Update post
- ✔️PASSED // DELETE Delete post
- ✔️PASSED // GET List post by id
- ✔️PASSED // PUT Like or dislike post
- ✔️PASSED // GET Timeline user


#### User route
- ✔️PASSED // GET List user by id
- ✔️PASSED // PUT Update user detail
- ✔️PASSED // PUT Follow user
- ✔️PASSED // PUT Unfollow user
- ✔️PASSED // DELETE Delete user


#### Auth route
- ✔️PASSED // POST Register user
- ✔️PASSED // POST Login user