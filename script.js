// =========================================
// MENÚ MÓVIL
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    // Abrir / cerrar menú
    if (menuToggle && menu) {

        menuToggle.addEventListener("click", () => {

            menu.classList.toggle("active");

        });

    }


    // =========================================
    // CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
    // =========================================

    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menu && menu.classList.contains("active")) {

                menu.classList.remove("active");

            }

        });

    });


    // =========================================
    // DESPLAZAMIENTO SUAVE
    // =========================================

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // =========================================
    // CERRAR MENÚ AL TOCAR FUERA
    // =========================================

    document.addEventListener("click", (event) => {

        if (!menu || !menuToggle) {
            return;
        }

        const clickedInsideMenu =
            menu.contains(event.target);

        const clickedToggle =
            menuToggle.contains(event.target);

        if (
            menu.classList.contains("active") &&
            !clickedInsideMenu &&
            !clickedToggle
        ) {

            menu.classList.remove("active");

        }

    });


    // =========================================
    // MENSAJE DE CARGA
    // =========================================

    console.log(
        "Celeste by Maitena cargado correctamente."
    );

});

