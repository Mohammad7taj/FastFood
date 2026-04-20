// ========== دیتای منو ==========
const menuItems = [
    { name: "همرگر", desc: "ویره و خوشمزه", price: "۱۸۰,۰۰۰ تومان", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop" },
    { name: "هدادگ", desc: "ویرا و خوشمزه", price: "۲۰۰,۰۰۰ تومان", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop" },
    { name: "بندرگ", desc: "ویره و خوشمزه", price: "۱۶۰,۰۰۰ تومان", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop" }
];

// بارگذاری کارت‌ها در صفحه
function loadMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    container.innerHTML = menuItems.map(item => `
        <div class="menu-card">
            <div class="neon-badge">✦ نئون نایت ✦</div>
            <div class="menu-img" style="background-image: url('${item.img}');"></div>
            <div class="menu-content">
                <div class="menu-title">${item.name}</div>
                <div class="menu-desc">${item.desc}</div>
                <div class="menu-price">${item.price}</div>
            </div>
        </div>
    `).join('');
}

// ========== افکت ذرات متحرک (خیابان شبانه) ==========
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const PARTICLE_COUNT = 120;
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2.5,
            speedY: 0.5 + Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.5,
            color: `rgba(160, 80, 255, ${0.3 + Math.random() * 0.5})`
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            // حرکت به سمت پایین (شبیه بارش نور)
            p.y += p.speedY;
            p.x += p.speedX;
            
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
            if (p.x > canvas.width) p.x = 0;
            if (p.x < 0) p.x = canvas.width;
        }
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// اجرا در زمان لود صفحه
document.addEventListener('DOMContentLoaded', () => {
    loadMenu();
    initParticles();
    
    // افکت کلیک روی کارت‌ها
    document.getElementById('menu-container')?.addEventListener('click', (e) => {
        const card = e.target.closest('.menu-card');
        if (card) {
            const title = card.querySelector('.menu-title')?.innerText;
            console.log(`✨ سفارش: ${title} ✨`);
            alert(`🥡 "${title}" به سبد خرید اضافه شد! (نسخه نمایشی)`);
        }
    });
});