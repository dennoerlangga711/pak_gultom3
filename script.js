// =====================================================
// DATA BUKU
// =====================================================

const buku = [

    // ================= NOVEL =================

    {
        id: 1,
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahun: 2005,
        halaman: 529,
        stok: 5,
        warna: "#526b61",
        deskripsi: "Kisah perjuangan sekelompok anak Belitung dalam mendapatkan pendidikan dan mengejar cita-cita.",
        rating: 4.8
    },

    {
        id: 2,
        judul: "Bumi",
        penulis: "Tere Liye",
        kategori: "Novel",
        tahun: 2014,
        halaman: 440,
        stok: 4,
        warna: "#5b607d",
        deskripsi: "Petualangan Raib dan teman-temannya menjelajahi dunia paralel yang penuh misteri.",
        rating: 4.7
    },

    {
        id: 3,
        judul: "Negeri 5 Menara",
        penulis: "Ahmad Fuadi",
        kategori: "Novel",
        tahun: 2009,
        halaman: 424,
        stok: 3,
        warna: "#806449",
        deskripsi: "Perjalanan enam sahabat yang belajar tentang pendidikan, persahabatan, dan mimpi.",
        rating: 4.7
    },

    {
        id: 4,
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Novel",
        tahun: 1980,
        halaman: 535,
        stok: 2,
        warna: "#704d45",
        deskripsi: "Kisah kehidupan Minke pada masa kolonial Hindia Belanda.",
        rating: 4.9
    },

    {
        id: 5,
        judul: "Perahu Kertas",
        penulis: "Dee Lestari",
        kategori: "Novel",
        tahun: 2009,
        halaman: 444,
        stok: 4,
        warna: "#6c6170",
        deskripsi: "Kisah perjalanan Kugy dan Keenan dalam menemukan cinta dan cita-cita.",
        rating: 4.6
    },

    {
        id: 6,
        judul: "Ayat-Ayat Cinta",
        penulis: "Habiburrahman El Shirazy",
        kategori: "Novel",
        tahun: 2004,
        halaman: 419,
        stok: 3,
        warna: "#755e50",
        deskripsi: "Kisah kehidupan Fahri yang penuh dengan perjuangan, pendidikan, dan cinta.",
        rating: 4.7
    },

    {
        id: 7,
        judul: "Dilan 1990",
        penulis: "Pidi Baiq",
        kategori: "Novel",
        tahun: 2014,
        halaman: 332,
        stok: 5,
        warna: "#5c6673",
        deskripsi: "Kisah cinta remaja antara Dilan dan Milea pada tahun 1990.",
        rating: 4.5
    },

    {
        id: 8,
        judul: "Ronggeng Dukuh Paruk",
        penulis: "Ahmad Tohari",
        kategori: "Novel",
        tahun: 1982,
        halaman: 408,
        stok: 2,
        warna: "#705944",
        deskripsi: "Kisah kehidupan masyarakat Dukuh Paruk dan seorang ronggeng bernama Srintil.",
        rating: 4.8
    },

    {
        id: 9,
        judul: "Sang Pemimpi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahun: 2006,
        halaman: 288,
        stok: 3,
        warna: "#4f655f",
        deskripsi: "Perjalanan tiga sahabat dalam mengejar impian untuk melanjutkan pendidikan.",
        rating: 4.7
    },

    {
        id: 10,
        judul: "Pulang",
        penulis: "Tere Liye",
        kategori: "Novel",
        tahun: 2015,
        halaman: 400,
        stok: 4,
        warna: "#514e64",
        deskripsi: "Kisah perjalanan hidup Bujang dan keluarganya dalam menghadapi dunia.",
        rating: 4.7
    },


    // ================= SEJARAH =================

    {
        id: 11,
        judul: "Sejarah Indonesia Modern",
        penulis: "M.C. Ricklefs",
        kategori: "Sejarah",
        tahun: 2008,
        halaman: 700,
        stok: 3,
        warna: "#536b69",
        deskripsi: "Pembahasan mengenai perkembangan sejarah Indonesia dari masa awal hingga periode modern.",
        rating: 4.6
    },

    {
        id: 12,
        judul: "Sejarah Dunia",
        penulis: "J.M. Roberts",
        kategori: "Sejarah",
        tahun: 2017,
        halaman: 620,
        stok: 3,
        warna: "#715c48",
        deskripsi: "Gambaran perkembangan peradaban dan peristiwa penting dalam sejarah dunia.",
        rating: 4.5
    },

    {
        id: 13,
        judul: "Sejarah Nasional Indonesia",
        penulis: "Tim Sejarah Nasional",
        kategori: "Sejarah",
        tahun: 2019,
        halaman: 580,
        stok: 4,
        warna: "#665442",
        deskripsi: "Pembahasan perjalanan bangsa Indonesia dari masa kerajaan hingga kemerdekaan.",
        rating: 4.6
    },

    {
        id: 14,
        judul: "Indonesia dalam Arus Sejarah",
        penulis: "Tim Nasional Penulisan Sejarah",
        kategori: "Sejarah",
        tahun: 2018,
        halaman: 540,
        stok: 2,
        warna: "#59685f",
        deskripsi: "Membahas berbagai periode penting dalam perjalanan sejarah Indonesia.",
        rating: 4.5
    },

    {
        id: 15,
        judul: "Perang Dunia II",
        penulis: "Antony Beevor",
        kategori: "Sejarah",
        tahun: 2013,
        halaman: 720,
        stok: 3,
        warna: "#555b5a",
        deskripsi: "Pembahasan mengenai salah satu konflik terbesar dalam sejarah dunia.",
        rating: 4.7
    },

    {
        id: 16,
        judul: "Sejarah Peradaban Dunia",
        penulis: "Will Durant",
        kategori: "Sejarah",
        tahun: 2015,
        halaman: 680,
        stok: 2,
        warna: "#74634f",
        deskripsi: "Mengenal perkembangan berbagai peradaban besar dunia.",
        rating: 4.5
    },


    // ================= MATEMATIKA =================

    {
        id: 17,
        judul: "Matematika Dasar",
        penulis: "Sukino",
        kategori: "Matematika",
        tahun: 2022,
        halaman: 350,
        stok: 5,
        warna: "#4d6570",
        deskripsi: "Materi dasar matematika yang membantu siswa memahami konsep perhitungan.",
        rating: 4.6
    },

    {
        id: 18,
        judul: "Kalkulus Dasar",
        penulis: "Purcell",
        kategori: "Matematika",
        tahun: 2020,
        halaman: 510,
        stok: 3,
        warna: "#5d6b4f",
        deskripsi: "Membahas limit, turunan, integral, dan konsep kalkulus dasar.",
        rating: 4.5
    },

    {
        id: 19,
        judul: "Aljabar Linear",
        penulis: "Howard Anton",
        kategori: "Matematika",
        tahun: 2021,
        halaman: 480,
        stok: 3,
        warna: "#536578",
        deskripsi: "Mempelajari konsep vektor, matriks, sistem persamaan dan ruang vektor.",
        rating: 4.6
    },

    {
        id: 20,
        judul: "Statistika Dasar",
        penulis: "Sugiyono",
        kategori: "Matematika",
        tahun: 2020,
        halaman: 390,
        stok: 5,
        warna: "#64705d",
        deskripsi: "Mengenal konsep dasar statistik dan pengolahan data.",
        rating: 4.6
    },

    {
        id: 21,
        judul: "Geometri untuk SMA",
        penulis: "Clemens",
        kategori: "Matematika",
        tahun: 2019,
        halaman: 310,
        stok: 3,
        warna: "#655a6e",
        deskripsi: "Membahas konsep geometri bidang dan ruang.",
        rating: 4.4
    },

    {
        id: 22,
        judul: "Matematika Diskrit",
        penulis: "Rinaldi Munir",
        kategori: "Matematika",
        tahun: 2021,
        halaman: 450,
        stok: 4,
        warna: "#596c6c",
        deskripsi: "Materi matematika diskrit yang banyak digunakan dalam bidang informatika.",
        rating: 4.8
    },


    // ================= FISIKA =================

    {
        id: 23,
        judul: "Fisika Dasar",
        penulis: "Halliday",
        kategori: "Fisika",
        tahun: 2020,
        halaman: 600,
        stok: 4,
        warna: "#515e75",
        deskripsi: "Buku pengantar fisika yang membahas mekanika, energi, gelombang, dan listrik.",
        rating: 4.7
    },

    {
        id: 24,
        judul: "Fisika untuk SMA",
        penulis: "Marthen Kanginan",
        kategori: "Fisika",
        tahun: 2021,
        halaman: 430,
        stok: 4,
        warna: "#65715e",
        deskripsi: "Materi fisika untuk siswa sekolah menengah.",
        rating: 4.5
    },

    {
        id: 25,
        judul: "Mekanika Dasar",
        penulis: "Young dan Freedman",
        kategori: "Fisika",
        tahun: 2019,
        halaman: 520,
        stok: 3,
        warna: "#566879",
        deskripsi: "Membahas gerak, gaya, energi, momentum dan mekanika.",
        rating: 4.7
    },

    {
        id: 26,
        judul: "Fisika Modern",
        penulis: "Kenneth Krane",
        kategori: "Fisika",
        tahun: 2018,
        halaman: 600,
        stok: 2,
        warna: "#5c6072",
        deskripsi: "Pengantar mengenai relativitas, mekanika kuantum dan fisika modern.",
        rating: 4.6
    },

    {
        id: 27,
        judul: "Listrik dan Magnet",
        penulis: "Giancoli",
        kategori: "Fisika",
        tahun: 2020,
        halaman: 490,
        stok: 3,
        warna: "#536b6a",
        deskripsi: "Mempelajari konsep listrik, medan magnet dan elektromagnetisme.",
        rating: 4.5
    },


    // ================= BIOLOGI =================

    {
        id: 28,
        judul: "Biologi Dasar",
        penulis: "Neil A. Campbell",
        kategori: "Biologi",
        tahun: 2021,
        halaman: 550,
        stok: 4,
        warna: "#526a55",
        deskripsi: "Membahas sel, genetika, evolusi, organisme dan ekosistem.",
        rating: 4.8
    },

    {
        id: 29,
        judul: "Biologi untuk SMA",
        penulis: "Irnaningtyas",
        kategori: "Biologi",
        tahun: 2022,
        halaman: 480,
        stok: 3,
        warna: "#657c61",
        deskripsi: "Materi biologi untuk siswa sekolah menengah.",
        rating: 4.6
    },

    {
        id: 30,
        judul: "Genetika Dasar",
        penulis: "Suryo",
        kategori: "Biologi",
        tahun: 2019,
        halaman: 370,
        stok: 3,
        warna: "#596f5c",
        deskripsi: "Mempelajari konsep pewarisan sifat dan genetika.",
        rating: 4.5
    },

    {
        id: 31,
        judul: "Ekologi dan Lingkungan",
        penulis: "Odum",
        kategori: "Biologi",
        tahun: 2020,
        halaman: 430,
        stok: 4,
        warna: "#526c58",
        deskripsi: "Mengenal hubungan organisme dengan lingkungan dan ekosistem.",
        rating: 4.7
    },

    {
        id: 32,
        judul: "Anatomi Tubuh Manusia",
        penulis: "Pearce",
        kategori: "Biologi",
        tahun: 2021,
        halaman: 410,
        stok: 2,
        warna: "#765e5b",
        deskripsi: "Membahas struktur dan fungsi organ tubuh manusia.",
        rating: 4.6
    },


    // ================= INFORMATIKA =================

    {
        id: 33,
        judul: "Pemrograman JavaScript",
        penulis: "Eko Kurniawan",
        kategori: "Informatika",
        tahun: 2023,
        halaman: 320,
        stok: 5,
        warna: "#555e70",
        deskripsi: "Panduan mempelajari JavaScript dari dasar hingga membangun aplikasi web.",
        rating: 4.8
    },

    {
        id: 34,
        judul: "Pemrograman Python",
        penulis: "Abdul Kadir",
        kategori: "Informatika",
        tahun: 2022,
        halaman: 400,
        stok: 4,
        warna: "#536b61",
        deskripsi: "Buku pembelajaran Python untuk pemula dengan contoh pemrograman praktis.",
        rating: 4.7
    },

    {
        id: 35,
        judul: "Algoritma dan Pemrograman",
        penulis: "Rosa A.S.",
        kategori: "Informatika",
        tahun: 2022,
        halaman: 450,
        stok: 3,
        warna: "#645c72",
        deskripsi: "Mempelajari logika, algoritma, struktur data dan dasar pemrograman.",
        rating: 4.7
    },

    {
        id: 36,
        judul: "HTML dan CSS",
        penulis: "Rohi Abdulloh",
        kategori: "Informatika",
        tahun: 2021,
        halaman: 280,
        stok: 5,
        warna: "#536a70",
        deskripsi: "Panduan membuat tampilan website menggunakan HTML dan CSS.",
        rating: 4.6
    },

    {
        id: 37,
        judul: "Basis Data",
        penulis: "Fathansyah",
        kategori: "Informatika",
        tahun: 2020,
        halaman: 390,
        stok: 4,
        warna: "#555f70",
        deskripsi: "Mempelajari konsep database, tabel, relasi dan SQL.",
        rating: 4.8
    },

    {
        id: 38,
        judul: "Rekayasa Perangkat Lunak",
        penulis: "Pressman",
        kategori: "Informatika",
        tahun: 2019,
        halaman: 700,
        stok: 2,
        warna: "#625a68",
        deskripsi: "Membahas proses pengembangan perangkat lunak secara sistematis.",
        rating: 4.7
    },

    {
        id: 39,
        judul: "Jaringan Komputer",
        penulis: "Budi Sutedjo",
        kategori: "Informatika",
        tahun: 2021,
        halaman: 420,
        stok: 3,
        warna: "#536b72",
        deskripsi: "Mengenal konsep jaringan komputer, perangkat jaringan dan komunikasi data.",
        rating: 4.6
    },

    {
        id: 40,
        judul: "Pemrograman Java",
        penulis: "Kadir",
        kategori: "Informatika",
        tahun: 2022,
        halaman: 460,
        stok: 4,
        warna: "#59646e",
        deskripsi: "Panduan pemrograman Java untuk pemula.",
        rating: 4.5
    },


    // ================= TEKNOLOGI =================

    {
        id: 41,
        judul: "Artificial Intelligence",
        penulis: "Stuart Russell",
        kategori: "Teknologi",
        tahun: 2021,
        halaman: 700,
        stok: 2,
        warna: "#59616c",
        deskripsi: "Pembahasan mengenai konsep kecerdasan buatan dan perkembangan teknologi AI.",
        rating: 4.8
    },

    {
        id: 42,
        judul: "Teknologi Digital",
        penulis: "Budi Raharjo",
        kategori: "Teknologi",
        tahun: 2023,
        halaman: 300,
        stok: 4,
        warna: "#596c63",
        deskripsi: "Mengenal perkembangan teknologi digital dan pengaruhnya terhadap kehidupan.",
        rating: 4.5
    },

    {
        id: 43,
        judul: "Internet dan Teknologi",
        penulis: "Richardus Eko Indrajit",
        kategori: "Teknologi",
        tahun: 2021,
        halaman: 350,
        stok: 3,
        warna: "#536774",
        deskripsi: "Membahas internet, teknologi informasi dan perkembangan dunia digital.",
        rating: 4.6
    },

    {
        id: 44,
        judul: "Cloud Computing",
        penulis: "Thomas Erl",
        kategori: "Teknologi",
        tahun: 2020,
        halaman: 450,
        stok: 2,
        warna: "#59656d",
        deskripsi: "Mengenal konsep komputasi awan dan penerapannya.",
        rating: 4.5
    },

    {
        id: 45,
        judul: "Keamanan Siber",
        penulis: "William Stallings",
        kategori: "Teknologi",
        tahun: 2022,
        halaman: 520,
        stok: 3,
        warna: "#4f5d63",
        deskripsi: "Pengantar keamanan komputer dan keamanan jaringan.",
        rating: 4.7
    },


    // ================= EKONOMI =================

    {
        id: 46,
        judul: "Pengantar Ekonomi",
        penulis: "Sadono Sukirno",
        kategori: "Ekonomi",
        tahun: 2020,
        halaman: 420,
        stok: 3,
        warna: "#6b604c",
        deskripsi: "Mengenal konsep dasar ekonomi dan kegiatan ekonomi.",
        rating: 4.6
    },

    {
        id: 47,
        judul: "Ekonomi Mikro",
        penulis: "N. Gregory Mankiw",
        kategori: "Ekonomi",
        tahun: 2021,
        halaman: 480,
        stok: 3,
        warna: "#5c6757",
        deskripsi: "Membahas perilaku konsumen, perusahaan dan pasar.",
        rating: 4.6
    },

    {
        id: 48,
        judul: "Manajemen Dasar",
        penulis: "T. Hani Handoko",
        kategori: "Ekonomi",
        tahun: 2019,
        halaman: 390,
        stok: 4,
        warna: "#6b5c52",
        deskripsi: "Pengantar manajemen dan pengelolaan organisasi.",
        rating: 4.5
    },


    // ================= PSIKOLOGI =================

    {
        id: 49,
        judul: "Pengantar Psikologi",
        penulis: "Sarlito W. Sarwono",
        kategori: "Psikologi",
        tahun: 2020,
        halaman: 360,
        stok: 3,
        warna: "#695e68",
        deskripsi: "Mengenal perilaku manusia dan dasar-dasar ilmu psikologi.",
        rating: 4.6
    },

    {
        id: 50,
        judul: "Psikologi Remaja",
        penulis: "Mohammad Ali",
        kategori: "Psikologi",
        tahun: 2021,
        halaman: 330,
        stok: 4,
        warna: "#65706b",
        deskripsi: "Membahas perkembangan psikologis dan sosial pada masa remaja.",
        rating: 4.7
    },

    {
        id: 51,
        judul: "Psikologi Pendidikan",
        penulis: "John W. Santrock",
        kategori: "Psikologi",
        tahun: 2020,
        halaman: 510,
        stok: 2,
        warna: "#626477",
        deskripsi: "Mempelajari hubungan antara psikologi dan proses pendidikan.",
        rating: 4.6
    },


    // ================= BAHASA =================

    {
        id: 52,
        judul: "Bahasa Indonesia untuk SMA",
        penulis: "Kosasih",
        kategori: "Bahasa",
        tahun: 2022,
        halaman: 310,
        stok: 5,
        warna: "#645d50",
        deskripsi: "Materi bahasa Indonesia untuk siswa sekolah menengah.",
        rating: 4.6
    },

    {
        id: 53,
        judul: "English Grammar",
        penulis: "Raymond Murphy",
        kategori: "Bahasa",
        tahun: 2021,
        halaman: 380,
        stok: 4,
        warna: "#53656d",
        deskripsi: "Panduan tata bahasa Inggris dari tingkat dasar hingga menengah.",
        rating: 4.8
    },

    {
        id: 54,
        judul: "Kamus Bahasa Indonesia",
        penulis: "Badan Bahasa",
        kategori: "Bahasa",
        tahun: 2023,
        halaman: 900,
        stok: 2,
        warna: "#5c584d",
        deskripsi: "Kamus untuk membantu memahami kosakata bahasa Indonesia.",
        rating: 4.7
    },


    // ================= AGAMA =================

    {
        id: 55,
        judul: "Pendidikan Agama Islam",
        penulis: "Abdul Majid",
        kategori: "Agama",
        tahun: 2021,
        halaman: 350,
        stok: 4,
        warna: "#52675b",
        deskripsi: "Materi pendidikan agama Islam untuk pelajar.",
        rating: 4.7
    },

    {
        id: 56,
        judul: "Akhlak dan Kehidupan",
        penulis: "Yunahar Ilyas",
        kategori: "Agama",
        tahun: 2020,
        halaman: 290,
        stok: 3,
        warna: "#66715b",
        deskripsi: "Pembahasan mengenai akhlak dan penerapannya dalam kehidupan sehari-hari.",
        rating: 4.6
    },


    // ================= PENDIDIKAN =================

    {
        id: 57,
        judul: "Metode Pembelajaran",
        penulis: "Slameto",
        kategori: "Pendidikan",
        tahun: 2020,
        halaman: 360,
        stok: 3,
        warna: "#5c6670",
        deskripsi: "Membahas berbagai metode pembelajaran yang dapat diterapkan di sekolah.",
        rating: 4.5
    },

    {
        id: 58,
        judul: "Strategi Belajar Efektif",
        penulis: "Dimyati",
        kategori: "Pendidikan",
        tahun: 2021,
        halaman: 280,
        stok: 4,
        warna: "#657064",
        deskripsi: "Panduan untuk meningkatkan efektivitas kegiatan belajar.",
        rating: 4.6
    },


    // ================= SENI =================

    {
        id: 59,
        judul: "Seni dan Budaya Indonesia",
        penulis: "Eko Supriyadi",
        kategori: "Seni",
        tahun: 2020,
        halaman: 340,
        stok: 3,
        warna: "#765e51",
        deskripsi: "Mengenal berbagai seni dan budaya yang berkembang di Indonesia.",
        rating: 4.7
    },

    {
        id: 60,
        judul: "Dasar-Dasar Desain",
        penulis: "Surianto Rustan",
        kategori: "Seni",
        tahun: 2022,
        halaman: 310,
        stok: 4,
        warna: "#5c626e",
        deskripsi: "Pengantar prinsip dasar desain dan komunikasi visual.",
        rating: 4.6
    }

];


