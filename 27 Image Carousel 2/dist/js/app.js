/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
var imgsContainer = document.getElementById('imgs-container');
var carousel = document.getElementById('carousel');
var imgs = imgsContainer.querySelectorAll('img');
var dots = document.querySelectorAll('.dots li');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var idx = 1;
var seconds = 2000;
var size = computeSize();
imgs = getCloneImgs();
var interval = setInterval(forward, seconds);
prev.addEventListener('click', function () {
    resetIntervalAndCallFunc(back);
});
next.addEventListener('click', function () {
    resetIntervalAndCallFunc(forward);
});
function forward() {
    idx++;
    changeImage();
}
function back() {
    idx--;
    changeImage();
}
function changeImage() {
    if (idx > imgs.length - 1 || idx < 0) {
        // first limit counter to prevent fast-change bugs
        // 解决快速回退的问题  
        return;
    }
    hightDots();
    imgsContainer.style.transition = "transform 0.8s ease-in-out";
    imgsContainer.style.transform = "translateX(".concat(-size * idx, "px)");
}
function computeSize() {
    var width = getComputedStyle(carousel).getPropertyValue('width');
    return +width.substring(0, width.length - 2);
}
function hightDots() {
    // remove all active then add active class
    var activeCls = 'active';
    dots.forEach(function (dot) { return dot.classList.remove(activeCls); });
    var dotIdx = null;
    if (idx === imgs.length - 1) {
        dotIdx = 0;
    }
    else if (idx === 0) {
        dotIdx = dots.length - 1;
    }
    else {
        dotIdx = idx - 1;
    }
    dots[dotIdx].classList.add(activeCls);
}
function resetIntervalAndCallFunc(func) {
    clearInterval(interval);
    func();
    interval = setInterval(forward, 2000);
}
// loop
// https://codepen.io/jonathan-asbell/pen/QWgampv
/**
 *
 * 添加克隆首尾
 */
function getCloneImgs() {
    var firstImgClone = imgs[0].cloneNode();
    var lastImgClone = imgs[imgs.length - 1].cloneNode();
    firstImgClone.classList.add('first-clone');
    lastImgClone.classList.add('last-clone');
    imgsContainer.appendChild(firstImgClone);
    imgsContainer.prepend(lastImgClone);
    return imgsContainer.querySelectorAll('img');
}
/**
 * 每次检查是否是移动到了克隆的地方
 */
