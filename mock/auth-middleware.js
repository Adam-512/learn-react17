//https://expressjs.com/en/api.html#req
//is express middleware
const fakeToken = "sdfhsdhghgjh";
module.exports = (req, res, next) => {
  console.log(req.method.toLowerCase(), req.path);
  if (req.method.toLowerCase() === "post" && req.path === "/login") {
    let { username, password } = req.body;
    if (username === "jack" && password === "123456") {
      res.send({
        token: fakeToken,
      });
    }
  } else {
    const token = req.get("token");
    if (token !== fakeToken) {
      res.status(400).send("no auth token").end();
    } else {
      next();
    }
  }
};
