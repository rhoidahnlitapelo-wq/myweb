# Rhoidah's Student Portfolio — ICT251 Activity 3

A responsive personal portfolio built with HTML5, CSS and JavaScript for Mulungushi University ICT251 Web Technologies.

## Files
- `index.html` — page content and semantic structure.
- `css/styles.css` — layout, colour palette, responsive rules and focus states.
- `js/script.js` — interactive features.
- `images/` — the three supplied photos.
- `videos/intro.mp4` — supplied introduction video.
- `audio/voice.mp3` — supplied audio recording.

## JavaScript features
1. **Contact form validation and preview (compulsory):** checks non-empty name/message and email format, displays field-level errors, prevents reload and previews valid values locally using `textContent`. No message is sent.
2. **Gallery viewer:** Previous/Next controls change the selected photo and caption, including wrap-around at the first and last photos.
3. **Project/skills search:** filters three project/skill examples, reports the number of matches, shows a no-results message and has a reset button.
4. **Theme switch:** toggles between light and dark themes.
5. **Expandable project details:** each project card can show or hide details with a clear button state.
6. **Mobile navigation:** opens and closes the navigation on narrow screens.

## Test locally
1. Open this folder in Visual Studio Code.
2. Run `index.html` with Live Server.
3. Test the contact form with blank values, spaces-only name/message, an invalid email, and valid values.
4. Click Previous and Next repeatedly in the gallery; test the project search with matching and non-matching terms; try Reset; open/close project details; switch themes; and open/close the mobile menu.
5. Test around 375 px and 1280 px viewport widths. Check that keyboard focus is visible and the browser console has no JavaScript errors.

## GitHub and Render deployment
1. Create a GitHub repository and upload the **contents of this folder** so `index.html` is at the repository root.
2. Replace the generic GitHub footer URL in `index.html` with the URL of your actual repository.
3. Commit and push the files. Keep the repository accessible to your lecturer for marking.
4. In Render choose **New → Static Site** and connect the repository. Leave **Root Directory** blank, set **Build Command** to `echo "No build required"`, **Publish Directory** to `.`, and enable Auto Deploy.
5. After deployment, open the public HTTPS `onrender.com` URL and repeat the tests. Make one small improvement, commit it, and confirm it appears on the live site.

## Sources
The content and structure were prepared against the requirements in `ICT251 Activity 3 2026` supplied for this assignment. W3Schools is listed as a learning resource in the original learning plan: https://www.w3schools.com/html/default.asp

## Before submission
- Update the footer with your actual GitHub repository URL.
- Deploy to Render and submit your live Render website URL through the university's submission platform. This ZIP alone is not a live deployment.
