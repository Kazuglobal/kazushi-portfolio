/**
 * 多言語翻訳データ
 */

const translations = {
    // 日本語（デフォルト）
    'ja': {
        // ナビゲーション
        'nav.about': 'About',
        'nav.fields': '活動分野',
        'nav.projects': 'プロジェクト',
        'nav.global_bunny': 'Global Bunny',
        'nav.blog': 'ブログ',
        'nav.presentations': '資料ライブラリ',
        'nav.contact': 'お問い合わせ',
        
        // ヒーローセクション
        'hero.title': '教育とAIで未来を創る',
        'hero.subtitle': '小学校教諭 AIリテラシー教育研究者',
        'hero.cta': 'プロフィールを見る',
        
        // Aboutセクション
        'about.title': 'About',
        'about.intro': '茨城県水戸市で小学校教諭として活動する傍ら、AI教育やスポーツ分析、国際交流活動など多岐にわたる分野で教育実践の可能性を広げています。',
        'about.bio.title': 'プロフィール',
        'about.bio.name': '小立 和史',
        'about.bio.occupation': '小学校教諭 / AIリテラシー教育研究者',
        'about.bio.education': '筑波大学教育学部卒業',
        'about.bio.experience': '教職歴8年（茨城県水戸市立小学校）',
        'about.bio.research': 'AI教育、EdTech、国際理解教育',
        'about.philosophy.title': '教育理念',
        'about.philosophy.content': '子どもたちが変化の激しい社会を生き抜くために必要な「創造性」と「共生力」を育む教育を追求しています。AIをはじめとするテクノロジーの発展は、私たちの生活や仕事を大きく変えつつあります。こうした時代だからこそ、テクノロジーを主体的に活用する力と、多様な価値観を持つ人々と協働できる力が重要です。',
        'about.vision.title': 'ビジョン',
        'about.vision.content': '教育とテクノロジーの融合によって、子どもたち一人ひとりの可能性を最大限に引き出す学びの場を創出することを目指しています。従来の教育の枠組みにとらわれず、常に新しい教育のあり方を探求し、実践を通じて教育の未来を切り拓いていきたいと考えています。',
        
        // 活動分野セクション
        'fields.title': '活動分野',
        'fields.subtitle': '教育を軸に、テクノロジー、スポーツ、国際交流など多様な領域で活動しています。',
        'fields.ai.title': 'AI教育',
        'fields.ai.description': '小学生向けAIリテラシー教育プログラムの開発と実践、教育現場でのAI活用方法の研究と普及活動を行っています。',
        'fields.sports.title': 'スポーツ×AI',
        'fields.sports.description': '野球を中心としたスポーツデータ分析やAIを活用したコーチング支援システムの開発に取り組んでいます。',
        'fields.international.title': '国際教育',
        'fields.international.description': 'オンライン国際交流プログラムの企画・運営、多文化理解教育の実践、海外教育機関との連携プロジェクトを推進しています。',
        'fields.community.title': '地域教育活動',
        'fields.community.description': '地域と学校の連携による教育プログラムや、防災教育、環境教育など、地域に根ざした教育活動を展開しています。',
        
        // プロジェクトセクション
        'projects.title': 'プロジェクト',
        'projects.subtitle': '教育分野を中心に様々なプロジェクトを進行しています。',
        'projects.ai_literacy.title': 'AI共生リテラシー育成プログラム',
        'projects.ai_literacy.description': '小学生を対象にAIの基本的な仕組みと倫理的側面を学ぶカリキュラムを開発・実践しています。子どもたちがAIを正しく理解し、創造的に活用するための教育プログラムです。',
        'projects.ai_literacy.status': '進行中',
        'projects.sports_analytics.title': '少年野球AI分析プロジェクト',
        'projects.sports_analytics.description': 'タブレットで撮影した動画からAIが投球フォームや打撃フォームを分析し、改善点を可視化するシステムを開発しています。子どもたちの技術向上と指導者の育成を支援します。',
        'projects.sports_analytics.status': '開発中',
        'projects.cultural_bridge.title': 'カルチャーブリッジプログラム',
        'projects.cultural_bridge.description': '海外の学校とオンラインで接続し、文化交流や協働学習を行うプログラムを運営しています。言語や文化の壁を越えたコミュニケーション能力の育成を目指します。',
        'projects.cultural_bridge.status': '進行中',
        'projects.disaster_edu.title': '防災×テクノロジー教育プロジェクト',
        'projects.disaster_edu.description': 'VRやAIを活用した次世代型防災教育プログラムを開発しています。災害時の判断力と行動力を育む実践的な学習機会を提供します。',
        'projects.disaster_edu.status': '計画中',
        
        // Global Bunnyセクション
        'globalbunny.title': 'Global Bunny',
        'globalbunny.subtitle': '小学生のための国際交流プラットフォーム',
        'globalbunny.description': 'Global Bunnyは、小学生が海外の子どもたちと交流し、グローバルな視点を育むためのオンラインプラットフォームです。言語や文化の壁を越えて、世界中の子どもたちがつながり、学び合う場を提供しています。',
        'globalbunny.feature.1.title': 'オンライン交流',
        'globalbunny.feature.1.description': '安全なビデオ通話システムで海外の子どもたちと直接交流',
        'globalbunny.feature.2.title': '協働プロジェクト',
        'globalbunny.feature.2.description': '国際チームでのプロジェクト活動を通じた学び合い',
        'globalbunny.feature.3.title': '多言語サポート',
        'globalbunny.feature.3.description': 'AIを活用したリアルタイム翻訳で言語の壁を軽減',
        'globalbunny.cta': 'もっと詳しく',
        
        // ブログセクション
        'blog.title': 'ブログ',
        'blog.subtitle': '教育×AI、スポーツ×AI、国際交流など多様な分野での活動報告や考察を掲載しています。',
        'blog.featured.category': 'AI 教育',
        'blog.featured.title': 'AIと教育の未来：子どもたちの創造力を育む新しいアプローチ',
        'blog.featured.date': '2024年3月15日',
        'blog.featured.excerpt': 'AI技術の急速な発展により、教育の在り方が大きく変わろうとしています。子どもたちがAIと共存する未来に必要なスキルとは何か、そして創造力を育むためのアプローチについて考察します。',
        'blog.more': 'ブログをもっと見る',
        'blog.readmore': '続きを読む',
        
        // プレゼンテーションセクション
        'presentations.title': 'プレゼンテーション資料',
        'presentations.subtitle': '講演やワークショップで使用したプレゼンテーション資料を公開しています。',
        'presentations.slides': '枚',
        'presentations.more': '資料ライブラリを見る',
        
        // コンタクトセクション
        'contact.title': 'お問い合わせ',
        'contact.subtitle': '講演依頼や取材、共同研究、プロジェクト提案など、お気軽にお問い合わせください。',
        'contact.form.name': 'お名前',
        'contact.form.email': 'メールアドレス',
        'contact.form.subject': '件名',
        'contact.form.message': 'メッセージ',
        'contact.form.submit': '送信する',
        'contact.info.title': 'コンタクト情報',
        'contact.info.email': 'メール',
        'contact.info.social': 'SNS',
        
        // フッター
        'footer.rights': 'All Rights Reserved.',
        'footer.privacy': 'プライバシーポリシー',
        'footer.terms': '利用規約'
    },
    
    // 英語
    'en': {
        // Navigation
        'nav.about': 'About',
        'nav.fields': 'Fields',
        'nav.projects': 'Projects',
        'nav.global_bunny': 'Global Bunny',
        'nav.blog': 'Blog',
        'nav.presentations': 'Resources',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title': 'Creating the Future through Education and AI',
        'hero.subtitle': 'Elementary School Teacher & AI Literacy Education Researcher',
        'hero.cta': 'View Profile',
        
        // About Section
        'about.title': 'About',
        'about.intro': 'While working as an elementary school teacher in Mito City, Ibaraki Prefecture, I am expanding the possibilities of educational practice in a wide range of fields including AI education, sports analysis, and international exchange activities.',
        'about.bio.title': 'Profile',
        'about.bio.name': 'Kazushi Odate',
        'about.bio.occupation': 'Elementary School Teacher / AI Literacy Education Researcher',
        'about.bio.education': 'Graduated from University of Tsukuba, Faculty of Education',
        'about.bio.experience': '8 years teaching experience (Mito City Elementary School, Ibaraki)',
        'about.bio.research': 'AI Education, EdTech, International Understanding Education',
        'about.philosophy.title': 'Educational Philosophy',
        'about.philosophy.content': 'I pursue education that nurtures the "creativity" and "coexistence skills" necessary for children to survive in a rapidly changing society. The development of technology, including AI, is significantly changing our lives and work. In such an era, the ability to proactively utilize technology and collaborate with people of diverse values is essential.',
        'about.vision.title': 'Vision',
        'about.vision.content': 'I aim to create a learning environment that maximizes the potential of each child through the integration of education and technology. I strive to explore new forms of education beyond conventional frameworks and pioneer the future of education through practice.',
        
        // Fields Section
        'fields.title': 'Fields of Activity',
        'fields.subtitle': 'With education as the core, I am active in diverse areas such as technology, sports, and international exchange.',
        'fields.ai.title': 'AI Education',
        'fields.ai.description': 'Development and implementation of AI literacy education programs for elementary school students, and research and dissemination of AI applications in educational settings.',
        'fields.sports.title': 'Sports × AI',
        'fields.sports.description': 'Working on sports data analysis, particularly in baseball, and developing AI-powered coaching support systems.',
        'fields.international.title': 'International Education',
        'fields.international.description': 'Planning and operating online international exchange programs, practicing multicultural understanding education, and promoting collaborative projects with overseas educational institutions.',
        'fields.community.title': 'Community Education',
        'fields.community.description': 'Developing educational programs through collaboration between communities and schools, as well as implementing disaster prevention education and environmental education rooted in the local community.',
        
        // Projects Section
        'projects.title': 'Projects',
        'projects.subtitle': 'Various projects are underway, primarily in the field of education.',
        'projects.ai_literacy.title': 'AI Coexistence Literacy Development Program',
        'projects.ai_literacy.description': 'Developing and implementing a curriculum for elementary school students to learn the basic mechanisms and ethical aspects of AI. This educational program helps children understand AI correctly and use it creatively.',
        'projects.ai_literacy.status': 'Ongoing',
        'projects.sports_analytics.title': 'Youth Baseball AI Analysis Project',
        'projects.sports_analytics.description': 'Developing a system where AI analyzes pitching and batting forms from videos recorded on tablets and visualizes areas for improvement. This supports children\'s skill development and instructor training.',
        'projects.sports_analytics.status': 'In Development',
        'projects.cultural_bridge.title': 'Cultural Bridge Program',
        'projects.cultural_bridge.description': 'Operating a program that connects with schools overseas online for cultural exchange and collaborative learning. The program aims to develop communication skills that transcend language and cultural barriers.',
        'projects.cultural_bridge.status': 'Ongoing',
        'projects.disaster_edu.title': 'Disaster Prevention × Technology Education Project',
        'projects.disaster_edu.description': 'Developing next-generation disaster prevention education programs utilizing VR and AI. Providing practical learning opportunities to nurture judgment and action skills during disasters.',
        'projects.disaster_edu.status': 'Planning Stage',
        
        // Global Bunny Section
        'globalbunny.title': 'Global Bunny',
        'globalbunny.subtitle': 'International Exchange Platform for Elementary School Students',
        'globalbunny.description': 'Global Bunny is an online platform for elementary school students to interact with children from around the world and develop a global perspective. It provides a space for children worldwide to connect and learn together, transcending language and cultural barriers.',
        'globalbunny.feature.1.title': 'Online Exchange',
        'globalbunny.feature.1.description': 'Direct interaction with children overseas through a secure video call system',
        'globalbunny.feature.2.title': 'Collaborative Projects',
        'globalbunny.feature.2.description': 'Mutual learning through project activities in international teams',
        'globalbunny.feature.3.title': 'Multilingual Support',
        'globalbunny.feature.3.description': 'Reducing language barriers with AI-powered real-time translation',
        'globalbunny.cta': 'Learn More',
        
        // Blog Section
        'blog.title': 'Blog',
        'blog.subtitle': 'Featuring activity reports and insights from various fields including Education × AI, Sports × AI, and international exchange.',
        'blog.featured.category': 'AI Education',
        'blog.featured.title': 'The Future of AI and Education: New Approaches to Nurturing Children\'s Creativity',
        'blog.featured.date': 'March 15, 2024',
        'blog.featured.excerpt': 'The rapid development of AI technology is significantly changing the nature of education. This post explores what skills children need for a future of coexistence with AI and approaches to fostering creativity.',
        'blog.more': 'View More Posts',
        'blog.readmore': 'Read More',
        
        // Presentations Section
        'presentations.title': 'Presentation Resources',
        'presentations.subtitle': 'Sharing presentation materials used in lectures and workshops.',
        'presentations.slides': 'slides',
        'presentations.more': 'View Resource Library',
        
        // Contact Section
        'contact.title': 'Contact',
        'contact.subtitle': 'Feel free to reach out regarding speaking engagements, interviews, collaborative research, or project proposals.',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email Address',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Submit',
        'contact.info.title': 'Contact Information',
        'contact.info.email': 'Email',
        'contact.info.social': 'Social Media',
        
        // Footer
        'footer.rights': 'All Rights Reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Use'
    }
}; 