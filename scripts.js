// script.js
document.querySelectorAll('.copy-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    const text = icon.previousSibling.textContent.trim();
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  });
});
