# How to Manually Trigger the GitHub Pages Deployment

To deploy the latest changes from the `main` branch to GitHub Pages, follow these steps:

1.  **Navigate to the Actions tab:**
    *   Go to the main page of the repository: `https://github.com/PoehlmannLuis/genai-consulting-website`
    *   Click on the "Actions" tab located along the top navigation bar (next to "Code", "Issues", "Pull requests", etc.).

2.  **Select the deployment workflow:**
    *   In the left sidebar, under "All workflows", find and click on the workflow named **"Deploy to GitHub Pages"**. This is the workflow defined in `.github/workflows/deploy.yml`.

3.  **Run the workflow:**
    *   On the workflow page, you should see a message indicating "This workflow has a `workflow_dispatch` event trigger."
    *   To the right of this message (or below the list of previous workflow runs), click the button labeled **"Run workflow"**.

4.  **Confirm and initiate the deployment:**
    *   A small dropdown or dialog box will appear.
    *   Ensure that the "Use workflow from" (or similarly phrased option) is set to **"Branch: main"** (or your repository's default branch if it's different).
    *   Click the green **"Run workflow"** button within this dropdown/dialog.

**Monitoring the Deployment:**

*   After initiating the workflow, you will be taken to the workflow run page.
*   You can monitor the progress of each step: Checkout, Setup Node.js, Install dependencies, Build Next.js site, Setup Pages, Upload artifact, and Deploy to GitHub Pages.
*   The deployment might take a few minutes to complete.
*   Once the "Deploy to GitHub Pages" job is successful, your changes should be live at: `https://poehlmannluis.github.io/genai-consulting-website/`

If you encounter any issues, check the logs for the failed step in the workflow run for error messages.
