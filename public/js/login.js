// ── 3D TILT ──
const scene = document.getElementById('scene');
const card  = document.getElementById('card');
scene.addEventListener('mousemove', e => {
  const { innerWidth: W, innerHeight: H } = window;
  const x = (e.clientX / W - 0.5) * 14;
  const y = (e.clientY / H - 0.5) * -10;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
scene.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateY(0deg) rotateX(0deg)';
});

// ── TABS ──
function switchTab(tab) {
  document.getElementById('formLogin').classList.toggle('active', tab === 'login');
  document.getElementById('formRegister').classList.toggle('active', tab === 'register');
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
  document.getElementById('loginMsg').textContent = '';
  document.getElementById('regMsg').textContent = '';
}

// ── LOGIN ──
async function doLogin() {
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value;
  const msg = document.getElementById('loginMsg');
  msg.className = 'msg';
  if (!username || !password) { msg.className = 'msg error'; msg.textContent = 'Please fill in all fields.'; return; }
  try {
    const res = await fetch('/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: username, pwd: password }) // ← fixed
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.accessToken);
      msg.className = 'msg success';
      msg.textContent = 'Access granted. Entering…';
      setTimeout(() => window.location.href = '/project.html', 800);
    } else {
      msg.className = 'msg error';
      msg.textContent = data.message || 'Invalid credentials.';
    }
  } catch (err) {
    console.error(err);
    msg.className = 'msg error';
    msg.textContent = 'Could not reach the server.';
  }
}

// ── REGISTER ──
async function doRegister() {
  const username = document.getElementById('regUser').value.trim();
  const password = document.getElementById('regPass').value;
  const msg = document.getElementById('regMsg');
  msg.className = 'msg';
  if (!username || !password) { msg.className = 'msg error'; msg.textContent = 'Please fill in all fields.'; return; }
  if (password.length < 6) { msg.className = 'msg error'; msg.textContent = 'Password must be at least 6 characters.'; return; }
  try {
    const res = await fetch('/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: username, pwd: password }) // ← fixed
    });
    const data = await res.json();
    if (res.ok) {
      msg.className = 'msg success';
      msg.textContent = 'Account created. Sign in now.';
      setTimeout(() => switchTab('login'), 1200);
    } else {
      msg.className = 'msg error';
      msg.textContent = data.message || (res.status === 409 ? 'Username already taken.' : 'Registration failed.');
    }
  } catch (err) {
    console.error(err);
    msg.className = 'msg error';
    msg.textContent = 'Could not reach the server.';
  }
}

// ── ENTER KEY ──
document.addEventListener('keydown', e => {
  if (e.key !== 'Enter') return;
  if (document.getElementById('formLogin').classList.contains('active')) doLogin();
  else doRegister();
});