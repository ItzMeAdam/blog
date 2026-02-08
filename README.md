# My Blog Website

A modern, responsive blog website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI**: Clean and contemporary design with smooth animations
- **Hero Section**: Eye-catching landing area with call-to-action
- **Featured Post**: Highlighted content section
- **Blog Grid**: Organized layout for multiple blog posts
- **Newsletter Signup**: Email subscription form
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Menu**: Hamburger menu for smaller screens

## Structure

- `index.html` - Main HTML file with semantic structure
- `styles.css` - All styling including responsive breakpoints
- `script.js` - Interactive features and animations

## Customization

### Colors
The color scheme can be easily customized by modifying CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --primary-dark: #4f46e5;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Content
- Update blog post content in `index.html`
- Replace placeholder images with your own
- Modify text in hero, about, and other sections

### Images
Current images use Unsplash placeholders. Replace the image URLs with your own:
- Featured post image
- Blog post thumbnails
- Any additional imagery

## Running the Website

Simply open `index.html` in a web browser. For a better development experience, use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- Blog post detail pages
- Search functionality
- Category filtering
- Dark mode toggle
- Comments section
- Social sharing buttons

## License

Free to use and modify for personal and commercial projects.
