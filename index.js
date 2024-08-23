const core = require('@actions/core');
const github = require('@actions/github');

try {
    const defaultValue = core.getInput('default');
    const commitMessage = github.context.payload.commits[0].message
    const tagRegex = /--docker-image-tag=([\w.-]+)/;
    const match = commitMessage.match(tagRegex);
    const dockerImageTag = match ? match[1] : defaultValue;

    core.setOutput("tag", dockerImageTag);
} catch (error) {
    core.setFailed(error.message);
}
