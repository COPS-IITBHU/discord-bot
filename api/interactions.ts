import {
  InteractionType,
  verifyKey,
  InteractionResponseType,
} from "discord-interactions";

import { NowRequest, NowResponse } from "@vercel/node";
import axios from "axios";
import { Interaction } from "./global";

const publicKey = process.env.publickey || "";

module.exports = async (req: NowRequest, res: NowResponse) => {
  const signature = (req.headers["x-signature-ed25519"] || " ") as string;
  const timestamp = (req.headers["x-signature-timestamp"] || " ") as string;

  const isValidRequest = verifyKey(
    Buffer.from(JSON.stringify(req.body)),
    signature,
    timestamp,
    publicKey
  );
  if (!isValidRequest) {
    return res.status(403).end("Bad request signature");
  }

  const interaction = req.body as Interaction;
  if (
    interaction &&
    interaction.type === InteractionType.COMMAND &&
    interaction.data?.name === "devtalks"
  ) {
    const { data } = await axios.get(
      "https://api.github.com/repos/COPS-IITBHU/DevTalks/issues",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    return res.json({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        embeds: [
          {
            color: 0x0099ff,
            title: "Dev Talks",
            description: "Presented by COPS DEV Group",
            fields: data.map((issue: any) => {
              return {
                name: issue.title,
                value: `By [${issue.user.login}](${issue.user.html_url}) at [Link](${issue.html_url})`,
              };
            }),
          },
        ],
      },
    });
  }

  return res.status(203).json({ type: InteractionResponseType.PONG });
};
