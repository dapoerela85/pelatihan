// Fungsi untuk menampilkan modal dan menyimpan data profil
function isiDataProfil() {
    const profileData = localStorage.getItem('userProfile');
    const modal = new bootstrap.Modal(document.getElementById('profileModal'));
    const isEditing = !!profileData;
    const modalTitle = document.getElementById('profileModalLabel');
    modalTitle.textContent = isEditing ? 'Edit Data Profil' : 'Isi Data Profil';

    if (isEditing) {
        const parsedData = JSON.parse(profileData);
        document.getElementById('modalNama').value = parsedData.nama;
        document.getElementById('modalInstansi').value = parsedData.instansi;
    } else {
        document.getElementById('modalNama').value = '';
        document.getElementById('modalInstansi').value = '';
    }

    modal.show();

    // Remove existing click listeners first
    const saveBtn = document.getElementById('saveProfileBtn');
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    newSaveBtn.addEventListener('click', function () {
        const nama = document.getElementById('modalNama').value.trim();
        const instansi = document.getElementById('modalInstansi').value.trim();

        if (!nama) {
            showNotification("Nama tidak boleh kosong!", 'danger');
            return;
        }

        localStorage.setItem('userProfile', JSON.stringify({
            nama,
            instansi
        }));

        showNotification(isEditing ? "Data berhasil diubah!" : "Data profil berhasil disimpan!");

        modal.hide();
        tampilkanProfil();
    });
}

// Fungsi untuk menghapus profil
function hapusProfil() {
    if (confirm('Apakah Anda yakin ingin menghapus profil?')) {
        localStorage.removeItem('userProfile');
        showNotification("Profil berhasil dihapus", 'info');
        tampilkanProfil();
    }
}

// Fungsi tampilkan Profil
function tampilkanProfil() {
    const profileData = localStorage.getItem('userProfile');
    const profileElement = document.getElementById('user-profile-display');

    if (!profileElement) return;

    if (profileData) {
        const { nama, instansi } = JSON.parse(profileData);
        const firstName = nama.split(' ')[0];
        
        profileElement.innerHTML = `
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i> <span id="profile-nama" class="text-truncate">Saya</span>
          </a>
          <ul class="dropdown-menu">
            <li class="p-2 fw-bold d-none">Salam, ${firstName}</li>
            <li><span id="profile-nama" class="dropdown-item text-truncate">${nama}</span></li>
            <li><span class="dropdown-item text-truncate" id="profile-instansi">${instansi}</span></li>
            <li class="text-center">
             <hr class="dropdown-divider">
             <div class="btn-group">
             <button class="btn btn-sm btn-outline-primary mt-2 btn-edit-profil" onclick="isiDataProfil()">
              <i class="bi bi-pencil-square"></i> Edit
             </button>
             <button class="btn btn-sm btn-outline-danger mt-2" onclick="hapusProfil()">
              <i class="bi bi-trash"></i> Hapus
             </button>
             </div>
            </li>
          </ul>
        </li>
        `;
    } else {
        profileElement.innerHTML = `
        <li class="nav-item dropdown justify-content-end">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle"></i> <span id="profile-nama" class="">Saya</span>
          </a>
          <ul class="dropdown-menu">
            <li><span class="dropdown-item text-truncate" id="profile-instansi"></span></li>
            <li class="text-center">
             <hr class="dropdown-divider">
             <button class="btn btn-sm btn-outline-primary btn-edit-profil" onclick="isiDataProfil()">
              <i class="bi bi-pencil-square"></i> Isi Data Profil
             </button>
            </li>
          </ul>
        </li>
        `;
    }
}

// Fungsi showNotification
function showNotification(message, type = 'success') {
    // Hapus notifikasi sebelumnya jika ada
    const oldNotification = document.getElementById('profile-notification');
    if (oldNotification) {
        oldNotification.remove();
    }

    // Buat elemen notifikasi
    const notification = document.createElement('div');
    notification.id = 'profile-notification';
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Tambahkan notifikasi ke dalam elemen profile display
    const profileElement = document.getElementById('user-profile-display');
    if (profileElement) {
        profileElement.parentNode.insertBefore(notification, profileElement);

        // Hilangkan notifikasi setelah 3 detik
        setTimeout(() => {
            const bootstrapAlert = bootstrap.Alert.getOrCreateInstance(notification);
            bootstrapAlert.close();
        }, 3000);
    }
}

// Panggil fungsi tampilkanProfil ketika halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanProfil);
