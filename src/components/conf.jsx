---
import { useEffect } from 'react';
import { Head } from 'astro/runtime';

useEffect(() => {
  if (typeof Storage !== 'undefined') {
    if (localStorage.getItem('dark_mode') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }
  
  const fadeIn = () => {
    document.querySelectorAll('.fadeMe').forEach(el => el.style.opacity = '1');
  };
  
  window.onload = fadeIn;
}, []);
---

<html lang="en">
  <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conferences ✨ Group for Language & Intelligence</title>
    <link rel="icon" type="image/png" sizes="16x16" href="../assets/logo/logo_v1_favicon.png" />
    <link rel="icon" type="image/x-icon" href="../assets/logo/logo_v1_favicon.png" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.1/dist/flowbite.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="../_astro/about.CBw3Cqnq.css" />
    <script type="module" src="../_astro/hoisted.BgUjB-8q.js"></script>
  </Head>
  <body class="antialiased bg-white dark:bg-neutral-950">
    <div class="relative w-full h-20 opacity-0 pointer-events-none"></div>
    <header id="header" class="absolute top-0 z-50 w-full h-20">
      <div class="flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 border-transparent select-none lg:border-r lg:border-l lg:rounded-b-xl">
        <a href="https://www.glintlab.org/" class="h-5 text-base group relative z-30 items-center flex space-x-1.5 text-black dark:text-white" style="font-family: Avenir">
          <span class="group-hover:-rotate-12 group-hover:scale-[1.1] ease-in-out duration-300">
            <svg class="h-[24px] w-[24px] flex fill-current" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135">
              <!-- SVG Content Here -->
            </svg>
          </span>
        </a>
      </div>
    </header>
    <!-- Page Content Here -->
  </body>
</html>
