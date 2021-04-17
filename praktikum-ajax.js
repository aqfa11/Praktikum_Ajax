/**
 * AJAX
 * AJAX= Asynchronous Javascript Aand XML.
 * AJAC atau Asynchronous JavaSceipt and XML adalah teknik 
 * yang digunakan untuk membuat website yang dinamis.
 * artinya website mampu mengupdate dan menampilkan 
 * data baru dari server tanpa perlu melakukan reload.
 * 
 * pada praktikum ini, kita akan menggunkan AJAX jquery
 */

// Fungsi AJAX Jquery untuk meload isi file
$(function() {
    ("#nama").load("test.txt");
});

/**
 * Berikut merupakan fungsi untuk fetch data dari internet menggunakan AJAX Jquery
 * kita menggunakan https://jsonplaceholder.typicode.com/photos
 */

 $(function () {
    let url = "https://jsonplaceholder.typicode.com/photos";
    
    $("#getPost").on("click", function () {
        //memanggil jquery ajax
        $.ajax({
            //memanggil variable url parameter
            url: url,
            //menggunakan get request
            type: 'GET',
            //jika sukses
            success: function (data) {
                let data_html = '';
                //looping data(ambil satu persatu data)
                $.each(data, function (i, item) {
                    //mengkonversi hasil loop tadi ke html
                    data_html +=
                        '<br>' +
                        '<img src="' + item.thumbnailUrl + '"alt="">' +
                        '<br>' +
                        '<h1>' + item.id + '. ' + item.title + '</h1>'
                });

                //memasukkan hasil loop tadi ke div dengan id #data_hasil_dari_internet

                $("#data_hasil_dari_internet").html(data_html);
            },
            //jika error
            error: function (error) {
                //tampilkan console log
                console.log(error);
            }
        });
    });
});