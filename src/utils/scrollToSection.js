// src/utils/scrollToSection.js

const scrollToSection = (id) => {
  const element = document.getElementById(id);

  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // navbar offset
      behavior: "smooth",
    });
  }
};

export default scrollToSection;