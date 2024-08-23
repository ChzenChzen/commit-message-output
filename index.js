const core = require('@actions/core');
const github = require('@actions/github');

try {
    const defaultValue = core.getInput('default');
    const commitMessage = process.env.COMMIT_MESSAGE
    console.log(commitMessage);
    // core.setOutput("tag", commitMessage);
} catch (error) {
    core.setFailed(error.message);
}