// =====================================================
// VARIABEL
// =====================================================

let daftarTampilan = [...buku];

let peminjaman =
    JSON.parse(
        localStorage.getItem("ruangBacaPeminjaman")
    ) || [];


// =====================================================
// MEMBUAT COVER BUKU
// =====================================================

function buatCover(item) {

    return `

        <div
            class="cover-paper"
            style="background:${item.warna}"
        >

            <div class="cover-category">
                ${item.kategori}
            </div>

            <div class="cover-title">
                ${item.judul}
            </div>

            <div class="cover-author">
                ${item.penulis}
            </div>

        </div>

    `;
}


// =====================================================
// TAMPILKAN BUKU
// =====================================================

function tampilkanBuku(data) {

    const grid =
        document.getElementById("bookGrid");

    grid.innerHTML = "";

    document.getElementById("jumlahHasil").innerText =
        `${data.length} buku`;


    if (data.length === 0) {

        grid.innerHTML = `

            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:80px 20px;
                border:1px solid #e5e0d8;
                background:white;
            ">

                <h2 style="
                    font-family:'Playfair Display',serif;
                    margin-bottom:10px;
                ">
                    Tidak ada buku
                </h2>

                <p style="color:#888">
                    Coba gunakan kata pencarian yang berbeda.
                </p>

            </div>

        `;

        return;
    }


    data.forEach(item => {

        const tersedia = item.stok > 0;


        grid.innerHTML += `

            <article class="book-card">

                <div
                    class="book-cover"
                    style="
                        background:
                        linear-gradient(
                            135deg,
                            ${item.warna}22,
                            #eeeae2
                        );
                    "
                >

                    ${buatCover(item)}

                </div>


                <div class="book-body">

                    <div class="book-category">
                        ${item.kategori}
                    </div>


                    <h3>
                        ${item.judul}
                    </h3>


                    <div class="book-author">
                        ${item.penulis}
                    </div>


                    <div class="book-meta">

                        <span>
                            ${item.tahun}
                        </span>

                        <span>
                            ${item.halaman} halaman
                        </span>

                        <span>
                            ★ ${item.rating}
                        </span>

                    </div>


                    <div
                        class="${
                            tersedia
                            ? "available"
                            : "unavailable"
                        }"
                        style="
                            margin-top:10px;
                            font-size:10px;
                        "
                    >

                        ${
                            tersedia
                            ? `● Tersedia ${item.stok} eksemplar`
                            : "● Tidak tersedia"
                        }

                    </div>


                    <div class="book-bottom">

                        <button
                            class="detail-btn"
                            onclick="lihatDetail(${item.id})"
                        >
                            Detail
                        </button>


                        <button
                            class="borrow-btn"
                            onclick="bukaPinjam(${item.id})"
                            ${!tersedia ? "disabled" : ""}
                        >
                            Pinjam
                        </button>

                    </div>

                </div>

            </article>

        `;

    });

}


