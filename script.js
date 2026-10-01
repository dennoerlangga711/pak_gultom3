/* =========================================================
   HOTEL ERLANG - PARKING MANAGEMENT SYSTEM
   ========================================================= */


/* ================= KONFIGURASI LOGIN ================= */

const ADMIN_USERNAME = "deno";
const ADMIN_PASSWORD = "12345";


/* ================= DATA PARKIR ================= */

const TOTAL_SLOTS = 20;

const slots = [];

for (let i = 1; i <= TOTAL_SLOTS; i++) {
    slots.push(`A${String(i).padStart(2, "0")}`);
}


/* ================= ELEMENT ================= */

const loginPage = document.getElementById("loginPage");
const appPage = document.getElementById("appPage");

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("loginError");

const showPassword = document.getElementById("showPassword");

const logoutButton = document.getElementById("logoutButton");

const menuItems = document.querySelectorAll(".menu-item");
const pageButtons = document.querySelectorAll("[data-page]");

const pageTitle = document.getElementById("pageTitle");
const breadcrumbPage = document.getElementById("breadcrumbPage");

const pages = {
    dashboard: document.getElementById("dashboardPage"),
    rental: document.getElementById("rentalPage"),
    payment: document.getElementById("paymentPage"),
    history: document.getElementById("historyPage")
};


/* ================= DATA LOCAL STORAGE ================= */

let transactions = JSON.parse(
    localStorage.getItem("hotelErlangTransactions")
) || [];


/* ================= FORMAT RUPIAH ================= */

function formatRupiah(number) {

    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0
    }).format(number);

}


/* ================= FORMAT TANGGAL ================= */

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

}


/* ================= GENERATE KODE TIKET ================= */

function generateTicketCode() {

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    const random = Math.floor(100 + Math.random() * 900);

    return `TKT-${year}${month}${day}-${random}`;

}


/* ================= LOGIN ================= */

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        loginError.textContent = "";

        loginPage.classList.add("hidden");
        appPage.classList.remove("hidden");

        showToast(
            "Login Berhasil",
            "Selamat datang di Sistem Hotel Erlang.",
            "✓"
        );

        updateDashboard();

    } else {

        loginError.textContent =
            "Username atau password salah.";

        passwordInput.value = "";

    }

});


/* ================= SHOW PASSWORD ================= */

showPassword.addEventListener("click", function() {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        showPassword.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        showPassword.textContent = "👁";

    }

});


/* ================= LOGOUT ================= */

logoutButton.addEventListener("click", function() {

    appPage.classList.add("hidden");
    loginPage.classList.remove("hidden");

    usernameInput.value = "";
    passwordInput.value = "";

    navigateTo("dashboard");

});


/* ================= NAVIGASI ================= */

pageButtons.forEach(button => {

    button.addEventListener("click", function() {

        const page = this.dataset.page;

        navigateTo(page);

    });

});


function navigateTo(page) {

    Object.values(pages).forEach(element => {
        element.classList.add("hidden");
    });

    if (pages[page]) {
        pages[page].classList.remove("hidden");
    }

    menuItems.forEach(item => {

        item.classList.remove("active");

        if (item.dataset.page === page) {
            item.classList.add("active");
        }

    });

    const titles = {
        dashboard: "Dashboard",
        rental: "Penyewaan Parkir",
        payment: "Pembayaran",
        history: "Riwayat Transaksi"
    };

    pageTitle.textContent = titles[page];
    breadcrumbPage.textContent = titles[page];

    if (page === "dashboard") {
        updateDashboard();
    }

    if (page === "rental") {
        renderRentalSlots();
    }

    if (page === "history") {
        renderHistory();
    }

}


/* ================= JAM ================= */

function updateClock() {

    const now = new Date();

    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("id-ID");

}

setInterval(updateClock, 1000);

updateClock();


/* ================= STATUS SLOT ================= */

function getOccupiedSlots() {

    return transactions
        .filter(transaction => transaction.status === "active")
        .map(transaction => transaction.slot);

}


/* ================= RENDER SLOT DASHBOARD ================= */

