// ======================================
// DESA TLOGO PREMIUM SCRIPT
// ======================================

// ===============================
// NAVBAR SCROLL EFFECT
// ===============================

window.addEventListener("scroll", function () {
    // Mendeteksi saat halaman di-scroll oleh pengguna

    const navbar = document.querySelector(".header");
    // Mengambil elemen HTML yang memiliki class bernama "header" (navbar)

    if (window.scrollY > 50) {
        // Jika jarak scroll layar dari atas ke bawah sudah lebih dari 50 pixel

        navbar.style.background = "#0f172a";
        // Mengubah warna latar belakang navbar menjadi warna solid (biru gelap pekat)

        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
        // Memberi efek bayangan di bawah navbar agar terlihat mengambang naik di atas konten

    } else {

        navbar.style.background = "rgba(15,23,42,0.95)";
        // Jika kembali ke posisi paling atas, warna latar belakang diubah menjadi sedikit transparan

        navbar.style.boxShadow = "none";
        // Menghilangkan efek bayangan pada navbar

    }
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backTop = document.querySelector(".back-top");
// Mengambil elemen HTML yang memiliki class "back-top" (tombol kembali ke atas)

window.addEventListener("scroll", () => {
    // Memasang fungsi pemantau (event listener) saat jendela browser di-scroll

    if (!backTop) return;
    // Jika tombol ".back-top" tidak ditemukan di halaman ini, hentikan jalannya kode di bawah

    if (window.scrollY > 300) {
        // Jika jarak scroll layar dari posisi atas sudah lebih dari 300 pixel

        backTop.style.opacity = "1";
        // Membuat tingkat kejelasan (opacity) tombol menjadi 1 agar terlihat jelas

        backTop.style.visibility = "visible";
        // Mengubah status visibilitas tombol menjadi terlihat (visible)

    } else {

        backTop.style.opacity = "0";
        // Membuat tingkat kejelasan tombol menjadi 0 agar tidak terlihat (transparan)

        backTop.style.visibility = "hidden";
        // Mengubah status visibilitas tombol menjadi tersembunyi (hidden)

    }
});

// ===============================
// ANIMASI SCROLL (INTERSECTION OBSERVER)
// ===============================

const observer = new IntersectionObserver((entries) => {
    // Membuat objek pengamat baru untuk mendeteksi kapan suatu elemen masuk ke dalam layar

    entries.forEach(entry => {
        // Memeriksa satu per satu setiap elemen yang sedang diamati

        if (entry.isIntersecting) {
            // Jika elemen tersebut sudah mulai terlihat atau masuk ke area layar browser

            entry.target.style.opacity = "1";
            // Mengubah tingkat kejelasan elemen tersebut menjadi penuh (muncul)

            entry.target.style.transform = "translateY(0)";
            // Mengembalikan posisi vertikal elemen ke posisi normalnya

        }

    });

}, {
    threshold: 0.1
    // Mengatur agar efek dipicu ketika minimal 10% dari bagian elemen sudah terlihat di layar
});

// Mengambil semua elemen yang ingin dianimasi
document.querySelectorAll(
".card,.activity-card,.gallery-item,.contact-card,.stat-box"
).forEach(el => {
    // Mencari seluruh elemen dengan class-class tersebut dan melakukan perulangan untuk setiap elemen (el)

    el.style.opacity = "0";
    // Mengatur kondisi awal seluruh elemen agar tidak terlihat (transparan) sebelum di-scroll

    el.style.transform = "translateY(40px)";
    // Menggeser posisi awal elemen ke bawah sejauh 40 pixel agar nantinya ada efek meluncur ke atas

    el.style.transition = "0.8s";
    // Mengatur durasi animasi transisi selama 0.8 detik agar pergerakannya halus

    observer.observe(el);
    // Memerintahkan objek observer untuk mulai mengamati elemen ini

});

// ===============================
// LIGHTBOX (GAMBAR BESAR)
// ===============================

function openImage(src){
    // Membuat fungsi bernama openImage yang menerima parameter berupa sumber link gambar (src)

    const lightbox =
    document.getElementById("lightbox");
    // Mengambil elemen kontainer pop-up gambar yang memiliki id bernama "lightbox"

    const lightboxImg =
    document.getElementById("lightbox-img");
    // Mengambil elemen tag gambar (img) di dalam pop-up yang memiliki id bernama "lightbox-img"

    if(lightbox && lightboxImg){
        // Memastikan bahwa kedua elemen tersebut benar-benar ada di dalam halaman HTML

        lightbox.style.display = "flex";
        // Mengubah gaya tampilan pop-up menjadi flex agar muncul memenuhi layar dan posisinya di tengah

        lightboxImg.src = src;
        // Memasukkan link gambar yang diklik pengguna ke dalam atribut src pada pop-up lightbox
    }
}

function closeImage(){
    // Membuat fungsi bernama closeImage untuk menutup pop-up gambar besar

    const lightbox =
    document.getElementById("lightbox");
    // Mengambil elemen pop-up gambar dengan id "lightbox"

    if(lightbox){
        // Memastikan elemen lightbox tersebut ditemukan di halaman HTML
        
        lightbox.style.display = "none";
        // Menyembunyikan pop-up dengan mengubah properti tampilannya menjadi "none"
    }
}

// ===============================
// TUTUP LIGHTBOX DENGAN ESC
// ===============================

document.addEventListener("keydown", function(e){
    // Memasang fungsi pemantau aktivitas tombol papan ketik (keyboard) di seluruh halaman

    if(e.key === "Escape"){
        // Memeriksa apakah tombol yang ditekan oleh pengguna adalah tombol "Escape" (ESC)

        closeImage();
        // Menjalankan fungsi closeImage untuk menutup pop-up gambar yang sedang terbuka
    }
});

// ===============================
// KLIK AREA GELAP LIGHTBOX
// ===============================

const lightbox =
document.getElementById("lightbox");
// Mengambil kembali elemen pop-up dengan id "lightbox"

if(lightbox){
    // Memastikan elemen lightbox tersebut ada pada halaman

    lightbox.addEventListener("click", function(e){
        // Memasang fungsi pemantau klik pada area elemen lightbox

        if(e.target === this){
            // Memeriksa apakah yang diklik pengguna adalah area luar/latar belakang hitam (bukan gambarnya)

            closeImage();
            // Menjalankan fungsi closeImage untuk menutup pop-up jika area luar gambar diklik
        }
    });
}

// ===============================
// COUNTER STATISTIK
// ===============================

const counters =
document.querySelectorAll(".stat-box h3");
// Mengambil semua elemen tag h3 yang berada di dalam class ".stat-box" (tempat angka statistik berada)

const speed = 200;
// Menentukan nilai pembagi untuk mengatur kecepatan jalannya animasi angka naik

counters.forEach(counter => {
    // Melakukan perulangan untuk memproses setiap elemen angka statistik satu per satu

    const updateCount = () => {
        // Membuat fungsi internal bernama updateCount untuk menghitung kenaikan angka

        const target =
        +counter.innerText.replace(/\D/g,'');
        // Mengambil teks angka target, menghapus karakter non-angka, lalu mengubahnya menjadi tipe data numerik (+)

        const count =
        +counter.getAttribute("data-count") || 0;
        // Mengambil nilai hitungan saat ini dari atribut "data-count", jika belum ada maka diatur mulai dari 0

        const increment =
        target / speed;
        // Menghitung besarnya nilai penambahan angka yang akan ditambahkan pada setiap langkah animasi

        if(count < target){
            // Jika nilai hitungan saat ini masih lebih kecil dari nilai angka target yang ditentukan

            const value =
            Math.ceil(count + increment);
            // Menambahkan nilai saat ini dengan angka pembagi, lalu membulatkannya ke atas (Math.ceil)

            counter.setAttribute(
            "data-count",
            value
            );
            // Menyimpan nilai hitungan terbaru yang sudah bertambah ke dalam atribut sementara "data-count"

            counter.innerText = value;
            // Memperbarui dan menampilkan nilai angka terbaru tersebut langsung ke layar browser

            setTimeout(updateCount, 10);
            // Menjalankan kembali fungsi updateCount ini secara berulang setiap 10 milidetik

        } else {

            counter.innerText = target;
            // Jika hitungan sudah mencapai atau melebihi target, pastikan angka akhir yang tertulis tepat sesuai target

        }
    };

    updateCount();
    // Memulai menjalankan fungsi animasi penghitungan angka naik saat halaman diproses
});

// ===============================
// MENU AKTIF
// ===============================

const currentPage =
window.location.pathname.split("/").pop();
// Mengambil URL path dari alamat browser saat ini, memotongnya berdasarkan tanda "/", lalu mengambil bagian paling akhir (nama file)

document.querySelectorAll(".menu a")
.forEach(link => {
    // Mengambil seluruh elemen tautan menu (tag a) di dalam class ".menu" dan mendata mereka satu per satu

    const href = link.getAttribute("href");
    // Mengambil nilai isi dari atribut "href" pada masing-masing tautan menu tersebut

    if(href === currentPage){
        // Memeriksa apakah isi atribut href menu sama dengan nama file halaman yang sedang aktif dibuka saat ini

        link.style.color = "#38bdf8";
        // Mengubah warna teks menu tersebut menjadi warna biru muda sebagai tanda bahwa menu sedang aktif

        link.style.fontWeight = "700";
        // Mengubah ketebalan font teks menu tersebut menjadi tebal (bold)
    }

});

// ===============================
// WELCOME TEXT
// ===============================

const text =
document.getElementById("text");
// Mengambil elemen HTML yang memiliki atribut id bernama "text"

if(text){
    // Memastikan elemen dengan id "text" tersebut benar-benar ditemukan di halaman HTML
    
    text.innerHTML =
    "Selamat Datang di Website Resmi Desa Tlogo 🌿";
    // Mengganti teks di dalam elemen tersebut secara otomatis dengan kalimat sambutan baru ini beserta emoji daun
}

// ===============================
// LOADING HALUS
// ===============================

window.addEventListener("load", () => {
    // Memasang fungsi yang akan berjalan secara otomatis ketika seluruh isi halaman selesai dimuat sempurna

    document.body.style.opacity = "1";
    // Mengubah tingkat kejelasan seluruh elemen bodi halaman menjadi 1 agar halaman muncul dengan efek transisi yang mulus
});
