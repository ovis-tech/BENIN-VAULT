const { format } = require('date-fns');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');

const logsDir = process.env.VERCEL
  ? "/tmp/logs"
  : path.join(__dirname, "..", "logs");

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy-MM-dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuidv4()}\t${message}\n`;
    console.log(logItem);

    try {
        if (!fs.existsSync(logsDir)) {
            await fsPromises.mkdir(logsDir);
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
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