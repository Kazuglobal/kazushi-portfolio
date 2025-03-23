/**
 * プロジェクトデータとルーティング機能
 */

// プロジェクトデータ
const projectsData = [
    {
        id: "3d-workshop",
        title: "親子で創造力を爆発！3Dワールドを冒険するワークショップ",
        categories: ["AI", "教育"],
        date: "2024年10月",
        location: "柏の葉T-Siteラウンジ",
        thumbnail: "images/project1.jpg",
        gallery: [
            {
                src: "images/project1.jpg",
                alt: "ワークショップの様子"
            },
            {
                src: "images/project2.jpg",
                alt: "参加者の作品"
            },
            {
                src: "images/project3.jpg",
                alt: "グループディスカッション"
            }
        ],
        overview: "2024年10月に柏の葉T-Siteラウンジで開催された親子で楽しむ3D開発体験ワークショップです。子どもたちの創造力を育むとともに、最新のテクノロジーに触れる機会を提供することを目的としています。参加者は専用のツールを使って自分だけの3Dワールドを作成し、VRゴーグルを使って実際に作ったワールドを冒険します。",
        purpose: "デジタル時代を生きる子どもたちにとって、テクノロジーを「消費する」だけでなく「創造する」スキルが重要になっています。このワークショップでは、3D開発という最先端の分野に親子で取り組むことで、創造力を育むとともに、親子のコミュニケーションを促進します。また、AIツールを活用することで、プログラミングの知識がなくても3D空間を作れることを体験してもらいます。",
        details: [
            {
                title: "1. 導入：3Dワールドとは",
                description: "3Dワールドの基本概念と、現代社会での活用例（ゲーム、教育、ビジネスなど）を紹介します。実際の3Dワールドの例を見せながら、可能性を探ります。"
            },
            {
                title: "2. ツールの使い方",
                description: "直感的に操作できる3D開発ツールの使い方を説明します。基本的な操作から、オブジェクトの配置、テクスチャの適用、環境設定などを学びます。"
            },
            {
                title: "3. 創作タイム",
                description: "親子でアイデアを出し合いながら、オリジナルの3Dワールドを作成します。テーマは「未来の遊び場」で、自由な発想で理想の空間を作ります。"
            },
            {
                title: "4. VR体験",
                description: "完成した3Dワールドを、VRゴーグルを使って実際に体験します。自分たちが作った世界の中を歩き回り、作品の出来栄えを確認します。"
            },
            {
                title: "5. 発表会",
                description: "各グループが作成した3Dワールドを発表し、アイデアや工夫した点を共有します。参加者同士でフィードバックを行い、さらなる改善点を見つけます。"
            }
        ],
        results: "ワークショップには10組の親子が参加し、それぞれユニークな3Dワールドを作成しました。参加者アンケートでは、95%が「とても満足」と回答し、「子どもの創造力に驚いた」「親子で一緒に取り組めて楽しかった」などの感想が寄せられました。また、参加した子どもたちからは「もっと3Dの勉強がしたい」「自分でゲームを作ってみたい」といった前向きな反応が多く見られました。",
        info: {
            date: "2024年10月15日",
            location: "柏の葉T-Siteラウンジ",
            participants: "親子10組（20名）",
            partners: "柏の葉T-Site、Tech Kids School"
        },
        tags: ["AI", "教育", "ワークショップ", "3D開発", "親子イベント"],
        relatedProjects: ["disaster-ai-event", "voice-workshop"],
        prevProject: "voice-workshop",
        nextProject: "disaster-ai-event"
    },
    {
        id: "international-education",
        title: "茨城高校の革新的プログラム：多様性を通じたグローバル人材育成",
        categories: ["国際教育", "多様性"],
        date: "2024年8月",
        location: "茨城高校",
        thumbnail: "images/project2.jpg",
        gallery: [
            {
                src: "images/project2.jpg",
                alt: "国際教育プログラムの様子"
            },
            {
                src: "images/international-1.jpg",
                alt: "留学生とのディスカッション"
            },
            {
                src: "images/international-2.jpg",
                alt: "グループワーク"
            }
        ],
        overview: "2024年8月に茨城高校で実施された「カルチャーブリッジ」プログラム。多様性とグローバル視点を育む国際教育の新しいアプローチを提案しました。留学生と日本人学生が協働でプロジェクトに取り組み、文化の違いを超えた相互理解を深めました。",
        purpose: "グローバル化が進む現代社会では、異なる文化や価値観を理解し、多様な背景を持つ人々と協働できる力が求められています。しかし、従来の「国際理解」教育は一方的な知識の習得に偏りがちでした。このプログラムでは、実際の交流体験を通じて、本質的な異文化理解と協働の姿勢を育むことを目指しています。",
        details: [
            {
                title: "1. 事前学習：世界の多様性",
                description: "プログラム開始前に、世界の文化的多様性についてのワークショップを実施。固定観念や先入観について考え、オープンマインドで異文化に接する姿勢を学びます。"
            },
            {
                title: "2. 交流セッション",
                description: "5カ国10名の留学生と茨城高校の生徒がペアを組み、お互いの文化や価値観について対話。単なる表面的な文化紹介ではなく、「なぜそうなのか」を掘り下げる対話を行います。"
            },
            {
                title: "3. 協働プロジェクト",
                description: "混合チームで「持続可能な未来のための文化横断的解決策」をテーマにプロジェクトに取り組みます。異なる視点や価値観を活かしながら、創造的な解決策を考案します。"
            },
            {
                title: "4. プレゼンテーション",
                description: "各チームが考案した解決策を学校全体に向けてプレゼンテーション。異なる文化の視点を組み合わせることで生まれた独自のアイデアを共有します。"
            },
            {
                title: "5. 振り返りと継続的交流",
                description: "プログラム終了後に振り返りセッションを実施。学びや気づきを言語化し、今後の行動変容につなげます。またオンラインプラットフォームを活用して継続的な交流を支援します。"
            }
        ],
        results: "プログラムに参加した生徒からは「自分の常識が絶対的なものではないと気づいた」「多様な視点があることで解決策の幅が広がることを実感した」といった声が聞かれました。また、90%以上の生徒が「国際的な協働に自信がついた」と回答し、70%が「将来、国際的な環境で働きたい」という意欲を示しました。茨城高校では、このプログラムを年間カリキュラムに組み込み、継続的な国際教育の柱にする予定です。",
        info: {
            date: "2024年8月10日〜20日",
            location: "茨城高校",
            participants: "高校生40名、留学生10名",
            partners: "国際交流基金、Global Bunny"
        },
        tags: ["国際教育", "多様性", "グローバル人材", "異文化理解", "協働学習"],
        relatedProjects: ["global-bunny-project", "voice-workshop"],
        prevProject: "3d-workshop",
        nextProject: "disaster-ai-event"
    },
    {
        id: "disaster-ai-event",
        title: "革新的な防災×AIイベント、小学生の未来を守る新しい教育の形",
        categories: ["AI", "防災"],
        date: "2024年",
        location: "柏市立小学校",
        thumbnail: "images/project3.jpg",
        gallery: [
            {
                src: "images/project3.jpg",
                alt: "防災×AIイベントの様子"
            },
            {
                src: "images/disaster-1.jpg",
                alt: "AIを活用した防災マップ作り"
            },
            {
                src: "images/disaster-2.jpg",
                alt: "防災シミュレーション"
            }
        ],
        overview: "小学生を対象とした防災教育とAIテクノロジーを組み合わせた革新的なイベントを開催しました。子どもたちが自ら地域の防災課題を見つけ、AIを活用して解決策を考えるプロセスを通じて、防災意識と創造的問題解決能力を高めることを目指しています。",
        purpose: "日本は自然災害が多い国ですが、従来の防災教育は「知識を教える」「訓練する」という受動的なものが中心でした。このイベントでは、子どもたちが能動的に地域の防災について考え、最新のAI技術を活用しながら創造的な解決策を生み出すことで、より実効性のある防災意識と行動力を育むことを目的としています。",
        details: [
            {
                title: "1. 防災×AI基礎講座",
                description: "防災の基本知識とAI技術の可能性について、体験型のワークショップで学びます。実際のAIツールに触れながら、防災分野での活用方法を考えます。"
            },
            {
                title: "2. 地域防災マップづくり",
                description: "AIを活用した地図分析ツールを使って、自分たちの住む地域の防災上の課題（危険箇所、避難経路など）を可視化します。"
            },
            {
                title: "3. AI防災ソリューション開発",
                description: "子どもたちがチームに分かれ、発見した課題に対する解決策をAIツールを活用して考案します。例えば、避難経路AI案内アプリ、災害時情報共有システムなど。"
            },
            {
                title: "4. 災害シミュレーション",
                description: "AIが生成した災害シナリオに基づいて、開発した解決策が実際の災害時にどう機能するかをシミュレーションします。"
            },
            {
                title: "5. 成果発表会",
                description: "各チームが開発した防災ソリューションを保護者や地域の方々に発表します。実際に地域防災に役立てる可能性も検討します。"
            }
        ],
        results: "イベントには柏市内の小学校から5・6年生60名が参加し、計12の防災×AIソリューションが考案されました。参加した子どもたちの90%が「防災に興味を持った」と回答し、80%が「AIツールを使って問題解決ができると思う」と答えています。特に優れた提案は「避難所混雑状況リアルタイム共有システム」と「高齢者向け音声AI防災アシスタント」で、これらは実際に地域防災計画への採用が検討されています。また、このプログラムは柏市教育委員会から高い評価を受け、他校への展開も予定されています。",
        info: {
            date: "2024年5月15日〜16日",
            location: "柏市立小学校",
            participants: "小学5・6年生 60名",
            partners: "柏市教育委員会、防災科学技術研究所、テックキッズスクール"
        },
        tags: ["AI", "防災", "STEAM教育", "小学生", "地域", "テクノロジー"],
        relatedProjects: ["3d-workshop", "voice-workshop"],
        prevProject: "international-education",
        nextProject: "ai-baseball"
    },
    {
        id: "voice-workshop",
        title: "VOICE WORKSHOP: 自信を持って大好きな歌を歌えるようになろう！",
        categories: ["教育", "自己表現"],
        date: "2024年",
        location: "柏の葉キャンパス",
        thumbnail: "images/project5.jpg",
        gallery: [
            {
                src: "images/project5.jpg",
                alt: "VOICE WORKSHOPの様子"
            },
            {
                src: "images/voice-1.jpg",
                alt: "ボイストレーニング"
            },
            {
                src: "images/voice-2.jpg",
                alt: "子どもたちの発表"
            }
        ],
        overview: "子どもから大人まで、歌うことに苦手意識を持つ人向けのボイスワークショップです。科学的なボイストレーニング手法と心理的アプローチを組み合わせ、自分の声に自信を持ち、表現する楽しさを体験できるプログラムを提供しています。",
        purpose: "歌うことは自己表現の重要な形であり、心の健康や自己肯定感にも良い影響を与えます。しかし、多くの人が「音痴だから」「恥ずかしい」という理由で歌うことを避けています。このワークショップでは、誰もが持つ声の可能性を引き出し、自分の声で表現する喜びを再発見することを目的としています。",
        details: [
            {
                title: "1. 声と呼吸の科学",
                description: "声の仕組みや呼吸法の基礎を、体験的に学びます。正しい姿勢や呼吸法が声にどう影響するかを実感します。"
            },
            {
                title: "2. 心と声のつながり",
                description: "緊張や恥ずかしさが声にどう影響するかを理解し、リラックスして声を出すためのマインドセットと具体的なテクニックを学びます。"
            },
            {
                title: "3. 段階的ボイストレーニング",
                description: "一人ひとりの声質や課題に合わせた個別のトレーニングを行います。短時間で効果を実感できる科学的なメソッドを使用します。"
            },
            {
                title: "4. 表現力を高める",
                description: "歌詞の解釈や感情表現など、テクニック以外の要素にも焦点を当て、聴く人の心に届く歌い方を探ります。"
            },
            {
                title: "5. ミニコンサート",
                description: "ワークショップの最後に、参加者全員が短い曲や曲の一部を歌う機会を設けます。安心できる環境で歌う体験を通じて、自信を育みます。"
            }
        ],
        results: "これまで開催した10回のワークショップには、8歳から70歳までの幅広い年齢層、計150名以上が参加しました。参加者の95%が「声に対する自信が増した」と回答し、85%が「日常的に歌うようになった」と報告しています。特に印象的だったのは、「40年間人前で歌うことを避けてきたが、今は家族と一緒にカラオケに行ける」「子どもの前で堂々と歌えるようになり、親子関係が良くなった」といった声です。また、このワークショップは学校や企業のチームビルディング研修としても採用されています。",
        info: {
            date: "年間6回開催（2024年）",
            location: "柏の葉キャンパス音楽スタジオ",
            participants: "各回15名程度、年間150名以上",
            partners: "音楽療法学会、Vocal Lab"
        },
        tags: ["ボイストレーニング", "自己表現", "ワークショップ", "音楽", "自己肯定感"],
        relatedProjects: ["3d-workshop", "international-education"],
        prevProject: "ai-baseball",
        nextProject: "3d-workshop"
    }
];

