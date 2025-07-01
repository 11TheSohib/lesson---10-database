import db from "../config/db.js";

const addUser = (req, res) => {
  try {
    const { username, age, full_name } = req.body;

    if (!username || !age || !full_name) {
      return res
        .status(400)
        .send({ message: "Barcha maydonlarni to'ldiring!" });
    }

    const today = new Date();

    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");

    const createAt = `${yyyy}-${mm}-${dd}`;
    const updateAt = `${yyyy}-${mm}-${dd}`;

    db.query(
      `
    INSERT INTO users (username, age, full_name, createAt, updateAt)
    VALUES (?, ?, ?, ?, ?)
    `,
      [username, age, full_name, createAt, updateAt],
      (error, result) => {
        if (error) {
          return res
            .status(500)
            .send({ message: "Server xatosi!", errorMassege: error.message });
        }
        res
          .status(201)
          .send({ message: "User qo'shildi!", imageId: result.insertId });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const getUser = (req, res) => {
  try {
    const { minAge, maxAge } = req.query;

    db.query(
      `SELECT * FROM users WHERE age >= ${minAge} AND age <= ${maxAge}`,
      (error, result) => {
        if (error) {
          return res.status(500).send({ message: "Server xatosi!" });
        }
        res.status(200).send({ data: result });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateUser = (req, res) => {
  try {
    const id = req.params.id;
    const { username, age, full_name } = req.body;

    if (!username || !age || !full_name) {
      return res
        .status(400)
        .send({ message: "Barcha maydonlarni to'ldiring!" });
    }

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    const updateAt = `${yyyy}-${mm}-${dd}`;

    db.query(
      `UPDATE users SET username = ?, age = ?, full_name = ?, updateAt = ? WHERE id = ?`,
      [username, age, full_name, updateAt, id],
      (error, result) => {
        if (error) {
          return res
            .status(500)
            .send({ message: "Server xatosi!", errorMassege: error.message });
        }
        res
          .status(200)
          .send({ message: "Foydalanuvchi yangilandi", data: result });
      }
    );
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

export { addUser, getUser, updateUser };
