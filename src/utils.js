export const doAnimations = (elements) => {
  var animationEndEvents =
    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
  // console.log(elements.getData());
  // var $animationDelay = elements.data("delay");
  // var $animationType = "animated " + elements.data("animation");
  // elements.css({
  //   "animation-delay": $animationDelay,
  //   "-webkit-animation-delay": $animationDelay,
  // });
  // elements.classList.add($animationType).one(animationEndEvents, function () {
  //   elements.classList.remove($animationType);
  // });
};

// Animation with wowjs
export const animation = () => {
  if (typeof window !== "undefined") {
    window.WOW = require("wowjs");
  }
  new WOW.WOW().init();
};

// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".header-navigation");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("sticky");
        } else {
          stick.classList.remove("sticky");
        }
      }
    }
  });
};

// Pagination
export const getPagination = (totalNumber, sort) => {
  let arr = new Array(Math.ceil(totalNumber / sort))
    .fill()
    .map((_, idx) => idx + 1);
  return arr;
};

// change pagination and update pagination and content
export const pagination = (listClass, sort, active) => {
  let list = document.querySelectorAll(listClass);
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (active === 1) {
      if (i < sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    } else {
      if (i >= (active - 1) * sort && i < active * sort) {
        element.classList.remove("d-none");
      } else {
        element.classList.add("d-none");
      }
    }
  }
};

export const scrollTopFun = () => {
  let scrollUp = document.getElementById("scroll-top"),
    lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let st = window.scrollY;
    if (st < 600) {
      scrollUp.style.display = "none";
    } else {
      scrollUp.style.display = "inline-block";
    }
  });
};

export const publicData = {
  phoneNumber: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
  emailAddress: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "",
};

const defaultContentType = {
  "Content-Type": "application/json",
  Accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};
export function getDefaultHeadersWithAuth(contentType = defaultContentType) {
  console.log("🚀 ~ getDefaultHeadersWithAuth called");
  return {
    headers: {
      ...contentType,
      Authorization: `Bearer ${getJWTToken()}`,
    },
  };
}

export function getJWTToken() {
  return (
    sessionStorage.getItem("jwtToken") ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY5MjQ4YWMzZTNkOTQyYjM1MDkwM2FhMiIsIm5hbWUiOiJTdXBlciBBZG1pbiAzIiwidXNlcm5hbWUiOiJzdXBlcmFkbWluM0BleGFtcGxlLmNvbSIsImZpcnN0TmFtZSI6IlN1cGVyIiwic2Vjb25kTmFtZSI6IiIsImxhc3ROYW1lIjoiQWRtaW4iLCJzZWNvbmRMYXN0TmFtZSI6IiIsImRlc2NyaXB0aW9uIjoiVXN1YXJpbyBTdXBlciBBZG1pbmlzdHJhZG9yIiwiZW1haWwiOiJzdXBlcmFkbWluM0BleGFtcGxlLmNvbSIsInBob25lIjoiMzAwMzAwMzAzMCIsImFkZHJlc3MiOiJDYWxsZSIsInBob3RvIjoibm9uZSIsImJpcnRoRGF0ZSI6IjE5OTctMDYtMTlUMDA6MDA6MDAuMDAwWiIsImZhY2Vib29rSWQiOiJmYWNlYm9va0lkIiwiaW5zdGFncmFtSWQiOiJpbnN0YWdyYW1JZCIsInR3aXR0ZXJJZCI6InR3aXR0ZXJJZCIsImxpbmtlZGluSWQiOiJsaW5rZWRpbklkIiwiUk9MRSI6IkFETUlOIiwiQ0xBSU1TIjpbIkNSRUFURV9VU0VSIiwiQ1JFQVRFX1BPU1QiLCJVUERBVEVfUE9TVCIsIlVQREFURV9JTkZPIl0sImNyZWF0ZWRBdCI6IjIwMjUtMTEtMjRUMTY6NDE6MzkuMzgyWiIsInVwZGF0ZWRBdCI6IjIwMjUtMTEtMjRUMTY6NDE6MzkuMzgyWiIsIl9fdiI6MH0sImlhdCI6MTc2NDAwMzY3MywiZXhwIjoxNzY0MDA3MjczfQ.mTJpXGuyThBmKgjKsMUibivSqRv3VRDDS33WR9ny0s8"
  );
}
