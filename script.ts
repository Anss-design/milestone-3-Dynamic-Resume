// listing element

document.getElementById('resumeform')?.addEventListener('submit', function (event) {
    event.preventDefault();


    // type assertion
    const profilepictureinput = document.getElementById('profilepicture') as HTMLInputElement;

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;


    if (profilepictureinput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // picture elements
        const profilepicturefile = profilepictureinput.files?.[0];
        const profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';


        // creating resume output
        const resumeOutput = `
    <h2>Resume</h2>
    ${profilepictureurl ? `<img src="${profilepictureurl}" alt="profile Picture" class="profilePicture">` : ''}
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

        const resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('Resume output element not found');
        }
    }
})
