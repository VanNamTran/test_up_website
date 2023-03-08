// ======== Tablet =============//
window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
function addNewProduct(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./Data/tablet.xml", false);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //Xử lý dữ liệu trả về từ Server
      updateUINext(this);
    } else {
      //thông báo lỗi
      alert("Đã xảy ra lỗi:(");
    }
  };
  xhr.send();
}
function updateUI(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 0; i < 12; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content").innerHTML += html;
  
}
function updateUINext(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 12; i < productElements.length; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content").innerHTML += html;
  document.getElementById("add-new-product").disabled=true
  document.getElementById("add-new-product").innerText="không còn sản phẩm nào khác"
  document.getElementById("add-new-product").style.background="blue"
  
}
  // =========== iPad ============//
  window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_iPad(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
  function updateUI_iPad(xhr) {
    let doc = xhr.responseXML;
    let productElements = doc.getElementsByTagName("product");
    let html = "";
    for (let i = 0; i < 8; i++) {
        html += "<div class='product-box'>";
        html+="<img src='./ImageTablet/";
            html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
            html+="' alt='' class='img-products'>";
            html+="</br>";
            html +="<span class='badge'>"+
                productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
            html +="<h2 class='product-title'>"+
                productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
            html +="<span class='price'>"+
                productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
            html +="<p class='v1'>"+"<span class='ff3'>"+
                productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
            html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
        html += "</div>";
    }
    document.getElementById("shop-content-ipad").innerHTML += html;
  }
// =========== samsung ============//
window.addEventListener('load', 
  function() { 
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //Xử lý dữ liệu trả về từ Server
      updateUI_samsung(this);
    } else {
      //thông báo lỗi
      alert("Đã xảy ra lỗi:(");
    }
  };
  xhr.send();
  }, false);
function updateUI_samsung(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 8; i < 12; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content-samsung").innerHTML += html;
}
// =========== xiaomi ============//
window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_xiaomi(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
function updateUI_xiaomi(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 12; i < 18; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content-xiaomi").innerHTML += html;
}
// =========== lenovo ============//
window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_lenovo(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
function updateUI_lenovo(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 18; i < 24; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content-lenovo").innerHTML += html;
}
// =========== nokia ============//
window.addEventListener("load",
  function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./Data/tablet.xml", false);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //Xử lý dữ liệu trả về từ Server
        updateUI_nokia(this);
      } else {
        //thông báo lỗi
        alert("Đã xảy ra lỗi:(");
      }
    };
    xhr.send();
  },false);
function updateUI_nokia(xhr) {
  let doc = xhr.responseXML;
  let productElements = doc.getElementsByTagName("product");
  let html = "";
  for (let i = 24; i < productElements.length; i++) {
      html += "<div class='product-box'>";
      html+="<img src='./ImageTablet/";
          html+=productElements[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
          html+="' alt='' class='img-products'>";
          html+="</br>";
          html +="<span class='badge'>"+
              productElements[i].getElementsByTagName("tragop")[0].childNodes[0].nodeValue + "</span>";
          html +="<h2 class='product-title'>"+
              productElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</h2>"
          html +="<span class='price'>"+
              productElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue + "</span>";
          html +="<p class='v1'>"+"<span class='ff3'>"+
              productElements[i].getElementsByTagName("ff3")[0].childNodes[0].nodeValue +"</span></p>"
          html +="<div class='button'><a href='#'' class='button-detail-product'>Thông tin chi tiết</a></div>";
      html += "</div>";
  }
  document.getElementById("shop-content-nokia").innerHTML += html;
}