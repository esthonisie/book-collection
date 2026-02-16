<template>
<nav class="nav-links-container">
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
</nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}

a {
  text-transform: uppercase;
  padding: 14px 16px;
}

.active {
  background-color: rgb(227, 227, 227);
}
</style>