document.addEventListener('DOMContentLoaded', function() {
    const themeCheckbox = document.querySelector('.theme-checkbox');
  
   
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeCheckbox.checked = true; 
    }
  
    
    themeCheckbox.addEventListener('change', function() {
      if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  });
