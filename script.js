        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const homeLink = document.getElementById('home-link');
            const homePage = document.getElementById('home-page');
            const televisionsPage = document.getElementById('televisions-page');
            const aboutPage = document.getElementById('about-page');
            
            function showPage(pageId) {
                homePage.style.display = 'none';
                televisionsPage.style.display = 'none';
                aboutPage.style.display = 'none';
                
                document.getElementById(pageId + '-page').style.display = 'block';
                
                navLinks.forEach(link => {
                    if (link.getAttribute('data-page') === pageId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    showPage(this.getAttribute('data-page'));
                });
            });
            
            homeLink.addEventListener('click', function(e) {
                e.preventDefault();
                showPage('home');
            });
            
            showPage('home');
        });