document.addEventListener('DOMContentLoaded', () => {

    // เลือก element ของปุ่มเมนูและ overlay

    const menuToggle = document.getElementById('menu-toggle');

    const menuOverlay = document.getElementById('menu-overlay');


    // ฟังก์ชันสำหรับเปิด/ปิดเมนู

    const toggleMenu = () => {

        // เพิ่มหรือลบ class 'is-active' เพื่อเปลี่ยนสถานะการแสดงผล

        menuOverlay.classList.toggle('is-active');

        menuToggle.classList.toggle('is-active'); // (Optional) เพิ่ม class ให้ปุ่มเพื่อเปลี่ยน icon

    };


    // เมื่อคลิกที่ปุ่มแฮมเบอร์เกอร์

    menuToggle.addEventListener('click', (event) => {

        event.stopPropagation(); // ป้องกัน event จากการส่งต่อไปยัง element อื่น (สำคัญ)

        toggleMenu();

    });


    // เมื่อคลิกที่พื้นที่ด้านนอกเมนู (overlay) หรือคลิกที่ลิงก์ในเมนู

    menuOverlay.addEventListener('click', (event) => {

        // ตรวจสอบว่าคลิกที่ overlay โดยตรง หรือคลิกที่ลิงก์ในเมนู

        if (event.target === menuOverlay || event.target.closest('.menu-link')) {

            toggleMenu();

        }

    });


    // เมื่อกดปุ่ม 'Escape' บนแป้นพิมพ์ ให้ปิดเมนู

    document.addEventListener('keydown', (event) => {

        if (event.key === 'Escape' && menuOverlay.classList.contains('is-active')) {

            toggleMenu();

        }

    });

});
