const viewHome = (req, res) => {
    res.render("home");
}

const viewUsers = (req, res) => {
    res.render("users");
}

const viewBootcamps = (req, res) => {
    res.render("bootcamps");
}
const viewMatriculas = (req, res) => {
    res.render("matriculas");
}

module.exports = {
    viewHome,
    viewUsers,
    viewBootcamps,
    viewMatriculas
}
