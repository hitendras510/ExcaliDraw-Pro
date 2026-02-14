import { WebSocket, WebSocketServer } from "ws";
import { request } from "http";
import { JWT_SECRET } from "@repo/backend-common/config";
import jwt, { Jwt } from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", function connection(ws) {
    //@ts-ignore
    const url = request.url;
    if (!url) {
     return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") || "";
    const decoded = jwt.verify(token, JWT_SECRET);

      //check token
    if (!decoded || !(decoded as JwtPayload).userId) {
    ws.close();
    return;
    }

    ws.on("message", function message(data) {
      ws.send("pong");
   });
});
