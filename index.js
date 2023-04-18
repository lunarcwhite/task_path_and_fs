const prompt = require('prompt-sync')();
const {
    kelilingLingkaran,
    kelilingPersegi,
    kelilingSegitiga,
    luasLingkaran,
    luasPersegi,
    luasSegitiga
} = require('./src/shape');

const Student = require('./src/student');

const s = new Student();
let keluar;
do {
console.log(`1. Aplikasi Geometri`);
console.log(`2. Aplikasi Mahasiswa`);

const aplikasi = parseInt(prompt(`Pilih Aplikasi? [1-2] : `));

    switch (aplikasi) {
        case 1:
            console.log(`Aplikasi Geometri`);
            console.log('1. Hitung Keliling Persegi');
            console.log('2. Hitung Luas Persegi');
            console.log('3. Hitung Keliling Lingkaran');
            console.log('4. Hitung Luas Lingkaran');
            console.log('5. Hitung Keliling Segitiga');
            console.log('6. Hitung Luas Segitiga');
    
            const operasi = parseInt(prompt('Pilih Operasi ? [1-6] : '));
            let hasil = angka1 = angka2 = angka3 = 0;
            switch (operasi) {
                case 1:
                    console.log('Menghitung Keliling Persegi');
                    angka1 = parseInt(prompt('Masukan Panjang Sisi : '));
                    hasil = kelilingPersegi(angka1);
                    console.log(`Keliling Persegi adalah ${hasil}`);
                    break;
                case 2:
                    console.log('Menghitung Luas Persegi');
                    angka1 = parseInt(prompt('Masukan Panjang Sisi : '));
                    hasil = luasPersegi(angka1);
                    console.log(`Luas Persegi adalah ${hasil}`);
                    break;
                case 3:
                    console.log('Menghitung Keliling Lingkaran');
                    angka1 = parseInt(prompt('Masukan Panjang Jari - Jari : '));
                    hasil = parseFloat(kelilingLingkaran(angka1));
                    console.log(`Keliling Lingkaran adalah ${hasil.toFixed(2)}`);
                    break;
                case 4:
                    console.log('Menghitung Luas Lingkaran');
                    angka1 = parseInt(prompt('Masukan Panjang Jari - Jari : '));
                    hasil = parseFloat(luasLingkaran(angka1));
                    console.log(`Luas Lingkaran adalah ${hasil.toFixed(2)}`);
                    break;
                case 5:
                    console.log('Menghitung Keliling Segitiga');
                    console.log('1. Segitiga Sama Kaki');
                    console.log('2. Segitiga Sama Sisi');
                    console.log('3. Segitiga Siku Siku');
                    let segitiga = parseInt(prompt('Pilih Tipe Segitiga? [1-3] : '));
                    switch (segitiga) {
                        case 1:
                            console.log('Menghitung Keliling Segitiga Sama Kaki');
                            angka1 = parseInt(prompt('Masukan Panjang Alas : '));
                            angka2 = parseInt(prompt('Masukan Panjang Sisi : '));
                            hasil = kelilingSegitiga('samakaki', angka1, angka2);
                            console.log(`Keliling Segitiga adalah ${hasil}`);
                            break;
                        case 2:
                            console.log('Menghitung Keliling Segitiga Sama Sisi');
                            angka1 = parseInt(prompt('Masukan Panjang Sisi : '));
                            hasil = kelilingSegitiga('samasisi', angka1);
                            console.log(`Keliling Segitiga adalah ${hasil}`);
                            break;
                        case 3:
                            console.log('Menghitung Keliling Segitiga Siku Siku');
                            angka1 = parseInt(prompt('Masukan Panjang Alas : '));
                            angka2 = parseInt(prompt('Masukan Panjang Sisi : '));
                            angka3 = parseInt(prompt('Masukan Panjang Tinggi : '));
                            hasil = kelilingSegitiga('sikusiku', angka1, angka2, angka3);
                            console.log(`Keliling Segitiga adalah ${hasil}`);
                            break;
                        default:
                            console.log('Inputan Salah!');
                            break;
                    }
                    break;
                case 6:
                    console.log('Menghitung Luas Segitiga');
                    angka1 = parseInt(prompt('Masukan Panjang Alas : '));
                    angka2 = parseInt(prompt('Masukan Panjang Tinggi : '));
                    hasil = luasSegitiga(angka1,angka2);
                    console.log(`LUas Segitiga adalah ${hasil}`);
                    break;
                default:
                    console.log('Inputan Salah');
                    break;
            }
            break;
        case 2:
            console.log(`Aplikasi Mahasiswa`);
            const nama = prompt('Inputkan Nama      : ');
            const nim = prompt('Inputkan NIM       : ');
            const kelas = prompt('Inputkan Kelas     : ');
            s.setNama(nama);
            s.setNim(nim);
            s.setKelas(kelas);
            console.log('\n');
            console.log(`Nama\t: ${s.getNama()}\nNIM\t: ${s.getNim()}\nKelas\t: ${s.getKelas()}`);
            break;
        default:
            console.log(`Inputan salah!`);
            break;
    }
    console.log('\n\n');
    keluar = prompt('Apakah anda ingin keluar aplikasi? [y/n] : ');
    if (keluar === 'n' || keluar === 'N') {
        keluar = false;
    }else{
        keluar = true;
    }
} while (keluar === false);