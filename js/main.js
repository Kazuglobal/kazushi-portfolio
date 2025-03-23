/**
 * KAZUSHI ODATE ポートフォリオサイト
 * メインJavaScriptファイル
 */

// DOMが完全に読み込まれた後に実行
document.addEventListener('DOMContentLoaded', function() {
    // AOS（Animate On Scroll）の初期化
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // ナビゲーションメニューの切り替え
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // スクロール時のヘッダー変更
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // タイプライターエフェクト
    const typewriterText = document.getElementById('typewriter-text');
    const text = typewriterText.textContent;
    typewriterText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typewriterText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // ページ読み込み後に少し遅延させてタイプライターエフェクトを開始
    setTimeout(typeWriter, 1000);

    // プロジェクトフィルター
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // アクティブクラスの切り替え
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // すべて表示の場合
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    // カテゴリーに基づいてフィルタリング
                    const categories = card.getAttribute('data-category').split(' ');
                    
                    if (categories.includes(filterValue)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // お問い合わせフォームの送信処理
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // フォームデータの取得
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // 実際のフォーム送信処理はここに実装
            // デモ用にアラートを表示
            alert(`お問い合わせありがとうございます！\n\n名前: ${name}\nメール: ${email}\n件名: ${subject}\nメッセージ: ${message}\n\n※実際の送信機能は実装されていません。`);
            
            // フォームのリセット
            contactForm.reset();
        });
    }

    // スムーズスクロール
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // モバイルメニューが開いている場合は閉じる
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
                
                // ターゲット要素までスクロール
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 