function renderParkingStatus() {

    const container =
        document.getElementById("parkingStatus");

    const occupied = getOccupiedSlots();

    container.innerHTML = "";

    slots.forEach(slot => {

        const isOccupied = occupied.includes(slot);

        const element = document.createElement("div");

        element.className =
            isOccupied
                ? "slot occupied"
                : "slot";

        element.innerHTML = `
            <span>${isOccupied ? "🚗" : "🅿️"}</span>
            ${slot}
        `;

        container.appendChild(element);

    });

}


/* ================= RENTAL SLOT ================= */

let selectedSlot = null;


function renderRentalSlots() {

    const container =
        document.getElementById("rentalSlots");

    const occupied = getOccupiedSlots();

    container.innerHTML = "";

    slots.forEach(slot => {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "slot-choice";

        if (occupied.includes(slot)) {

            button.classList.add("occupied");
            button.textContent = `${slot} • Penuh`;
            button.disabled = true;

        } else {

            button.textContent = slot;

            if (selectedSlot === slot) {
                button.classList.add("selected");
            }

            button.addEventListener("click", function() {

                selectedSlot = slot;

                renderRentalSlots();

            });

        }

        container.appendChild(button);

    });

}


/* ================= RESET FORM ================= */

document
    .getElementById("resetRental")
    .addEventListener("click", resetRentalForm);


function resetRentalForm() {

    document.querySelector(
        'input[name="vehicleType"][value="Motor"]'
    ).checked = true;

    document.querySelector(
        'input[name="guestType"][value="Menginap"]'
    ).checked = true;

    document.getElementById("plateNumber").value = "";

    selectedSlot = null;

    renderRentalSlots();

}


/* ================= BUAT TIKET ================= */

document
    .getElementById("createTicket")
    .addEventListener("click", createTicket);


function createTicket() {

    const plate =
        document.getElementById("plateNumber")
        .value
        .trim()
        .toUpperCase();

    const vehicle =
        document.querySelector(
            'input[name="vehicleType"]:checked'
        ).value;

    const guest =
        document.querySelector(
            'input[name="guestType"]:checked'
        ).value;


    if (!plate) {

        showToast(
            "Data Belum Lengkap",
            "Masukkan plat nomor kendaraan.",
            "!"
        );

        return;
    }


    if (!selectedSlot) {

        showToast(
            "Slot Belum Dipilih",
            "Silakan pilih slot parkir terlebih dahulu.",
            "!"
        );

        return;
    }


    const duplicatePlate = transactions.find(
        transaction =>
            transaction.plate === plate &&
            transaction.status === "active"
    );


    if (duplicatePlate) {

        showToast(
            "Kendaraan Sudah Terdaftar",
            "Plat nomor tersebut masih berada di area parkir.",
            "!"
        );

        return;
    }


    const ticketCode = generateTicketCode();

    const now = new Date();

    const transaction = {

        id: Date.now(),

        ticketCode: ticketCode,

        plate: plate,

        vehicle: vehicle,

        guest: guest,

        slot: selectedSlot,

        entryTime: now.toISOString(),

        exitTime: null,

        duration: 0,

        total: 0,

        paymentMethod: null,

        status: "active"

    };


    transactions.unshift(transaction);

    saveTransactions();


    showTicketModal(transaction);

    resetRentalForm();

    updateDashboard();

}


/* ================= SIMPAN DATA ================= */

function saveTransactions() {

    localStorage.setItem(
        "hotelErlangTransactions",
        JSON.stringify(transactions)
    );

}


/* ================= MODAL TIKET ================= */

function showTicketModal(transaction) {

    document.getElementById("generatedTicketCode")
        .textContent = transaction.ticketCode;

    document.getElementById("ticketPlate")
        .textContent = transaction.plate;

    document.getElementById("ticketVehicle")
        .textContent = transaction.vehicle;

    document.getElementById("ticketGuest")
        .textContent = transaction.guest;

    document.getElementById("ticketSlot")
        .textContent = transaction.slot;

    document.getElementById("ticketTime")
        .textContent = formatDate(transaction.entryTime);


    document
        .getElementById("ticketModal")
        .classList.remove("hidden");

}


function closeTicketModal() {

    document
        .getElementById("ticketModal")
        .classList.add("hidden");

}


