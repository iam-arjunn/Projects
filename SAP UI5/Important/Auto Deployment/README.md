# SAP BTP Deployment Automation using GitHub Actions

This document provides a professional guide to setting up and configuring a GitHub Actions workflow to automate the deployment of Multi-Target Applications (MTA) to SAP Business Technology Platform (BTP). It covers all the steps from scratch, including workflow creation, credential management, and deployment.

---

## Table of Contents

1. Introduction
2. Prerequisites
3. Repository Setup
4. Creating the GitHub Actions Workflow
5. Workflow Configuration
6. Storing Credentials Securely
7. Running the Workflow
8. Customization
9. References

---

## 1. Introduction

GitHub Actions provides a powerful automation platform that can be used to build, test, and deploy applications. This guide focuses on using GitHub Actions to automate the deployment of MTA projects to SAP BTP Cloud Foundry.

The workflow includes:
- Building the MTA project using the MTA Build Tool (mbt)
- Uploading artifacts
- Deploying the MTA package to SAP BTP

---

## 2. Prerequisites

Before starting, ensure you have the following:

- GitHub account
- Repository with your SAP MTA project
- Node.js installed (version 20 recommended)
- npm package manager
- Access to SAP BTP Cloud Foundry with the following information:
  - API endpoint
  - Username
  - Password or service key
  - Organization name
  - Space name

---

## 3. Repository Setup

1. Navigate to your GitHub repository.
2. Create a folder named `.github/workflows` in the root directory.
3. All workflow files should be placed in this folder.

---

## 4. Creating the GitHub Actions Workflow

1. Create a new file in `.github/workflows` named `deploy.yml`.
2. Copy the following base workflow into the file:

```yaml
name: Deploy to SAP BTP

on:
  push:
    branches:
      - main
  workflow_dispatch:
    inputs:
      loglevel:
        description: 'Log level'
        required: true
        default: 'warning'

concurrency:
  group: 'ci-btp-deploy'
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-22.04

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20

      - name: Install MTA Build Tool
        run: npm install -g mbt

      - name: Build MTA project
        run: mbt build -p=cf --mtar target/your_project_name.mtar

      - name: Upload Artifact
        uses: actions/upload-artifact@v4
        with:
          name: mta
          path: ./target/your_project_name.mtar

  deploy:
    runs-on: ubuntu-22.04
    needs: build

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: mta
          path: ./target

      - name: Install Cloud Foundry CLI
        run: |
          wget -q -O - "https://packages.cloudfoundry.org/debian/cli.cloudfoundry.org.key" | sudo apt-key add -
          echo "deb https://packages.cloudfoundry.org/debian stable main" | sudo tee /etc/apt/sources.list.d/cloudfoundry-cli.list
          sudo apt-get update
          sudo apt-get install -y cf-cli

      - name: Login to Cloud Foundry
        run: |
          cf login -a ${{ secrets.CF_API }}                    -u ${{ secrets.CF_USERNAME }}                    -p ${{ secrets.CF_PASSWORD }}                    -o ${{ secrets.CF_ORG }}                    -s ${{ secrets.CF_SPACE }}

      - name: Deploy MTA to SAP BTP
        run: cf deploy ./target/your_project_name.mtar
```

---

## 5. Workflow Configuration

- **Branches:** Change the branch name under `push` if you want to trigger deployments from a different branch.
- **Project Name:** Replace `your_project_name.mtar` with the actual name of your MTA project.
- **Log Level:** Can be modified when manually running the workflow.

---

## 6. Storing Credentials Securely

Use GitHub Secrets to store sensitive information. Navigate to:
`Settings > Secrets and variables > Actions > New repository secret`

Add the following secrets:

| Secret Name   | Description |
|---------------|-------------|
| CF_API        | Cloud Foundry API endpoint |
| CF_USERNAME   | BTP username |
| CF_PASSWORD   | BTP password or service key |
| CF_ORG        | Cloud Foundry organization name |
| CF_SPACE      | Cloud Foundry space name |

These secrets will be accessed in the workflow using `${{ secrets.SECRET_NAME }}`.

---

## 7. Running the Workflow

- **Automatic Trigger:** Push changes to the configured branch (default `main`).
- **Manual Trigger:** Go to the `Actions` tab in GitHub, select the workflow, and click `Run workflow`. You can specify log level and other inputs if configured.

---

## 8. Customization

- Replace `main` with any development or feature branch as required.
- Modify the `deploy` job to include additional deployment steps such as `mtar` version checks or staging environments.
- Include unit tests, linting, or code quality checks before deployment.
- Use service keys instead of username/password for better security.

---

## 9. References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [SAP MTA Build Tool](https://help.sap.com/docs/MULTI-TARGET_APPLICATION)
- [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/)
- [Managing GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

This workflow and README serve as a reusable template for automating SAP BTP deployments using GitHub Actions.
