# COPS Discord Bot

## Running locally

- ```yarn --frozen-lockfile```
- ```npm i -g vercel```
- ```vercel login```

## Deployment

- Add environment variable ```publickey``` in your vercel project for both dev and prod
- For running locally use ```vercel dev```
- Deployment ```vercel --prod```

## Adding Command

- Make a POST request to ```https://discord.com/api/v8/applications/<application number>/guilds/<guild id>/commands/```
  - with ```json name:"name", description:"description"```
  - currently bot supports only _**devtalks**_
