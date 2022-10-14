"use strict";

$(onInit);

function onInit() {
    renderProjects();
    addEventListeners();
}

function renderProjects() {
    let projects = getProjects();
    //prettier-ignore
    let strHTMLs = projects.map((project) => `
        <div class="portfolio-item col-md-4 col-sm-6 ">
            <a class="portfolio-link project-id" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${project.id}')">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid " src="${project.img || "img/portfolio/01-thumbnail.jpg"}" alt="" />
            </a>
            <div class="portfolio-caption">
                <h4 class="text-danger">${project.name}</h4>
                <p class="text-muted">${project.genre}</p>
            </div>
        </div>`);

    $(".projects-display").html(strHTMLs);
}

function renderModal(projectId) {
    const project = getProjectById(projectId);

    let strHTML = `
    <h2>${project.name}</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="${project.img}" alt="" />
    <p>
        ${project.desc}
    </p>
    <ul class="list-inline">
        <li>Date: ${project.publishedAt}</li>
        <li>Categories: ${project.Categories}</li>
        <li class="my-2">   
            <button class="btn btn-dark" data-dismiss="modal" type="button" onclick="goToProjectSite('${project.url}')">
            Try me :)
            </button>
        </li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button" onclick="showContactButton()">
        <i class="fa fa-times"></i>
        Close
    </button>`;

    $(".modal-body").html(strHTML);
    $(".offcanvas-btn").hide();
}

function sendEmail() {
    const email = $(".email-input").val();
    const subject = $(".subject-input").val();
    const body = $(".email-content").val();

    if (!validateEmail(email)) return;
    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}&bcc=someone.else@example.com`,
        "_blank"
    );
}

function addEventListeners() {
    $(".submit-btn").click(sendEmail);
    $(".close-modal").click(showContactButton);
}

function goToProjectSite(url) {
    window.open(url, "_blank");
}

function showContactButton() {
    $(".offcanvas-btn").show();
}

function validateEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
