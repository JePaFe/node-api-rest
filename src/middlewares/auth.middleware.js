import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};
