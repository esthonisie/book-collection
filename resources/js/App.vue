<template>
  <nav>
    <RouterLink :to="{ name: 'books.overview' }">View All Books</RouterLink> |
    <RouterLink :to="{ name: 'books.create' }">Add New Book</RouterLink> | 
    <RouterLink :to="{ name: 'authors.overview' }">View All Authors</RouterLink>
  </nav>
  <RouterView />
</template> 