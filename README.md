# Getting Started

# Run Test
npm run test

# Install Dependencies
npm install

# Start Application
npm start

# Challenges
+ API was a challenge to get working since I didn't understand their expected query parameters but I read the documentation and did a few example calls according to their instructions to figure it out.
+ It has been a while since I have written Jest and Enzyme tests for React. I reviewed documentation on Jest and Enzyme and relearn how to write unit tests.

# Design Decisions
+ Considered but did not use Redux since this is a simple application.
+ Used Reactstrap to make it easy to control stacking for screen sizes xs and m.
+ Abstracted Input and Card Components to avoid clutter in MainComponent.js.
+ Decided to use ReactStrap Cards instead of Media Objects since I generally like the look of Cards better but will consider using Media Objects as an improvement.

# Planned Improvements
+ Truncate movie descriptions and replace extra text with a "see more" link.
+ Adjust sizing of movie poster images to be smaller so text can render above the fold in desktop and mobile views.
+ Clear movies when user removes query from input box.
+ Figure out scheme to remove data to free up memory as user loads too many pages of data.
+ Implement Infinite scroll.
+ Implement Input validation for Search Box.
+ Experiment with using ReactStrap Media Objects instead of Cards.
+ Create default blank image for images that do not exist or have broken links.
+ Implement PropTypes validation.
+ Add loading spinners for when movie title, descriptions and posters are loading.
+ Abstract Load More Button into a separate component
+ Grey out Load More button when user has reached end of pagination.