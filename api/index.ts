import { NowRequest, NowResponse } from "@vercel/node";

module.exports = (req: NowRequest, res: NowResponse) => {
  return res.json({ message: "Callisto Here!" });
};
