"use strict";

var gProjects = createProjects();
//
function createProject(id, name, title, desc, url, img, publishedAt, Categories, genre) {
    return {
        id,
        name,
        title,
        desc,
        url,
        img,
        publishedAt,
        Categories,
        genre,
    };
}

function createProjects() {
    return [
        createProject(
            "minesweeper",
            "Minesweeper",
            "flag all mines!",
            "A retro game made modern",
            "https://guybarda.github.io/Minesweeper/",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c377203-0e0f-46a1-9624-032d74b25c1d/dac6a6-260143c5-00aa-45dc-91cc-97b11669049c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjMzc3MjAzLTBlMGYtNDZhMS05NjI0LTAzMmQ3NGIyNWMxZFwvZGFjNmE2LTI2MDE0M2M1LTAwYWEtNDVkYy05MWNjLTk3YjExNjY5MDQ5Yy5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.uEdv9H6aLBhY71F27OC-J5EeYKRVIDHSEG8mZUwynw4",
            0,
            ["matrix", " mouse events"],
            "Game"
        ),
        createProject(
            "in Picture",
            "In Picture",
            "guess the picture",
            "fun little game",
            "https://guybarda.github.io/Minesweeper/",
            "https://i.ytimg.com/vi/kASmRBbn0_8/maxresdefault.jpg",
            0,
            ["matrix", " mouse events"],
            "Game"
        ),
        createProject(
            "touch nums",
            "Touch Nums",
            "flag all mines!",
            "click the numbers in a ascending order to win the game",
            "https://guybarda.github.io/Minesweeper/",
            "https://m.infox.ru/smart/thumbs/115/056_touch-number.jpg",
            0,
            ["matrix", " mouse events"],
            "Game"
        ),
        createProject(
            "ball board",
            "Ball Board",
            "flag all mines!",
            "A retro game made modern!",
            "https://guybarda.github.io/Minesweeper/",
            "",
            0,
            ["matrix", " mouse events"],
            "Game"
        ),
        createProject(
            "chess",
            "Chess",
            "flag all mines!",
            "A retro game made modern!",
            "https://guybarda.github.io/Minesweeper/",
            "",
            0,
            ["matrix", " mouse events"],
            "Game"
        ),
        createProject(
            "todos",
            "Todos",
            "flag all mines!",
            "A retro game made modern!",
            "https://guybarda.github.io/Minesweeper/",
            "",
            0,
            ["matrix", " mouse events"],
            "Website"
        ),
        createProject(
            "bookshop",
            "Bookshop",
            "flag all mines!",
            "A retro game made modern!",
            "https://guybarda.github.io/Minesweeper/",
            "",
            0,
            ["matrix", " mouse events"],
            "Website"
        ),
    ];
}

function getProjects() {
    return gProjects;
}

function getProjectById(projectId) {
    return gProjects.find((project) => project.id === projectId);
}
