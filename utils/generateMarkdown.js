// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license!= "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)"
  }
  return badge;
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT license":
    licenseLink= "https://opensource.org/licenses/MIT";
    break;
    case "Apache 2.0 License":
    licenseLink= "https://opensource.org/licenses/Apache-2.0";
    break;
    case "Boost 1.0 License":
    licenseLink= "https://www.boost.org/LICENSE_1_0.txt";
    break;
    case "BSD 3-Clause License":
    licenseLink= "https://opensource.org/licenses/BSD-3-Clause";
    break;
    case "GPL 3.0 License":
    licenseLink= "https://www.gnu.org/licenses/gpl-3.0";
    break;

    default:
    licenseLink = "";
  }
  return licenseLink;
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += `Please refer to [${license}](${renderLicenseLink(license)}) to acquire details about this license\n`;
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  - [Contact Information](#contact-information)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  I appreciate and encourage any questions you may have. Feel free to reach out for further information.
  ${data.questions}
  
  ## Contact Information
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: ${data.email}`;
}

module.exports = generateMarkdown;
