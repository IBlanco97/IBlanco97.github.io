const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    window.open(link.href, '_blank');
  });
});

const link = document.querySelector('a');
link.addEventListener('click', e => {
  e.preventDefault();
  window.open(link.href, '_blank');
});

$(".btn-circle-download").click(function() {
    $(this).addClass("load");
    setTimeout(function() {
      $(".btn-circle-download").addClass("done");
    }, 1000);
    setTimeout(function() {
      $(".btn-circle-download").removeClass("load done");
    }, 5000);
  });
  