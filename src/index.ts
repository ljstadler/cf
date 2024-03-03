import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
    return c.json(c.req.raw.cf);
});

export default app;
