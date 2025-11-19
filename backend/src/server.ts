import Fastify from "fastify";

const app = Fastify();

app.get("/", async (request, reply) => {
    return { message: "Fastify API is running" };
});

const start = async () => {
    try {
        await app.listen({ port: 3000 });
        console.log("Server running on http://localhost:3000")
    } catch (err) {
        app.log.error(err);
        process.exit(1);
    }
};

start();