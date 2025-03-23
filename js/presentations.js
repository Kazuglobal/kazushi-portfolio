/**
 * プレゼンテーション資料データと機能
 */

// プレゼンテーション資料データ
const presentationsData = [
    {
        id: "ai-education-2024",
        title: "AIと教育の未来：創造性を育む新しいアプローチ",
        date: "2024年3月15日",
        thumbnail: "images/presentations/ai-education-thumb.jpg",
        category: "教育×AI",
        description: "AIの急速な発展が教育現場にもたらす変化と機会について考察し、子どもたちの創造性を育むための新しい教育アプローチを提案します。AIを「使いこなす」だけでなく、AIと「共創する」ための教育モデルやワークショップ事例を紹介します。",
        pdf: "docs/presentations/ai-education-2024.pdf",
        event: "教育イノベーションフォーラム2024",
        location: "東京国際フォーラム",
        slides: 42,
        tags: ["AI", "教育", "創造性", "ワークショップ", "未来教育"]
    },
    {
        id: "sports-ai-analytics",
        title: "スポーツ×AI：データ分析が変える競技の未来",
        date: "2024年2月10日",
        thumbnail: "images/presentations/sports-ai-thumb.jpg",
        category: "スポーツ×AI",
        description: "スポーツ分野におけるAIとデータ分析の活用事例を紹介し、特に野球におけるパフォーマンス向上とチーム戦略の最適化について解説します。アマチュアからプロレベルまで適用可能な分析手法と、導入事例の成果を共有します。",
        pdf: "docs/presentations/sports-ai-analytics.pdf",
        event: "スポーツテクノロジーカンファレンス",
        location: "大阪スポーツサイエンスセンター",
        slides: 38,
        tags: ["AI", "スポーツ", "データ分析", "野球", "パフォーマンス向上"]
    },
    {
        id: "global-education-diversity",
        title: "国際教育と多様性：グローバル人材育成の新たな視点",
        date: "2024年1月25日",
        thumbnail: "images/presentations/global-education-thumb.jpg",
        category: "国際教育",
        description: "多様性を尊重したグローバル人材育成プログラムの設計と実践について解説します。茨城高校での「カルチャーブリッジ」プログラムの事例を中心に、異文化理解と協働のスキルを育むための具体的なアプローチを紹介します。",
        pdf: "docs/presentations/global-education-diversity.pdf",
        event: "国際教育サミット2024",
        location: "筑波大学",
        slides: 45,
        tags: ["国際教育", "多様性", "グローバル人材", "異文化理解", "カリキュラム開発"]
    },
    {
        id: "disaster-prevention-ai",
        title: "防災×AI：テクノロジーで子どもたちの未来を守る",
        date: "2023年11月30日",
        thumbnail: "images/presentations/disaster-ai-thumb.jpg",
        category: "防災×AI",
        description: "防災教育にAIテクノロジーを取り入れた革新的なアプローチを提案します。小学生を対象とした防災×AIワークショップの実践事例と成果、および地域防災計画への展開可能性について解説します。",
        pdf: "docs/presentations/disaster-prevention-ai.pdf",
        event: "防災教育フォーラム",
        location: "防災科学技術研究所",
        slides: 36,
        tags: ["防災", "AI", "教育", "地域", "ワークショップ"]
    }
];

/**
 * プレゼンテーション一覧ページの表示
 */
function renderPresentationsLibrary() {
    const presentationsContainer = document.getElementById('presentations-container');
    if (!presentationsContainer) return;
    
    // プレゼンテーションデータをループして各カードを生成
    presentationsData.forEach(presentation => {
        const presentationCard = document.createElement('div');
        presentationCard.className = 'presentation-card';
        presentationCard.setAttribute('data-aos', 'fade-up');
        
        presentationCard.innerHTML = `
            <a href="presentation-detail.html?id=${presentation.id}" class="presentation-link">
                <div class="presentation-thumbnail">
                    <img src="${presentation.thumbnail}" alt="${presentation.title}">
                    <div class="presentation-info">
                        <span class="slides-count"><i class="fas fa-file-powerpoint"></i> ${presentation.slides}枚</span>
                    </div>
                </div>
                <div class="presentation-content">
                    <div class="presentation-category">${presentation.category}</div>
                    <h3>${presentation.title}</h3>
                    <div class="presentation-meta">
                        <span><i class="far fa-calendar-alt"></i> ${presentation.date}</span>
                        <span><i class="far fa-building"></i> ${presentation.event}</span>
                    </div>
                    <p class="presentation-excerpt">${presentation.description.substring(0, 100)}...</p>
                </div>
            </a>
        `;
        
        presentationsContainer.appendChild(presentationCard);
    });
}

/**
 * URLからプレゼンテーションIDを取得
 */
function getPresentationIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

/**
 * IDからプレゼンテーション資料データを取得
 */
