import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";


const AdminManageJobs = () => {

  const [pendingJobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://oims-tan.vercel.app/api/v1/jobs/pending-jobs')
        .then(response => {
            setJobs(response.data || []); // Ensure you access the correct data
            setIsLoading(false);
        })
        .catch(err => {
            console.error('Failed to fetch jobs', err);
            if (err.response && err.response.status === 400) {
                setError('There are no pending jobs');
            } else {
                setError('Failed to load jobs. Please try again later.');
            }
            setIsLoading(false);
        });
}, []);

  const updateJobModal = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#19b74b",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
    }).then((result) => {
        if (result.isConfirmed) {
          UpdateJobApprove(id);
        }
    });
};

const UpdateJobApprove = async (id, role) => {
    const approveJob = { id };
    try {
        const response = await axios.patch(
            `https://oims-tan.vercel.app/api/v1/admin/approve-job`,
            approveJob,
            { withCredentials: true }
        );
        Swal.fire({
            title: "Done!",
            text: "Job Updated Successfully",
            icon: "success",
        });
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: "Sorry!",
            text: error?.response?.data,
            icon: "error",
        });
    }
};
// const
  /*
    const UpdateUserRole = async (id, role) => {
        const updateUser = { id, role };
        try {
            const response = await axios.patch(
                `https://oims-tan.vercel.app/api/v1/admin/update-role`,
                updateUser,
                { withCredentials: true }
            );
  */

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (error) {
      return <div>{error}</div>;
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="titles">
          <p>Job Title</p>
          <p>Posted By</p>
          <p>Upload Date</p>
          <p>Action</p>
        </div>
        {pendingJobs.map((job, index) => (
          <div className="elems" key={index}>
            <p>{job.position}</p>
            <p>{job[1]}</p>
            <p>{job[2]}</p>
            <div className="action">
              <button onClick={() =>
                updateJobModal(job._id)
              }>Approve!</button>
              <button className="disapprove">Disapprove!</button>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 12px;
  }
  
  .titles, .elems {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: white;
    font-weight: bold;
  }
  .disapprove {
    background-color: red;
  }

  .titles {
    background-color: #972115;
  }
  
  .elems {
    margin-top: 10px;
    background-color: #858585;
  }
  
  .action {
    display: flex;
    gap: 10px;
  }

  .action button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 3px;
  }
  .action .disapprove {
    background-color: #972115;
  }

  .action .disapprove:hover {
    background-color: #b51d12;
  }
  .action button:hover {
    background-color: #45a049;
  }

  p {
    flex: 1;
    text-align: center;
    margin: 0;
  }
`;

export default AdminManageJobs;
