const items = document.querySelectorAll(".accordion-item");

    items.forEach(item => {
      const header = item.querySelector(".accordion-header");

      header.addEventListener("click", () => {
        items.forEach(i => {
          if (i !== item) {
            i.classList.remove("active");
          }
        });
        item.classList.toggle("active");
      });
    });


    function submitEmail() {
      const email = document.getElementById('email').value.trim();
      if (!email) return;

      const scriptURL = 'https://script.google.com/macros/s/AKfycbyHikejJsGBDT2T9f0rs8SgFagrep_AZ_90PfvNvCZ2Rs7Ia8YIdhTOwKHp3g-hUup3MA/exec';
      const url = `${scriptURL}?email=${encodeURIComponent(email)}`;

      fetch(url)
        .then(res => {
          if (res.ok) {
            document.getElementById('email').value = "";
          }
        })
        .catch(err => console.error('CORS Error:', err));
    }

    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelectorAll('.nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        // يقفل المينيو
        menuToggle.checked = false;
      });
    });