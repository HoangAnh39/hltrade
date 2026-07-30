// Lấy danh sách từ Firebase và tự động hiển thị ra màn hình khi có đồ mới
const sanPhamRef = window.collection(window.db, "products");

window.onSnapshot(sanPhamRef, (snapshot) => {
    const container = document.getElementById('products-container') || document.querySelector('.products-grid');
    if (!container) return;
    container.innerHTML = ''; // Xóa danh sách cũ

    snapshot.forEach((doc) => {
        const item = doc.data();
        // Giữ nguyên giao diện HTML/CSS cũ, chỉ truyền biến tên và giá vào
        const itemHTML = `
            <div class="product-item">
                <img class="product-img" src="${item.image || 'https://placeholder.com'}">
                <div class="product-info">
                    <div class="product-name">${item.title}</div>
                    <div class="product-price">${Number(item.price).toLocaleString('vi-VN')} đ</div>
                </div>
            </div>
        `;
        container.innerHTML += itemHTML;
    });
});
