
var sekarang = 0
var atas = true
var panjangKekiri = $(document).width() * -1
var skor = 0
var pahlawan = [
	['00.jpg', 'Ki Hadjar Dewantara'],
	['01.jpg', 'Ir. Soekarno'],
	['02.jpg', 'Mohammad Hatta'],
	['03.jpg', 'R.A. Kartini'],
	['04.jpg', 'Jenderal Sudirman'],
	['05.jpg', 'Cut Nyak Dhien'],
	['06.jpg', 'Sutomo'],
	['07.jpg', 'Pangeran Diponegoro'],
	['08.jpg', 'Mohammad Yamin'],
	['09.jpg', 'Fatmawati'],
]
var banyakData = pahlawan.length

function angkaAcak(awal, akhir) {
	return awal + parseInt(Math.floor(Math.random() * akhir));
}

function mengocokNama() {
	kembali = angkaAcak(0,banyakData - 1)
	if (kembali == sekarang) {
		if (kembali < banyakData - 1) {
			return kembali+1
		} else {
			return kembali-1
		}
	} else {
		return kembali
	}
}

// sambutan
$('#splash').ready(function () {
	$('#peringatan').hide()
	$('.bendera').animate({
		opacity: 1
	}, 2000, function () {
		$('#bendera-biru').animate({
			rotate: '-90deg',
			opacity: .5
		}, 500, function () {
			$('#bendera-biru').animate({
				top: '+=10vmin',
				opacity: 0,
			}, 500, function () {
				$('#bendera-merah').animate({
					height: '12vmin'
				})
				$('#bendera-putih').animate({
					height: '12vmin',
					top: '22vmin'
				})
				$('#tombolMulai').show(500)
			})
		})
	})
})

// perkenalan
$('#tombolMulai').click(function () {
	$('#splash').hide(300);
	$('#perkenalan').show(1000)
	setTimeout(function () {
		$('#detikMulai').html('4')
		setTimeout(function () {
			$('#detikMulai').html('3')
			setTimeout(function () {
				$('#detikMulai').html('2')
				setTimeout(function () {
					$('#detikMulai').html('1')
					$('#perkenalan').hide(500)
					setTimeout(mulai, 1000)
				}, 1000)
			}, 1000)
		}, 1000)
	}, 3000)
})

function mulai() {
	$("#gambarPahlawan").attr("src",'gambar/'+pahlawan[sekarang][0]);
	if (angkaAcak(1,2) == 1) {
		atas = true
		$('#atas').html(pahlawan[sekarang][1])
		$('#bawah').html(pahlawan[mengocokNama()][1])
	} else {
		atas = false
		$('#bawah').html(pahlawan[sekarang][1])
		$('#atas').html(pahlawan[mengocokNama()][1])
	}
	$('#game').show()
	$('#detik').css({'display': 'block', 'left': '0vw', 'position': 'absolute'}).animate({'left': '-101vw'}, 10000)
}

$('#atas').click(function () {
	if (atas == true && $('#detik').position().left >= panjangKekiri) {
		$('#atas').css({
			backgroundColor: 'rgb(95,224,31)'
		})
		benar()
	} else {
		$('#atas').css({
			backgroundColor: 'red'
		})
		salah()
	}
})

$('#bawah').click(function () {
	if (atas == false && $('#detik').position().left >= panjangKekiri) {
		$('#bawah').css({
			backgroundColor: 'rgb(95,224,31)'
		})
		benar()
	} else {
		$('#bawah').css({
			backgroundColor: 'red'
		})
		salah()
	}
})

function benar() {
	$('#detik').stop().css({'left': '-101vw'})
	setTimeout(function () {
		$('#game').hide()
		sekarang += 1
		skor += 40
		$('#ucapanJeda').html("Selamat skor kamu sekarang: "+skor+'<br>Temukan '+(banyakData - sekarang)+' pahlawan lagi.')
		$('#jeda').show()
	}, 100)
}

function salah() {
	$('#detik').stop().css({'left': '-101vw'})
	setTimeout(function () {
		$('#game').hide()
		sekarang += 1
		skor -= 20
		$('#ucapanJeda').html("U oh.. skor kamu sekarang: "+skor+'<br>Temukan '+(banyakData - sekarang)+' pahlawan lagi.')
		$('#jeda').show()
	}, 100)
}

$('#tombolLanjut').click(function () {
	$('.pilihTombol').css({'background': '#2C786C'})
	$('#jeda').hide(500)
	if (sekarang != banyakData) {
		setTimeout(mulai, 500)
	} else {
		setTimeout(function () {
			$('#selesaiSkor').html(skor)
			$('#selesai').show()
		}, 500)
	}
})