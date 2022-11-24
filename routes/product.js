const router = require("express").Router();
const productController = require('../controllers/productController');

router.post("/", productController.product_create);
router.post("/c1", productController.product_create1);
router.post("/c2", productController.product_create2);
router.get("/user", productController.product_all);
router.get("/jobs", productController.product_all1);
router.get("/userjob", productController.product_all2);
router.get("/produ", productController.produ);
router.get("/:productId", productController.product_details);
router.put("/:productId", productController.product_update);
router.delete("/:productId", productController.product_delete);

router.get("/vv",(req,res) => {
    
});

module.exports = router;
