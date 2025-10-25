# Move Directory Workflow

This GitHub Actions workflow used to **move all contents from one directory to another** within the same repository. The workflow is triggered manually and can also delete the source directory after copying.

---

## Workflow: Move Directory

**File Location:**  
`.github/workflows/move-directory.yml`

### Features
- Manually triggered using the **Actions tab**.
- Accepts **source** and **target** paths as input parameters.
- Validates that the **source directory exists** and **target directory exists**.
- Checks that the **source directory is not empty**.
- Copies all files and subfolders from the source directory into the target directory.
- Deletes the source directory after copying.
- Commits and pushes changes to the repository using a **Personal Access Token (PAT)**.

---

## Usage

1. Go to the **Actions tab** in your repository.
2. Select the **Move Directory** workflow.
3. Click **Run workflow**.
4. Provide the following inputs:
   - `source_path`: Path to the directory you want to move (relative to repo root).  
   - `target_path`: Path to the directory where you want to copy contents (relative to repo root).  
5. Click **Run workflow**.

Example:

| Input          | Value                          |
|----------------|--------------------------------|
| source_path    | `Project/UI5/cost-center`      |
| target_path    | `Project/UI5/Personal`         |

---

## Requirements

- You must create a **Personal Access Token (PAT)** with **repo permissions**.
- Add the PAT as a **repository secret** named `MOVE_FOLDER`.
- The workflow uses this secret to commit and push changes.

---

## Notes

- The workflow will **fail** if:
  - The source directory does not exist.
  - The target directory does not exist.
  - The source directory is empty.
- All files and subfolders inside the source directory will be copied into the target directory.
- After copying, the source directory will be deleted.
- Existing files in the target directory are **not overwritten**, but new files from source are added.

---

## Example Directory Structure

Before running:

