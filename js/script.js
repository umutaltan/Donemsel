/*const dark = document.getElementById("dark");

window.onmousemove = function (e) {
  const x = (e.x / window.innerWidth) * 100;
  const y = (e.y / window.innerHeight) * 100;
  dark.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent, rgba(0, 0, 0, 0.9) 150px, black)`;
};*/

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
        btn.style.opacity = "1";
    } else {
        btn.style.opacity = "0";
        setTimeout(function() {
            btn.style.display = "none";
        }, 300); // opacity animasyon süresi
    }
}

function scrollToTop() {
    var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentPosition - currentPosition / 8);
    }
}

// Sayfa yüklendiğinde rastgele bir kod oluştur
            document.addEventListener('DOMContentLoaded', function () {
                generateVerificationCode();
            });

            function generateVerificationCode() {
                // Rastgele 5 basamaklı bir sayı oluştur
                var randomCode = Math.floor(10000 + Math.random() * 90000);

                // Sayıyı formdaki alanlara güncelleyerek göster
                document.getElementById('verificationCode1').value = randomCode;
                document.getElementById('verificationCode2').value = "";
            }

            function submitForm() {
                // Kullanıcının girdiği kodları al
                var userCode1 = document.getElementById('verificationCode1').value;
                var userCode2 = document.getElementById('verificationCode2').value;

                // Kodları karşılaştır
                if (userCode1 == userCode2) {
                    alert('Mesajınız başarıyla gönderildi!');
                } else {
                    alert('Hatalı doğrulama kodu! Lütfen tekrar deneyin.');
                }

                // Yeni bir doğrulama kodu oluştur
                generateVerificationCode();
            }