/**
 * メインページのプロジェクト一覧を生成
 */
function renderProjectsOnMainPage() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;
    
    // プロジェクトデータをループして各プロジェクトのカードを生成
    projectsData.forEach(project => {
        // カテゴリー情報をフィルター用のdata属性値に変換
        const categoryClasses = project.categories.map(cat => {
            if (cat.includes('AI')) return 'ai';
            if (cat.includes('教育') || cat.includes('国際教育')) return 'education';
            if (cat.includes('国際') || cat.includes('多様性')) return 'international';
            if (cat.includes('地域') || cat.includes('コミュニティ')) return 'community';
            return cat.toLowerCase();
        }).join(' ');
        
        // プロジェクトカードのHTML生成
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        projectCard.setAttribute('data-category', categoryClasses);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.thumbnail}" alt="${project.title}">
            </div>
            <div class="project-content">
                <div class="project-tags">
                    ${project.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
                </div>
                <h3>${project.title}</h3>
                <p>${project.overview.substring(0, 80)}...</p>
                <div class="project-footer">
                    <span class="project-date">${project.date}</span>
                    <a href="projects/${project.id}.html" class="project-link">詳細を見る <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        `;
        
        // 生成したカードをコンテナに追加
        projectsContainer.appendChild(projectCard);
    });
    
    // 「すべてのプロジェクトを見る」ボタン追加
    const moreButtonContainer = document.createElement('div');
    moreButtonContainer.className = 'projects-more';
    moreButtonContainer.setAttribute('data-aos', 'fade-up');
    moreButtonContainer.innerHTML = `
        <a href="https://globalbunny.jp/" target="_blank" class="btn btn-primary">すべてのプロジェクトを見る</a>
    `;
    projectsContainer.parentNode.appendChild(moreButtonContainer);
    
    // フィルターボタンのイベントリスナーを設定
    setupProjectFilters();
}

/**
 * プロジェクトフィルターの設定
 */
function setupProjectFilters() {
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
}

/**
 * URLからプロジェクトIDを取得する
 * @returns {string} プロジェクトID
 */
function getProjectIdFromUrl() {
    // URLからパスを取得
    const path = window.location.pathname;
    // パスからファイル名を取得
    const filename = path.split('/').pop();
    // ファイル名から拡張子を除去してIDを取得
    return filename.replace('.html', '');
}

/**
 * プロジェクトIDに基づいてプロジェクトデータを取得
 * @param {string} projectId - プロジェクトID
 * @returns {Object} プロジェクトデータ
 */
function getProjectById(projectId) {
    return projectsData.find(project => project.id === projectId);
}

/**
 * プロジェクト詳細ページを動的に生成
 */
function loadProjectDetails() {
    // 現在のページのプロジェクトIDを取得
    const projectId = getProjectIdFromUrl();
    // IDに基づいてプロジェクトデータを取得
    const projectData = getProjectById(projectId);
    
    // プロジェクトが見つからない場合
    if (!projectData) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // ページタイトルを設定
    document.title = `${projectData.title} - KAZUSHI ODATE`;
    
    // プロジェクト基本情報を設定
    document.getElementById('project-category').textContent = projectData.categories.join(' ');
    document.getElementById('project-title').textContent = projectData.title;
    document.getElementById('project-date').textContent = projectData.date;
    document.getElementById('project-location').textContent = projectData.location;
    
    // ギャラリー画像を生成
    const galleryWrapper = document.getElementById('gallery-wrapper');
    galleryWrapper.innerHTML = ''; // 既存の内容をクリア
    
    projectData.gallery.forEach(image => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="../${image.src}" alt="${image.alt}">`;
        galleryWrapper.appendChild(slide);
    });
    
    // プロジェクト詳細情報を設定
    document.getElementById('project-overview').textContent = projectData.overview;
    document.getElementById('project-purpose').textContent = projectData.purpose;
    
    // プロジェクト詳細セクションを生成
    const detailsSection = document.getElementById('project-details');
    detailsSection.innerHTML = ''; // 既存の内容をクリア
    
    projectData.details.forEach(detail => {
        const detailElement = document.createElement('div');
        detailElement.innerHTML = `
            <h3>${detail.title}</h3>
            <p>${detail.description}</p>
        `;
        detailsSection.appendChild(detailElement);
    });
    
    // 成果と反響を設定
    document.getElementById('project-results').textContent = projectData.results;
    
    // サイドバー情報を設定
    document.getElementById('sidebar-date').textContent = projectData.info.date;
    document.getElementById('sidebar-location').textContent = projectData.info.location;
    document.getElementById('sidebar-participants').textContent = projectData.info.participants;
    document.getElementById('sidebar-partners').textContent = projectData.info.partners;
    
    // タグを生成
    const tagsContainer = document.getElementById('project-tags');
    tagsContainer.innerHTML = ''; // 既存の内容をクリア
    
    projectData.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // 関連プロジェクトを生成
    loadRelatedProjects(projectData.relatedProjects);
    
    // ナビゲーションリンクを設定
    setProjectNavigation(projectData.prevProject, projectData.nextProject);
}

