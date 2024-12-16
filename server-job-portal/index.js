const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(
  cors({
    origin: ['http://localhost:5173'],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
  // console.log('verify token')

  const token = req?.cookies?.token 
  console.log(token)
  if(!token) {
    return res.status(401).send({message: 'unauthorize access'})
  }

  jwt.verify(token , process.env.JWT_SECRET , (err , decode) => {
console.log(decode)
    if(err) {
      return res.status(403).send({message : 'error form err'})
    }
    req.user = decode
    next()
  })
}

// main section starts
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zpuvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // server main section start's----->
    const jobsCollection = client.db("jobPortalAhanaf").collection("jobs");
    // Job Application Collection
    const applicationCollection = client
      .db("jobPortalAhanaf")
      .collection("applications");

    // Auth Related Api

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "5h" });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
          // sameSite: "none"
        })
        .send({ success: true });
    });

    // post data for Add JObs

    app.post("/jobs", async (req, res) => {
      const newJobs = req.body;
      const result = await jobsCollection.insertOne(newJobs);
      res.send(result);
      console.log(result);
    });

    

    // get all data using find

    app.get("/jobs", async (req, res) => {
      const cursor = jobsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // get One Data using id
    app.get("/details/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobsCollection.findOne(query);
      res.send(result);
    });

    // insert data for job Application

    app.post("/jobApplications", async (req, res) => {
      const application = req.body;
      const result = await applicationCollection.insertOne(application);
      res.send(result);
    });

    // get data by email for Job Application
    app.get("/jobApplications", verifyToken,  async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
console.log(req.user.email , req.query.email)
      if(req.user.email !== req.query.email) {
        return res.status(403).send({message : 'unauthorize access '})
      }
      console.log("cookies is " , req.cookies);
      const result = await applicationCollection.find(query).toArray();
      res.send(result);

      for (const apply of result) {
        const query1 = { job_id: new ObjectId(apply.job_id) };
        const job = await jobsCollection.findOne(query1);
        if (job) {
          apply.title = job.title;
          apply.company = job.company;
        }
      }
    });


    // / get my jobs by email

     app.get("/jobApplications",verifyToken, async (req, res) => {
       const email = req.query.email;

       let query = {};
       if (email) {
         query = { applicant_email: email };
       }
       if(req.user.email !== req.query.email) {
        return res.status(403).send({message : 'unauthorize access '})
      }
       const cursor = applicationCollection.find(query);
       const result = await cursor.toArray();
       res.send(result);
     });

    // get job application using job id

    app.get("/job-apply/job/:job_id", async (req, res) => {
      const job_Id = req.params.id;
      const query = { job_id: job_Id };
      const result = await applicationCollection.find(query).toArray();
      res.send(result);
    });
  } finally {
  }
}
run().catch(console.dir);
// main section ends

app.get("/", (req, res) => {
  res.send("Job Portal Server is running Now");
});

app.listen(port, () => {
  console.log(`Running port is : ${port}`);
});
