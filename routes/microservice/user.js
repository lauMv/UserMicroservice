const router = require("express").Router();

const { User } = require("../../db.config");

router.get("/", async (req, res) => {
   const user = await User.findAll();
   res.json(user);
});

router.post("/", async (req, res) => {
   const user1 = await User.create(req.body);
   res.json(user1);
});

router.put("/:id", async (req, res) => {
   await User.update(req.body, {
      where: { id: req.params.id },
   });
   res.json({ success: "update-->" });
});

router.delete("/:id", async (req, res) => {
   await User.destroy({
      where: { id: req.params.id },
   });
   res.json({ success: "delete-->" });
});

module.exports = router;