/**
 * 関連プロジェクトを表示
 * @param {Array} relatedProjectIds - 関連プロジェクトのID配列
 */
function loadRelatedProjects(relatedProjectIds) {
    const relatedContainer = document.getElementById('related-projects');
    relatedContainer.innerHTML = ''; // 既存の内容をクリア
    
    relatedProjectIds.forEach(id => {
        const relatedProject = getProjectById(id);
        if (!relatedProject) return;
        
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-aos', 'fade-up');
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="../${relatedProject.thumbnail}" alt="${relatedProject.title}">
            </div>
            <div class="project-info">
                <div class="project-tags">
                    ${relatedProject.categories.map(cat => `<span class="tag">${cat}</span>`).join('')}
                </div>
                <h3>${relatedProject.title}</h3>
                <a href="${relatedProject.id}.html" class="btn-more">詳細を見る</a>
            </div>
        `;
        
        relatedContainer.appendChild(projectCard);
    });
}

/**
 * プロジェクトナビゲーションを設定
 * @param {string} prevId - 前のプロジェクトID
 * @param {string} nextId - 次のプロジェクトID
 */
function setProjectNavigation(prevId, nextId) {
    const prevProject = getProjectById(prevId);
    const nextProject = getProjectById(nextId);
    
    const navPrev = document.querySelector('.nav-prev');
    const navNext = document.querySelector('.nav-next');
    
    if (prevProject) {
        navPrev.href = `${prevId}.html`;
        navPrev.querySelector('.nav-title').textContent = prevProject.title.length > 30 
            ? prevProject.title.substring(0, 30) + '...' 
            : prevProject.title;
    }
    
    if (nextProject) {
        navNext.href = `${nextId}.html`;
        navNext.querySelector('.nav-title').textContent = nextProject.title.length > 30 
            ? nextProject.title.substring(0, 30) + '...' 
            : nextProject.title;
    }
}

// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    // メインページの場合
    if (document.getElementById('projects-container')) {
        renderProjectsOnMainPage();
    }
    
    // プロジェクト詳細ページの場合
    if (window.location.pathname.includes('/projects/')) {
        loadProjectDetails();
    }
}); 