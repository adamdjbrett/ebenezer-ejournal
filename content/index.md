---
title: "Ebenezer: A Journal of Public Theology & Public Witness is launching soon."
description: "We publish clear, careful writing for public life—work that serves communities, strengthens moral imagination, and speaks truth in hard times."
button1: 
  #text: Read Online
  #url: /
#button2: 
  #text: Download PDF
  #url: /
#tags: 
---
## Coming Soon
Check back soon for our first pieces, editorial guidelines, and ways to get involved.

## From the Blog
<div class="posts-list">
{%- for post in collections.posts | reverse | head(6) %}
  <article class="post-item">
    <div class="post-content">
      <header>
        <time class="post-date" datetime="{{ post.date | htmlDateString }}">
          {{ post.date | readableDate("dd LLL yyyy") }}
        </time>
        <h3 class="post-title">
          <a href="{{ post.url }}">{{ post.data.title or post.url }}</a>
        </h3>
      </header>
      {% if post.data.description %}
        <p class="post-excerpt">{{ post.data.description | truncate(180) }}</p>
      {% endif %}
    </div>
  </article>
{%- else %}
  <p>No blog posts yet.</p>
{%- endfor %}
</div>

[View all blog posts](/blog/)
