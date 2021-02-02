const router = require("express").Router();
const Creditor  = require("../db/models/Creditor")

//Get /api/creditors
router.get("/", async(req, res, next) => {
   try {
      const allCreditors = await Creditor.findAll(); 
      res.send(allCreditors)
   } catch (error) {
      next(error); 
    }
    
});

module.exports = router
