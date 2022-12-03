# malhada-back-end
## Overview
This is an API which serves [malhada-front-end](https://github.com/malhada/malhada-front-end). Acts as an interface to MongoDB.

## Features
- Supports user data with authentication using passport and bcrypt.

## Running locally
1. In your terminal, `git clone https://github.com/malhada/malhada-back-end`
2. Open the project, run `npm install`
3. Create a `.env` file.
4. Insert secrets for `MONGODB_URI`, `SECRET`, and `PORT`.
5. Do `npm run start` and you should be up and running.

## Todo
- Implement specific Post GET and POST.
  
## Dependencies
- Express
- MongoDB
- async
- bcrypt
- compression
- dotenv
- helmet
- mongoose
- passport
- passport-local