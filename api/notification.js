//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': process.env.QUICKNODE_API_KEY
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdhMmM4MzQ1YjMwQjRjMjZlMTE4RjMwNzI2OWRFOTY5MTNEYmRCNGJDJykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweEQ2MTg1ODE0MDIyMjZjOTJiMTRDOWY0ODcwNzk5YjMwMDBBQzRDNzcnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['fa375e89-8c4c-4260-8c0b-91cb20cd4da9']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

