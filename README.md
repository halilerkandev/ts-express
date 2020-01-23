- Projeyi başlatmadan önce bilgisayarınızda Docker kurulu olması önerilir.
- Terminalde projeyi klonladığınız yerde "./start.sh" yazıp enter'a basın.
Dosyalara çalıştırma ve okuma izni vermek için: "chmod u+r+x start.sh" yazmanız gerekebilir.
Kurulumlardan sonra "http://localhost:8080"den Postgres arayüzüne erişebileceksiniz.
Bu ekranda kullanıcı adını "postgres", şifreyi ise "example" olarak girmeniz gerekiyor.
Ardından "sosyal" adında bir schema oluşturmalısınız.
- npm paketlerini yüklemek için "npm i" komutunu kullanın.
- "npm run watch" komutu ile projeniz ayağa kalkacaktır.
- Request'leri POST metodu ile "http://localhost:4000/rpc" endpoint'ine göndermeniz gerekiyor.
- Çalıştırmak istediğiniz metodu ve parametreleri göndermek için ise Body'de Content-Type: application/json olacak şekilde
örnek olarak şöyle bir JSON göndermeniz gerekiyor:
{
  "method": "register",
  "params": {
    "email": "a@a.com",
    "password": "1234",
    "name": "Erkan"
  }
}
