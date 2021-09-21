$(document).ready(function () {
  $(".top-section__link").click(function () {
    const topSecLink = "top-section__link";
    $(`.${topSecLink}`).removeClass(`${topSecLink}--active`);
    $(this).addClass(`${topSecLink}--active`);
    $(".services")
      .hide()
      .eq($(this).data("nav") - 1)
      .show();
  });

  const prices = {
    basic: [3, 5, 7],
    premium: [6, 10, 14],
  };

  const packDescSection = "packages-description-section";

  $(`.${packDescSection}__label`).click(function () {
    $(`.${packDescSection}__label`).removeClass(
      `${packDescSection}__label--active`
    );
    $(this).addClass(`${packDescSection}__label--active`);

    const plan_title = `.${packDescSection}__plan-title`;
    const plan_price = `.${packDescSection}__plan_price`;

    switch ($(this).text()) {
      case "Premium":
        $(plan_title).each(function () {
          if (!$(this).text().includes("Premium")) {
            $(this).text("Premium " + $(this).text());
          }
        });
        $(plan_price).each(function (i) {
          $(this).text(prices.premium[i]);
        });
        break;
      case "Basic":
        $(plan_title).each(function () {
          if ($(this).text().includes("Premium")) {
            $(this).text($(this).text().replace("Premium", ""));
          }
        });
        $(plan_price).each(function (i) {
          $(this).text(prices.basic[i]);
        });
        break;
      default:
        break;
    }
  });
});
