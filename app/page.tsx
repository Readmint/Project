import React from "react";
// Public assets are served from the root; don't import from /public.
const icon = { src: "/icon.png" };

export default function Page() {
  return (
  <div>
    <h1>Hello Frontend</h1>
    <img src={icon.src} alt="Description of image" height={200} />
  </div>
  );
}
