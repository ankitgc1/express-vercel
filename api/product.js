const express = require("express");
const router = express.Router();

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.get("/", async (req, res) => {
  var data = {"price": "price"};
  res.end(JSON.stringify(data));
});

module.exports = router;
