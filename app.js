// User Profile Data
let userProfile = {
  name: "Creator Space",
  bio: "डिजिटल विज़नरी • 100% रिपॉजिटरी से पावर्ड",
  link: "github.com/nt18084",
  img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop"
};

// Stories Data
const stories = [
  { name: "Your story", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop" },
  { name: "nikita_99", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop" },
  { name: "alex_dev", img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop" },
  { name: "rohit_vfx", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop" },
  { name: "cyber_space", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop" }
];

// Feed Posts Data
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

// Explore Images
const exploreImages = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&auto=format&fit=crop"
];

// Switch Tabs
function switchTab(tabName) {
  document.querySelectorAll('.tab-view').forEach(view => view.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));

  const targetView = document.getElementById(`tab-${tabName}`);
  const targetBtn = document.getElementById(`btn-${tabName}`);
  const title = document.getElementById('page-title');

  if (targetView) targetView.classList.add('active');
  if (targetBtn) targetBtn.classList.add('active');

  if (tabName === 'home') title.innerText = 'NEXUSGRAM';
  else if (tabName === 'search') title.innerText = 'EXPLORE';
  else if (tabName === 'reels') title.innerText = 'REELS';
  else if (tabName === 'profile') title.innerText = 'PROFILE';

  window.scrollTo(0, 0);
}

// Edit Profile Modal Handling
function openEditModal() {
  document.getElementById('edit-name-input').value = userProfile.name;
  document.getElementById('edit-bio-input').value = userProfile.bio;
  document.getElementById('edit-link-input').value = userProfile.link;
  document.getElementById('edit-img-input').value = userProfile.img;
  document.getElementById('editModal').style.display = 'flex';
}

function closeEditModal() {
  document.getElementById('editModal').style.display = 'none';
}

function saveProfileChanges() {
  const name = document.getElementById('edit-name-input').value.trim();
  const bio = document.getElementById('edit-bio-input').value.trim();
  const link = document.getElementById('edit-link-input').value.trim();
  const img = document.getElementById('edit-img-input').value.trim();

  if (name) userProfile.name = name;
  if (bio) userProfile.bio = bio;
  if (link) userProfile.link = link;
  if (img) userProfile.img = img;

  renderProfile();
  closeEditModal();
}

// Render Profile
function renderProfile() {
  document.getElementById('profile-name').innerText = userProfile.name;
  document.getElementById('profile-bio-text').innerText = userProfile.bio;
  document.getElementById('profile-link').innerText = userProfile.link;
  document.getElementById('profile-img').src = userProfile.img;
  document.getElementById('profile-post-count').innerText = posts.length;

  const profileGrid = document.getElementById('profile-grid');
  profileGrid.innerHTML = posts.map(p => `
    <img src="${p.postImg}" class="explore-img" alt="Post thumbnail" />
  `).join('');
}

// Render Stories
function renderStories() {
  const container = document.getElementById("stories-list");
  container.innerHTML = stories.map((s, idx) => `
    <div class="story-item" onclick="openStory(${idx})">
      <div class="story-ring">
        <img src="${s.img}" class="story-avatar" alt="${s.name}">
      </div>
      <span class="story-username">${s.name}</span>
    </div>
  `).join('');
}

function openStory(index) {
  const story = stories[index];
  document.getElementById("storyModalName").innerText = story.name;
  document.getElementById("storyModalAvatar").src = story.img;
  document.getElementById("storyModalImg").src = story.img;
  document.getElementById("storyModal").style.display = "flex";
}

function closeStory() {
  document.getElementById("storyModal").style.display = "none";
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
        <div class="caption"><b>${post.username}</b> ${post.caption}</div>

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

  renderProfile();
}

function renderSearchGrid() {
  const grid = document.getElementById('explore-grid');
  grid.innerHTML = exploreImages.map(img => `
    <img src="${img}" class="explore-img" alt="Explore Item" />
  `).join('');
}

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
  if (!post.liked) handleLike(id);
}

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

function triggerUpload() {
  document.getElementById('imageInput').click();
}

function handleNewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const userCaption = prompt("फोटो का कैप्शन लिखें:") || "Just posted! ✨";
    const newPost = {
      id: Date.now(),
      username: userProfile.name.toLowerCase().replace(/\s+/g, '_'),
      location: "India",
      avatar: userProfile.img,
      postImg: e.target.result,
      likes: 0,
      liked: false,
      caption: userCaption,
      comments: []
    };

    posts.unshift(newPost);
    renderFeed();
    switchTab('home');
  };
  reader.readAsDataURL(file);
}

document.addEventListener("DOMContentLoaded", () => {
  renderStories();
  renderFeed();
  renderSearchGrid();
  renderProfile();
});
