
function generateID() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const date = currentDate.getDate().toString().padStart(2, '0');
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    return `${year}${month}${date}${hours}${minutes}${seconds}`;
  }


export default generateID;



// const Array = [{
//     Uhid: generateID(),
//     name: "rishabh",
//     age: "24",
//     sex: "male",
//     address: "new tehsil, khurja",
//     contact_number: 9997053746,
//     Info: [{
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     }
// ]
// },
// {
//     Uhid: generateID(),
//     name: "rishabh",
//     age: "24",
//     sex: "male",
//     address: "new tehsil, khurja",
//     contact_number: 9997053746,
//     Info: [{
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     }
// ]
// },
// {
//     Uhid: generateID(),
//     name: "rishabh",
//     age: "24",
//     sex: "male",
//     address: "new tehsil, khurja",
//     contact_number: 9997053746,
//     Info: [{
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     },
//     {
//         Date: "23 June 2023",
//         Symptoms: "Typhoid",
//         Tests: "CBT",
//         Medicine_suggested: "Meftal Forte" 
//     }
// ]
// }];