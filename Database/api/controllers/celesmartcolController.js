const express = require("express");

var router = express.Router();

const mongoose = require("mongoose");

const OurRicecol = mongoose.model("OurRicecol");

router.get("/", (req, res) => {

  res.render("OurRicecol/addOrEdit", {

    viewTitle: "Insert OurRicecol"

  });

});

router.post("/", (req, res) => {

  if (req.body._id == "") {

    insertRecord(req, res);

  } else {

    updateRecord(req, res);

  }

});



function insertRecord(req, res) {

  var OurRicecol = new OurRicecol();

  OurRicecol.Name = req.body.Name;

  OurRicecol.Price = req.body.Price;

  OurRicecol.Kgs = req.body.Kgs;

  OurRicecol.Qty = req.body.Qty;

  OurRicecol.save((err, doc) => {

    if (!err) {

      res.redirect("OurRicecol/list");

    } else {

      console.log("Error during insert: " + err);

    }

  });

}

 

function updateRecord(req, res) {

  OurRicecol.findOneAndUpdate(

    { _id: req.body._id },

    req.body,

    { new: true },

    (err, doc) => {

      if (!err) {

        res.redirect("OurRicecol/list");

      } else {

        console.log("Error during update: " + err);

      }

    }

  );

}

 

router.get("/list", (req, res) => {

  OurRicecol.find((err, docs) => {

    if (!err) {

      res.render("OurRicecol/list", {

        list: docs

      });

    } else {

      console.log("Error in retrieval: " + err);

    }

  });

});

 

router.get("/:id", (req, res) => {

  OurRicecol.findById(req.params.id, (err, doc) => {

    if (!err) {

      res.render("OurRicecol/addOrEdit", {

        viewTitle: "Update Product",

        OurRicecol: doc

      });

      console.log(doc);

    }

  });

});

 

router.get("/delete/:id", (req, res) => {

  OurRicecol.findByIdAndRemove(req.params.id, (err, doc) => {

    if (!err) {

      res.redirect("/OurRicecol/list");

    } else {

      console.log("Error in deletion: " + err);

    }

  });

});

module.exports = router;