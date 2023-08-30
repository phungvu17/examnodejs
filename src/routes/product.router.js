const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");




router.get("/", controller.list);
router.get("/edit/:id", controller.formEdit);
router.post("/edit/:id",  controller.update);

router.get("/create", controller.formCreate);
router.post("/create",  controller.store);
router.get("/delete/:id", controller.delete);





module.exports = router;