function getPresentationById(presentationId) {
    return presentationsData.find(presentation => presentation.id === presentationId);
}

/**
 * プレゼンテーション詳細ページの表示
 */
function loadPresentationDetails() {
    const presentationId = getPresentationIdFromUrl();
    if (!presentationId) {
        window.location.href = 'presentations.html';
        return;
    }
    
    const presentation = getPresentationById(presentationId);
    if (!presentation) {
        window.location.href = 'presentations.html';
        return;
    }
    
    // タイトルの設定
    document.title = `${presentation.title} | KAZUSHI ODATE`;
    
    // 詳細情報の表示
    const presentationDetail = document.getElementById('presentation-detail');
    if (presentationDetail) {
        presentationDetail.innerHTML = `
            <div class="presentation-header">
                <div class="container">
                    <div class="presentation-meta">
                        <span class="presentation-category">${presentation.category}</span>
                        <h1>${presentation.title}</h1>
                        <div class="presentation-info">
                            <span><i class="far fa-calendar-alt"></i> ${presentation.date}</span>
                            <span><i class="far fa-building"></i> ${presentation.event}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${presentation.location}</span>
                            <span><i class="fas fa-file-powerpoint"></i> ${presentation.slides}枚</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container">
                <div class="presentation-content-wrapper">
                    <div class="presentation-main">
                        <div class="pdf-container" id="pdf-viewer">
                            <div class="pdf-loading">
                                <i class="fas fa-spinner fa-spin"></i> PDFを読み込み中...
                            </div>
                            <iframe src="${presentation.pdf}" class="pdf-iframe" frameborder="0"></iframe>
                        </div>
                        
                        <div class="presentation-description">
                            <h2>概要</h2>
                            <p>${presentation.description}</p>
                        </div>
                        
                        <div class="presentation-actions">
                            <a href="${presentation.pdf}" download class="btn btn-primary">
                                <i class="fas fa-download"></i> PDFをダウンロード
                            </a>
                            <button id="copy-embed-code" class="btn btn-secondary">
                                <i class="fas fa-code"></i> 埋め込みコードをコピー
                            </button>
                        </div>
                    </div>
                    
                    <div class="presentation-sidebar">
                        <div class="presentation-details-card">
                            <h3>資料情報</h3>
                            <ul class="presentation-details-list">
                                <li>
                                    <span class="detail-label">イベント:</span>
                                    <span class="detail-value">${presentation.event}</span>
                                </li>
                                <li>
                                    <span class="detail-label">開催日:</span>
                                    <span class="detail-value">${presentation.date}</span>
                                </li>
                                <li>
                                    <span class="detail-label">開催場所:</span>
                                    <span class="detail-value">${presentation.location}</span>
                                </li>
                                <li>
                                    <span class="detail-label">スライド数:</span>
                                    <span class="detail-value">${presentation.slides}枚</span>
                                </li>
                                <li>
                                    <span class="detail-label">カテゴリー:</span>
                                    <span class="detail-value">${presentation.category}</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="presentation-tags">
                            <h3>タグ</h3>
                            <div class="tags-list">
                                ${presentation.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // 埋め込みコードのコピー機能を設定
        setupEmbedCodeCopy(presentation);
    }
}

/**
 * 埋め込みコードのコピー機能
 */
function setupEmbedCodeCopy(presentation) {
    const copyButton = document.getElementById('copy-embed-code');
    if (!copyButton) return;
    
    copyButton.addEventListener('click', () => {
        const embedCode = `<iframe src="${window.location.origin}/${presentation.pdf}" width="100%" height="500" frameborder="0"></iframe>`;
        
        navigator.clipboard.writeText(embedCode)
            .then(() => {
                // コピー成功時の表示
                copyButton.innerHTML = '<i class="fas fa-check"></i> コピーしました';
                copyButton.classList.add('btn-success');
                
                // 3秒後に元の表示に戻す
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-code"></i> 埋め込みコードをコピー';
                    copyButton.classList.remove('btn-success');
                }, 3000);
            })
            .catch(err => {
                console.error('埋め込みコードのコピーに失敗しました:', err);
                copyButton.innerHTML = '<i class="fas fa-times"></i> コピーに失敗しました';
                copyButton.classList.add('btn-danger');
                
                // 3秒後に元の表示に戻す
                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-code"></i> 埋め込みコードをコピー';
                    copyButton.classList.remove('btn-danger');
                }, 3000);
            });
    });
}

// DOMの読み込み完了時に実行
document.addEventListener('DOMContentLoaded', () => {
    // プレゼンテーション一覧ページの処理
    if (document.getElementById('presentations-container')) {
        renderPresentationsLibrary();
    }
    
    // プレゼンテーション詳細ページの処理
    if (document.getElementById('presentation-detail')) {
        loadPresentationDetails();
    }
}); 