const themeMap = {
    dark: "light",
    light: "dark"
  };
  const theme = localStorage.getItem('theme')||(tmp = Object.keys(themeMap)[0], localStorage.setItem('theme', tmp), tmp);
  console.log('Theme: ' + theme)
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    console.log('Next Theme: ' + next);
  }
  document.getElementById('themeButton').onclick = toggleTheme;