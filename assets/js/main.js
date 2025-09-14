var $textHeader = $('#textHeader').hide();
$textHeader.show().arctext({
	radius: 140
});

function invitationAudio() {
	var el = document.getElementById("myAudio");
	if (el.paused == true) {
		el.play();
		$(".btn-volume").addClass("putar-kiri");
	} else {
		el.pause();
		$(".btn-volume").removeClass("putar-kiri");
	}
}

function loadingBtn(send) {
	const btn = document.getElementById(send);
	if (btn) {
		if (btn.disabled) {
			btn.disabled = false;
			btn.innerHTML = 'Kirim'
		} else {
			btn.disabled = true;
			btn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';
		}
	}
}

function downloadURI(uri, name) {
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
};

// copy text
function copyText(containerid) {
	var range = document.createRange();
	range.selectNode(document.getElementById(containerid));
	window.getSelection().removeAllRanges(); // clear current selection
	window.getSelection().addRange(range); // to select text
	document.execCommand("copy");
	window.getSelection().removeAllRanges(); // to deselect
}

function aos_init() {
	AOS.init({
		duration: 1000,
		easing: "ease-in-out",
		once: true,
		mirror: false
	});
}
aos_init();

// gallery
jQuery("#animated-thumbnails-gallery").justifiedGallery({
		captions: false,
		lastRow: "hide",
		rowHeight: 180,
		margins: 5
}).on("jg.complete", function () {
    window.lightGallery(
		document.getElementById("animated-thumbnails-gallery"),{
			autoplayFirstVideo: false,
			pager: false,
			controls: false,
			zoom: false,
			download: false,
			rotate: false,
			showCloseIcon: true,
			galleryId: "nature",
			plugins: [lgZoom, lgThumbnail],
			mobileSettings: {
				controls: false,
				showCloseIcon: true,
				download: false,
				rotate: false
			}
		}
    );
});

function animation(span) {
	span.className = "turn";
	setTimeout(function () {
		span.className = ""
	}, 700);
}

function Countdown() {

    setInterval(function () {

        var hari = document.getElementById("days");
        var jam = document.getElementById("hours");
        var menit = document.getElementById("minutes");
        var detik = document.getElementById("seconds");

        var deadline = new Date("Feb 4, 2024 00:00:00");
        var waktu = new Date();
        var distance = deadline - waktu;

        if (waktu >= deadline) {
            hari.innerHTML = '00';
            jam.innerHTML = '00';
            menit.innerHTML = '00';
            detik.innerHTML = '00';
        } else {
            var days = Math.floor((distance / (1000 * 60 * 60 * 24)));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (days < 10) {
                days = '0' + days;
            }
            if (hours < 10) {
                hours = '0' + hours;
            }
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            if (seconds < 10) {
                seconds = '0' + seconds;
            }

            hari.innerHTML = days;
            jam.innerHTML = hours;
            menit.innerHTML = minutes;
            detik.innerHTML = seconds;
            //animation
            animation(detik);
            if (seconds == 0) animation(menit);
            if (minutes == 0) animation(jam);
            if (hours == 0) animation(hari);
        }
    }, 1000);
}
Countdown();
