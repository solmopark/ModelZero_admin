$(function(){
    
    setTimeout(() => {
        $("#intro").fadeOut(500, function () { //0.5초 동안 서서히 사라짐
            $("#main-content").fadeIn(500); // 메인 화면 나타나는 시간 0.5초
        });
    }, 1400); // 1.3초 뒤 페이드아웃 후 메인화면 표시









    // $('.menuWrap').mouseenter(function(){
    //     $('.sidemenu').stop().slideDown();
    // })
    // $('.menuWrap, .sidemenu').mouseleave(function() {
    //     $('.sidemenu').stop().slideUp();
    // });
    // $('.menuWrap, .sidemenu').click(function() {
    //     $('.sidemenu').stop().slideUp();
    // });
    function updateMenuBehavior() {
        if (window.innerWidth <= 768) {
            // 모바일 환경: 햄버거 메뉴 클릭 시 메뉴 토글
            $("#menuToggle").off("click").on("click", function (e) {
                e.stopPropagation(); // 클릭 이벤트 전파 방지
                $(this).toggleClass("open"); // 햄버거 버튼 애니메이션 적용
                $(".sidemenu").stop().slideToggle();
            });
    
            // 사이드 메뉴 내부 클릭 시 닫히지 않도록 방지
            $(".sidemenu").off("click").on("click", function (e) {
                e.stopPropagation();
            });
    
            // 바깥 영역 클릭 시 메뉴 닫기
            $(document).off("click").on("click", function () {
                $(".sidemenu").slideUp();
                $("#menuToggle").removeClass("open"); // 햄버거 버튼 초기 상태로 복귀
            });
        } else {
            // 데스크탑 환경: hover 시 메뉴 표시
            $("#menuToggle").removeClass("open"); // 데스크탑에서는 버튼 원래대로
            $(".sidemenu").hide(); // 기본적으로 메뉴 숨김
            
            $(".menuWrap").off("mouseenter").on("mouseenter", function () {
                $(".sidemenu").stop().slideDown();
                $("#menuToggle").addClass("open"); // 햄버거 버튼을 X자로 변경
            });
    
            $(".menuWrap, .sidemenu").off("mouseleave").on("mouseleave", function () {
                $(".sidemenu").stop().slideUp();
                $("#menuToggle").removeClass("open"); // 햄버거 버튼 원래 상태로 복귀
            });
    
            // 데스크탑에서는 클릭 시 메뉴 닫기
            $(".menuWrap, .sidemenu").off("click").on("click", function () {
                $(".sidemenu").stop().slideUp();
                $("#menuToggle").removeClass("open"); // 클릭 시 햄버거 버튼 원래 상태로
            });
        }
    }
    
    // 초기 로드 시 실행
    updateMenuBehavior();
    
    // 화면 크기 변경 시 이벤트 다시 바인딩
    $(window).resize(updateMenuBehavior);
    $(window).resize(updateMenuBehavior);















    const cursor = document.querySelector(".custom-cursor");

    // 마우스 이동 시 커서 따라다니기
    document.addEventListener("mousemove", function (e) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    // 클릭 시 원 확대 효과
    document.addEventListener("click", function () {
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        setTimeout(() => {
            cursor.style.width = "40px";
            cursor.style.height = "40px";
        }, 200);
    });

    // 링크 & 버튼 위에서 색상 변경
    document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.backgroundColor = "rgba(0, 94, 212, 0.5)"; // 파란색 변경
            cursor.style.border = "2px solid rgb(0, 94, 212)"; //
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.backgroundColor = "rgba(255, 255, 255, 0)"; // 원래 색으로 복귀
            cursor.style.border = "1px solid rgba(255, 255, 255, 0.8)"; //
        });
    });
    



    // 탑버튼설정
    // 페이지 스크롤 시 버튼 표시/숨기기
window.onscroll = function() {
    let topButton = document.getElementById("topButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block"; // 100px 이상 스크롤 시 버튼 표시
    } else {
        topButton.style.display = "none"; // 100px 이하일 때 버튼 숨기기
    }
};