// =====================================================
// PENCARIAN
// =====================================================

function cariBuku() {

    const keyword =
        document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();


    if (keyword === "") {

        daftarTampilan = [...buku];

    } else {

        daftarTampilan =
            buku.filter(item =>

                item.judul
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.penulis
                    .toLowerCase()
                    .includes(keyword)

                ||

                item.kategori
                    .toLowerCase()
                    .includes(keyword)

            );

    }


    document.getElementById("catalogTitle").innerText =
        keyword
        ? `Hasil pencarian "${keyword}"`
        : "Koleksi pilihan";


    tampilkanBuku(daftarTampilan);


    document
        .getElementById("koleksi")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =====================================================
// PENCARIAN POPULER
// =====================================================

function searchPopular(keyword) {

    document.getElementById("searchInput").value =
        keyword;

    cariBuku();

}


// =====================================================
// FILTER KATEGORI
// =====================================================

function filterKategori(kategori, tombol = null) {

    if (kategori === "Semua") {

        daftarTampilan = [...buku];

        document.getElementById("catalogTitle").innerText =
            "Koleksi pilihan";

    } else {

        daftarTampilan =
            buku.filter(item =>
                item.kategori.toLowerCase() ===
                kategori.toLowerCase()
            );


        document.getElementById("catalogTitle").innerText =
            kategori;

    }


    document
        .querySelectorAll(".category-item")
        .forEach(item => {

            item.classList.remove("active");

        });


    if (tombol) {

        tombol.classList.add("active");

    } else if (kategori === "Semua") {

        document
            .querySelector(".category-item")
            .classList.add("active");

    }


    tampilkanBuku(daftarTampilan);


    document
        .getElementById("koleksi")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =====================================================
// SORTIR
// =====================================================

function urutkanBuku() {

    const pilihan =
        document.getElementById("sortBook").value;


    let hasil =
        [...daftarTampilan];


    if (pilihan === "terbaru") {

        hasil.sort(
            (a,b) => b.tahun - a.tahun
        );

    }


    if (pilihan === "judul") {

        hasil.sort(
            (a,b) =>
                a.judul.localeCompare(b.judul)
        );

    }


    if (pilihan === "penulis") {

        hasil.sort(
            (a,b) =>
                a.penulis.localeCompare(b.penulis)
        );

    }


    tampilkanBuku(hasil);

}


// =====================================================
// DETAIL BUKU
// =====================================================

function lihatDetail(id) {

    const item =
        buku.find(book => book.id === id);


    if (!item) return;


    document.getElementById("detailContent").innerHTML = `

        <div class="detail-layout">

            <div
                class="detail-cover"
                style="
                    background:
                    linear-gradient(
                        135deg,
                        ${item.warna}22,
                        #eeeae2
                    );
                "
            >

                ${buatCover(item)}

            </div>


            <div>

                <span class="eyebrow">
                    ${item.kategori}
                </span>


                <h2>
                    ${item.judul}
                </h2>


                <div class="detail-author">
                    ${item.penulis}
                </div>


                <div style="
                    color:#987957;
                    font-size:13px;
                ">
                    ★ ${item.rating} / 5
                </div>


                <p class="detail-description">
                    ${item.deskripsi}
                </p>


                <div class="detail-data">

                    <div>
                        Tahun terbit:
                        <strong>${item.tahun}</strong>
                    </div>

                    <div>
                        Halaman:
                        <strong>${item.halaman}</strong>
                    </div>

                    <div>
                        Kategori:
                        <strong>${item.kategori}</strong>
                    </div>

                    <div>
                        Stok:
                        <strong>${item.stok}</strong>
                    </div>

                </div>


                <button
                    class="submit-button"
                    style="margin-top:20px"
                    onclick="bukaPinjam(${item.id})"
                    ${item.stok <= 0 ? "disabled" : ""}
                >
                    Pinjam Buku
                </button>

            </div>

        </div>

    `;


    document.getElementById("detailModal").style.display =
        "flex";

}


// =====================================================
// TUTUP DETAIL
// =====================================================

function tutupDetail() {

    document.getElementById("detailModal").style.display =
        "none";

}


// =====================================================
// BUKA FORM PEMINJAMAN
// =====================================================

function bukaPinjam(id) {

    const item =
        buku.find(book => book.id === id);


    if (!item || item.stok <= 0) {

        alert("Buku tidak tersedia.");

        return;

    }


    document.getElementById("borrowBookId").value =
        id;


    document.getElementById("borrowBookName").innerText =
        item.judul;


    const tanggal =
        new Date();

    tanggal.setDate(
        tanggal.getDate() + 7
    );


    document.getElementById("returnDate").value =
        tanggal.toISOString().split("T")[0];


    document.getElementById("borrowModal").style.display =
        "flex";

}


// =====================================================
// TUTUP PINJAM
// =====================================================

function tutupPinjam() {

    document.getElementById("borrowModal").style.display =
        "none";

}


// =====================================================
// PROSES PEMINJAMAN
// =====================================================

function prosesPeminjaman(event) {

    event.preventDefault();


    const id =
        Number(
            document.getElementById("borrowBookId").value
        );


    const nama =
        document.getElementById("borrowName").value;


    const kelas =
        document.getElementById("borrowClass").value;


    const tanggal =
        document.getElementById("returnDate").value;


    const item =
        buku.find(book => book.id === id);


    if (!item || item.stok <= 0) {

        alert("Buku tidak tersedia.");

        return;

    }


    const data = {

        idPeminjaman: Date.now(),

        bukuId: id,

        judul: item.judul,

        nama: nama,

        kelas: kelas,

        tanggalKembali: tanggal

    };


    peminjaman.push(data);


    item.stok--;


    localStorage.setItem(
        "ruangBacaPeminjaman",
        JSON.stringify(peminjaman)
    );


    alert(
        "Peminjaman buku berhasil dicatat."
    );


    document.querySelector(
        "#borrowModal form"
    ).reset();


    tutupPinjam();

    tutupDetail();


    tampilkanBuku(daftarTampilan);

    updateStatistik();

}


// =====================================================
// LIHAT PEMINJAMAN
// =====================================================

function lihatPeminjaman() {

    const container =
        document.getElementById("historyContent");


    if (peminjaman.length === 0) {

        container.innerHTML = `

            <div style="
                text-align:center;
                padding:45px 10px;
                color:#888;
            ">

                <div style="
                    font-size:45px;
                    margin-bottom:10px;
                ">
                    📚
                </div>

                <p>
                    Belum ada buku yang dipinjam.
                </p>

            </div>

        `;

    } else {

        container.innerHTML = "";


        peminjaman.forEach(item => {

            container.innerHTML += `

                <div class="history-item">

                    <div>

                        <h3>
                            ${item.judul}
                        </h3>

                        <p>
                            Peminjam:
                            ${item.nama}
                        </p>

                        <p>
                            Kelas:
                            ${item.kelas}
                        </p>

                        <p>
                            Dikembalikan:
                            ${formatTanggal(
                                item.tanggalKembali
                            )}
                        </p>

                    </div>


                    <button
                        class="return-button"
                        onclick="
                            kembalikanBuku(
                                ${item.idPeminjaman}
                            )
                        "
                    >
                        Kembalikan
                    </button>

                </div>

            `;

        });

    }


    document.getElementById("historyModal").style.display =
        "flex";

}


// =====================================================
// KEMBALIKAN BUKU
// =====================================================

function kembalikanBuku(id) {

    const index =
        peminjaman.findIndex(
            item =>
                item.idPeminjaman === id
        );


    if (index === -1) return;


    const data =
        peminjaman[index];


    const item =
        buku.find(
            book =>
                book.id === data.bukuId
        );


    if (item) {

        item.stok++;

    }


    peminjaman.splice(index,1);


    localStorage.setItem(
        "ruangBacaPeminjaman",
        JSON.stringify(peminjaman)
    );


    alert(
        "Buku berhasil dikembalikan."
    );


    lihatPeminjaman();

    tampilkanBuku(daftarTampilan);

    updateStatistik();

}


// =====================================================
// TUTUP HISTORY
// =====================================================

function tutupHistory() {

    document.getElementById("historyModal").style.display =
        "none";

}


// =====================================================
// FORMAT TANGGAL
// =====================================================

function formatTanggal(tanggal) {

    return new Date(tanggal)
        .toLocaleDateString(
            "id-ID",
            {
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

}


// =====================================================
// STATISTIK
// =====================================================

function updateStatistik() {

    const kategori =
        new Set(
            buku.map(item => item.kategori)
        );


    const penulis =
        new Set(
            buku.map(item => item.penulis)
        );


    const tersedia =
        buku.reduce(
            (total,item) =>
                total + item.stok,
            0
        );


    document.getElementById("totalBuku").innerText =
        buku.length;


    document.getElementById("totalKategori").innerText =
        kategori.size;


    document.getElementById("totalPenulis").innerText =
        penulis.size;


    document.getElementById("totalTersedia").innerText =
        tersedia;


    document.getElementById("countSemua").innerText =
        buku.length;

}


// =====================================================
// MODAL CLICK OUTSIDE
// =====================================================

window.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            document.getElementById("detailModal")
        ) {

            tutupDetail();

        }


        if (
            event.target ===
            document.getElementById("borrowModal")
        ) {

            tutupPinjam();

        }


        if (
            event.target ===
            document.getElementById("historyModal")
        ) {

            tutupHistory();

        }

    }
);


// =====================================================
// START WEBSITE
// =====================================================

tampilkanBuku(buku);

updateStatistik();