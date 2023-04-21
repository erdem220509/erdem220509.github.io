// Butona tıklanınca çalışacak fonksiyonu tanımla
function login() {
    // Kullanıcı adı ve şifre inputlarının değerlerini al
    var username = document.querySelector(".input1 input").value;
    var password = document.querySelector(".input2 input").value;
  
    // Kullanıcı adı ve şifrenin doğruluğunu kontrol et
    if (username === "admin" && password === "password") {
      // Giriş başarılı mesajını göster
      alert("Giriş başarılı!");
      window.location.href = "voice.html"
    } else {
      // Kullanıcı adı veya şifre yanlış ise hata mesajı göster
      alert("Kullanıcı adı veya şifre yanlış!");
    }
  }
  
  // Butona tıklanınca login fonksiyonunu çalıştır
  document.querySelector(".button button").addEventListener("click", login);
  