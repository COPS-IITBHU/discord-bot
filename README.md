# COPS Discord Bot

## Create an application on Discord Developer Portal

- Go to https://discord.com/developers/applications (login using your discord account if required).
- Click on New Application button available at left side of your profile picture.
Name your application and click on Create.
- Go to Bot section, click on Add Bot, and finally on Yes, do it! to confirm.

That's it. A new application is created which will hold our Slash Command. Don't close the tab as we need information from this application page throughout our development.

## Creating Command

Before we can write some code, we need to make a post request to register a [Slash Command](https://discord.com/developers/docs/interactions/application-commands#making-a-global-command) in our app.

Fill `BOT_TOKEN` with the token available in the Bot section and `APPLICATION_ID` with the ID available on the General Information section of the page

Make a POST request to "https://discord.com/api/v10/applications/<APPLICATION_ID>/commands" using your preferred GUI or CLI containing
- body:
  ```json
  {
    name:"name",
    description:"description"
  }
- headers:
  ```
  {
      "Authorization": "Bot <BOT_TOKEN>"
  }
  ```

_NOTE: currently bot supports only **devtalks**_

## Authorizing Your Application

Application commands do not depend on a bot user in the guild; they use the interactions model. To create commands in a guild, your app must be authorized with the `applications.commands` scope.

In order to make commands work within a guild, the guild must authorize your application with the applications.commands scope. The bot scope is not enough.

## Deployment

`publickey` is available on the General Information section of the page

- ```vercel login```
- Add environment variable ```publickey``` in your vercel project for prod
- Deployment ```vercel --prod```
