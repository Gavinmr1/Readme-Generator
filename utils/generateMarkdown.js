function generateMarkdown(responses, info) {
  //table of contents
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
    //generate markdown for readme
  let genMarkdown =
    `# ${responses.title}

  ## Description 
  
  ${responses.description}
  `//add table of contents
  genMarkdown += genCont;
//add license section
  genMarkdown += `
  * [License](#license)`;
//add install section
  if (responses.installation !== '') {
    genMarkdown +=
      `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${responses.installation}`
  };
//add usage section
  if (responses.usage !== '') {
    genMarkdown +=
      `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${responses.usage}`
  };
//add contribution section
  if (responses.contributing !== '') {
    `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${responses.contributing}`
  };
//add test section
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
//question section
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