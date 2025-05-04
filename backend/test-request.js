const fetch = require('node-fetch'); // Install with: npm install node-fetch

async function addDoctor() {
    const doctorData = {
        image: "https://tinyurl.com/4jrv4vzv",
        name: "Dr. Node Doctor",
        title: "Node Specialist",
        years: 7,
        degree: "MD Node",
        location: "Node City",
        clinicLocation: "Node Hospital",
        rating: 88,
        patients: 750,
        price: 700,
        cashback: 80,
        availability: {
            minutes: 35
        }
    };

    try {
        const response = await fetch('http://localhost:5000/api/doctors', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(doctorData)
        });
        
        const result = await response.json();
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

addDoctor();