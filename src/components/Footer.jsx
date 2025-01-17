import React from "react";



function Footer(){
  const year = new Date().getFullYear();
    return (
        <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 footertxt">© Copyright {year}</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#home" class="nav-link px-2 footertxt">Home</a></li>
      <li class="nav-item"><a href="#about" class="nav-link px-2 footertxt">About</a></li>
      <li class="nav-item"><a href="#skills" class="nav-link px-2 footertxt">Skills</a></li>
      <li class="nav-item"><a href="#projects" class="nav-link px-2 footertxt">Projects</a></li>
      <li class="nav-item"><a href="#contact" class="nav-link px-2 footertxt">Contact</a></li>
    </ul>
  </footer>
</div>
    );
}

export default Footer;