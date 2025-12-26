    // document.addEventListener('DOMContentLoaded', ... sayfa yüklendiğinde çalışmasını sağlar
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Gerekli tüm elementleri seç
    const filtreButonlari = document.querySelectorAll('.filtre-btn');
    const projeKartlari = document.querySelectorAll('.proje-kart');

    // 2. Her bir filtreleme butonuna tıklama olay dinleyicisi ekle
    filtreButonlari.forEach(button => {
        button.addEventListener('click', function() {
            
            // a. Tıklanan butonun filtre değerini al
            const filtreDegeri = this.getAttribute('data-filter'); // Örn: 'tadilat'

            // b. Butonun görünümünü güncelle (Aktif sınıfını ayarla)
            filtreButonlari.forEach(btn => btn.classList.remove('aktif'));
            this.classList.add('aktif');

            // c. Tüm proje kartlarını filtrele
            projeKartlari.forEach(kart => {
                const kategori = kart.getAttribute('data-category');

                if (filtreDegeri === 'tumu') {
                    // 'Tümü' seçiliyse, tüm kartları göster
                    kart.classList.remove('gizle');
                } else if (kategori === filtreDegeri) {
                    // Kartın kategorisi filtre değeriyle tam eşleşiyorsa göster
                    kart.classList.remove('gizle');
                } else {
                    // Eşleşmiyorsa gizle
                    kart.classList.add('gizle');
                }
            });
        });
    });
});