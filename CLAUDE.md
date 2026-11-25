Goal (set 2026-11-19): the site should look as close to as.ucsd.edu as possible. Where DESIGN.md or the rules below conflict with that look, match as.ucsd.edu.

## Tech rules (keep it simple)
- Plain HTML5 and one CSS file. One small JS file, used only for the mobile menu button (under 20 lines). Nothing else.
- No frameworks or libraries: no React, Tailwind, Bootstrap, jQuery, icon packs, or animation libraries.
- No npm, no package.json, no build step. The site must work by opening index.html in a browser.
- The only external resources are the Roboto and Teko fonts from Google Fonts (as.ucsd.edu uses Roboto and Teko SemiBold), plus the Google Calendar embed on Home.
- Copy the same header, nav, and footer into every page. Don't use JS or templates to inject them.
- Use semantic tags: header, nav, main, section, footer. One h1 per page, and don't skip heading levels.
- Mobile first, with two breakpoints at most (768px and 1024px).
- Keep the CSS short and readable. Put colors and spacing in CSS variables at the top. Name classes after what they are (.card, .button, .hero), not utility classes, and skip classes when a tag alone can be selected.
- No comments unless something isn't obvious.
- Every page must pass the W3C HTML validator.

## Design (modeled on as.ucsd.edu)
1. Header: white strip, "ASSOCIATED STUDENTS" (20px, black, regular, letter-spaced) on the left and the navy UC San Diego logo on the right, linking to ucsd.edu. The logo hides on phones.
2. Nav: #00629B bar with white links. Hover and the current page (aria-current="page") get #004268. Dropdowns are white with blue links and open on :hover and :focus-within, with no JS. On phones the nav collapses behind a "MENU" button.
3. Headings: h1 and h2 in Teko SemiBold (h1 blue #00629B, h2 navy), h3 in Roboto bold. Buttons are navy, uppercase, letter-spaced, 8px radius.
4. Home: a full-width photo hero with the h1 and a "LEARN MORE" button (turquoise #00C6D7, navy text), then boxed panels in a 1200px column: navy panels with turquoise h2s and sea-teal (#00778F) cards, warm sand (#F3E7D3) panels with white cards, and a split panel with a white card beside an image. Cards have 14px corners and no accent stripes. Turquoise is the only accent (about 10% of the page): use it on navy only, never as text on white or sand.
5. Interior pages: breadcrumbs ("HOME / Page"), then a 1140px column with the content on the right and a sidebar menu on the left (current section on sand, its sub-links indented). The sidebar drops below the content on phones.
6. Footer: sea teal #00778F with a gentle wave along its top edge (images/wave.svg), small white text: "UC San Diego 9500 Gilman Dr. La Jolla, CA 92093 (858) 534-2230", the copyright line, then Accessibility | Privacy | Terms of Use | Feedback, with the white UC San Diego logo on the right.

## Site content (AS Student Life)
- Home (index.html): upcoming events, an events calendar for things to do on campus (Google Calendar embed), past events, info about the office (with the surfing cat mascot).
- SAND (sand.html), the Student Ambassador Networking and Development program: a table of open ambassador programs, advice on how to apply, events for ambassadors to market and table at, an email for companies with questions about student ambassadors at UCSD.
- Resources (resources.html): fun facts (free printing, study spots, etc.), links to other campus resource hubs, a form for students to request events and resources.
- Student Orgs (student-orgs.html) has the "Open Waypoint" button. Waypoint is a separate directory of UCSD student orgs and events (placeholder URL for now). Embed it in an iframe only once its headers allow framing. Don't add a second orgs page.
- SFL (sfl.html) and Student Orgs (student-orgs.html).
- Office Staff (staff.html): staff with about-me bios, a Calendly link, contact emails.
