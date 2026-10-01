// ================================
// KALKULATOR INTERAKTIF
// ================================

const angkaDisplay = document.getElementById("angka");
const riwayatDisplay = document.getElementById("riwayat");
const penjelasanDisplay = document.getElementById("penjelasan");

const tombol = document.querySelectorAll(".tombol button");

let angkaSekarang = "";
let angkaSebelumnya = "";
let operator = "";
let hasilTerakhir = false;


// ================================
// KETIKA TOMBOL DIKLIK
// ================================

tombol.forEach(function(button) {

    button.addEventListener("click", function() {

        const nilai = button.dataset.value;

        // Efek tombol
        button.classList.add("aktif");

        setTimeout(function() {
            button.classList.remove("aktif");
        }, 250);

        prosesTombol(nilai);

    });

});


// ================================
// FUNGSI PROSES TOMBOL
// ================================

function prosesTombol(nilai) {

    // CLEAR
    if (nilai === "C") {
        resetKalkulator();

        penjelasanDisplay.innerText =
            "Kalkulator telah dibersihkan.";

        return;
    }


    // HAPUS SATU ANGKA
    if (nilai === "⌫") {

        angkaSekarang =
            angkaSekarang.slice(0, -1);

        if (angkaSekarang === "") {
            angkaDisplay.innerText = "0";

            penjelasanDisplay.innerText =
                "Angka terakhir telah dihapus.";
        } else {
            angkaDisplay.innerText =
                angkaSekarang;

            penjelasanDisplay.innerText =
                "Menghapus angka terakhir.";
        }

        animasiDisplay();

        return;
    }


    // PERSEN
    if (nilai === "%") {

        if (angkaSekarang !== "") {

            const angka =
                parseFloat(angkaSekarang);

            angkaSekarang =
                String(angka / 100);

            angkaDisplay.innerText =
                angkaSekarang;

            penjelasanDisplay.innerText =
                angka + "% = " + angkaSekarang;

            animasiDisplay();
        }

        return;
    }


    // OPERATOR
    if (
        nilai === "+" ||
        nilai === "-" ||
        nilai === "*" ||
        nilai === "/"
    ) {

        if (angkaSekarang === "") {
            return;
        }

        angkaSebelumnya =
            angkaSekarang;

        operator = nilai;

        angkaSekarang = "";

        let simbol =
            ubahOperator(nilai);

        riwayatDisplay.innerText =
            angkaSebelumnya + " " + simbol;

        penjelasanDisplay.innerText =
            "Pilih angka berikutnya untuk dihitung.";

        animasiDisplay();

        return;
    }


    // SAMA DENGAN
    if (nilai === "=") {

        hitung();

        return;
    }


    // ANGKA
    if (
        !isNaN(nilai) ||
        nilai === "."
    ) {

        masukkanAngka(nilai);

    }

}


// ================================
// MEMASUKKAN ANGKA
// ================================

function masukkanAngka(nilai) {

    // Jika hasil sebelumnya ditampilkan
    if (hasilTerakhir) {

        angkaSekarang = "";
        hasilTerakhir = false;

        riwayatDisplay.innerText =
            "Angka baru";
    }


    // Jangan izinkan titik lebih dari satu
    if (
        nilai === "." &&
        angkaSekarang.includes(".")
    ) {
        return;
    }


    // Jika titik ditekan pertama
    if (
        nilai === "." &&
        angkaSekarang === ""
    ) {
        angkaSekarang = "0.";
    } else {
        angkaSekarang += nilai;
    }


    angkaDisplay.innerText =
        angkaSekarang;


    penjelasanDisplay.innerText =
        "Anda menekan angka " + nilai;


    animasiDisplay();
}


// ================================
// MENGHITUNG HASIL
// ================================

function hitung() {

    if (
        angkaSebelumnya === "" ||
        angkaSekarang === "" ||
        operator === ""
    ) {
        penjelasanDisplay.innerText =
            "Masukkan angka dan operator terlebih dahulu.";

        return;
    }


    const angka1 =
        parseFloat(angkaSebelumnya);

    const angka2 =
        parseFloat(angkaSekarang);

    let hasil;


    // PROSES PERHITUNGAN
    switch (operator) {

        case "+":
            hasil = angka1 + angka2;
            break;

        case "-":
            hasil = angka1 - angka2;
            break;

        case "*":
            hasil = angka1 * angka2;
            break;

        case "/":

            if (angka2 === 0) {

                angkaDisplay.innerText =
                    "Error";

                penjelasanDisplay.innerText =
                    "Tidak dapat membagi angka dengan 0.";

                resetVariabel();

                return;
            }

            hasil = angka1 / angka2;
            break;
    }


    // Membulatkan angka desimal terlalu panjang
    hasil =
        parseFloat(hasil.toFixed(10));


    const simbol =
        ubahOperator(operator);


    // Tampilkan riwayat
    riwayatDisplay.innerText =
        angka1 + " " + simbol + " " + angka2;


    // Tampilkan hasil
    angkaDisplay.innerText =
        hasil;


    // Penjelasan
    penjelasanDisplay.innerText =
        angka1 +
        " " +
        simbol +
        " " +
        angka2 +
        " = " +
        hasil;


    // Simpan hasil
    angkaSekarang =
        String(hasil);

    angkaSebelumnya = "";

    operator = "";

    hasilTerakhir = true;


    animasiDisplay();
}


// ================================
// MENGUBAH SIMBOL OPERATOR
// ================================

function ubahOperator(operator) {

    if (operator === "*") {
        return "×";
    }

    if (operator === "/") {
        return "÷";
    }

    if (operator === "-") {
        return "−";
    }

    return operator;
}


// ================================
// RESET
// ================================

function resetKalkulator() {

    angkaSekarang = "";
    angkaSebelumnya = "";
    operator = "";

    hasilTerakhir = false;

    angkaDisplay.innerText = "0";

    riwayatDisplay.innerText =
        "Siap menghitung...";
}


// ================================
// RESET VARIABEL SAAT ERROR
// ================================

function resetVariabel() {

    angkaSekarang = "";
    angkaSebelumnya = "";
    operator = "";

    hasilTerakhir = false;
}


// ================================
// ANIMASI DISPLAY
// ================================

function animasiDisplay() {

    angkaDisplay.classList.remove("berubah");

    // Memaksa browser menjalankan ulang animasi
    void angkaDisplay.offsetWidth;

    angkaDisplay.classList.add("berubah");
}


// ================================
// SUPPORT KEYBOARD
// ================================

document.addEventListener("keydown", function(event) {

    let tombolKeyboard = null;


    // ANGKA
    if (
        event.key >= "0" &&
        event.key <= "9"
    ) {
        tombolKeyboard = event.key;
    }


    // OPERATOR
    else if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "*" ||
        event.key === "/"
    ) {
        tombolKeyboard = event.key;
    }


    // ENTER
    else if (event.key === "Enter") {
        tombolKeyboard = "=";
    }


    // BACKSPACE
    else if (event.key === "Backspace") {
        tombolKeyboard = "⌫";
    }


    // ESC
    else if (event.key === "Escape") {
        tombolKeyboard = "C";
    }


    // PERSEN
    else if (event.key === "%") {
        tombolKeyboard = "%";
    }


    // TITIK
    else if (event.key === ".") {
        tombolKeyboard = ".";
    }


    if (tombolKeyboard !== null) {

        // Cari tombol
        const button =
            document.querySelector(
                `[data-value="${tombolKeyboard}"]`
            );


        if (button) {

            button.click();

        }

    }

});