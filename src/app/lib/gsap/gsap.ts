import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const customCursor = () => {
  const cursor: any = document.getElementById("custom-cursor");
  const links: any = document.querySelectorAll(
    ".image-gallery, .video-reel, .play-cursor, .link"
  );

  const cursorText: any = document.querySelector(".cursor-text");

  const onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    gsap.to(cursor, { x: clientX, y: clientY });
  };

  const onMouseEnterLink = (event: any) => {
    const link = event.target;

    if (link.classList.contains("play-cursor")) {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.style.display = "block";
    } else {
      gsap.to(cursor, { width: 120, height: 120, cursor: "none" });
      cursorText.style.display = "block";
    }
  };

  const onMouseLeaveLink = () => {
    gsap.to(cursor, { width: 15, height: 15, cursor: "pointer" });
    cursorText.style.display = "none";
  };

  document.addEventListener("mousemove", onMouseMove);

  links.forEach((link: any) => {
    link.addEventListener("mouseenter", onMouseEnterLink);
    link.addEventListener("mouseleave", onMouseLeaveLink);
  });
};
