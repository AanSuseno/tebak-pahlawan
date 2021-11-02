
// sambutan
$('#splash').ready(function () {
	$('#tombolMulai').hide()
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
					$('#perkenalan').hide(1000)
				}, 1000)
			}, 1000)
		}, 1000)
	}, 3000)
})