imgsContainer.addEventListener('transitionend', function () {
    console.log(idx);
    // 每次移动完之后进行检查
    if (imgs[idx].classList.contains('first-clone')) {
        imgsContainer.style.transition = 'none';
        idx = 1;
        imgsContainer.style.transform = "translateX(".concat(-size * idx, "px)");
        // imgsContainer.style.transition = val
    }
    else if (imgs[idx].classList.contains('last-clone')) {
        imgsContainer.style.transition = 'none';
        idx = imgs.length - 2;
        imgsContainer.style.transform = "translateX(".concat(-size * idx, "px)");
    }
});
imgsContainer.addEventListener('mouseover', function () {
    console.log("mouseover");
    clearInterval(interval);
});
imgsContainer.addEventListener('mouseout', function () {
    console.log("mouseout");
    interval = setInterval(forward, seconds);
});
// 修复切换浏览器页面，
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        clearInterval(interval);
    }
    else {
        interval = setInterval(forward, seconds);
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFCQUFjLENBQUMsSUFBSSxHQUFHLEdBQUcsUUFBSztLQUM5RDtBQUVKLENBQUMsQ0FBQztBQUlGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV6QixhQUFhLENBQUMsUUFBUSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUM7SUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUV4QixRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBR0YsYUFBYTtBQUNiLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBQztJQUV6QyxJQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUM7UUFDZixhQUFhLENBQUMsUUFBUSxDQUFDO0tBQzFCO1NBQUk7UUFDRCxRQUFRLEdBQUcsV0FBVyxDQUFDLE9BQU8sRUFBQyxPQUFPLENBQUM7S0FDMUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy1zYXNzLWRlbW8vLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltZ3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1ncy1jb250YWluZXInKSEgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgY2Fyb3VzZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2Fyb3VzZWwnKSEgYXMgSFRNTEVsZW1lbnRcclxubGV0IGltZ3MgPSBpbWdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpISBhcyBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PlxyXG5jb25zdCBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRvdHMgbGknKSEgYXMgTm9kZUxpc3RPZjxIVE1MRWxlbWVudD5cclxuY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2JykhIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpISBhcyBIVE1MRWxlbWVudFxyXG5cclxuXHJcblxyXG5sZXQgaWR4ID0gMVxyXG5sZXQgc2Vjb25kcyA9IDIwMDBcclxubGV0IHNpemUgPSBjb21wdXRlU2l6ZSgpXHJcbmltZ3MgPSBnZXRDbG9uZUltZ3MoKVxyXG5sZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmb3J3YXJkLHNlY29uZHMpXHJcblxyXG5cclxuXHJcbnByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICByZXNldEludGVydmFsQW5kQ2FsbEZ1bmMoYmFjaylcclxufSlcclxuXHJcbm5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICByZXNldEludGVydmFsQW5kQ2FsbEZ1bmMoZm9yd2FyZClcclxufSlcclxuXHJcblxyXG5mdW5jdGlvbiBmb3J3YXJkKCl7XHJcbiAgICBpZHgrKyAgICBcclxuICAgIGNoYW5nZUltYWdlKClcclxufVxyXG5cclxuZnVuY3Rpb24gYmFjaygpe1xyXG4gICAgaWR4LS1cclxuICAgIGNoYW5nZUltYWdlKClcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZUltYWdlKCl7XHJcbiAgICBpZihpZHggPiBpbWdzLmxlbmd0aCAtIDEgfHwgaWR4IDwgMCl7XHJcbiAgICAgICAgLy8gZmlyc3QgbGltaXQgY291bnRlciB0byBwcmV2ZW50IGZhc3QtY2hhbmdlIGJ1Z3NcclxuICAgICAgICAvLyDop6PlhrPlv6vpgJ/lm57pgIDnmoTpl67popggIFxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaGlnaHREb3RzKClcclxuICAgIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IGB0cmFuc2Zvcm0gMC44cyBlYXNlLWluLW91dGBcclxuICAgIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstc2l6ZSAqIGlkeH1weClgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjb21wdXRlU2l6ZSgpOm51bWJlcntcclxuICAgIGNvbnN0IHdpZHRoID0gZ2V0Q29tcHV0ZWRTdHlsZShjYXJvdXNlbCkuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKVxyXG4gICAgcmV0dXJuICt3aWR0aC5zdWJzdHJpbmcoMCx3aWR0aC5sZW5ndGgtMilcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBoaWdodERvdHMoKXtcclxuICAgIC8vIHJlbW92ZSBhbGwgYWN0aXZlIHRoZW4gYWRkIGFjdGl2ZSBjbGFzc1xyXG4gICAgY29uc3QgYWN0aXZlQ2xzID0gJ2FjdGl2ZSdcclxuICAgIGRvdHMuZm9yRWFjaChkb3QgPT4gZG90LmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xzKSlcclxuICAgIGxldCBkb3RJZHg6bnVtYmVyID0gbnVsbFxyXG4gICAgaWYoaWR4ID09PSBpbWdzLmxlbmd0aC0xKXtcclxuICAgICAgICBkb3RJZHggPSAwXHJcbiAgICB9ZWxzZSBpZihpZHggPT09IDApe1xyXG4gICAgICAgIGRvdElkeCA9IGRvdHMubGVuZ3RoIC0xXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBkb3RJZHggPSBpZHgtMVxyXG4gICAgfVxyXG5cclxuICAgIGRvdHNbZG90SWR4XS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNscylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlc2V0SW50ZXJ2YWxBbmRDYWxsRnVuYyhmdW5jOiBGdW5jdGlvbil7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gICAgZnVuYygpXHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZvcndhcmQsMjAwMClcclxufVxyXG5cclxuLy8gbG9vcFxyXG4vLyBodHRwczovL2NvZGVwZW4uaW8vam9uYXRoYW4tYXNiZWxsL3Blbi9RV2dhbXB2XHJcblxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiDmt7vliqDlhYvpmobpppblsL5cclxuICovXHJcbiBmdW5jdGlvbiBnZXRDbG9uZUltZ3MoKTpOb2RlTGlzdE9mPEhUTUxFbGVtZW50PntcclxuICAgIGNvbnN0IGZpcnN0SW1nQ2xvbmUgPSBpbWdzWzBdLmNsb25lTm9kZSgpIGFzIEhUTUxFbGVtZW50XHJcbiAgICBjb25zdCBsYXN0SW1nQ2xvbmUgPSBpbWdzW2ltZ3MubGVuZ3RoLTFdLmNsb25lTm9kZSgpIGFzIEhUTUxFbGVtZW50XHJcblxyXG4gICAgZmlyc3RJbWdDbG9uZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC1jbG9uZScpXHJcbiAgICBsYXN0SW1nQ2xvbmUuY2xhc3NMaXN0LmFkZCgnbGFzdC1jbG9uZScpXHJcblxyXG4gICAgaW1nc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdEltZ0Nsb25lKVxyXG4gICAgaW1nc0NvbnRhaW5lci5wcmVwZW5kKGxhc3RJbWdDbG9uZSlcclxuXHJcbiAgICByZXR1cm4gaW1nc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxyXG59XHJcblxyXG4vKipcclxuICog5q+P5qyh5qOA5p+l5piv5ZCm5piv56e75Yqo5Yiw5LqG5YWL6ZqG55qE5Zyw5pa5XHJcbiAqL1xyXG5pbWdzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhpZHgpO1xyXG4gICAgXHJcbiAgIC8vIOavj+asoeenu+WKqOWujOS5i+WQjui/m+ihjOajgOafpVxyXG4gICBpZihpbWdzW2lkeF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmaXJzdC1jbG9uZScpKXtcclxuICAgIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJ1xyXG4gICAgaWR4ID0gMVxyXG4gICAgaW1nc0NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1zaXplICogaWR4fXB4KWBcclxuICAgIC8vIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9IHZhbFxyXG4gICB9ZWxzZSBpZihpbWdzW2lkeF0uY2xhc3NMaXN0LmNvbnRhaW5zKCdsYXN0LWNsb25lJykpe1xyXG4gICAgaW1nc0NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnXHJcbiAgICBpZHggPSBpbWdzLmxlbmd0aCAtIDJcclxuICAgIGltZ3NDb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstc2l6ZSAqIGlkeH1weClgXHJcbiAgIH1cclxuICAgIFxyXG59KVxyXG5cclxuXHJcblxyXG5pbWdzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsKCk9PntcclxuICAgIGNvbnNvbGUubG9nKFwibW91c2VvdmVyXCIpO1xyXG4gICAgXHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKVxyXG59KVxyXG5cclxuaW1nc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsKCk9PntcclxuICAgIGNvbnNvbGUubG9nKFwibW91c2VvdXRcIik7XHJcbiAgICBcclxuICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZm9yd2FyZCxzZWNvbmRzKVxyXG59KVxyXG5cclxuXHJcbi8vIOS/ruWkjeWIh+aNoua1j+iniOWZqOmhtemdou+8jFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywoKT0+e1xyXG4gICAgXHJcbiAgICBpZihkb2N1bWVudC5oaWRkZW4pe1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZvcndhcmQsc2Vjb25kcylcclxuICAgIH1cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=