<template>
<nav>
  <div class="nav-links-container">
    <RouterLink 
      active-class="active" 
      :to="{ name: 'home' }">Home
    </RouterLink>
    <RouterLink 
      active-class="active" 
      :to="{ name: 'books.overview' }">View All Books
    </RouterLink>
    <RouterLink
      active-class="active" 
      :to="{ name: 'books.create' }">Add New Book
    </RouterLink>
    <RouterLink 
      active-class="active" 
      :to="{ name: 'authors.overview' }">View All Authors
    </RouterLink>
    <RouterLink 
      active-class="active" 
      :to="{ name: 'authors.create' }">Add New Author
    </RouterLink>
  </div>
</nav>
</template>

<style scoped>
nav {
  background-color: var(--main-color-dark);
  box-shadow: 0 16px 20px var(--main-color-dark);
  width: 100%;
}

.nav-links-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 920px;
  padding: 0 14px;
  margin: 0 auto;
}

a {
  color: hsl(55, 10%, 94%);
  font-size: var(--font-size-14);
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 10px;
  padding: 6px 8px;
}

.active {
  border-right: 2px solid hsl(175, 52%, 40%);
  border-left: 2px solid hsl(175, 52%, 40%);
}
</style>