import express from "express";

const router = express.Router()

const initHealthCheckRoutes = (app)=> {
    router.get("/", function(req, res) {
        const healthcheck = {
            uptime: process.uptime(),
            responsetime: process.hrtime(),
            message: "OK",
            timestamp: Date.now()
        }
        try {
            res.send(healthcheck);
        } catch (error) {
            healthcheck.message = error && typeof error === "string" ? error : "undefined";
            res.status(503).send();
        }
    });

    return app.use ('/healthcheck', router)
}

export default initHealthCheckRoutes;
