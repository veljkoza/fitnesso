<template>
  <div>
    <header class="h-20 padded  flex justify-between items-center fixed top-0 right-0 w-full">
      <img src="/logo.svg" alt="logo" class="w-20"/>
      <div class="flex items-center">
        <img src="/hamburger.svg" alt="hamburger menu" class="w-6 h-6 mr-6"/>
        <div class="flex items-center">
          <button class="h-6 w-6 mr-1">
            <img src="/cart.svg" alt="cart" />
          </button>
          <span>1</span>
        </div>
      </div>
    </header>
    <Nuxt class="pt-20"/>
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
