function generateMarkdown (data) {
    const licenseEdit = data.license.replace("","%20");
    return ` # ${data.Title}
    
    # ![License: ${data.license}](https://img.shields.io/badge/License-${licenseEdit}-informational?style=for-the-badge&logo=appveyor.svg)]
   
   ## Description 
   ${data.description}
   
   ## Table of Contents
   * [License](#license)
   * [Installation](#installation)
   * [Usage](#usage)`

   
}