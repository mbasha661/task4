let resume = {
    "name": "Mahaboob Basha",
    "age": 26,
    "gender": "male",
    "qualification":"BE MECH",
    "KNOWN COURSE":"FULL STATCK"
  };
  

//   FOR LOOP

  for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
//   FOR IN LOOP
for (let key in resume) {
    console.log(`${key}: ${resume[key]}`);
  }
    // for of loop
    const values = Object.values(resume);

for (let value of values) {
  console.log(value);
}

//   for each
Object.entries(resume).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  