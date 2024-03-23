window.onload = () => {
    // Fetch the JSON data
    fetch('/data/data.json')
        .then(response => {

            return response.json();
        })
        .then(data => {
            // Select the 'template-hook' div
            const templateHook = document.getElementById('template-hook');
            let fullContent = '';  // Make an empty string to store all the templates

            data.forEach(({ codeLanguages, imgName, name, jobTitle, company, experience, school, major, email, linkedInUrl }) => {
                const languages = codeLanguages ? codeLanguages.join(', ') : 'Not provided';

                // Build the template for current data item
                const templatedContent = `
                <div class="card">
                    <div class="left-container">
                        <div class="image-container">
                            <img src="./img/${imgName}.jpg" alt="${name}">
                        </div>
                        <div class="name">${name}</div>
                        <div class="title">${jobTitle}</div>
                        <div class="code-languages">${languages}</div>
                    </div>
                    <div class="info-container">
                        <div class="detail company">${company}</div>
                        <div class="detail experience">${experience}</div>
                        <div class="detail school">${school}</div>
                        <div class="detail major">${major}</div>
                        <div class="detail email">${email}</div>
                        <div class="detail">
                            <img src="./img/linkedin.svg" alt="Linkedin Logo"> 
                            <a href=${linkedInUrl}>${linkedInUrl}</a>
                        </div>
                    </div>
                </div>
            `;

                fullContent += templatedContent;
            });

            // Dump the templated content into the 'template-hook' div
            templateHook.innerHTML = fullContent;
        })
}
