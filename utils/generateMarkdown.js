function generateMarkdown(responses, info) {
  let genCont = `## Table of Contents`;
  if (responses.installation !== '') {
    genCont += `
    * [Installation](#installation)` };
  if (responses.usage !== '') {
    genCont += `
    * [Usage](#usage)` };
  if (responses.contributing !== '') {
    genCont += `
    * [Contributing](#contributing)` };
  if (responses.tests !== '') {
    genCont += `
    * [Tests](#tests)` };

  let genMarkdown =
    `# ${responses.title}
  (https://img.shields.io/npm/v/npm/${responses.username}/${responses.repo}?style=flat)
  (https://img.shields.io/github/languages/top/${responses.username}/${responses.repo}?style=flat)
  (https://img.shields.io/github/last-commit/${responses.username}/${responses.repo}?style=flat)
 
  ## Description 
  
  ${responses.description}
  `
  genMarkdown += genCont;

  genMarkdown += `
  * [License](#license)`;

  if (responses.installation !== '') {
    genMarkdown +=
      `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${responses.installation}`
  };

  if (responses.usage !== '') {
    genMarkdown +=
      `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${responses.usage}`
  };

  if (responses.contributing !== '') {
    `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${responses.contributing}`
  };

  if (responses.tests !== '') {
    genMarkdown +=
      `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${responses.tests}`
  };

  genMarkdown +=
    `
  
  ## License
  
  ${responses.license}
  `;

  let genAbout =
    `
  ---
  
  ## Questions? 
  
  Contact me with any questions using the information below:
 
  GitHub: [@${info.login}](${info.url})
  `;

  if (info.email !== null) {
    genAbout +=
      `
  Email: ${info.email}
  `};
  genMarkdown += genAbout;
  return genMarkdown;
}
module.exports = generateMarkdown;