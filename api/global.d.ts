import { InteractionType } from "discord-interactions";
import { GuildMember, Snowflake } from "discord.js";

interface Interaction {
  id: Snowflake;
  type: InteractionType;
  guild_id: Snowflake;
  channel_id: Snowflake;
  member: GuildMember;
  token: string;
  version: number;
  data?: ApplicationCommandInteractionData;
}

interface ApplicationCommandInteractionData {
  id: Snowflake;
  name: string;
  options?: ApplicationCommandInteractionData[];
}

type ApplicationCommandInteractionDataOption = {
  name: string;
  value?: string;
  options?: ApplicationCommandInteractionData[];
};
