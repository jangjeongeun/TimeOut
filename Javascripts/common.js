// 헤더 스크롤, 스무스 이동
document.getElementById("Planning").addEventListener("click", function(event) {
  event.preventDefault();
  var section2 = document.getElementById("section2");
  section2.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Design").addEventListener("click", function(event) {
  event.preventDefault();
  var section8 = document.getElementById("section7");
  section8.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.getElementById("Service").addEventListener("click", function(event) {
  event.preventDefault();
  var section12 = document.getElementById("section11");
  section12.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Video").addEventListener("click", function(event) {
  event.preventDefault();
  var section19 = document.getElementById("section13");
  section19.scrollIntoView({ behavior: "smooth" });
});

document.getElementById("Contact").addEventListener("click", function(event) {
  event.preventDefault();
  var footer = document.getElementById("footer");
  footer.scrollIntoView({ behavior: "smooth" });
});


//헤더 스크롤 감지 반응
let prevScrollpos = window.pageYOffset;
const header = document.getElementById('header');
const menuSlide = document.getElementById('menusilde');
let isMenuOpen = false; // 메뉴 슬라이드가 열려있는지 여부를 나타내는 변수
menuSlide.style.display = 'none'; //원래 상태는 닫혀있음.

window.addEventListener('scroll', function() {
  if (!isMenuOpen && menuSlide.style.display !== 'block') {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = '0';
    } else {
      header.style.top = '-90px';
    }
    prevScrollpos = currentScrollPos;
    header.style.transition = 'top 0.4s';
  }
});

//로고 눌렀을 때 스크롤 맨 위로
document.getElementById('logo').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


//모바일 햄버거 버튼
var btn = document.querySelector('.btn');
menuSlide.style.transition = 'height 0.3s';

// 버튼 클릭 이벤트 핸들러 추가
btn.addEventListener('click', function() {
  // 메뉴 슬라이드 상태 확인
  var isMenuOpen = menuSlide.style.display === 'block';

  if (isMenuOpen) {
    isMenuOpen = false;
    menuSlide.style.height = "0";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("btn2").style.display = "none";
    setTimeout(function() {
      menuSlide.style.display = 'none';
    }, 300);
  } else {
    isMenuOpen = true;
    menuSlide.style.display = 'block';
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "block";
    setTimeout(function() {
      menuSlide.style.height = "200px";
    }, 0);
  }
});


//스크롤탑 버튼(로고와는 별개)

$(document).ready(function() {
  $("#scrolltotap").hide();

  // 스크롤 시 효과 설정
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $("#scrolltotap").fadeIn();
    } else {
      $("#scrolltotap").fadeOut();
    }
  });

  // 버튼 클릭 시 효과 설정
  $("#scrolltotap").click(function() {
    $('html,body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});