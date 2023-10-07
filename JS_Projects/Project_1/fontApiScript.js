// console.log("Loaded");

function loadFonts() {

    const api_key = "AIzaSyDOOkhUZ-FyHcDdWtZM-4Ym_I3D4mEksQQ";
    const font_url =
      "https://www.googleapis.com/webfonts/v1/webfonts?key=" + api_key;
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", font_url);
    
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let res = xhr.responseText;
        let ss = JSON.parse(res);
        let countMultiply = Object.keys(ss["items"]).length;
    
        let forIndex = Math.floor(Math.random() * countMultiply) + 1;
        // console.log(forIndex);
    
        let family = ss.items[forIndex].family; //1428 790
        let category = ss.items[forIndex].category;
        let variants = ss.items[forIndex].variants;
        // console.log(family, category, variants);
    
        gotFonts(family, category, variants);
      }
    };
    xhr.send();
    }
    
    function gotFonts(family, category, variants) {
      family = family.trim()
      let cssFamily = family
      family = family.replace(/ /g, "+");
      if (category === "display" || category === "handwriting") {
        category = "cursive"
      }
      let finalVariant = "family=";
      let variantLength = variants.length;
      if (variantLength === 1) {
        finalVariant = finalVariant + family;
      } else {
        var res = ""
        for (let i = 0; i < variantLength; i++) {
          if (variants[i] == "regular") {
            val = "400"
          } else if (variants[i].includes("italic")) {
            continue;
          } else {
            val = String(variants[i]);
          }
          res += val + ";"
        }
        finalVariant = finalVariant + family + ":wght@" + res
        finalVariant = finalVariant.slice(0, -1)
      }
      final_HREF =
        "https://fonts.googleapis.com/css2?" + finalVariant + "&display=swap"
    //   console.log(family, category, finalVariant)
    //   console.log(final_HREF)
    
      cssFamily = `'${cssFamily}', ${category}`
    //   console.log(cssFamily)
      changeHrefLink(final_HREF, cssFamily)
    }
    
    function changeHrefLink(final_HREF, cssFamily) {
      let styles = document.createElement("link");
      styles.rel = "stylesheet";
      styles.href = final_HREF
    //   console.log(styles);
      document.head.appendChild(styles)
      document.body.style.fontFamily = cssFamily
      document.getElementsByTagName('button')[0].style.fontFamily = cssFamily
      document.querySelector('.fontFamily').textContent = `Font Family Name: ${cssFamily}`
    //   window.universal.style.family = cssFamily
    }
    