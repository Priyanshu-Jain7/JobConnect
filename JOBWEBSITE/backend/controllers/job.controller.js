import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const { title, description, requirements, location, salary, jobtype, experience, position, companyId } = req.body;

    // validation
    if (!title || !description || !requirements || !location || !salary || !jobtype || !experience || !position || !companyId) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    const userId = req.userId; // from auth middleware

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      salary: Number(salary),
      location,
      jobtype,      //  add to schema if you want it persisted
      position,     //  add to schema if you want it persisted
      experience: Number(experience),
      company: companyId,
      postedBy: userId,
    });

    return res.status(201).json({ message: "Job posted successfully", success: true, job });
  } catch (error) {
    console.error("Error posting job:", error);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};

export const getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query={
            $or:[
                {title:{$regex:keyword,$options:"i"}},
                {description:{$regex:keyword,$options:"i"}},
            ]   
        };
        const  jobs = await Job.find(query).populate({path:"company"}).sort({createdAt:-1});
        if(!jobs){
            return res.status(404).json({ message: "No jobs found", success: false });
        }

        return res.status(200).json({ message: "Jobs fetched successfully", success: true, jobs });
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId)
        if(!job){
            return res.status(404).json({ message: "Job not found", success: false });
        }

        return res.status(200).json({ message: "Job fetched successfully", success: true, job });
    } catch (error) {
        console.error("Error fetching job:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export const getAdminJobs = async (req, res) => {
    try{
        const adminId = req.userId;
        const jobs= await Job.find({postedBy:adminId});
        if(!jobs){
            return res.status(404).json({ message: "No jobs found", success: false });
        }

        return res.status(200).json({ message: "Jobs fetched successfully", success: true, jobs });
    } catch (error) {
        console.error("Error fetching admin jobs:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};