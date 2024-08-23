const core = require('@actions/core');
const github = require('@actions/github');

try {
    const defaultValue = core.getInput('default');
    core.debug(`SHA: ${github.context.sha}`);
    core.debug(`Ref: ${github.context.ref}`);
    core.debug(`Job: ${github.context.job}`);
    core.debug(`Actor: ${github.context.actor}`);
    core.debug(`Action: ${github.context.action}`);
    core.debug(`API URL: ${github.context.apiUrl}`);
    core.debug(`Event Name: ${github.context.eventName}`);
    core.debug(`GraphQL URL: ${github.context.graphqlUrl}`);
    core.debug(`Workflow: ${github.context.workflow}`);
    console.debug(`Payload: ${JSON.stringify(github.context.payload, null, 2)}`);
    let commitMessage = github.context.payload.commits[0].message
    core.setOutput("tag", commitMessage);
} catch (error) {
    core.setFailed(error.message);
}
