/*Buat sebuah aplikasi untuk:
1. menyimpan data stok barang (id barang, nama, harga, kuantitas)
2. menampilkan semua data stok barang
3. menampilkan total harga semua barang (harga * kuantitas)
4. update data barang *opsional
5. hapus data barang *opsional

** data di simpan ke dalam sebuah file
** data inputan diambil dari prompt atau inputan user */

const prompt = require('prompt-sync')();

const Barang = require('./src/barang');

const b = new Barang();
let keluar;
let idBarang;
do {

    console.log('Aplikasi Data Stok Barang');
    console.log('1. Simpan Data Stok Barang');
    console.log('2. Tampilkan Semua Data Stok Barang');
    console.log('3. Tampilkan Total Harga Semua Barang');
    console.log('4. Update Data Barang');
    console.log('5. Hapus Data Barang');

    const menu = parseInt(prompt(`Pilih Menu Aplikasi? [1-5] : `));
    switch (menu) {
        case 1:
            console.log('\nSimpan Data Barang');
            const id = prompt('Id Barang : ');
            b.findIndex(id);
            if (b.getDataIndex() !== false) {
                console.log('ID Barang Sudah Digunakan');
                console.log(b.getDataIndex());
            } else {
                const nama = prompt('Nama : ');
                const harga = prompt('Harga : ');
                const kuantitas = prompt('Kuantitas : ');
                const dataBarang = {
                    id,
                    nama,
                    harga,
                    kuantitas
                };
                console.log('\n');
                b.simpanData(dataBarang);
            }
            break;
        case 2:
            if (b.bacaData() === false) {
                console.log('\nBelum Ada Data Yang Tersimpan');
            } else {
                console.log('\nSemua Data Stok Barang');
                console.log(JSON.parse(b.bacaData()));
            }
            break;
        case 3:
            if (b.totalHarga() === false) {
                console.log('\nBelum Ada Data Yang Tersimpan');
            } else {
                console.log('\nTotal Harga Barang');
                console.log(b.totalHarga());
            }
            break;
        case 4:
            console.log('Update Data Barang');
            if (b.bacaData() === false) {
                console.log('\nBelum Ada Data Yang Tersimpan');
            } else {
                console.log('\nSemua Data Stok Barang');
                console.log(JSON.parse(b.bacaData()));
                idBarang = prompt('Masukan ID Barang : ');
                b.findIndex(idBarang);
                if (b.getDataIndex() === false) {
                    console.log('Data Barang dengan ID Barang Yang Diinput Tidak Ditemukan');
                } else {
                    console.log(b.getDataIndex());
                    let update = prompt('Apakah anda ingin memperbarui data tersebut? [y/n] : ');
                    if (update === 'n' || update === 'N') {
                        console.log('Data tidak jadi diperbarui!');
                    } else if (update === 'y' || update === 'Y') {
                        console.log('Inputkan Data Baru');
                        const nama = prompt('Nama : ');
                        const harga = prompt('Harga : ');
                        const kuantitas = prompt('Kuantitas : ');
                        let id = b.getDataIndex().id;
                        const dataBarang = {
                            id,
                            nama,
                            harga,
                            kuantitas
                        };
                        console.log('\n');
                        b.updateData(dataBarang);
                        console.log('Data Berhasil Diperbarui!');
                    } else {
                        console.log('Inputan Salah');
                    }
                }
            }
            break;
        case 5:
            console.log('Hapus Data Barang');
            if (b.bacaData() === false) {
                console.log('\nBelum Ada Data Yang Tersimpan');
            } else {
                console.log('\nSemua Data Stok Barang');
                console.log(JSON.parse(b.bacaData()));
                idBarang = prompt('Masukan ID Barang : ');
                b.findIndex(idBarang);
                if (b.getDataIndex() === false) {
                    console.log('Data Barang dengan ID Barang Yang Diinput Tidak Ditemukan');
                } else {
                    console.log(b.getDataIndex());
                    let hapus = prompt('Apakah anda yakin ingin menghapus data tersebut? [y/n] : ');
                    if (hapus === 'n' || hapus === 'N') {
                        console.log('Data tidak jadi dihapus!');
                    } else if (hapus === 'y' || hapus === 'Y') {
                        b.hapusData();
                        console.log('Data Berhasil Terhapus!');
                    } else {
                        console.log('Inputan Salah');
                    }
                }
            }
            break;
        default:
            console.log(`Inputan salah!`);
            break;
    }
    console.log('\n');
    keluar = prompt('Apakah anda ingin keluar aplikasi? [y/n] : ');
    if (keluar === 'n' || keluar === 'N') {
        keluar = false;
    } else if (keluar === 'y' || keluar === 'Y') {
        keluar = true;
    } else {
        console.log('Inputan Salah');
    }
} while (keluar === false);