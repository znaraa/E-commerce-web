# 🎉 Хувь нэмэр оруулах заавар (Contributing Guide)

**E-commerce Web** төслийг сонирхож, хувь нэмэр оруулахаар шийдсэн танд баярлалаа!

---

## 🚀 Алхам 1: Репо-г fork хийх

1. Энэ репог fork хийнэ (GitHub дээрх "Fork" товч дарна).
2. Өөрийн GitHub account-д төслийн хуулбарыг авна.

---

## 🔀 Алхам 2: Шинэ салбар (branch) үүсгэх

```bash
git checkout -b feature/your-feature-name
```

##💻 Алхам 3: Кодоо бичиж, тест хийх
Код бичихдээ төслийн кодын хэв маягийг дагана уу.
Шинэ боломж нэмсэн бол UI/UX болон responsiveness-ийг шалгана.
Хэрвээ алдаа засаж байгаа бол:
1.Бүрэн тест хийгдсэн эсэхийг шалгана.
2.Алдааны шалтгааныг тайлбарлана.

---

##✅ Алхам 4: Commit болон Push хийх
```bash
git add .
git commit -m "fix: cart button not responding"
git push origin feature/your-feature-name
```

---

##🔁 Алхам 5: Pull Request (PR) үүсгэх
1.Fork хийгдсэн репо-г GitHub дээрээс нээнэ.
2."New Pull Request" товч дарж үндсэн репотой харьцуулалт хийнэ.
3.PR дотор дараах мэдээллийг багтаана:
  -Юу өөрчилсөн
  -Ямар асуудлыг шийдсэн
  -Скриншот/гүйлгээний жишээ байвал оруулах

---

📌 Журмууд
Кодын хэв маяг: Prettier ашиглана уу.
UI өөрчлөлт: Responsive байдлыг шалгах.
Issue үүсгэхдээ аль болох дэлгэрэнгүй тайлбар, зургийг хавсаргана уу.
PR хийхийн өмнө npm run dev болон npm run build ажиллаж байгаа эсэхийг шалгана.

---

🙋‍♀️ Холбоо барих
Хэрэв танд асуулт, санал, асуудал байвал Issue үүсгэж бичнэ үү эсвэл шууд email илгээнэ үү:
📧 znaraa051@gmail.com (эсвэл өөр холбоо барих имэйлээ оруулна уу)

Энэхүү төслийг сайжруулахад хувь нэмэр оруулж байгаад баярлалаа! 🙌
