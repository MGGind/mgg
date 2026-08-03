<script>
    // Mobile Navigation Menu Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksList = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
      navLinksList.classList.toggle('show');
    });

    // Single Page Application Router
    function handleRouting() {
      navLinksList.classList.remove('show');
      let hash = window.location.hash || '#home';

      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));

      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => link.classList.remove('active'));

      const targetPage = document.querySelector(hash);
      if (targetPage) {
        targetPage.classList.add('active');
      } else {
        document.querySelector('#home').classList.add('active');
      }

      const activeNav = document.querySelector(`.nav-links a[href="${hash}"]`);
      if (activeNav) {
        activeNav.classList.add('active');
      }

      window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', handleRouting);
    window.addEventListener('load', handleRouting);

    // Calculator Logic
    const btnCalc = document.getElementById('btn-calculate');
    if (btnCalc) {
      btnCalc.addEventListener('click', () => {
        const power = parseFloat(document.getElementById('calc-power').value) || 0;
        const tariff = parseFloat(document.getElementById('calc-tariff').value) || 0;
        const dustRatio = parseFloat(document.getElementById('calc-dust').value) || 0;

        const baseGeneration = power * 1500;
        const extraEnergy = Math.round(baseGeneration * dustRatio);
        const extraIncome = Math.round(extraEnergy * tariff);

        document.getElementById('res-energy').innerText = extraEnergy.toLocaleString() + ' կՎտ/ժ';
        document.getElementById('res-money').innerText = extraIncome.toLocaleString() + ' Դրամ';
      });
    }

    // Contact Form Logic
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Շնորհակալություն: Ձեր հայտն ընդունված է, մեր ինժեներները շուտով կկապնվեն ձեզ հետ:');
      this.reset();
    });
  </script>
