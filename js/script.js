document.addEventListener("DOMContentLoaded", function () {
    const btnLuas = document.getElementById("btnLuas");
    const btnKeliling = document.getElementById("btnKeliling");
    const sectionLuas = document.getElementById("luas");
    const sectionKeliling = document.getElementById("keliling");
    const hasilLuas = document.getElementById("hasilLuas");
    const hasilKeliling = document.getElementById("hasilKeliling");

    sectionLuas.style.display = "none";
    sectionKeliling.style.display = "none";
    hasilLuas.style.display = "none";
    hasilKeliling.style.display = "none";

    btnLuas.addEventListener("click", function () {
        sectionLuas.style.display = "block";
        sectionKeliling.style.display = "none";
    });

    btnKeliling.addEventListener("click", function () {
        sectionKeliling.style.display = "block";
        sectionLuas.style.display = "none";
    });
});

// Fungsi untuk menghitung luas persegi
function hitungLuas() {
    let sisi = document.getElementById("inputLuas").value;
    let hasilLuas = document.getElementById("hasilLuas");

    if (sisi && !isNaN(sisi) && sisi > 0) {
        let luas = sisi * sisi;
        hasilLuas.innerHTML = `
            L = S x S <br>
            L = ${sisi} x ${sisi} <br>
            L = ${luas}
        `;
        hasilLuas.style.display = "block";
    } else {
        alert("Masukkan nilai sisi yang valid!");
    }
}

// Fungsi untuk menghitung keliling persegi
function hitungKeliling() {
    let sisi = document.getElementById("inputKeliling").value;
    let hasilKeliling = document.getElementById("hasilKeliling");

    if (sisi && !isNaN(sisi) && sisi > 0) {
        let keliling = 4 * sisi;
        hasilKeliling.innerHTML = `
            K = 4 x S <br>
            K = 4 x ${sisi} <br>
            K = ${keliling}
        `;
        hasilKeliling.style.display = "block";
    } else {
        alert("Masukkan nilai sisi yang valid!");
    }
}

// Fungsi untuk mereset input dan menyembunyikan hasil
function resetInput(inputId, hasilId) {
    document.getElementById(inputId).value = "";
    let hasil = document.getElementById(hasilId);
    hasil.innerHTML = "";
    hasil.style.display = "none";
}