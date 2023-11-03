export default {
    SERVER: {
        PORT: 4002,
    },
    API: {
        PREFIX: "/api/v1",
    },
    SCHEMAS: {
        AUTH: "Auth",
        USER: "User",
        ATTRACTION: "Attraction",
        HOTEL: "Hotel",
        PULSE_STREAM_DATA: "PulseStreamData",
        GUIDE_PORTFOLIO: "GuidePortfolio",
        RATING: "Rating",
    },
    GENDER: {
        MALE: "Male",
        FEMALE: "Female",
    },
    USER_TYPES: {
        ADMIN: "Admin",
        TOUR_GUIDE: "Tour Guide",
        TOURIST: "Tourist",
    },
    PULSE_STREAM_DATA: {
        TAGS: {
            INFO: "Info",
            WARNING: "Warning",
            HAZARD: "Hazard",
        },
    },
    RATINGS: {
        RATEES: {
            HOTEL: "Hotel",
            ATTRACTION: "Attraction",
            TOUR_GUIDE: "Tour Guide",
        },
    },
    TOKEN_LIFE: 30 * 24 * 60 * 60,
    LOGS: {
        FILE_PATH: "./logs",
    },
};
