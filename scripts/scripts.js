const form = document.getElementById("formCarro");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const modelo = document.getElementById("modelo").value;
    const fabricante = document.getElementById("fabricante").value;
    const valor = document.getElementById("valor").value;
    const ano = document.getElementById("ano").value;

    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Fabricante", fabricante);
    localStorage.setItem("Valor", valor);
    localStorage.setItem("Ano", ano);

    console.log(localStorage.getItem("Modelo"));
    console.log(localStorage.getItem("Fabricante"));
    console.log(localStorage.getItem("Valor"));
    console.log(localStorage.getItem("Ano"));

    console.log(typeof localStorage.getItem("Ano"));

    alert("Carro cadastrado.");

    form.reset();

});
