// Stories Data
const stories = [
  { name: "Your story", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop" },
  { name: "nikita_99", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop" },
  { name: "alex_dev", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop" },
  { name: "rohit_vfx", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop" },
  { name: "cyber_space", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop" }
];

// Posts Feed Data
const posts = [
  {
    id: 1,
    username: "alex_creator",
    location: "Cyber City, Tokyo",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&auto=format&fit=crop",
    postImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop",
    likes: 1420,
    liked: false,
    caption: "नया आर्किटेक्चर रेडी है। 100% GitHub रिपॉजिटरी से संचालित ⚡",
    comments: ["शानदार लुक भाई! 🔥"]
  },
  {
    id: 2,
    username: "future_vibes",
    location: "Design Studio",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop",
    postImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop",
    likes: 980,
    liked: false,
    caption: "Retro tech vibes never die. Clean code, pure aesthetics.",
    comments: ["Aesthetic 10/10 😍"]
  }
];

// Render Stories
function renderStories() {
  const container = document.getElementById("stories-list");
  container.innerHTML = stories.map(s => `
    <div class="story-item">
      <div class="story-ring">
        <img src="${s.img}" class="story-avatar" alt="${s.name}">
      </div>
      <span class="story-username">${s.name}</span>
    </div>
  `).join('');
}

// Render Feed
function renderFeed() {
  const container = document.getElementById("posts-container");
  container.innerHTML = posts.map(post => `
    <article class="post-card" id="post-${post.id}">
      <div class="post-header">
        <div class="post-user">
          <img src="${post.avatar}" class="post-avatar" alt="${post.username}">
          <div>
            <div class="post-username">${post.username}</div>
            <div class="post-location">${post.location}</div>
          </div>
        </div>
        <div style="cursor:pointer; font-weight:bold;">⋮</div>
      </div>

      <div class="post-media" ondblclick="handleDoubleTap(${post.id})">
        <img src="${post.postImg}" class="post-img" alt="Post">
        <div id="heart-${post.id}" class="pop-heart">❤️</div>
      </div>

      <div class="post-actions">
        <div class="action-left">
          <button class="action-btn ${post.liked ? 'liked' : ''}" id="like-btn-${post.id}" onclick="handleLike(${post.id})">
            ${post.liked ? '❤️' : '🤍'}
          </button>
          <button class="action-btn">💬</button>
          <button class="action-btn">↗</button>
        </div>
        <button class="action-btn">🔖</button>
      </div>

      <div class="post-details">
        <div class="likes-count"><span id="like-count-${post.id}">${post.likes.toLocaleString()}</span> likes</div>
        <div class="caption"><b>${post.username}</b>${post.caption}</div>

        <div class="comment-list" id="comments-${post.id}">
          ${post.comments.map(c => `<div><b>user</b> ${c}</div>`).join('')}
        </div>

        <div class="comment-input-box">
          <input type="text" class="comment-input" id="input-${post.id}" placeholder="कमेंट लिखें...">
          <button class="comment-post-btn" onclick="addComment(${post.id})">Post</button>
        </div>
      </div>
    </article>
  `).join('');
}

// Like Actions
function handleLike(id) {
  const post = posts.find(p => p.id === id);
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  const btn = document.getElementById(`like-btn-${id}`);
  const counter = document.getElementById(`like-count-${id}`);

  btn.innerText = post.liked ? '❤️' : '🤍';
  btn.classList.toggle('liked', post.liked);
  counter.innerText = post.likes.toLocaleString();
}

function handleDoubleTap(id) {
  const heart = document.getElementById(`heart-${id}`);
  heart.classList.add('active');
  setTimeout(() => heart.classList.remove('active'), 600);

  const post = posts.find(p => p.id === id);
  if (!post.liked) {
    handleLike(id);
  }
}

// Comments
function addComment(id) {
  const input = document.getElementById(`input-${id}`);
  const text = input.value.trim();
  if (!text) return;

  const list = document.getElementById(`comments-${id}`);
  const newRow = document.createElement('div');
  newRow.innerHTML = `<b>you</b> ${text}`;
  list.appendChild(newRow);

  input.value = "";
}

// Bottom Bar Active Switch
function switchNav(element) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeed();
});

