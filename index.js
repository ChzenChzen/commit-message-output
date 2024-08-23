const core = require('@actions/core');
const github = require('@actions/github');

try {
    const defaultValue = core.getInput('default');
    const commitMessage = github.context.payload.head_commit.message;
    console.log(commitMessage);
    // core.setOutput("tag", commitMessage);
} catch (error) {
    core.setFailed(error.message);
}
