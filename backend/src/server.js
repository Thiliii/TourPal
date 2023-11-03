// packages imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "express-async-errors";
import { StatusCodes } from "http-status-codes";

// module imports
import ErrorMiddleware from "./modules/error/error.middleware.js";

// util imports
import CommonUtil from "./modules/common/common.util.js";

// middleware imports

// route imports
import AuthRoutes from "./modules/auth/auth.route.js";
import AttractionRoutes from "./modules/attraction/attraction.route.js";
import PulseStreamDataRoutes from "./modules/pulseStreamData/pulseStreamData.route.js";
import GuidePortfolioRoute from "./modules/guidePortfolio/guidePortfolio.route.js";
import TourGuideRoute from "./modules/user/user.route.js";
import RatingRoutes from "./modules/rating/rating.route.js";
import HotelRoute from "./modules/hotel/hotel.route.js";

// import errors
import NotFoundError from "./modules/error/error.classes/NotFoundError.js";

// other imports
import constants from "./constants.js";
import config from "./config/db.config.js";

dotenv.config();

const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:3001"];
const corsOptionsDelegate = function (req, callback) {
    var corsOptions;
    if (whitelist.indexOf(req.header("Origin")) !== -1) {
        corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false }; // disable CORS for this request
    }
    callback(null, corsOptions); // callback expects two parameters: error and options
};

// middleware
app.use(cors(corsOptionsDelegate));
app.use(express.json());

// ping server
app.get(constants.API.PREFIX.concat("/ping"), (req, res, next) => {
    res.status(StatusCodes.OK).json({ message: "pong" });
});

// route declarations
app.use(constants.API.PREFIX.concat("/auth"), AuthRoutes);
app.use(constants.API.PREFIX.concat("/attractions"), AttractionRoutes);
app.use(constants.API.PREFIX.concat("/pulse-stream-data"), PulseStreamDataRoutes);
app.use(constants.API.PREFIX.concat("/guide-portfolios"), GuidePortfolioRoute);
app.use(constants.API.PREFIX.concat("/users"), TourGuideRoute);
app.use(constants.API.PREFIX.concat("/ratings"), RatingRoutes);
app.use(constants.API.PREFIX.concat("/hotels"), HotelRoute);

// not found route
app.use((req, res, next) => {
    throw new NotFoundError("API Endpoint Not Found!");
});

// error handler middleware
app.use(ErrorMiddleware.errorHandler);

const start = async () => {
    try {
        const dbConig = config.getDBConfig();
        await CommonUtil.connectDB(dbConig.MONGODB_URL);

        const port = process.env.SERVER_PORT || constants.SERVER.PORT;

        const server = app.listen(port, () => {
            console.log(`SERVER IS LISTENING ON PORT ${port}...`);
        });
    } catch (err) {
        console.error(err);
    }
};

if (process.env.ENVIRONMENT !== "TEST") start();

export default app;