document
    .getElementById("closeTicketModal")
    .addEventListener("click", closeTicketModal);

document
    .getElementById("closeTicketModal")
    .addEventListener("click", closeTicketModal);

document
    .getElementById("closeTicket")
    .addEventListener("click", closeTicketModal);

document
    .querySelector(".modal-overlay")
    .addEventListener("click", closeTicketModal);


/* ================= PRINT TIKET ================= */

document
    .getElementById("printTicket")
    .addEventListener("click", function() {

        const printContent =
            document.getElementById("ticketPrintArea")
            .innerHTML;

        const printWindow =
            window.open("", "", "width=500,height=700");

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Tiket Parkir Hotel Erlang</title>

                <style>

                    body {
                        font-family: Arial, sans-serif;
                        padding: 30px;
                    }

                    .ticket {
                        max-width: 350px;
                        margin: auto;
                    }

                    h3 {
                        text-align: center;
                    }

                    .ticket-header {
                        text-align: center;
                        padding-bottom: 15px;
                        border-bottom: 1px dashed #aaa;
                    }

                    .ticket-code {
                        text-align: center;
                        padding: 20px;
                    }

                    .ticket-code strong {
                        font-size: 20px;
                    }

                    .ticket-details div {
                        padding: 10px;
                    }

                    .ticket-details span {
                        display: block;
                        font-size: 11px;
                        color: #777;
                    }

                    .ticket-details strong {
                        display: block;
                        margin-top: 4px;
                    }

                    .ticket-footer {
                        margin-top: 20px;
                        padding-top: 15px;
                        border-top: 1px dashed #aaa;
                        text-align: center;
                        font-size: 10px;
                    }

                </style>

            </head>

            <body>

                <div class="ticket">

                    ${printContent}

                </div>

            </body>

            </html>
        `);

        printWindow.document.close();

        printWindow.focus();

        setTimeout(() => {

            printWindow.print();
            printWindow.close();

        }, 500);

    });


/* ================= CARI PEMBAYARAN ================= */

document
    .getElementById("searchPayment")
    .addEventListener("click", searchPayment);


document
    .getElementById("paymentSearch")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchPayment();
        }

    });


function searchPayment() {

    const keyword =
        document.getElementById("paymentSearch")
        .value
        .trim()
        .toUpperCase();


    if (!keyword) {

        showToast(
            "Masukkan Data",
            "Masukkan kode tiket atau plat nomor.",
            "!"
        );

        return;

    }


    const transaction = transactions.find(item =>

        item.ticketCode.toUpperCase() === keyword ||

        item.plate.toUpperCase() === keyword

    );


    const result =
        document.getElementById("paymentResult");


    if (!transaction) {

        result.className = "panel";
        result.innerHTML = `
            <div style="
                text-align:center;
                padding:30px;
                color:#dc2626;
            ">
                <div style="font-size:35px;">❌</div>

                <h3 style="margin-top:10px;">
                    Data Tidak Ditemukan
                </h3>

                <p style="
                    margin-top:5px;
                    font-size:11px;
                    color:#64748b;
                ">
                    Pastikan kode tiket atau plat nomor benar.
                </p>
            </div>
        `;

        return;
    }


    renderPayment(transaction);

}


/* ================= TAMPILKAN PEMBAYARAN ================= */

function renderPayment(transaction) {

    const result =
        document.getElementById("paymentResult");

    if (transaction.status === "paid") {

        result.className = "panel payment-card";

        result.innerHTML = `

            <div style="text-align:center;padding:20px;">

                <div style="
                    width:55px;
                    height:55px;
                    margin:auto;
                    border-radius:50%;
                    background:#dcfce7;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    font-size:25px;
                ">
                    ✓
                </div>

                <h3 style="margin-top:12px;">
                    Transaksi Sudah Dibayar
                </h3>

                <p style="
                    margin-top:5px;
                    color:#64748b;
                    font-size:11px;
                ">
                    Kode tiket: ${transaction.ticketCode}
                </p>

            </div>

        `;

        return;

    }


    const exitTime = new Date();

    const entryTime =
        new Date(transaction.entryTime);


    let duration =
        Math.ceil(
            (exitTime - entryTime) / (1000 * 60 * 60)
        );


    if (duration < 1) {
        duration = 1;
    }


    let rate =
        transaction.vehicle === "Motor"
            ? 5000
            : 10000;


    let total = duration * rate;


    if (transaction.guest === "Menginap") {

        total = 0;

    } else if (transaction.guest === "VIP") {

        total = total * 0.8;

    }


    result.className = "payment-card";

    result.innerHTML = `

        <div class="payment-layout">

            <div class="panel">

                <div class="panel-header">

                    <div>
                        <h3>Detail Kendaraan</h3>

                        <p>
                            ${transaction.ticketCode}
                        </p>
                    </div>

                    <span class="status-badge status-active">
                        Aktif
                    </span>

                </div>


                <div class="detail-grid">

                    <div class="detail-item">
                        <span>Plat Nomor</span>
                        <strong>
                            ${transaction.plate}
                        </strong>
                    </div>

                    <div class="detail-item">
                        <span>Kendaraan</span>
                        <strong>
                            ${transaction.vehicle}
                        </strong>
                    </div>

                    <div class="detail-item">
                        <span>Kategori Tamu</span>
                        <strong>
                            ${transaction.guest}
                        </strong>
                    </div>

                    <div class="detail-item">
                        <span>Slot Parkir</span>
                        <strong>
                            ${transaction.slot}
                        </strong>
                    </div>

                    <div class="detail-item">
                        <span>Waktu Masuk</span>
                        <strong>
                            ${formatDate(transaction.entryTime)}
                        </strong>
                    </div>

                    <div class="detail-item">
                        <span>Durasi</span>
                        <strong>
                            ${duration} Jam
                        </strong>
                    </div>

                </div>

            </div>


            <div class="panel">

                <div class="payment-total">

                    <small>TOTAL PEMBAYARAN</small>

                    <h2>
                        ${formatRupiah(total)}
                    </h2>

                    <p>
                        ${duration} jam ×
                        ${formatRupiah(rate)}
                    </p>

                </div>


                <label style="
                    display:block;
                    font-size:11px;
                    font-weight:700;
                    margin-top:20px;
                    margin-bottom:8px;
                ">
                    Metode Pembayaran
                </label>


                <div class="payment-methods">

                    <button
                        class="method selected"
                        data-method="Cash"
                    >
                        <span>💵</span>
                        <strong>Cash</strong>
                    </button>

                    <button
                        class="method"
                        data-method="QRIS"
                    >
                        <span>📱</span>
                        <strong>QRIS</strong>
                    </button>

                    <button
                        class="method"
                        data-method="Card"
                    >
                        <span>💳</span>
                        <strong>Card</strong>
                    </button>

                    <button
                        class="method"
                        data-method="Room Charge"
                    >
                        <span>🏨</span>
                        <strong>Room Charge</strong>
                    </button>

                </div>


                <button
                    id="processPayment"
                    class="primary-button"
                    style="width:100%;"
                >
                    ✓ Proses Pembayaran
                </button>

            </div>

        </div>

    `;


    let selectedMethod = "Cash";


    const methods =
        result.querySelectorAll(".method");


    methods.forEach(method => {

        method.addEventListener("click", function() {

            methods.forEach(item =>
                item.classList.remove("selected")
            );

            this.classList.add("selected");

            selectedMethod =
                this.dataset.method;

        });

    });


    document
        .getElementById("processPayment")
        .addEventListener(
            "click",
            function() {

                processPayment(
                    transaction.id,
                    duration,
                    total,
                    selectedMethod
                );

            }
        );

}


/* ================= PROSES PEMBAYARAN ================= */

function processPayment(
    transactionId,
    duration,
    total,
    paymentMethod
) {

    const transaction =
        transactions.find(
            item => item.id === transactionId
        );


    if (!transaction) {
        return;
    }


    transaction.exitTime =
        new Date().toISOString();

    transaction.duration =
        duration;

    transaction.total =
        total;

    transaction.paymentMethod =
        paymentMethod;

    transaction.status =
        "paid";


    saveTransactions();


    showToast(
        "Pembayaran Berhasil",
        `Pembayaran ${formatRupiah(total)} melalui ${paymentMethod}.`,
        "✓"
    );


    document.getElementById("paymentResult")
        .innerHTML = `

        <div class="panel">

            <div style="
                text-align:center;
                padding:35px;
            ">

                <div style="
                    width:65px;
                    height:65px;
                    margin:auto;
                    border-radius:50%;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    background:#dcfce7;
                    color:#16a34a;
                    font-size:30px;
                ">
                    ✓
                </div>

                <h2 style="
                    margin-top:15px;
                    color:#0f172a;
                ">
                    Pembayaran Berhasil
                </h2>

                <p style="
                    margin-top:7px;
                    color:#64748b;
                    font-size:11px;
                ">
                    Kendaraan dapat keluar dari area parkir.
                </p>


                <div style="
                    max-width:400px;
                    margin:20px auto;
                    padding:18px;
                    border-radius:12px;
                    background:#f8fafc;
                ">

                    <strong>
                        ${transaction.ticketCode}
                    </strong>

                    <p style="
                        margin-top:8px;
                        font-size:11px;
                    ">
                        Total: ${formatRupiah(total)}
                    </p>

                    <p style="
                        margin-top:4px;
                        font-size:11px;
                    ">
                        Metode: ${paymentMethod}
                    </p>

                </div>

                <button
                    class="primary-button"
                    onclick="navigateTo('dashboard')"
                >
                    Kembali ke Dashboard
                </button>

            </div>

        </div>

    `;


    updateDashboard();

}


/* ================= DASHBOARD UPDATE ================= */

function updateDashboard() {

    const totalVehicles =
        transactions.length;

    const activeParking =
        transactions.filter(
            item => item.status === "active"
        ).length;

    const totalIncome =
        transactions.reduce(
            (sum, item) =>
                sum + Number(item.total || 0),
            0
        );

    document.getElementById(
        "totalVehicles"
    ).textContent = totalVehicles;


    document.getElementById(
        "activeParking"
    ).textContent = activeParking;


    document.getElementById(
        "totalIncome"
    ).textContent =
        formatRupiah(totalIncome);


    document.getElementById(
        "totalTransactions"
    ).textContent = totalVehicles;


    renderParkingStatus();

    renderRecentTransactions();

}


/* ================= TRANSAKSI TERBARU ================= */

function renderRecentTransactions() {

    const tbody =
        document.getElementById(
            "recentTransactions"
        );

    tbody.innerHTML = "";


    const recent =
        transactions.slice(0, 5);


    if (recent.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="5"
                    style="
                        text-align:center;
                        color:#94a3b8;
                        padding:30px;
                    "
                >
                    Belum ada transaksi.
                </td>
            </tr>
        `;

        return;
    }


    recent.forEach(transaction => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                <strong>
                    ${transaction.ticketCode}
                </strong>
            </td>

            <td>
                ${transaction.plate}
            </td>

            <td>
                ${transaction.vehicle}
            </td>

            <td>
                ${formatDate(transaction.entryTime)}
            </td>

            <td>

                <span class="
                    status-badge
                    ${
                        transaction.status === "paid"
                            ? "status-paid"
                            : "status-active"
                    }
                ">

                    ${
                        transaction.status === "paid"
                            ? "Sudah Bayar"
                            : "Aktif"
                    }

                </span>

            </td>

        `;


        tbody.appendChild(row);

    });

}


/* ================= HISTORY ================= */

function renderHistory() {

    const search =
        document
            .getElementById("historySearch")
            .value
            .trim()
            .toUpperCase();


    const filter =
        document
            .getElementById("historyFilter")
            .value;


    let data = [...transactions];


    if (search) {

        data = data.filter(item =>

            item.ticketCode
                .toUpperCase()
                .includes(search)

            ||

            item.plate
                .toUpperCase()
                .includes(search)

        );

    }


    if (filter !== "all") {

        data =
            data.filter(item =>
                item.status === filter
            );

    }


    const tbody =
        document.getElementById(
            "historyTableBody"
        );

    tbody.innerHTML = "";


    if (data.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="10"
                    style="
                        text-align:center;
                        padding:35px;
                        color:#94a3b8;
                    "
                >
                    Tidak ada data transaksi.
                </td>
            </tr>
        `;

    } else {

        data.forEach((item, index) => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>${index + 1}</td>

                <td>
                    <strong>
                        ${item.ticketCode}
                    </strong>
                </td>

                <td>${item.plate}</td>

                <td>${item.vehicle}</td>

                <td>${item.guest}</td>

                <td>${item.slot}</td>

                <td>
                    ${formatDate(item.entryTime)}
                </td>

                <td>
                    ${
                        item.exitTime
                            ? formatDate(item.exitTime)
                            : "-"
                    }
                </td>

                <td>
                    ${formatRupiah(item.total || 0)}
                </td>

                <td>

                    <span class="
                        status-badge
                        ${
                            item.status === "paid"
                                ? "status-paid"
                                : "status-active"
                        }
                    ">

                        ${
                            item.status === "paid"
                                ? "Sudah Bayar"
                                : "Aktif"
                        }

                    </span>

                </td>

            `;


            tbody.appendChild(row);

        });

    }


    updateHistoryStats();

}


/* ================= HISTORY SEARCH ================= */

document
    .getElementById("historySearch")
    .addEventListener(
        "input",
        renderHistory
    );


document
    .getElementById("historyFilter")
    .addEventListener(
        "change",
        renderHistory
    );


/* ================= HISTORY STATISTIK ================= */

function updateHistoryStats() {

    const total =
        transactions.length;


    const paid =
        transactions.filter(
            item => item.status === "paid"
        ).length;


    const unpaid =
        transactions.filter(
            item => item.status === "active"
        ).length;


    const income =
        transactions.reduce(
            (sum, item) =>
                sum + Number(item.total || 0),
            0
        );


    document.getElementById(
        "historyTotal"
    ).textContent = total;


    document.getElementById(
        "historyPaid"
    ).textContent = paid;


    document.getElementById(
        "historyUnpaid"
    ).textContent = unpaid;


    document.getElementById(
        "historyIncome"
    ).textContent =
        formatRupiah(income);

}


/* ================= EXPORT EXCEL ================= */

document
    .getElementById("exportExcel")
    .addEventListener(
        "click",
        exportToExcel
    );


function exportToExcel() {

    if (transactions.length === 0) {

        showToast(
            "Tidak Ada Data",
            "Belum ada transaksi untuk diexport.",
            "!"
        );

        return;

    }


    const excelData =
        transactions.map(
            (item, index) => ({

                "No":
                    index + 1,

                "Kode Tiket":
                    item.ticketCode,

                "Plat Nomor":
                    item.plate,

                "Kendaraan":
                    item.vehicle,

                "Kategori Tamu":
                    item.guest,

                "Slot Parkir":
                    item.slot,

                "Waktu Masuk":
                    formatDate(item.entryTime),

                "Waktu Keluar":
                    item.exitTime
                        ? formatDate(item.exitTime)
                        : "-",

                "Durasi":
                    item.duration
                        ? `${item.duration} Jam`
                        : "-",

                "Total":
                    item.total || 0,

                "Metode Pembayaran":
                    item.paymentMethod || "-",

                "Status":
                    item.status === "paid"
                        ? "Sudah Bayar"
                        : "Aktif"

            })
        );


    const worksheet =
        XLSX.utils.json_to_sheet(
            excelData
        );


    const workbook =
        XLSX.utils.book_new();


    XLSX.utils.book_append_sheet(
        workbook,
        worksheet,
        "Riwayat Parkir"
    );


    XLSX.writeFile(
        workbook,
        "Riwayat_Transaksi_Hotel_Erlang.xlsx"
    );


    showToast(
        "Export Berhasil",
        "File Excel berhasil dibuat.",
        "✓"
    );

}


/* ================= TOAST ================= */

let toastTimeout;


function showToast(
    title,
    message,
    icon = "✓"
) {

    const toast =
        document.getElementById("toast");

    document.getElementById(
        "toastTitle"
    ).textContent = title;

    document.getElementById(
        "toastMessage"
    ).textContent = message;

    document.getElementById(
        "toastIcon"
    ).textContent = icon;


    toast.classList.add("show");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

}


/* ================= INISIALISASI ================= */

renderRentalSlots();
updateDashboard();
