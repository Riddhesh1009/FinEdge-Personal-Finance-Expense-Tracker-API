const fs = require("fs/promises");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
const PATH = "./src/data/users.json";

exports.register = async (email, password) => {
  const users = JSON.parse(await fs.readFile(PATH));
  if (users.find(u => u.email === email))
    throw new Error("User already exists");

  const hash = await bcrypt.hash(password, 10);

  const newUser = { id: uuid(), email, password: hash };
  users.push(newUser);
  await fs.writeFile(PATH, JSON.stringify(users, null, 2));
  return newUser;
};

exports.login = async (email, password) => {
  const users = JSON.parse(await fs.readFile(PATH));
  const user = users.find(u => u.email === email);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
  return token;
};
