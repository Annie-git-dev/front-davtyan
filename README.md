# React Posts Project

A simple React project for displaying a list of posts with search functionality and modals.  

---

## Features

- Display posts with images, tags, author, date, and views count.  
- Search posts by title or text with debounce optimization.  
- Modal window to view post details.  
- Content preloading with skeleton effect (`PostsPreload`).  
- Responsive menu with a mobile sidebar.  
- Clean CSS for interactive elements (hover effects, submenus, search input).  

---

## Technologies

- React + Hooks (`useState`, `useEffect`, `useRef`)  
- CSS, Flexbox, positioning  
- CSS animations (`transition`, `keyframes`)  
- Fetch API for retrieving data  
- Custom debounce hook for search optimization  

---

## Installation & Running

1. Clone the repository:

```bash
git clone https://github.com/your-repo.git


2. Install dependencies:

npm install

3. Start the project:

npm start



Usage

Search posts — click the search icon, type text, and the results will filter in real-time.

Mobile menu — click the menu icon, the sidebar slides in from the left.

View post details — click on a post card to open a modal window with detailed information.


Notes

Google Fonts are used and font sizes are in rem.

All animations and interactive elements are implemented with CSS and React hooks.

For proper UX, the search input closes when clicking outside.


Planned Improvements

Dynamic input resizing while typing.

Pagination support for posts.

Filtering by tags and authors.

Dark theme and improved responsiveness.
