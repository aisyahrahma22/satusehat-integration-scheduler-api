import axios from 'axios';

// Helper function to handle POST requests
const postRequest = async (url, body) => {
  const config = {
    headers: { 
      'Content-Type': 'application/json', 
    }
  };
  
  try {
    const response = await axios.post(url, body, config);
    console.log('Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
};

// Scheduler functions
export const schedulerEncounter = async () => {
  console.log("Scheduling Encounter");
  const url = `${process.env.HIS_BRIDGING_API}/api/fhir/encounter/scheduler`;
  return postRequest(url, {});
};

export const schedulerEncounterDuplicate = async () => {
  console.log("Scheduling Encounter Duplicate");
  const url = `${process.env.HIS_BRIDGING_API}/api/fhir/encounter/duplicate`;
  return postRequest(url, {});
};

export const schedulerItemEncounter = async () => {
  console.log("Scheduling Encounter Item");
  const url = `${process.env.HIS_BRIDGING_API}/api/fhir/encounter/item`;
  try {
    await postRequest(url, {});
    return 'Success running scheduler item encounter';
  } catch (error) {
    console.error('Error scheduling item encounter:', error.message);
    throw error;
  }
};

export const schedulerLabEncounter = async () => {
  console.log("Scheduling LAB Encounter");
  const url = `${process.env.HIS_BRIDGING_API}/api/fhir/laboratory/scheduler-lab`;
  return postRequest(url, {});
};
