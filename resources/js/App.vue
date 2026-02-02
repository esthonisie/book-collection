<template>
  <nav>
    <router-link :to="{name: 'books.overview'}">View All Books</router-link> |
    <router-link :to="{name: 'books.create'}">Add New Book</router-link>
  </nav>
  <router-view></router-view>
</template>