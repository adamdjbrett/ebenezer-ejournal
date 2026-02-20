---
layout: layouts/blog.njk
title: Blogs
description: News and updates
pagination:
  data: collections.posts
  size: 6
permalink: /blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}{% endif %}/index.html
---
