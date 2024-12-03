document.addEventListener("DOMContentLoaded", () => {
  const totalCounterElement = document.getElementById("total-counter"); // إجمالي عدد الأذكار
  let totalCount = parseInt(totalCounterElement.textContent); // قراءة العدد الأولي من الأذكار

  const dzikrs = document.querySelectorAll(".dzikr"); // جميع عناصر الأذكار

  dzikrs.forEach((dzikr) => {
    const counter = dzikr.querySelector(".counter"); // عداد الذكر الخاص
    const targetCount = parseInt(dzikr.getAttribute("data-target")); // العدد المطلوب لكل ذكر

    // تحديث العداد الخاص
    counter.textContent = targetCount;

    dzikr.addEventListener("click", () => {
      let currentCount = parseInt(counter.textContent);

      if (currentCount > 0) {
        // تقليل العداد الخاص بالذكر
        counter.textContent = currentCount - 1;

        // إذا انتهى العداد، يبدأ اختفاء الذكر
        if (currentCount - 1 === 0) {
          dzikr.classList.add("hidden"); // إضافة تأثير التلاشي

          // إزالة الذكر نهائيًا بعد تأثير التلاشي
          setTimeout(() => {
            dzikr.style.display = "none";

            // تحديث عداد الأذكار الإجمالي
            totalCount -= 1;
            totalCounterElement.textContent = totalCount;

            // عند انتهاء جميع الأذكار
            if (totalCount === 0) {
              alert("تم الانتهاء من جميع الأذكار. تقبل الله.");
            }
          }, 100
      ); // التأخير لمدة ثانية
        }
      }
    });
  });
});
