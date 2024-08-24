const core = require('@actions/core');
const github = require('@actions/github');

try {
    // Retrieve the default value from the input
    const defaultValue = core.getInput('default');
    console.debug('Default value retrieved: ', defaultValue);

    // Check if commits array is present in the payload
    if (!github.context.payload.commits) {
        throw new Error('No commits found in the payload.');
    }

    const commits = github.context.payload.commits;
    if (commits.length === 0) {
        throw new Error('Commits array is empty.');
    }

    // Retrieve the commit message from the first commit in the array
    const commitMessage = commits[0].message;
    console.debug('Commit message retrieved: ', commitMessage);

    // Define the regex to match the tag in the commit message
    const tagRegex = /--tag=([\w.-]+)/;
    const match = commitMessage.match(tagRegex);
    console.debug('Regex match: ', match);

    // Determine the Docker image tag
    const dockerImageTag = match ? match[1] : defaultValue;
    console.debug('Docker image tag determined: ', dockerImageTag);

    // Set the output tag
    core.setOutput("tag", dockerImageTag);
} catch (error) {
    // Log the error details
    console.error('An error occurred:', error.message);
    core.setFailed(error.message);
}