const { format } = require('date-fns');
const { randomUUID: uuid } = require("crypto");const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const logsDir = process.env.VERCEL
  ? "/tmp/logs"
  : path.join(__dirname, "..", "logs");

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    try {
        if (!fs.existsSync(logsDir)) {
            await fsPromises.mkdir(logsDir, { recursive: true });
        }
        await fsPromises.appendFile(path.join(logsDir, logName), logItem);
    } catch (err) {
        console.log(err);
    }
};

// ✅ logger is now outside logEvents and outside the catch block
const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'regLogs.txt');
    console.log(`${req.method} ${req.path}`);
    next();
};

module.exports = { logger, logEvents };