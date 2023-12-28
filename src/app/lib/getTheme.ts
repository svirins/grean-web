const code = function () {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  window.__onThemeChange = function () {};

  function setTheme(newTheme: string) {
    window.__theme = newTheme;
    // preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
  }

  // let preferredTheme: string | null;

  // try {
  //   preferredTheme = localStorage.getItem("theme");
  // } catch (err) {}

  window.__setPreferredTheme = function (newTheme) {
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch (err) {}
  };

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", function (e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light");
  });

  setTheme(
    localStorage.getItem("theme") ?? (darkQuery.matches ? "dark" : "light"),
  );
};

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
export const getTheme = `(${code})();`;
