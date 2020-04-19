function calc() {
    // mendefinisikan variabel dengan mengambil nilai pada kolom id n1 dan n2
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    // mendefinisikan variabel oper dengan mengambil nilai pada kolom id operators
    var oper = document.getElementById('operators').value;


    // logika if untuk menentukan perhitungan dari operasi yang dipilih
    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
    }

    if (oper === 'x') {
        document.getElementById('result').value = n1 * n2;
    }

    // mendefinisikan variabel num dengan mengambil nilai pada kolom id result
    var num = document.getElementById('result').value;
    // logika if else untuk mengganti warna background kolom hasil perhitungan
    if (num == 0) {
        document.getElementById("result").style.backgroundColor = 'blue';
    } else if ((num % 2) !== 0) {
        document.getElementById("result").style.backgroundColor = 'yellow';
    } else if ((num % 1) == 0) {
        document.getElementById("result").style.backgroundColor = 'green';
    }

    /*program untuk mengubah bilangan menjadi kalimat*/

    var kalimat = "";
    var angka = new Array('0', '0', '0', '0', '0', '0', '0');
    var kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
    var tingkat = new Array('', 'Ribu');
    var panjang_bilangan = num.length;


    // pengujian panjang bilangan maks 9999 (sembilan ribu sembilan ratus sembilan puluh sembilan)
    if (panjang_bilangan > 4) {
        kalimat = "Diluar Batas";
    } else {
        //mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array
        for (i = 1; i <= panjang_bilangan; i++) {
            angka[i] = num.substr(-(i), 1);
        }

        var i = 1;
        var j = 0;

        //mulai proses iterasi terhadap array angka
        while (i <= panjang_bilangan) {
            subkalimat = "";
            kata1 = "";
            kata2 = "";
            kata3 = "";

            //untuk Ratusan 
            if (angka[i + 2] != "0") {
                if (angka[i + 2] == "1") {
                    kata1 = "Seratus";
                } else {
                    kata1 = kata[angka[i + 2]] + " Ratus";
                }
            }

            // untuk Puluhan atau Belasan 
            if (angka[i + 1] != "0") {
                if (angka[i + 1] == "1") {
                    if (angka[i] == "0") {
                        kata2 = "Sepuluh";
                    } else if (angka[i] == "1") {
                        kata2 = "Sebelas";
                    } else {
                        kata2 = kata[angka[i]] + " Belas";
                    }
                } else {
                    kata2 = kata[angka[i + 1]] + " Puluh";
                }
            }

            // untuk Satuan 
            if (angka[i] != "0") {
                if (angka[i + 1] != "1") {
                    kata3 = kata[angka[i]];
                }
            }

            // pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat 
            if ((angka[i] != "0") || (angka[i + 1] != "0") || (angka[i + 2] != "0")) {
                subkalimat = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
            }

            // gabungkan variabe sub kalimat (untuk Satu blok 3 angka) ke variabel kalimat 
            kalimat = subkalimat + kalimat;
            i = i + 3;
            j = j + 1;
        }

        //mengganti Satu Ribu jadi Seribu jika diperlukan 
        if ((angka[5] == "0") && (angka[6] == "0")) {
            kalimat = kalimat.replace("Satu Ribu", "Seribu");
        }
    }
    document.getElementById("terbilang").innerHTML = kalimat;


}