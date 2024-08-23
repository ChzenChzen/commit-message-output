# Commit Message Output GitHub Action

This GitHub Action parses a commit message to extract a specific tag and provides it as output. If the tag is not found, it uses a default value provided in the inputs.

## Inputs

### `default`

- **Description**: Default value to use if the commit message does not contain a proper tag.
- **Required**: `true`
- **Default**: `'latest'`

## Outputs

### `tag`

- **Description**: The parsed tag from the commit message.

## Example Workflow

Below is an example of how to use this action in a GitHub Actions workflow:

```yaml
name: Test GitHub Action

on:
  push:
    branches:
      - main

jobs:
  test:
    name: Test GitHub Action
    runs-on: ubuntu-22.04
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
        
      - name: Run GitHub Action
        uses: chzenchzen/commit-message-output@main
        id: test-run
        with:
          default: 'latest'
        
      - name: Debug output
        run: echo "${{ steps.test-run.outputs.tag }}"
```

## Detailed Usage

### Usage in a Workflow

1. **Create a workflow YAML file in your repository's `.github/workflows/` directory.**
2. **Copy the example code above into your workflow YAML file.**
3. **Commit and push your changes to GitHub.**

When you push code to the main branch, this workflow will run, parse the commit message, and extract the tag.

### Understanding the Code

- The action checks the commit message for the pattern `--tag=[TAG]`.
- If a tag is found, it sets this as the output `tag`.
- If no tag is found, it uses the default value provided in the input `default`.

## Contributing

If you find any issues or have enhancements, feel free to [open an issue](../../issues) or create a pull request.

## License

This project is [MIT Licensed](LICENSE).