const express = require("express");
const router = express.Router();
const path = require("path");


router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "login.html"));
});
router.get("/project.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "project.html"));
});

router.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "about.html"));
});
router.get("/artifact.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "artifact.html"));
});
router.get("/artifact-detail.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views","artifact-detail.html"));
});
router.get("/cart.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "cart.html"));
});
router.get("/plan.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "plan.html"));
});
router.get("/404.html", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views","404.html"));
});
module.exports = router;