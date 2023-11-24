const rateLimit = require('express-rate-limit');

const uploadLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3, // Limit each IP to 3 requests per windowMs
  // Additional configuration...
});

module.exports = uploadLimiter;
