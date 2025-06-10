// Fungsi untuk menampilkan modal dan menyimpan data profil
function isiDataProfil() {
    const profileData = localStorage.getItem('userProfile');
    const modal = new bootstrap.Modal(document.getElementById('profileModal'));
    const isEditing = !!profileData;
    const modalTitle = document.getElementById('profileModalLabel');
    modalTitle.textContent = isEditing ? 'Edit Data Profil' : 'Isi Data Profil';

    // Reset form validation
    document.getElementById('profileForm').classList.remove('was-validated');
    
    if (isEditing) {
        const parsedData = JSON.parse(profileData);
        document.getElementById('modalNama').value = parsedData.nama || '';
        document.getElementById('modalInstansi').value = parsedData.instansi || '';
    } else {
        document.getElementById('modalNama').value = '';
        document.getElementById('modalInstansi').value = '';
    }

    modal.show();

    // Remove existing click listeners first
    const saveBtn = document.getElementById('saveProfileBtn');
    const newSaveBtn = saveBtn.cloneNode(true);
    saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);

    newSaveBtn.addEventListener('click', function() {
        const form = document.getElementById('profileForm');
        form.classList.add('was-validated');
        
        if (!form.checkValidity()) {
            return;
        }

        const nama = document.getElementById('modalNama').value.trim();
        const instansi = document.getElementById('modalInstansi').value.trim();

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
    const profileData = localStorage.getItem('userProfile');
    if (!profileData) {
        showNotification("Tidak ada profil yang tersimpan", 'info');
        return;
    }

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
        
        // Only put the trigger in the nav
        profileElement.innerHTML = `
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" href="#" role="button" data-bs-toggle="modal" data-bs-target="#profileViewModal">
            <i class="bi bi-person-circle me-2"></i> 
            <span id="profile-nama" class="text-truncate">Saya</span>
          </a>
        </li>
        `;

        // Create or update the modal in the body
        let modal = document.getElementById('profileViewModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'profileViewModal';
            modal.className = 'modal fade';
            modal.setAttribute('tabindex', '-1');
            modal.setAttribute('aria-labelledby', 'profileViewModalLabel');
            modal.setAttribute('aria-hidden', 'true');
            document.body.appendChild(modal);
        }
        
        modal.innerHTML = `
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="profileViewModalLabel">Profil Anda</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="text-center mb-4">
                  <i class="bi bi-person-circle" style="font-size: 3rem;"></i>
                  <h4 class="mt-2">${nama}</h4>
                  <p class="text-muted">${instansi || 'Tidak ada instansi'}</p>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary" onclick="isiDataProfil()" data-bs-dismiss="modal">
                  <i class="bi bi-pencil-square me-2"></i>Edit Profil
                </button>
                <button type="button" class="btn btn-outline-danger" onclick="hapusProfil()" data-bs-dismiss="modal">
                  <i class="bi bi-trash me-2"></i>Hapus Profil
                </button>
              </div>
            </div>
          </div>
        `;

        // Initialize the modal if it's a new one
        if (!modal._modal) {
            modal._modal = new bootstrap.Modal(modal);
        }
    } else {
        profileElement.innerHTML = `
        <li class="nav-item">
          <a class="nav-link d-flex align-items-center" role="button" onclick="isiDataProfil()">
            <i class="bi bi-person-circle me-2"></i> 
            <span id="profile-nama">Saya</span>
          </a>
        </li>
        `;
        
        // Remove the modal if it exists when no profile data
        const modal = document.getElementById('profileViewModal');
        if (modal) {
            // Hide the modal first if it's open
            const bsModal = bootstrap.Modal.getInstance(modal);
            if (bsModal) {
                bsModal.hide();
            }
            modal.remove();
        }
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
    notification.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    notification.setAttribute('role', 'alert');
    notification.style.zIndex = '1100';
    notification.innerHTML = `
        <i class="bi ${type === 'success' ? 'bi-check-circle' : type === 'danger' ? 'bi-exclamation-triangle' : 'bi-info-circle'} me-2"></i>
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;

    // Tambahkan notifikasi ke body
    document.body.appendChild(notification);

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        const bsAlert = bootstrap.Alert.getOrCreateInstance(notification);
        bsAlert.close();
    }, 3000);
}

// Panggil fungsi tampilkanProfil ketika halaman dimuat
document.addEventListener('DOMContentLoaded', tampilkanProfil);