// 버튼 클릭 시 최상단으로 스크롤
document.getElementById("topButton").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'}); // 부드럽게 최상단으로 스크롤
};






    // 자주묻는 질문
    $('.question').click(function () {
        var parent = $(this).parent();

        if (parent.hasClass("active")) {
            parent.removeClass("active");
            parent.find(".answer").slideUp();
        } else {
            $(".faq-item").removeClass("active");
            $(".answer").slideUp();
            parent.addClass("active");
            parent.find(".answer").slideDown();
        }
    });





    // 팝업설정
    $('.popupCheck img').click(function(){
        $('.popup').css({'display':'none'})
    })


    // 공지사항
     // 🔍 검색 및 필터 기능
     $("#searchButton").click(function () {
        let searchText = $("#searchInput").val().toLowerCase();
        let filterCategory = $("#categoryFilter").val();

        $(".notice-item").each(function () {
            let title = $(this).find(".notice-title").text().toLowerCase();
            let content = $(this).find("p:nth-child(4)").text().toLowerCase();
            let category = $(this).data("category");

            let matchCategory = filterCategory === "" || category.includes(filterCategory);
            let matchSearch = title.includes(searchText) || content.includes(searchText);

            if (matchCategory && matchSearch) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // 🖱️ 게시물 클릭 시 조회수 증가 기능
    // $(".notice-item").click(function () {
    //     let viewCountElement = $(this).find(".view-count");
        
    //     if (viewCountElement.length === 0) {
    //         $(this).append("<p class='view-count'>조회수: 1</p>");
    //     } else {
    //         let currentViews = parseInt(viewCountElement.text().replace("조회수: ", ""));
    //         viewCountElement.text("조회수: " + (currentViews + 1));
    //     }
    // });
    $(".notice-item").click(function(){
        let viewCountElement = $(this).find(".view-count span"); // span 요소 선택
        
        if (viewCountElement.length === 0) {
            // 이 부분은 더 이상 필요하지 않음
            // $(this).append("<p class='view-count'>조회수: 1</p>");
        } else {
            let currentViews = parseInt(viewCountElement.text()); // span의 숫자만 가져오기
            viewCountElement.text(currentViews + 1); // 숫자 증가
        }
    });




    // 공통 페이지네이션 설정
    function setupPagination(containerSelector, itemSelector, itemsPerPage) {
        let $container = $(containerSelector);
        let $items = $(itemSelector);
        let totalPages = Math.max(1, Math.ceil($items.length / itemsPerPage)); // 최소 1페이지 보장
        let currentPage = 1;

        function showPage(page) {
            if (page < 1 || page > totalPages) return;

            $items.hide();
            $items.slice((page - 1) * itemsPerPage, page * itemsPerPage).show();
            updatePagination();
        }

        function updatePagination() {
            let $pageNumbers = $container.find(".page-numbers");
            $pageNumbers.empty(); // 기존 숫자 버튼 초기화

            for (let i = 1; i <= totalPages; i++) {
                let pageButton = $("<button>")
                    .addClass("page-number")
                    .text(i)
                    .attr("data-page", i);

                if (i === currentPage) {
                    pageButton.addClass("active"); // 현재 페이지는 스타일 다르게
                }

                pageButton.click(function () {
                    currentPage = i;
                    showPage(currentPage);
                });

                $pageNumbers.append(pageButton);
            }

            // 이전/다음 버튼 활성화 여부 설정
            $container.find(".prev").prop("disabled", currentPage === 1);
            $container.find(".next").prop("disabled", currentPage === totalPages);
        }

        $container.find(".prev").click(function () {
            if (currentPage > 1) {
                currentPage--;
                showPage(currentPage);
            }
        });

        $container.find(".next").click(function () {
            if (currentPage < totalPages) {
                currentPage++;
                showPage(currentPage);
            }
        });

        showPage(currentPage);
    }

    // 📄 FAQ & 공지사항 페이지네이션 적용
    setupPagination(".pagination[data-type='faq']", ".faq-item", 4);
    setupPagination(".pagination[data-type='notice']", ".notice-item", 6);







    // $("#menuToggle").click(function () {
    //     $(this).toggleClass("open");
    //   });






















});