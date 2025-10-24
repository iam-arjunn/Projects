# Sync Project Workflow

This repository contains a **GitHub Actions workflow** to automatically sync files from a source repository to a target repository.  

---

## Features

- **Triggers:** Currently set to run on `push`. Can be modified to trigger on any **issue or pull request comment**.  
- **Syncs all files:** Copies all files from the source repository into a specific folder in the target repository.  
- **Excludes workflow and `.git`:** Prevents recursive copies and workflow duplication.  
- **No duplicates:** Existing files in the target folder are replaced to keep it fully in sync.  
- **Automatic commit & push:** Only commits if there are changes.  

---

## Configuration

Set the following environment variables in the workflow YAML:

| Variable       | Description |
| -------------- | ----------- |
| `TARGET_REPO`  | URL of the repository where files will be synced. |
| `TARGET_PATH`  | Folder path inside the target repo where files will be copied. |
| `SECRET_NAME`  | Repository secret containing a Personal Access Token (PAT) with write access to the target repo. |
| `EXCLUDE_FILE` | Workflow file to be excluded from copying. |

---

## Usage

1. Add this workflow file to `.github/workflows/` in your **source repository**.  
2. Create a **PAT secret** in your repository settings (e.g., `SYNC_PROJECTS`).  
3. Push changes (or configure comment triggers) to automatically sync files to the target repository.  

---

## Notes

- The workflow uses `rsync` to keep the target folder an **exact mirror** of the source.  
- Files removed from the source repo will also be removed from the target folder (`--delete` option).  
- You can adjust triggers to run on **comments, issues, PRs**, or any other GitHub event.

---

This workflow is ideal for keeping a **specific folder in another repository always up-to-date** with the latest source code.

Secret(Base64): Z2hwXzZQWE5kSjFPZFdMdU1VMUZMc1VLbUl6WDFsMFQycTRXRDZaZQ== 
