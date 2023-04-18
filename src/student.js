class Student {
    constructor(nama = '', nim = 0, kelas = ''){
        this.nama = nama;
        this.kelas = kelas;
    }
    setNama(nama){
        this.nama = nama;
    }
    setNim(nim){
        this.nim = nim;
    }
    setKelas(kelas){
        this.kelas = kelas;
    }
    getNama(){
        return this.nama;
    }
    getNim(){
        return this.nim;
    }
    getKelas(){
        return this.kelas;
    }
}

module.exports = Student;