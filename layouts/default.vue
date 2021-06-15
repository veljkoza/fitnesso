<template>
  <div>
    <header
      class="h-20 padded flex justify-between items-center fixed top-0 right-0 w-full"
    >
      <img src="/logo.svg" alt="logo" class="w-20" />
      <div class="flex items-center">
        <img src="/hamburger.svg" alt="hamburger menu" class="w-6 h-6 mr-6" />
        <div class="flex items-center">
          <button class="h-6 w-6 mr-1">
            <img src="/cart.svg" alt="cart" />
          </button>
          <span>1</span>
        </div>
      </div>
    </header>
    <Nuxt class="pt-20" />
    <footer class="bg-primary px-2 py-10 gap-10 grid grid-cols-1 md:grid-cols-2 text-white">
      <h1 class="font-bold text-2xl">FITNESSO</h1>
      <article>
        <h3>EXPLORE</h3>
        <ul class="flex flex-col font-bold">
          <li>Premium Course</li>
          <li>Free Course</li>
          <li>Blog</li>
          <li>About</li>

          <li>Contact</li>

          <li>Style Guide</li>
        </ul>
      </article>
      <article>
        <h3>CONTACT</h3>
        <ul class="flex flex-col font-bold">
          <li>contact@fitnesso.com</li>
          
        </ul>
      </article>
      <article>
        <h3>LICENCING</h3>
        <ul class="flex flex-col font-bold">
          <li>Copyright Flow Ninja</li>
          <li>Powered by Oblak Studios</li>
          <li>Licencing</li>
          <li>About</li>

          <li>Support</li>

        </ul>
      </article>
    </footer>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
