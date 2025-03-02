const router = require("express").Router();
const multer = require('multer');
let Category = require("../models/ServiceCategory");

//insert details
const upload = multer({ dest: "uploads/" }); 

router.route("/adddetails").post(upload.single("profilePicture"), (req, res) => {
  const { service,tName, age, experience, qualification } = req.body;
  const profilePicture = req.file ? req.file.path : null; 
  const validServices = [
    'Shadow teacher for school', 
    'Special needs teacher for home', 
    'School Readiness Program', 
    'Student counseling', 
    'Speech and behavior occupational therapy session', 
    'Parent counseling/Parenting session'
  ];

  if (!validServices.includes(service)) {
    return res.status(400).json({ error: "Invalid category selected" });
  }

  const newCategory = new Category({
    service,
    profilePicture,
    tName,
    age,
    experience,
    qualification,
  });

  newCategory.save()
    .then(() => res.json("Details Added..."))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: "Error saving details" });
    });
});


// Add new teacher details
router.post("/adddetails", upload.single("profilePicture"), async (req, res) => {
  try {
    const newCategory = new Category({
      service: req.body.service,
      profilePicture: `/uploads/${req.file.filename}`, 
      tName: req.body.tName,
      age: req.body.age,
      experience: req.body.experience,
      qualifications: req.body.qualification,
      
    });

    await newCategory.save();
    res.json({ message: "Details added successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to add details." });
  }
});

// Get all teacher details
router.get("/alldetails", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch details." });
  }
});

//get tudent counseling
router.get("/counselingdetails", async (req, res) => {
  try {
    const { service } = req.query; 

    let query = {};
    if (service) {
      query.service = service; 
    }

    const categories = await Category.find(query); 
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to fetch details." });
  }
});

router.route("/updatedetails/:detailid").put(async (req, res) => {
    let detailId = req.params.detailid;
    const { service, profilePicture, tName, age, experience, qualification } = req.body;

    const updateDetails = {
        service,
        profilePicture,
        tName,
        age,
        experience,
        qualification
    };

    try {
        console.log("Updating details with data:", updateDetails);
        const updated = await Category.findByIdAndUpdate(detailId, updateDetails, { new: true });

        if (!updated) {
            return res.status(404).json({ status: "Detail not found" });
        }

        res.status(200).json({ status: "Details updated successfully", detail: updated });
    } catch (err) {
        console.error("Error updating details:", err.message); 
        res.status(500).json({ status: "Error updating details", error: err.message });
    }
});

//delete details
router.route("/deletedetails/:detailid").delete(async (req,res) => {
    let detailId = req.params.detailid;

    await Category.findByIdAndDelete(detailId).then(() => {
        res.status(200).send({status: "Details deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete details", error: err.message});
    })
})


router.route("/get/:detailid").get(async (req, res) => {
  let detailId = req.params.detailid;
  try {
      const category = await Category.findById(detailId);
      if (!category) return res.status(404).json({ status: "Details not found" });
      res.status(200).json({ status: "Details fetched", category });
  } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "Error fetching details", error: err.message });
  }
});

// Fetch details by ID
router.route("/details/:detailId").get(async (req, res) => {
    const { detailId } = req.params;
    try {
      const category = await Category.findById(detailId);
      if (!category) {
        return res.status(404).json({ status: "Details not found" });
      }
      res.status(200).json({ status: "Details fetched", category });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "Error fetching details", error: err.message });
    }
  });
  
module.exports = router;


