# Backup and Recovery Plan

As a team, we understand the importance of having an extensive backup and recovery plan in place for our website hosted on GitHub and deployed via GitHub Pages.

Our plan includes the following steps:

1. Regularly backup GitHub repository:
    - Clone repository to local machines or use the "Download" option in the GitHub repository's "Code" tab.
    - Perform regular backups, such as daily or weekly, to ensure up-to-date copies of the website's source code.
    - Before we work, we always pull the latest development branch first

2. Enable GitHub Pages auto-deployments:
    - Automatically build and deploy the website whenever changes are pushed to the main branch of the repository.
    - Ensures that the latest version of the website is always backed up and available for recovery.
    - Checks are implemented via github workflows to ensure only stable builds are deployed

3. Store backups in multiple locations:
    - Store copies of code in various locations.
    - Besides our different devices, we also have cloud storage that can be utilized.
    - Ensure that backup storage locations are secure, encrypted, and accessible only to authorized personnel.

4. Test restoration process:
    - Occasionally use backups to recover the site locally to ensure the backups are valid.
    - Identify and fix any issues before an actual recovery situation arises.
    
8. Monitor website performance and security:
    - Regularly monitor website's performance, availability, and security using monitoring tools or services such as lighthouse tests.
    - Detect and address any performance issues or security vulnerabilities as soon as possible.
    - Utilize playwright tests to ensure website is functioning correctly and reliably

5. Document backup and recovery plan:
    - Include detailed instructions on creating and storing backups, restoring from backups, and access to backup storage locations.
    - Ensure all team members are aware of procedures and can follow them in case of a data loss event.
    - Team members are aware that they have to keep redundant copies 

6. Regularly monitor and update the plan:
    - Keep track of changes in website's architecture, dependencies, and hosting environment.
    - As we work, we utilize different packages and dependencies so it's crucial we are aware of what we have to install using npm install
    - Update the plan accordingly to ensure it remains up-to-date and aligned with website's requirements.

7. Implement version control for source code:
    - Use Git to manage version control for the website's source code in the GitHub repository.
    - Regularly commit and push changes to the repository to ensure a complete and up-to-date history of the code.
    - System is in place so that we have a feature branch which gets pushed to dev branch which then finally gets pushed to main
    - Checks are in place to ensure that PRs to main branch can only be made from dev


By implementing this comprehensive backup and recovery plan, we ensure the safety and availability of our Next.js website hosted on a GitHub repository 
and GitHub Pages,and minimize the risk of data loss. We understand the importance of regularly reviewing and updating our plan to adapt to changes in
ourwebsite's requirements and infrastructure.
