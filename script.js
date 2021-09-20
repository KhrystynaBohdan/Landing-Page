$(document).ready(function () {
  $(".top-section__link").click(function () {
    $(".top-section__link").removeClass("top-section__link--active");
    $(this).addClass("top-section__link--active");

    const title = ".top-section__title";
    const body = ".top-section__body";

    switch ($(this).text()) {
      case "Hosting":
        $(title).text("Premium Web Hosting for Your Website");
        $(body).text(
          "Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support."
        );
        break;
      case "Domain":
        $(title).text("Domain");
        $(body).text("Domain Description");
        break;
      case "SEO":
        $(title).text("SEO");
        $(body).text("SEO description");
        break;
      case "Email":
        $(title).text("Email");
        $(body).text("Premium Email Description");
        break;
      default:
        break;
    }
  });
  $(".packages-description-section__label").click(function () {
    $(".packages-description-section__label").removeClass(
      "packages-description-section__label--active"
    );
    $(this).addClass("packages-description-section__label--active");

    const plan_title = ".packages-description-section__plan-title";

    switch ($(this).text()) {
      case "Premium":
        $(plan_title).each(function () {
          if (!$(this).text().includes("Premium")) {
            $(this).text("Premium " + $(this).text());
          }
        });
        break;
      case "Basic":
        $(plan_title).each(function () {
          if ($(this).text().includes("Premium")) {
            $(this).text($(this).text().replace("Premium", ""));
          }
        });
        break;
      default:
        break;
    }
  });
});
