import jwt from "jsonwebtoken"

export const LoginCheck= (req, res, next) => {


  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send("No token provided")
  }

  // "Bearer token123"
  const token = authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).send("Invalid token format")
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = decoded

    next()
    
  } catch (error) {
    res.status(401).send("Invalid token")
  }
}