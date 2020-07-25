function markdownGenerator (data) {
    
    const licenseEdit = data.license.replace(" ", "%20");
    return ` # ${data.title}
  #  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseEdit}-blue.svg)
   
   ## Description 
   ${data.description}
   
   ## Table of Contents
   * [License](#license)
   * [Installation](#installation)
   * [Usage](#usage)
   * [Contributing](#contributing)
   * [Testing](#testing)
   * [Contact](#contact)
   
   ## License
   This project is under the protection of the ${data.license} license. All usage of this project must be in accordance with said license.
   
   ## Installation
   ${data.installation}
   
   ## Usage
   ${data.usage}
   
   ## Contributing
   ${data.contributing}
   
   ## Testing
   ${data.testing}
   
   ## Contact
   * GitHub Username: [${data.gitHubName}](https://github.com/${data.username})
   * Email: ${data.email}
`

   
}

module.exports = markdownGenerator;