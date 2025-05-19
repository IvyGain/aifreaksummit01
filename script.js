document.addEventListener('DOMContentLoaded', function() {
    // タブ切り替え機能
    const tabs = document.querySelectorAll('.tab');
    const categoryElements = document.querySelectorAll('.category');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const target = this.getAttribute('data-target');
            categoryElements.forEach(category => {
                category.classList.remove('active');
                if (category.id === target) {
                    category.classList.add('active');
                }
            });
        });
    });

    let day1SessionsData = [
        {
            speakerId: 'keitaro',
            day: 'Day 1',
            time: '10:20-11:10',
            speakerName: 'けいたろう',
            speakerSocial: '@keitaro_aigc',
            socialUrl: 'https://x.com/keitaro_aigc',
            avatar: './登壇者アイコン/けいたろうさん.png',
            sessionImage: './登壇者投稿画像_5:5最新/01_けいたろうさん.png',
            sessionTitle: 'GAS×AIで実現するノーコード業務自動化 〜誰でもできる効率化の秘訣〜',
            category: '効率化',
            keyPoints: [
                'GASとAIによる業務自動化の基本',
                'ノーコードでの効率化事例',
                '実践的な導入テクニック'
            ],
            topicTags: ['GAS', 'AI', '業務自動化', 'ノーコード'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'bunkai',
            day: 'Day 1',
            time: '11:20-12:10',
            speakerName: 'ぶんかい',
            speakerSocial: '@bunkaich',
            socialUrl: 'https://x.com/bunkaich',
            avatar: './登壇者アイコン/ぶんかいさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/02_ぶんかいさん.png',
            sessionTitle: 'Dify×Cursor(Windsurf)で生み出す新しい価値の作り方',
            keyPoints: [
                'DifyとCursorの連携',
                'AIを活用した新しい価値創出',
                '開発プロセスの効率化'
            ],
            topicTags: ['Dify', 'Cursor', 'Windsurf', 'AI開発'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
         {
            speakerId: 'morley_superwhisper',
            day: 'Day 1',
            time: '12:10-13:00',
            speakerName: 'モーリー',
            speakerSocial: '@Notion_freak',
            socialUrl: 'https://x.com/Notion_freak',
            avatar: './登壇者アイコン/モーリー.JPG.jpg',
            sessionImage: './登壇者投稿画像_5:5最新/17_もーりさん.png',
            sessionTitle: 'Superwhisper解説 (ランチ休憩)',
            keyPoints: [
                'Superwhisperの基本機能と特徴',
                '音声認識AIの実践的な活用法',
                '議事録作成の効率化と品質向上'
            ],
            topicTags: ['Superwhisper', '音声認識', '業務効率化'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'veco',
            day: 'Day 1',
            time: '13:00-13:50',
            speakerName: 'veco（伊藤雅康）',
            speakerSocial: '@studio_veco',
            socialUrl: 'https://x.com/studio_veco',
            avatar: './登壇者アイコン/vecoさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/03_vecoさん.png',
            sessionTitle: '新時代のウェブデザインの在り方 〜v0ではじめるthree.js × ウェブデザイン〜',
            keyPoints: [
                'v0とthree.jsの連携',
                '3Dウェブデザインのトレンド',
                'AIを活用したウェブ制作'
            ],
            topicTags: ['v0', 'three.js', 'ウェブデザイン', '3D'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'sachikawa',
            day: 'Day 1',
            time: '14:00-14:50',
            speakerName: '幸川莉子',
            speakerSocial: '@riko_sachikawa',
            socialUrl: 'https://x.com/riko_sachikawa',
            avatar: './登壇者アイコン/幸川さん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/04_幸川さん.png',
            sessionTitle: 'AIで『話す力』を鍛えよう！ 〜ChatGPTで磨く"1分自己紹介"〜',
            keyPoints: [
                'ChatGPTでの自己紹介作成',
                'AIによる話し方トレーニング',
                'コミュニケーション能力向上'
            ],
            topicTags: ['ChatGPT', '話し方', '自己紹介', 'コミュニケーション'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'yugi',
            day: 'Day 1',
            time: '15:00-15:50',
            speakerName: 'ユギ イサナ',
            speakerSocial: '@137yugi',
            socialUrl: 'https://x.com/137yugi',
            avatar: './登壇者アイコン/ユギさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/05_ユギさん.png',
            sessionTitle: 'AI時代のクリエイティブ戦略 〜スキル×AIで広がる表現の世界：動画編〜',
            keyPoints: [
                'AIとスキルの融合',
                '動画制作におけるAI活用',
                '新しいクリエイティブ表現'
            ],
            topicTags: ['動画制作', 'AI', 'クリエイティブ戦略'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'rikuo',
            day: 'Day 1',
            time: '16:00-16:50',
            speakerName: 'りくお',
            speakerSocial: '@riku720720',
            socialUrl: 'https://x.com/riku720720',
            avatar: './登壇者アイコン/りくおさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/06_りくおさん.png',
            sessionTitle: 'DreamCoreが実現するAI×ゲーム開発革命 〜誰もがクリエイターになれる時代〜',
            keyPoints: [
                'DreamCoreによるゲーム開発',
                'AIとゲーム制作の融合',
                'クリエイターエコノミー'
            ],
            topicTags: ['DreamCore', 'ゲーム開発', 'AI'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'hayashi',
            day: 'Day 1',
            time: '17:00-17:50',
            speakerName: 'ハヤシシュンスケ',
            speakerSocial: '@_____XX___XX___',
            socialUrl: 'https://x.com/_____XX___XX___',
            avatar: './登壇者アイコン/シュンスケさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/07_シュンスケさん.png',
            sessionTitle: 'シュンスケ式プロンプト設計術 〜ビジネス課題を解決するAI活用の極意〜',
            keyPoints: [
                '効果的なプロンプト設計法',
                'ビジネス課題解決への応用',
                'AI活用のための思考法'
            ],
            topicTags: ['プロンプト設計', 'AI活用', 'ビジネス課題解決'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        },
        {
            speakerId: 'taiyo',
            day: 'Day 1',
            time: '18:00-18:50',
            speakerName: 'Taiyo',
            speakerSocial: '@taiyo_ai_gakuse',
            socialUrl: 'https://x.com/taiyo_ai_gakuse',
            avatar: './登壇者アイコン/TAIYOさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/08_Taiyoくん.png',
            sessionTitle: '大学生が挑むAI起業 〜若者視点で見るAIビジネスの可能性と未来〜',
            keyPoints: [
                'AI分野での起業体験',
                '若者から見たAIビジネス',
                'AIビジネスの将来展望'
            ],
            topicTags: ['AI起業', '大学生', 'AIビジネス'],
            youtubeLink: 'https://www.youtube.com/live/ip8rktRj7Ag?si=6DDUIebUYClmXcQT'
        }
    ];

    let day2SessionsData = [
        {
            speakerId: 'yoshinami',
            day: 'Day 2',
            time: '10:20-11:10',
            speakerName: '吉波拓夢',
            speakerSocial: '@yoshi8__',
            socialUrl: 'https://x.com/yoshi8__',
            avatar: './登壇者アイコン/吉波さん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/09_吉波さん.png',
            sessionTitle: 'Mastraではじめる実践AIエージェント開発 〜初心者からできるシステム構築の全技法〜',
            keyPoints: [
                'MastraによるAIエージェント開発',
                '初心者向けシステム構築',
                '実践的なAIエージェント技法'
            ],
            topicTags: ['Mastra', 'AIエージェント', 'システム開発'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'akirapapa',
            day: 'Day 2',
            time: '11:20-12:10',
            speakerName: 'あきらパパ',
            speakerSocial: '@akira_papa_IT',
            socialUrl: 'https://x.com/akira_papa_IT',
            avatar: './登壇者アイコン/あきらパパさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/10_あきらパパさん.png',
            sessionTitle: 'DevinとCursorで実現する"現場目線"のAI業務改善',
            keyPoints: [
                'DevinとCursorの連携',
                '現場目線でのAI業務改善',
                '実践的なツール活用法'
            ],
            topicTags: ['Devin', 'Cursor', '業務改善', 'AI活用'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'morley_raycast',
            day: 'Day 2',
            time: '12:10-13:00',
            speakerName: 'モーリー',
            speakerSocial: '@Notion_freak',
            socialUrl: 'https://x.com/Notion_freak',
            avatar: './登壇者アイコン/モーリー.JPG.jpg',
            sessionImage: './登壇者投稿画像_5:5最新/17_もーりさん.png',
            sessionTitle: 'Raycast解説 (ランチ休憩)',
            keyPoints: [
                'Raycastによる業務効率化の基本',
                'ショートカットとカスタムコマンドの活用',
                '拡張機能とカスタマイズによる最適化'
            ],
            practicalTips: [
                'よく使うアプリや機能をショートカット登録して即時起動する',
                'カスタムコマンドで自分専用の作業環境を構築する',
                '拡張機能を活用して業務フローを最適化する',
                'チームでの共有設定を活用して標準化を進める',
                '定期的にアップデートや新機能をチェックして活用する'
            ],
            sessionNotes: [
                'Raycastの活用で日常業務の効率が大幅に向上',
                'ショートカットやカスタマイズで自分だけの作業環境を構築可能',
                '拡張機能の活用で業務フローを最適化',
                'チームでの共有が生産性向上に寄与',
                '継続的なアップデートで常に最新の機能を活用できる'
            ]
        },
        {
            speakerId: 'kawai',
            day: 'Day 2',
            time: '13:00-13:50',
            speakerName: 'KAWAI',
            speakerSocial: '@kawai_design',
            socialUrl: 'https://x.com/kawai_design',
            avatar: './登壇者アイコン/KAWAIさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/11_KAWAIさん.png',
            sessionTitle: 'AI時代に1番重要な『伝え方』をデザインする方法',
            keyPoints: [
                'AI時代のコミュニケーション術',
                '効果的な伝え方のデザイン',
                'デザイン思考と情報伝達'
            ],
            topicTags: ['伝え方', 'デザイン', 'コミュニケーション', 'AI時代'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'tonochi',
            day: 'Day 2',
            time: '14:00-14:50',
            speakerName: 'とのち',
            speakerSocial: '@ai_tonoch',
            socialUrl: 'https://x.com/ai_tonoch',
            avatar: './登壇者アイコン/とのちさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/12_とのちさん.png',
            sessionTitle: '圧倒的レベチクオリティのAIマンガ制作ライブ 〜創作の舞台裏〜',
            keyPoints: [
                'AIを活用したマンガ制作の実践技法',
                'AIマンガ制作の品質向上テクニック',
                'AI時代のマンガ制作ワークフロー'
            ],
            practicalTips: [
                'AIツールの特徴を理解し、目的に応じて使い分ける',
                'ストーリーやキャラクター設定を事前に明確にする',
                '工程ごとにAIと手作業をバランスよく組み合わせる',
                'フィードバックを活かして作品をブラッシュアップする',
                '著作権や倫理面にも配慮した制作を心がける'
            ],
            sessionNotes: [
                'AI活用でマンガ制作の効率と表現力が大幅に向上',
                '高品質な作品づくりには人の工夫とAIの組み合わせが重要',
                '効率的なワークフローの構築が生産性向上の鍵',
                '継続的な改善と学びが作品の質を高める',
                'AI時代の創作には新しい倫理観も求められる'
            ]
        },
        {
            speakerId: 'kinoshita',
            day: 'Day 2',
            time: '15:00-15:50',
            speakerName: '木下寛士',
            speakerSocial: '@kinoshita_ifr',
            socialUrl: 'https://x.com/kinoshita_ifr',
            avatar: './登壇者アイコン/木下さん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/13_木下さん.png',
            sessionTitle: '世界最大級ユニコーン企業の"成長DNA"とAI活用最前線 ―― 次世代DXツール『Lark』と生成AIで広がるビジネスの新境地',
            keyPoints: [
                'ユニコーン企業のAI戦略',
                'Larkと生成AIの連携',
                'ビジネスにおけるDX推進'
            ],
            topicTags: ['Lark', 'DX', '生成AI', 'ビジネス戦略'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'keito',
            day: 'Day 2',
            time: '16:00-16:50',
            speakerName: 'KEITO',
            speakerSocial: '@keitowebai',
            socialUrl: 'https://x.com/keitowebai',
            avatar: './登壇者アイコン/KEITOさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/14_KEITOさん.png',
            sessionTitle: 'マルチメディア戦略 〜AIを活用した超速アウトプットの極意〜',
            keyPoints: [
                'AIによるマルチメディア戦略',
                '高速アウトプット術',
                'コンテンツ制作の効率化'
            ],
            topicTags: ['マルチメディア', 'AI活用', 'コンテンツ戦略'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'fujita',
            day: 'Day 2',
            time: '17:00-17:50',
            speakerName: '藤田拳',
            speakerSocial: '@kenfjt',
            socialUrl: 'https://x.com/kenfjt',
            avatar: './登壇者アイコン/藤田さん.png',
            sessionImage: './登壇者投稿画像_5:5最新/15_藤田さん.png',
            sessionTitle: 'AIエージェントはこう捉えよ －企業における生成AI活用の現状と未来－',
            keyPoints: [
                'AIエージェントの企業活用',
                '生成AIの現状と将来',
                'ビジネスへのAI導入戦略'
            ],
            topicTags: ['AIエージェント', '企業活用', '生成AI'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        },
        {
            speakerId: 'momo',
            day: 'Day 2',
            time: '18:00-18:50',
            speakerName: 'もも（長谷川麻子）',
            speakerSocial: '@momo_web24',
            socialUrl: 'https://x.com/momo_web24',
            avatar: './登壇者アイコン/ももさん.jpeg',
            sessionImage: './登壇者投稿画像_5:5最新/16_ももさん.png',
            sessionTitle: 'AIデザイン革命 〜Recraft×Midjourney×Figmaで実現する創造性の拡張〜',
            keyPoints: [
                'Recraft, Midjourney, Figma連携',
                'AIによるデザイン革命',
                '創造性の拡張とAIツール'
            ],
            topicTags: ['Recraft', 'Midjourney', 'Figma', 'AIデザイン'],
            youtubeLink: 'https://www.youtube.com/live/EKbtAnBIH0s?si=Htc5dh60DA4ZTkET'
        }
    ];

    // Day 2 セッションデータから不要な登壇者を削除
    day2SessionsData = day2SessionsData.filter(session => !['takuya', 'yuki', 'taku', 'yusuke', 'yoshiki'].includes(session.speakerId));

    // allSessionsDataにカテゴリ情報を付与
    const allSessionsData = [
        ...day1SessionsData.map(session => ({ ...session, category: getSessionCategory(session.speakerId) })),
        ...day2SessionsData.map(session => ({ ...session, category: getSessionCategory(session.speakerId) }))
    ];

    // カテゴリの定義を更新
    const categories = {
        'all': { name: 'すべて', icon: '🌟' },
        'efficiency': { name: '効率化', icon: '⚡' },
        'creative': { name: 'クリエイティブ', icon: '🎨' },
        'human': { name: 'ヒューマンスキル', icon: '🤝' },
        'business': { name: 'ビジネス', icon: '💼' }
    };

    function getSessionCategory(speakerId) {
        if (['keitaro', 'bunkai', 'morley_superwhisper', 'morley_raycast', 'akirapapa'].includes(speakerId)) {
            return 'efficiency';
        } else if (['veco', 'yugi', 'rikuo', 'tonochi', 'momo'].includes(speakerId)) {
            return 'creative';
        } else if (['sachikawa', 'kawai', 'hayashi'].includes(speakerId)) {
            return 'human';
        } else if (['kinoshita', 'keito', 'fujita', 'taiyo', 'yoshinami'].includes(speakerId)) {
            return 'business';
        }
        return 'all';
    }

    function createSessionCard(session) {
        const card = document.createElement('div');
        card.className = 'session-card';
        card.setAttribute('data-speaker-id', session.speakerId);
        // カテゴリー情報をdata属性として追加する場合はここで設定

        card.innerHTML = `
            <div class="day-badge">${session.day}</div>
            <div class="session-header">
                <img src="${session.sessionImage || session.session_image || session.image_url}" alt="${session.speakerName || session.speaker_name}" class="session-image">
                <div class="view-detail-btn">詳細を見る</div>
                <div class="session-speaker-info">
                    <img src="${session.avatar || session.image_url}" alt="${session.speakerName || session.speaker_name}" class="speaker-avatar">
                    <div>
                        <h3 class="speaker-name">${session.speakerName || session.speaker_name}</h3>
                        <a href="${session.socialUrl || session.social_url}" target="_blank" class="speaker-social">${session.speakerSocial || session.social_handle}</a>
                    </div>
                </div>
            </div>
            <div class="session-content">
                <div>
                    <div class="session-time">${session.time}</div>
                    <h2 class="session-title">${(session.sessionTitle || session.session_title).replace(/「(.*?)」/g, '「<span class="session-highlight">$1</span>」').replace(/〜(.*?)〜/g, '〜<span class="session-highlight">$1</span>〜')}</h2>
                    <ul class="key-points">
                        ${(session.keyPoints || session.key_points || []).map(point => `<li>${typeof point === 'string' ? point.replace(/「(.*?)」/g, '「<span class=\"session-highlight\">$1</span>」') : (point.title || '')}</li>`).join('')}
                    </ul>
                    <div class="topic-tags">
                        ${(session.topicTags || session.topic_tags || []).map(tag => `<span class="topic-tag">${tag}</span>`).join('')}
                    </div>
                </div>
                <a href="${session.youtubeLink || session.youtube_link}" target="_blank" class="youtube-link">セッション動画を見る →</a>
            </div>
        `;
        return card;
    }

    // カテゴリタブの作成
    function createCategoryTabs() {
        const tabContainer = document.createElement('div');
        tabContainer.className = 'category-tabs';
        
        Object.entries(categories).forEach(([id, category]) => {
            const tab = document.createElement('button');
            tab.className = 'category-tab' + (id === 'all' ? ' active' : '');
            tab.setAttribute('data-category', id);
            tab.innerHTML = `${category.icon} ${category.name}`;
            tabContainer.appendChild(tab);
        });
        
        // タブのクリックイベント
        tabContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('category-tab')) {
                // アクティブなタブの切り替え
                tabContainer.querySelectorAll('.category-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // カテゴリによるフィルタリング
                const selectedCategory = e.target.getAttribute('data-category');
                filterSessionsByCategory(selectedCategory);
            }
        });
        
        return tabContainer;
    }

    function filterSessionsByCategory(category) {
        const sessionsGrid = document.querySelector('.sessions-grid');
        const filteredSessions = category === 'all' 
            ? allSessionsData 
            : allSessionsData.filter(session => session.category === category);
        // Day1→Day2の登壇時間順でソート
        const sortedSessions = [...filteredSessions].sort((a, b) => {
            if (a.day !== b.day) {
                return a.day.localeCompare(b.day);
            }
            const timeA = a.time.split('-')[0];
            const timeB = b.time.split('-')[0];
            return timeA.localeCompare(timeB);
        });
        sessionsGrid.innerHTML = '';
        sortedSessions.forEach(session => {
            sessionsGrid.appendChild(createSessionCard(session));
        });
    }

    // カテゴリタブを追加
    const categoryTabs = createCategoryTabs();
    const sessionsContainer = document.querySelector('.sessions-container');
    const sessionsGrid = document.querySelector('.sessions-grid');
    sessionsContainer.insertBefore(categoryTabs, sessionsGrid);

    // 初期表示（すべてのセッションを表示）
    filterSessionsByCategory('all');

    // モーダル関連の機能
    const speakerModal = document.getElementById('speakerModal');
    const toolModal = document.getElementById('toolModal');
    const speakerModalContent = document.getElementById('speakerModalContent');
    const toolModalContent = document.getElementById('toolModalContent');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal-overlay').classList.remove('active');
        });
    });

    [speakerModal, toolModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    document.querySelectorAll('.view-detail-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.session-card');
            const speakerId = card.getAttribute('data-speaker-id');
            openSpeakerModal(speakerId);
        });
    });

    // セッションごとのYouTube開始秒数マッピング
    const sessionVideoStartSeconds = {
        // Day1
        'keitaro': 1313,
        'bunkai': 4775,
        'morley_superwhisper': 9360,
        'veco': 10808,
        'sachikawa': 14437,
        'yugi': 17896,
        'rikuo': 21700,
        'hayashi': 25154,
        'taiyo': 29310,
        // Day2（修正版）
        'yoshinami': 2880,
        'akirapapa': 6559,
        'morley_raycast': 11404,
        'kawai': 12355,
        'tonochi': 16005,
        'kinoshita': 19947,
        'keito': 23597,
        'fujita': 26818,
        'momo': 30540
    };
    const sessionVideoBaseUrl = {
        'keitaro': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'bunkai': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'morley_superwhisper': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'veco': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'sachikawa': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'yugi': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'rikuo': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'hayashi': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'taiyo': 'https://www.youtube.com/embed/ip8rktRj7Ag',
        'yoshinami': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'akirapapa': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'morley_raycast': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'kawai': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'tonochi': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'kinoshita': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'keito': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'fujita': 'https://www.youtube.com/embed/EKbtAnBIH0s',
        'momo': 'https://www.youtube.com/embed/EKbtAnBIH0s'
    };

    function getSpeakerData(speakerId) {
        const allSessions = [...day1SessionsData, ...day2SessionsData];
        const session = allSessions.find(s => s.speakerId === speakerId);
        if (!session) return null;

        // セッションごとの詳細情報を定義
        const sessionDetails = {
            'keitaro': {
                keyPoints: [
                    {
                        title: '現場の課題をGAS×AIで解決！',
                        description: '「手作業の繰り返し」「属人化」「ミス」…現場の"困った"をGASとAIで自動化。実際の現場で「どこから手を付けるか」「何が一番ラクになるか」を徹底解説。',
                        icon: '🛠️'
                    },
                    {
                        title: 'ノーコード自動化のリアルな進め方',
                        description: '「まずは小さな自動化から」→成功体験を積み重ねて現場に浸透。スプレッドシート連携で日報・請求書・顧客管理を自動化した具体例や、現場でよくある"つまずきポイント"とその乗り越え方も紹介。',
                        icon: '🚀'
                    },
                    {
                        title: '失敗しない導入・運用のコツ',
                        description: 'エラー処理や権限管理、チームでの運用・共有の工夫など、現場で本当に役立つノウハウを惜しみなく公開。定期的なメンテナンスやアップデートの重要性も強調。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    '「まずは1つだけ」小さな自動化から始めて現場に浸透させる',
                    'スプレッドシート連携で日報・請求書・顧客管理を自動化',
                    'エラー処理や権限管理のコツを押さえて安定運用',
                    'チームでの運用・共有の工夫（マニュアル化・勉強会など）',
                    '定期的なメンテナンスとアップデートで長期運用'
                ],
                sessionNotes: [
                    'GAS×AIで「現場の困った」を自動化し、業務効率が劇的に向上',
                    'ノーコードだからこそ、現場主導でどんどん改善できる',
                    '「まずは小さく始めて成功体験を積む」ことが現場浸透のカギ',
                    'エラーやトラブルも「みんなで乗り越える」文化づくりが大切',
                    '定期的な見直し・アップデートで、長く使える仕組みに'
                ]
            },
            'bunkai': {
                keyPoints: [
                    {
                        title: 'DifyとCursorの連携による開発革新',
                        description: 'DifyとCursorを組み合わせることで、AIを活用した開発環境を構築する方法を解説。Difyの特徴である、AIアプリケーションの迅速な構築機能と、Cursorの高度なコード補完・生成機能を組み合わせることで、開発効率を大幅に向上させる具体的な方法を紹介。特に、プロンプトエンジニアリングとコード生成の連携、カスタムAIアシスタントの構築方法など、実践的な活用事例を詳しく説明。',
                        icon: '🛠️'
                    },
                    {
                        title: 'AIを活用した新しい価値創出',
                        description: 'AIを活用した新しい価値創出の方法論を解説。特に、DifyとCursorを組み合わせることで実現できる、革新的な開発フローと、それによって生み出される新しい価値について、具体的な事例とともに紹介。例えば、AIを活用したコードレビューの自動化、ドキュメント生成の効率化、テスト自動化など、実務で即活用できる手法を詳しく説明。また、AIを活用した開発プロセスの最適化と、品質向上のための具体的な方法も紹介。',
                        icon: '💎'
                    },
                    {
                        title: '開発プロセスの効率化と品質向上',
                        description: 'DifyとCursorを活用した開発プロセスの効率化と品質向上の具体的な方法を解説。コード生成からテスト、デプロイまでの一連の流れを、AIを活用して最適化する方法を紹介。また、チーム開発におけるAIの活用方法、コードレビューの効率化、ドキュメント管理の自動化など、実務で重要なポイントも詳しく説明。特に、AIを活用した開発フローの標準化と、品質管理の方法について重点的に解説。',
                        icon: '⚡'
                    }
                ],
                practicalTips: [
                    'DifyとCursorの環境構築と初期設定の最適化',
                    'カスタムAIアシスタントの構築と活用方法',
                    'プロンプトエンジニアリングの実践テクニック',
                    'チーム開発におけるAI活用のガイドライン策定',
                    'セキュリティと品質を考慮したAI活用の方法'
                ],
                sessionNotes: [
                    'DifyとCursorの組み合わせにより、開発効率が2-3倍に向上',
                    'AIを活用したコードレビューにより、バグの早期発見が可能',
                    'カスタムAIアシスタントの構築により、チームの生産性が向上',
                    'プロンプトエンジニアリングの重要性と実践方法',
                    'AIを活用した開発フローの標準化と品質管理の方法'
                ]
            },
            'morley_superwhisper': {
                keyPoints: [
                    {
                        title: 'Superwhisperの基本機能と特徴',
                        description: 'Superwhisperの基本機能と特徴について詳しく解説。特に、高精度な音声認識機能と、多言語対応、リアルタイム文字起こしなどの主要機能について、実際の使用例とともに紹介。また、他の音声認識ツールとの比較や、Superwhisperの強みについても説明。',
                        icon: '🎤'
                    },
                    {
                        title: '音声認識AIの実践的な活用法',
                        description: 'Superwhisperを活用した音声認識の実践的な方法を解説。会議の議事録作成、インタビューの文字起こし、動画コンテンツの字幕生成など、具体的なユースケースと活用方法を紹介。特に、ノイズ除去や話者認識、感情分析などの高度な機能の活用方法について詳しく説明。',
                        icon: '🎯'
                    },
                    {
                        title: '議事録作成の効率化と品質向上',
                        description: 'Superwhisperを活用した議事録作成の効率化と品質向上の具体的な方法を解説。音声認識の精度向上のための環境設定、後処理の自動化、テンプレートの活用など、実務で役立つテクニックを紹介。また、チームでの共有方法や、セキュリティ対策など、実務で重要なポイントも詳しく説明。',
                        icon: '📝'
                    }
                ],
                practicalTips: [
                    '最適な音声認識環境の構築方法',
                    'ノイズ除去と音質向上のテクニック',
                    '議事録テンプレートの作成と活用',
                    '自動文字起こしの精度向上方法',
                    'セキュリティを考慮したデータ管理'
                ],
                sessionNotes: [
                    'Superwhisperの高精度な音声認識により、議事録作成の時間を大幅に削減',
                    '多言語対応とリアルタイム文字起こしにより、グローバルな業務環境でも活用可能',
                    'AIを活用した後処理により、議事録の品質と一貫性が向上',
                    'カスタマイズ可能な設定により、様々な業務環境に適応可能',
                    'セキュリティ対策とプライバシー保護が考慮された設計'
                ]
            },
            'veco': {
                keyPoints: [
                    {
                        title: 'v0とthree.jsによる3Dウェブデザイン',
                        description: 'v0とthree.jsを組み合わせた3Dウェブデザインの基本と実践的な手法を解説。特に、軽量で高パフォーマンスな3D表現の実現方法について、具体的なコード例とともに紹介。WebPファイルの活用による画像最適化や、メモリ使用量の削減など、実務で重要なポイントも詳しく説明。',
                        icon: '🎨'
                    },
                    {
                        title: '新時代のウェブデザイントレンド',
                        description: 'AIを活用した新しいウェブデザインのトレンドと可能性について解説。特に、3D表現とAIの組み合わせによる革新的なデザイン手法を紹介。インタラクティブな要素の実装方法や、ユーザー体験の向上につながるデザインパターンについても詳しく説明。',
                        icon: '✨'
                    },
                    {
                        title: '実践的な3Dウェブ制作テクニック',
                        description: 'v0とthree.jsを活用した実践的な3Dウェブ制作のテクニックを解説。特に、パフォーマンスを考慮した最適化手法や、モバイル対応の実装方法について詳しく説明。また、3Dモデルの効率的な管理方法や、アニメーションの実装テクニックなど、実務で役立つ知識も紹介。',
                        icon: '🛠️'
                    }
                ],
                practicalTips: [
                    'WebPファイルを活用した画像最適化',
                    'メモリ使用量を考慮した3D表現の実装',
                    'モバイル対応の3Dウェブデザイン手法',
                    'パフォーマンス最適化のテクニック',
                    'インタラクティブ要素の実装方法'
                ],
                sessionNotes: [
                    'v0とthree.jsの組み合わせにより、軽量で高パフォーマンスな3D表現が可能',
                    'WebPファイルの活用により、画像データを大幅に最適化',
                    'AIを活用したデザイン生成により、クリエイティブな表現が拡張',
                    'モバイル対応の実装により、幅広いデバイスでの表示が可能',
                    'パフォーマンス最適化により、スムーズな3D表現を実現'
                ]
            },
            'sachikawa': {
                keyPoints: [
                    {
                        title: 'ChatGPTでの自己紹介作成',
                        description: 'ChatGPTを活用した効果的な自己紹介の作成方法を解説。目的やシーンに応じた自己紹介の構成や、印象に残る表現の工夫、AIによる文章添削の活用例などを紹介。',
                        icon: '💬'
                    },
                    {
                        title: 'AIによる話し方トレーニング',
                        description: 'AIを活用した話し方のトレーニング方法を解説。音声入力やフィードバック機能を活用し、発声や抑揚、間の取り方など、実践的なコミュニケーションスキル向上のテクニックを紹介。',
                        icon: '🎯'
                    },
                    {
                        title: 'コミュニケーション能力向上',
                        description: 'AIを活用したコミュニケーション能力の向上方法を解説。自己紹介や会話練習を通じて、相手に伝わる話し方や、フィードバックを活かした改善方法を紹介。',
                        icon: '📈'
                    }
                ],
                practicalTips: [
                    '自己紹介の目的を明確にし、構成を工夫する',
                    'AIによる文章添削や音声フィードバックを活用する',
                    '練習を繰り返し、フィードバックをもとに改善する',
                    '話す内容を事前に整理し、簡潔にまとめる',
                    '相手の反応を意識しながら話す'
                ],
                sessionNotes: [
                    'ChatGPTを活用することで、自己紹介の質が向上',
                    'AIによる話し方トレーニングで、実践的なスキルが身につく',
                    'フィードバックを活かした継続的な改善が重要',
                    'コミュニケーション能力の向上は、ビジネスや日常生活で役立つ',
                    'AIツールを活用することで、誰でも手軽にスキルアップが可能'
                ]
            },
            'yugi': {
                keyPoints: [
                    {
                        title: 'AIとスキルの融合',
                        description: 'AIとクリエイティブスキルを組み合わせた新しい表現手法を解説。動画制作におけるAI活用の基本と、実際の制作現場での応用例を紹介。',
                        icon: '🎬'
                    },
                    {
                        title: '動画制作におけるAI活用',
                        description: '動画制作の各工程におけるAIの活用方法を解説。シナリオ作成、編集、字幕生成など、AIによる効率化の具体的なテクニックを紹介。',
                        icon: '🎥'
                    },
                    {
                        title: '新しいクリエイティブ表現',
                        description: 'AIを活用した新しいクリエイティブ表現の可能性を解説。実践的な制作手法や、AIによるアイデア発想・表現拡張の事例を紹介。',
                        icon: '✨'
                    }
                ],
                practicalTips: [
                    'AI動画制作ツールの活用方法を学ぶ',
                    'シナリオ作成や編集工程でAIを活用する',
                    '字幕やナレーション生成にAIを利用する',
                    'AIによるアイデア発想を積極的に取り入れる',
                    '効率的な制作フローを構築し、反復的に改善する'
                ],
                sessionNotes: [
                    'AIとスキルの融合で新しい動画表現が可能に',
                    'AI活用により制作工程の効率化と品質向上が実現',
                    'クリエイティブな発想をAIで拡張できる',
                    'AIツールの進化により、個人でも高品質な動画制作が可能',
                    '反復的な改善と学習が、より良い作品づくりにつながる'
                ]
            },
            'takuya': {
                keyPoints: [
                    {
                        title: 'AIゲーム開発の基礎',
                        description: 'AIを活用したゲーム開発の基本概念と実践的な手法を解説。効率的な開発フローと実装テクニックを紹介。',
                        icon: '🎮'
                    },
                    {
                        title: 'AIによるゲーム制作効率化',
                        description: 'AIツールを活用したゲーム制作の効率化手法を解説。アセット生成から実装までのワークフローを紹介。',
                        icon: '⚡'
                    },
                    {
                        title: '実践的なAI活用事例',
                        description: '実際のゲーム開発におけるAI活用事例を解説。具体的な実装方法と効果的な活用テクニックを紹介。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    'AIゲーム開発環境の構築',
                    '効率的なアセット生成手法',
                    '実装におけるAI活用テクニック'
                ]
            },
            'yuki': {
                keyPoints: [
                    {
                        title: 'AI時代のデザイン思考',
                        description: 'AIを活用した新しいデザイン思考の手法を解説。クリエイティブな問題解決アプローチと実践的な手法を紹介。',
                        icon: '🎨'
                    },
                    {
                        title: 'AIツールの効果的な活用',
                        description: 'デザインにおけるAIツールの効果的な活用方法を解説。ワークフローの効率化と創造性の向上テクニックを紹介。',
                        icon: '🤖'
                    },
                    {
                        title: 'デザインの未来展望',
                        description: 'AI時代におけるデザインの未来展望を解説。新しい表現手法と実践的な活用事例を紹介。',
                        icon: '🚀'
                    }
                ],
                practicalTips: [
                    'AIデザインツールの活用',
                    '効率的なデザインワークフロー',
                    '創造性を高めるAI活用'
                ]
            },
            'taku': {
                keyPoints: [
                    {
                        title: 'AIエージェント開発の基礎',
                        description: 'AIエージェント開発の基本概念と実践的な手法を解説。効率的な開発フローと実装テクニックを紹介。',
                        icon: '🤖'
                    },
                    {
                        title: '実用的なエージェント設計',
                        description: '実用的なAIエージェントの設計手法を解説。目的に応じた機能実装と効果的な活用方法を紹介。',
                        icon: '⚙️'
                    },
                    {
                        title: 'エージェント開発の実践',
                        description: '実際のAIエージェント開発における実践的な手法を解説。具体的な実装例と効果的な活用テクニックを紹介。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    'AIエージェント開発環境の構築',
                    '効率的なエージェント設計手法',
                    '実装におけるベストプラクティス'
                ]
            },
            'yusuke': {
                keyPoints: [
                    {
                        title: 'マルチメディア戦略の基礎',
                        description: 'AIを活用したマルチメディア戦略の基本概念と実践的な手法を解説。効果的なコンテンツ制作と配信手法を紹介。',
                        icon: '📱'
                    },
                    {
                        title: 'AIによるコンテンツ制作',
                        description: 'AIを活用した効率的なコンテンツ制作手法を解説。マルチメディアコンテンツの制作フローと実践的なテクニックを紹介。',
                        icon: '🎥'
                    },
                    {
                        title: '戦略的な配信手法',
                        description: '効果的なマルチメディアコンテンツの配信手法を解説。ターゲットに応じた最適な配信戦略と実践的な活用方法を紹介。',
                        icon: '📊'
                    }
                ],
                practicalTips: [
                    'AIコンテンツ制作ツールの活用',
                    '効率的な制作フローの構築',
                    '効果的な配信戦略の立案'
                ]
            },
            'yoshiki': {
                keyPoints: [
                    {
                        title: 'AI時代のデザイン革新',
                        description: 'AIを活用した新しいデザイン手法と革新的な表現方法を解説。クリエイティブな問題解決アプローチを紹介。',
                        icon: '🎨'
                    },
                    {
                        title: 'デザインワークフローの最適化',
                        description: 'AIを活用したデザインワークフローの最適化手法を解説。効率的な制作プロセスと実践的なテクニックを紹介。',
                        icon: '⚡'
                    },
                    {
                        title: '未来のデザイン展望',
                        description: 'AI時代におけるデザインの未来展望と新しい可能性を解説。革新的な表現手法と実践的な活用事例を紹介。',
                        icon: '🚀'
                    }
                ],
                practicalTips: [
                    'AIデザインツールの効果的な活用',
                    '効率的なワークフローの構築',
                    '革新的な表現手法の実践'
                ]
            },
            'yoshiko': {
                keyPoints: [
                    {
                        title: 'AIを活用した業務効率化の実践',
                        description: 'AIを活用した業務効率化の具体的な実践方法を解説。特に、日常業務でのAI活用事例や、効率化のための具体的なステップについて詳しく説明。また、AIツールの選定基準や、導入時の注意点など、実務で重要なポイントも紹介。',
                        icon: '⚡'
                    },
                    {
                        title: 'AIツールの効果的な活用方法',
                        description: '様々なAIツールの特徴と効果的な活用方法について解説。特に、業務プロセスにAIを組み込む際の具体的な手法や、ツール間の連携方法について詳しく説明。また、AIツールの選定基準や、導入時の注意点など、実務で重要なポイントも紹介。',
                        icon: '🛠️'
                    },
                    {
                        title: 'AI導入による業務改革',
                        description: 'AI導入による業務改革の具体的な事例と成功のポイントを解説。特に、組織的なAI導入の進め方や、社内でのAI活用の普及方法について詳しく説明。また、AI導入による業務プロセスの変革や、新しい価値創造の可能性についても紹介。',
                        icon: '🚀'
                    }
                ],
                practicalTips: [
                    'AIツールの選定と導入の進め方',
                    '業務プロセスへのAIの組み込み方',
                    '社内でのAI活用の普及方法',
                    'AI導入による業務改革の具体例',
                    'AI活用の効果測定と改善方法'
                ],
                sessionNotes: [
                    'AIを活用することで、日常業務の効率が大幅に向上',
                    '適切なAIツールの選定が、業務効率化の鍵',
                    '組織的なAI導入により、業務プロセスが革新',
                    'AI活用の普及により、新しい価値創造が可能',
                    '効果測定と改善を継続することで、AI活用の効果を最大化'
                ]
            },
            'yoshiko2': {
                keyPoints: [
                    {
                        title: 'AIを活用した業務効率化の具体例',
                        description: 'AIを活用した業務効率化の具体的な事例を詳しく解説。特に、日常業務でのAI活用事例や、効率化のための具体的なステップについて詳しく説明。また、AIツールの選定基準や、導入時の注意点など、実務で重要なポイントも紹介。',
                        icon: '📊'
                    },
                    {
                        title: 'AIツールの実践的な活用テクニック',
                        description: '様々なAIツールの実践的な活用テクニックについて解説。特に、業務プロセスにAIを組み込む際の具体的な手法や、ツール間の連携方法について詳しく説明。また、AIツールの効果的な使い方や、トラブルシューティングの方法など、実務で役立つ知識も紹介。',
                        icon: '💡'
                    },
                    {
                        title: 'AI活用による業務改革の成功事例',
                        description: 'AI活用による業務改革の具体的な成功事例を紹介。特に、組織的なAI導入の進め方や、社内でのAI活用の普及方法について詳しく説明。また、AI導入による業務プロセスの変革や、新しい価値創造の可能性についても紹介。',
                        icon: '🎯'
                    }
                ],
                practicalTips: [
                    'AIツールの効果的な使い方',
                    '業務プロセスへのAIの組み込み方',
                    'AI活用のトラブルシューティング',
                    'AI導入の成功事例の分析',
                    'AI活用の効果測定と改善方法'
                ],
                sessionNotes: [
                    'AIを活用することで、日常業務の効率が大幅に向上',
                    '適切なAIツールの使い方が、業務効率化の鍵',
                    'AI活用のトラブル対応により、安定した運用が可能',
                    '成功事例の分析により、効果的なAI導入が実現',
                    '効果測定と改善を継続することで、AI活用の効果を最大化'
                ]
            },
            'rikuo': {
                keyPoints: [
                    {
                        title: 'DreamCoreによるゲーム開発',
                        description: 'DreamCoreを活用したAI×ゲーム開発の新しいアプローチを解説。ノーコードでのゲーム制作や、AIによるアセット生成・自動化の実例を紹介。',
                        icon: '🎮'
                    },
                    {
                        title: 'AIとゲーム制作の融合',
                        description: 'AI技術を取り入れたゲーム制作の最新トレンドや、AIによるストーリー生成・キャラクター制御など、実践的な活用方法を紹介。',
                        icon: '🤖'
                    },
                    {
                        title: 'クリエイターエコノミー',
                        description: 'AIとノーコードツールの普及による、誰もがクリエイターになれる時代の到来と、その可能性・新しいビジネスモデルについて解説。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    'DreamCoreのノーコード機能を活用して素早くプロトタイプを作成',
                    'AIによるアセット自動生成で制作コストを削減',
                    'ストーリーやキャラクター制御にAIを活用',
                    'コミュニティやSNSを活用して作品を広める',
                    '継続的なアップデートとユーザーの声を反映する'
                ],
                sessionNotes: [
                    'AIとノーコードの融合で、誰もがゲームクリエイターになれる時代',
                    'DreamCoreの活用で、開発のハードルが大幅に低下',
                    'AIによる自動化で、制作効率と表現力が向上',
                    'クリエイターエコノミーの拡大により、新しいビジネスチャンスが生まれる',
                    'ユーザーとの対話を重視した開発が、成功の鍵となる'
                ]
            },
            'hayashi': {
                keyPoints: [
                    {
                        title: '効果的なプロンプト設計法',
                        description: 'AIに的確な指示を出すためのプロンプト設計の基本と応用を解説。ビジネス課題に合わせたプロンプトの作り方や、実践的な改善テクニックを紹介。',
                        icon: '📝'
                    },
                    {
                        title: 'ビジネス課題解決への応用',
                        description: 'AIプロンプトを活用したビジネス課題解決の具体例を紹介。業務効率化や意思決定支援、顧客対応の自動化など、実務で役立つ応用方法を解説。',
                        icon: '💼'
                    },
                    {
                        title: 'AI活用のための思考法',
                        description: 'AIを最大限に活用するための思考法やマインドセットを解説。失敗しないプロンプト設計のコツや、継続的な改善の重要性についても紹介。',
                        icon: '🧠'
                    }
                ],
                practicalTips: [
                    '目的に応じてプロンプトを具体的に設計する',
                    'AIの出力を検証し、改善を繰り返す',
                    '業務フローにAIを組み込む際は小さく始めて効果を測定',
                    '失敗例から学び、プロンプトをブラッシュアップする',
                    'チームでプロンプト設計の知見を共有する'
                ],
                sessionNotes: [
                    'プロンプト設計がAI活用の成否を左右する',
                    'ビジネス課題に合わせたプロンプト設計が重要',
                    '継続的な改善と検証が成果につながる',
                    'AI活用には柔軟な思考と失敗を恐れない姿勢が必要',
                    'チームでの知見共有が全体のレベルアップにつながる'
                ]
            },
            'yoshinami': {
                keyPoints: [
                    {
                        title: 'MastraによるAIエージェント開発の基本',
                        description: 'Mastraを使ったAIエージェント開発の基本から応用まで、実際のコード例とともに解説。特に、環境構築からAPI設定、エージェントの設計・実装、テスト・デプロイまでの一連の流れを、初心者でも理解できるように詳しく説明。また、Mastraの特徴的な機能や、他のAIツールとの連携方法についても紹介。',
                        icon: '🤖'
                    },
                    {
                        title: '初心者向けシステム構築の実践技法',
                        description: 'プログラミング経験が少ない人でも実践できる、Mastraを使ったシステム構築の具体的な手法を解説。特に、テンプレートの活用方法、カスタマイズのポイント、エラーハンドリングの実装など、実務で重要な要素を詳しく説明。また、実際の業務課題を解決するための具体的な実装例も紹介。',
                        icon: '⚙️'
                    },
                    {
                        title: 'AIエージェントの実践的な活用ノウハウ',
                        description: 'Mastraで構築したAIエージェントを実際の業務で活用するための具体的なノウハウを解説。特に、エージェントの性能最適化、ユーザー体験の向上、セキュリティ対策など、実務で重要なポイントを詳しく説明。また、継続的な改善やメンテナンスの方法についても紹介。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    'Mastraのテンプレートを活用して開発を効率化する',
                    'APIキーの管理とセキュリティ設定を徹底する',
                    'エラーハンドリングとログ管理を適切に実装する',
                    'ユーザーフィードバックを活かした継続的な改善を行う',
                    'コミュニティやドキュメントを活用して最新情報をキャッチアップする'
                ],
                sessionNotes: [
                    'Mastraの活用でAIエージェント開発のハードルが大幅に低下',
                    'テンプレートとカスタマイズの組み合わせで効率的な開発が可能',
                    '適切なエラーハンドリングとログ管理が安定運用の鍵',
                    'ユーザーフィードバックを活かした継続的な改善が重要',
                    'コミュニティやドキュメントの活用で最新ノウハウをキャッチアップ'
                ]
            },
            'akirapapa': {
                keyPoints: [
                    {
                        title: 'DevinとCursorの連携による業務効率化',
                        description: 'DevinとCursorを組み合わせた業務効率化の具体的な手法を解説。特に、コード生成・補完、デバッグ、リファクタリングなど、開発効率を大幅に向上させる機能の活用方法を、実際のコード例とともに詳しく説明。また、両ツールの特徴を活かした連携方法や、カスタマイズのポイントについても紹介。',
                        icon: '⚡'
                    },
                    {
                        title: '現場目線でのAI業務改善の実践',
                        description: '実際の業務現場でDevinとCursorを活用する際の具体的な事例とノウハウを解説。特に、既存コードの理解・改善、新機能の実装、バグ修正など、日常的な開発タスクでの活用方法を詳しく説明。また、チーム開発での活用方法や、コードレビューの効率化についても紹介。',
                        icon: '🏭'
                    },
                    {
                        title: 'AIツールを活用した開発効率の最大化',
                        description: 'DevinやCursorなどのAIツールを最大限に活用するための具体的なテクニックを解説。特に、プロンプトの最適化、ショートカットの活用、カスタム設定の方法など、開発効率を高めるための実践的なノウハウを詳しく説明。また、ツールの制限事項や、効果的な代替手段についても紹介。',
                        icon: '🛠️'
                    }
                ],
                practicalTips: [
                    'DevinとCursorのショートカットを覚えて操作を効率化する',
                    'プロンプトの書き方を工夫してAIの出力精度を高める',
                    'コードレビューをAIと組み合わせて品質と効率を両立する',
                    'チーム内でAIツールの活用ノウハウを共有・標準化する',
                    '定期的にツールのアップデートを確認し新機能を活用する'
                ],
                sessionNotes: [
                    'DevinとCursorの連携で開発効率が2-3倍に向上',
                    'AIを活用したコードレビューにより品質と効率が両立',
                    'チーム内でのノウハウ共有が生産性向上の鍵',
                    'プロンプトの最適化でAIの出力精度が大幅に改善',
                    '継続的な学習と改善でAIツールの活用効果を最大化'
                ]
            },
            'kawai': {
                keyPoints: [
                    {
                        title: 'AI時代のコミュニケーション設計',
                        description: 'AI時代に求められるコミュニケーションの本質と、効果的な伝え方の設計手法を解説。特に、情報の構造化、ビジュアル表現の活用、相手の理解度に応じた説明方法など、実践的なコミュニケーション技術を詳しく説明。また、AIツールを活用した情報整理や表現の工夫についても紹介。',
                        icon: '🗣️'
                    },
                    {
                        title: 'デザイン思考を活用した情報伝達',
                        description: 'デザイン思考の手法を活用した、分かりやすく効果的な情報伝達の具体的な方法を解説。特に、ユーザー中心の設計、プロトタイピング、フィードバックの活用など、実務で重要な要素を詳しく説明。また、AIを活用した情報の可視化や、効果的なプレゼンテーション手法についても紹介。',
                        icon: '🎨'
                    },
                    {
                        title: 'AIツールを活用した表現力の拡張',
                        description: 'AIツールを活用して情報伝達の表現力を高める具体的な手法を解説。特に、画像生成AI、テキスト生成AI、音声合成AIなど、様々なAIツールの特徴と活用方法を詳しく説明。また、AIツールの出力を効果的に組み合わせる方法や、品質管理のポイントについても紹介。',
                        icon: '💡'
                    }
                ],
                practicalTips: [
                    '伝えたい内容を明確にし、論理的に構造化する',
                    'ビジュアルや図解を活用して直感的な理解を促進する',
                    '相手の立場や理解度を意識して伝え方を調整する',
                    'AIツールを活用して情報の表現力を高める',
                    'フィードバックをもとに継続的に改善を重ねる'
                ],
                sessionNotes: [
                    'AI時代のコミュニケーションは「伝え方」の設計が重要',
                    'デザイン思考の活用で情報伝達の質が向上',
                    'ビジュアルや図解の効果的な活用が理解促進の鍵',
                    'AIツールの適切な活用で表現力が大幅に拡張',
                    '継続的な改善とフィードバックの活用が成功のカギ'
                ]
            },
            'kinoshita': {
                keyPoints: [
                    {
                        title: 'ユニコーン企業のAI戦略と成長DNA',
                        description: '世界最大級ユニコーン企業のAI戦略と、成長を支えるDXの最前線を解説。特に、AIを活用したビジネスモデルの革新、組織的なAI導入の進め方、データドリブンな意思決定の実現方法など、実践的なノウハウを詳しく説明。また、Larkを活用した業務改革の具体例についても紹介。',
                        icon: '🦄'
                    },
                    {
                        title: 'Larkと生成AIによる業務革新',
                        description: '次世代DXツール「Lark」と生成AIを組み合わせた業務革新の具体的な手法を解説。特に、Larkの特徴的な機能、生成AIとの連携方法、業務フローの最適化など、実務で重要なポイントを詳しく説明。また、チームでの活用方法や、効果測定の方法についても紹介。',
                        icon: '🤖'
                    },
                    {
                        title: 'AI×DXによるビジネス変革',
                        description: 'AIとDXを活用したビジネス変革の具体的な進め方を解説。特に、経営層と現場の連携、段階的な導入方法、組織文化の変革など、実践的なノウハウを詳しく説明。また、成功事例の分析や、失敗を防ぐためのポイントについても紹介。',
                        icon: '💼'
                    }
                ],
                practicalTips: [
                    'AI戦略を経営層と現場で共有し、共通のビジョンを描く',
                    'Larkや生成AIの新機能を積極的に試し、効果を検証する',
                    '小さな成功体験を積み重ね、組織的な変革を進める',
                    '現場の声を反映したツール導入と改善を継続する',
                    '定期的な効果測定と改善サイクルを回す'
                ],
                sessionNotes: [
                    'ユニコーン企業のAI戦略は成長の原動力',
                    'Larkと生成AIの連携で業務効率が大幅向上',
                    '経営層と現場の連携がDX推進の成功の鍵',
                    '小さな成功体験の積み重ねが全体最適につながる',
                    '継続的な改善と学びがビジネスの成長を支える'
                ]
            },
            'keito': {
                keyPoints: [
                    {
                        title: 'AIを活用したマルチメディア戦略の構築',
                        description: 'AIを活用した効率的なマルチメディアコンテンツ制作の具体的な手法を解説。特に、テキスト、画像、動画、音声など、様々なメディアでのAI活用方法を詳しく説明。また、コンテンツの一貫性維持や、品質管理の方法についても紹介。',
                        icon: '🎯'
                    },
                    {
                        title: '超速アウトプットの実現テクニック',
                        description: 'AIを活用して高速かつ高品質なコンテンツ制作を実現する具体的なテクニックを解説。特に、プロンプトの最適化、ワークフローの効率化、自動化のポイントなど、実務で重要な要素を詳しく説明。また、AIツールの組み合わせ方や、品質と速度のバランスについても紹介。',
                        icon: '⚡'
                    },
                    {
                        title: 'AI時代のコンテンツ制作ワークフロー',
                        description: 'AIを活用した効率的なコンテンツ制作のワークフローを解説。特に、企画から公開までの各工程でのAI活用方法、チーム制作での役割分担、品質管理の方法など、実践的なノウハウを詳しく説明。また、AIツールの進化に合わせた継続的な改善方法についても紹介。',
                        icon: '🔄'
                    }
                ],
                practicalTips: [
                    'AIツールの特徴を理解し、目的に応じて使い分ける',
                    'プロンプトの最適化で出力品質と速度を両立する',
                    '効率的なワークフローを構築し、自動化を進める',
                    'コンテンツの一貫性を保ちながら、多様な表現を実現する',
                    '定期的な改善と学びでAI活用の効果を最大化する'
                ],
                sessionNotes: [
                    'AI活用でマルチメディアコンテンツ制作が大幅に効率化',
                    'プロンプトの最適化が品質と速度の両立の鍵',
                    '効率的なワークフローの構築が生産性向上に寄与',
                    'AIツールの適切な組み合わせで表現力が拡張',
                    '継続的な改善と学びがコンテンツの質を高める'
                ]
            },
            'momo': {
                keyPoints: [
                    {
                        title: 'Recraft×Midjourney×Figmaによるデザイン革新',
                        description: 'Recraft、Midjourney、Figmaを組み合わせた革新的なデザイン手法を解説。特に、各ツールの特徴を活かした連携方法、効率的なワークフロー、品質管理のポイントなど、実践的なノウハウを詳しく説明。また、AIを活用したデザインの可能性と限界についても紹介。',
                        icon: '🎨'
                    },
                    {
                        title: 'AI時代のデザイン創造性の拡張',
                        description: 'AIツールを活用してデザインの創造性を拡張する具体的な手法を解説。特に、AIによるアイデア生成、デザインの自動化、表現力の向上など、実務で重要な要素を詳しく説明。また、AIと人間のクリエイティビティの融合方法についても紹介。',
                        icon: '✨'
                    },
                    {
                        title: 'AIツールを活用したデザインワークフロー',
                        description: 'AIツールを活用した効率的なデザインワークフローを解説。特に、企画から完成までの各工程でのAI活用方法、チーム制作での役割分担、品質管理の方法など、実践的なノウハウを詳しく説明。また、AIツールの進化に合わせた継続的な改善方法についても紹介。',
                        icon: '🔄'
                    }
                ],
                practicalTips: [
                    '各AIツールの特徴を理解し、目的に応じて使い分ける',
                    '効率的なワークフローを構築し、自動化を進める',
                    'AIの出力をブラッシュアップして品質を高める',
                    'チーム内でAI活用のノウハウを共有・標準化する',
                    '定期的に新機能を試し、表現の幅を広げる'
                ],
                sessionNotes: [
                    'AIツールの活用でデザインの効率と表現力が大幅に向上',
                    'ツールの特徴を活かした連携が創造性の拡張につながる',
                    '効率的なワークフローの構築が生産性向上の鍵',
                    'AIと人間のクリエイティビティの融合が新しい表現を生む',
                    '継続的な改善と学びがデザインの質を高める'
                ]
            }
        };

        const details = sessionDetails[speakerId] || {
            keyPoints: session.keyPoints.map((point, index) => ({
            title: `ポイント ${index + 1}`,
                description: point,
                icon: '💡'
            })),
            practicalTips: [],
            sessionNotes: []
        };

        // 動画URL生成
        let video_url = '';
        if (sessionVideoBaseUrl[speakerId] && typeof sessionVideoStartSeconds[speakerId] === 'number') {
            video_url = `${sessionVideoBaseUrl[speakerId]}?start=${sessionVideoStartSeconds[speakerId]}`;
        } else {
            video_url = session.youtubeLink?.replace('watch?v=', 'embed/') || '';
        }

        return {
            name: session.speakerName,
            social_handle: session.speakerSocial,
            social_url: session.socialUrl,
            image_url: session.avatar,
            session_title: session.sessionTitle,
            session_description: session.keyPoints.join(' '),
            key_points: details.keyPoints,
            practical_tips: details.practicalTips,
            session_notes: details.sessionNotes,
            video_url,
        };
    }
    
    function openSpeakerModal(speakerId) {
        const speakerData = getSpeakerData(speakerId);

        if (speakerData) {
            speakerModalContent.innerHTML = `
                <div class="modal-title-fixed">
                    <h1 class="session-detail-title">${speakerData.session_title}</h1>
                    </div>
                <div class="modal-2col-layout">
                    <div class="modal-2col-left">
                        <div class="key-concept">
                            <h3 class="key-concept-title">セッション概要</h3>
                            <p>${speakerData.session_description}</p>
                        </div>
                        <div class="speaker-profile">
                            <img src="${speakerData.image_url}" alt="${speakerData.name}" class="speaker-profile-mainimg">
                            <h2 class="speaker-profile-name">${speakerData.name}</h2>
                            <a href="${speakerData.social_url}" target="_blank" class="speaker-profile-social">${speakerData.social_handle}</a>
                        </div>
                    </div>
                    <div class="modal-2col-right">
                        <div class="graphic-recording">
                            <h3 class="gr-title">グラフィックレコーディング</h3>
                            <div class="gr-content">
                                ${speakerData.key_points.map((point, index) => `
                                    <div class="gr-point">
                                        <div class="gr-point-icon">${point.icon}</div>
                                        <div class="gr-point-number">${index + 1}</div>
                                        <h4 class="gr-point-title">${point.title}</h4>
                                        <p class="gr-point-description">${point.description}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        ${speakerData.practical_tips.length > 0 ? `
                            <div class="practical-tips">
                                <h3 class="practical-tips-title">実践的なポイント</h3>
                                <ul class="practical-tips-list">
                                    ${speakerData.practical_tips.map(tip => `
                                        <li class="practical-tip">${tip}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        ${speakerData.session_notes.length > 0 ? `
                            <div class="session-notes">
                                <h3 class="session-notes-title">セッションノート</h3>
                                <ul class="session-notes-list">
                                    ${speakerData.session_notes.map(note => `
                                        <li class="session-note">${note}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        <div class="session-video">
                            <h3 class="session-video-title">セッション動画</h3>
                            <div class="session-video-container">
                                <iframe src="${speakerData.video_url}" title="${speakerData.name}のセッション" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            speakerModal.classList.add('active');
        }
    }

    const toolsData = {
        superwhisper: {
            name: 'Superwhisper',
            icon: '🔊',
            description: '高精度音声認識AI。議事録作成や文字起こしを効率化。',
            categories: ['音声認識', '生産性向上'],
            features: ['高精度文字起こし', '話者分離', '多言語対応', 'リアルタイム変換'],
            website: 'https://superwhisper.com/?via=moorii', // アフィリエイト
            usage: [
                '会議やインタビューの音声を自動でテキスト化',
                '議事録作成や動画字幕生成に活用',
                'ノイズ除去や話者分離で精度向上'
            ],
            tips: [
                '静かな環境で録音すると認識精度が上がる',
                '話者ごとに区切ると後処理が楽',
                'テンプレートを活用して議事録を自動整形'
            ],
            grPoints: [
                { icon: '🎤', title: '高精度な音声認識', desc: 'AIによる高精度な文字起こしで議事録作成が劇的に効率化' },
                { icon: '🗣️', title: '話者分離・多言語対応', desc: '複数人の会話や多言語にも対応し、グローバルな現場でも活躍' },
                { icon: '⚡', title: 'リアルタイム変換', desc: '録音しながら即時にテキスト化。会議後すぐに内容を共有可能' }
            ]
        },
        raycast: {
            name: 'Raycast',
            icon: '⚡',
            description: 'Mac用ランチャーアプリ。ショートカットで作業効率爆上げ。',
            categories: ['生産性向上', 'Mac専用'],
            features: ['高速アプリ起動', '拡張機能豊富', 'カスタムコマンド', 'チーム共有'],
            website: 'https://raycast.com/?via=moorii', // アフィリエイト
            usage: [
                'アプリやファイルを一瞬で検索・起動',
                'カレンダーやTodo、計算など日常業務を高速化',
                '自作コマンドや拡張機能で自分専用の作業環境を構築'
            ],
            tips: [
                'よく使う機能はショートカット登録',
                '拡張機能を積極的に追加',
                'チームで設定を共有して標準化'
            ],
            grPoints: [
                { icon: '🔍', title: '一瞬で検索・起動', desc: 'Spotlightより速い！アプリ・ファイル・Web検索も一括' },
                { icon: '🧩', title: '拡張機能で無限に広がる', desc: 'カレンダー・Todo・AI連携など、用途に合わせて機能追加' },
                { icon: '🤝', title: 'チームで共有', desc: '設定やコマンドをチームで共有し、全員の生産性を底上げ' }
            ]
        },
        perplexity: {
            name: 'Perplexity',
            icon: '🧠',
            description: 'AI検索・リサーチ特化型チャット。最新情報も即座に取得。',
            categories: ['AI検索', 'リサーチ'],
            features: ['Web検索', '要約', '出典付き回答', 'プロプランで高精度'],
            website: 'https://perplexity.ai/pro?referral_code=V4TNHCUA', // アフィリエイト
            usage: [
                '調べ物やリサーチをAIに丸投げ',
                '出典付きで信頼性の高い情報収集',
                '要約や比較も一瞬で'
            ],
            tips: [
                '具体的な質問をすると精度UP',
                '出典リンクで情報の裏取り',
                'プロプランでさらに高精度な回答'
            ],
            grPoints: [
                { icon: '🔗', title: '出典付きAI検索', desc: 'AIがWebを横断検索し、信頼できる情報を即座に要約' },
                { icon: '⚡', title: '高速リサーチ', desc: '複雑な調査も一瞬で完了。比較や要約も得意' },
                { icon: '📚', title: '最新情報もキャッチ', desc: 'Web連携で最新のニュースや論文も取得可能' }
            ]
        },
        felo: {
            name: 'Felo',
            icon: '🗣️',
            description: 'AI英会話・スピーキング練習アプリ。',
            categories: ['英語学習', 'AI会話'],
            features: ['AI英会話', '発音チェック', '多様なシナリオ'],
            website: 'https://felo.ai/?invite=rRKxp8vdvWLlv', // アフィリエイト
            usage: [
                'AIと24時間英会話練習',
                '発音や表現のフィードバック',
                '実践的なシナリオでロールプレイ'
            ],
            tips: [
                '毎日短時間でも継続が上達のコツ',
                '録音機能で自分の発音を客観視',
                '苦手なシーンを繰り返し練習'
            ],
            grPoints: [
                { icon: '🗣️', title: 'AIと英会話', desc: 'ネイティブAIと24時間いつでも練習' },
                { icon: '🔄', title: '発音フィードバック', desc: '自分の発音をAIが即時評価・アドバイス' },
                { icon: '🎭', title: '多様なシナリオ', desc: '旅行・ビジネス・日常会話など実践的な練習' }
            ]
        },
        lark: {
            name: 'Lark',
            icon: '🦄',
            description: '次世代DXツール。チャット・ドキュメント・カレンダー・AIが一体化。',
            categories: ['DX', 'コラボレーション'],
            features: ['チャット', 'ドキュメント', 'AIアシスタント', 'ワークフロー自動化'],
            website: 'http://larkdx.com', // アフィリエイト
            usage: [
                'チームの情報共有・コラボレーション',
                'AIアシスタントで業務効率化',
                'ワークフロー自動化で手間削減'
            ],
            tips: [
                'AIアシスタントを活用して定型作業を自動化',
                'ドキュメント・カレンダー・チャットを一元管理',
                'ワークフロー機能で承認や申請も自動化'
            ],
            grPoints: [
                { icon: '💬', title: 'オールインワン', desc: 'チャット・ドキュメント・カレンダー・AIが一体化' },
                { icon: '🤖', title: 'AIアシスタント', desc: '日常業務をAIがサポート。自動化も簡単' },
                { icon: '🔄', title: 'ワークフロー自動化', desc: '申請・承認・通知などを自動化し、手間を大幅削減' }
            ]
        },
        gas: {
            name: 'GAS (Google Apps Script)',
            icon: '📝',
            description: 'Googleのサービスを自動化・効率化するスクリプトツール。ノーコードから高度な開発まで対応。',
            categories: ['自動化', '業務効率化'],
            features: ['スプレッドシート連携', 'メール自動化', 'カレンダー管理', 'フォーム処理'],
            website: 'https://www.google.com/script/start/',
            usage: [
                'スプレッドシートのデータ処理と自動化',
                'Gmailの自動返信やメール処理',
                'カレンダーの予定管理と通知',
                'Googleフォームの回答処理'
            ],
            tips: [
                'まずは小さな自動化から始めて成功体験を積む',
                'スプレッドシートの関数と組み合わせて機能を拡張',
                'トリガーを活用して定期実行を設定',
                'エラーハンドリングを適切に実装する'
            ],
            grPoints: [
                { icon: '⚡', title: 'Googleサービスと連携', desc: 'スプレッドシート・Gmail・カレンダーなどとシームレスに連携' },
                { icon: '🤖', title: '自動化の実現', desc: '定期的な処理やデータ更新を自動化し、業務効率を大幅向上' },
                { icon: '💡', title: 'カスタマイズ可能', desc: 'JavaScriptベースで、目的に応じて柔軟に機能を拡張可能' }
            ]
        },
        dify: {
            name: 'Dify',
            icon: '🤖',
            description: 'AIアプリケーション開発プラットフォーム。カスタムAIアシスタントを簡単に構築・運用。',
            categories: ['AI開発', 'アプリケーション'],
            features: ['プロンプト管理', 'API生成', 'チャットインターフェース', 'データ分析'],
            website: 'https://dify.ai/',
            usage: [
                'カスタムAIアシスタントの構築',
                'プロンプトの管理と最適化',
                'AIアプリケーションのAPI開発',
                'チャットボットの実装'
            ],
            tips: [
                'プロンプトの段階的な改善で精度を向上',
                'APIを活用して既存システムと連携',
                'ユーザーフィードバックを収集して改善',
                'セキュリティ設定を適切に管理'
            ],
            grPoints: [
                { icon: '🎯', title: '簡単AI開発', desc: 'ノーコードでカスタムAIアシスタントを構築可能' },
                { icon: '🔄', title: '継続的改善', desc: 'プロンプト管理とフィードバックで精度を向上' },
                { icon: '🔌', title: '柔軟な連携', desc: 'APIで既存システムとシームレスに連携' }
            ]
        },
        cursor: {
            name: 'Cursor',
            icon: '💻',
            description: 'AIを活用した次世代コードエディタ。コード生成・補完・リファクタリングを強力にサポート。',
            categories: ['開発ツール', 'AI活用'],
            features: ['AIコード生成', 'インテリジェント補完', 'リファクタリング', 'デバッグ支援'],
            website: 'https://cursor.sh/',
            usage: [
                'AIを活用したコード生成と補完',
                'コードのリファクタリングと最適化',
                'デバッグとエラー修正の支援',
                'チーム開発でのコードレビュー'
            ],
            tips: [
                'プロンプトを具体的に書いて精度を向上',
                'ショートカットを活用して効率的に操作',
                'AIの提案を適切に評価して採用',
                '定期的にアップデートを確認'
            ],
            grPoints: [
                { icon: '⚡', title: 'AIコード生成', desc: '自然言語からコードを生成し、開発効率を大幅向上' },
                { icon: '🔍', title: 'インテリジェント補完', desc: '文脈を理解した高度なコード補完機能' },
                { icon: '🔄', title: 'リファクタリング', desc: 'AIによるコード最適化と品質向上' }
            ]
        },
        v0: {
            name: 'v0',
            icon: '🌐',
            description: '次世代の3Dウェブデザインツール。軽量で高パフォーマンスな3D表現を実現。',
            categories: ['3Dデザイン', 'ウェブ開発'],
            features: ['3Dモデリング', 'アニメーション', 'パフォーマンス最適化', 'モバイル対応'],
            website: 'https://v0.dev/',
            usage: [
                'インタラクティブな3Dウェブサイト制作',
                'パフォーマンスを考慮した3D表現',
                'モバイル対応の3Dコンテンツ開発',
                'アニメーションとエフェクトの実装'
            ],
            tips: [
                'パフォーマンスを考慮した最適化',
                'モバイル対応を意識した実装',
                'アニメーションは控えめに使用',
                'WebPなどの最適化された画像形式を活用'
            ],
            grPoints: [
                { icon: '🎨', title: '軽量3D表現', desc: '高パフォーマンスな3D表現で魅力的なウェブサイトを実現' },
                { icon: '📱', title: 'モバイル対応', desc: '様々なデバイスで最適な表示を実現' },
                { icon: '⚡', title: 'パフォーマンス', desc: '軽量で高速な3D表現を実現' }
            ]
        },
        dreamcore: {
            name: 'DreamCore',
            icon: '🎮',
            description: 'AIを活用したゲーム開発プラットフォーム。ノーコードでゲーム制作が可能。',
            categories: ['ゲーム開発', 'AI活用'],
            features: ['ノーコード開発', 'AIアセット生成', 'マルチプラットフォーム', 'コミュニティ機能'],
            website: 'https://dreamcore.ai/',
            usage: [
                'AIを活用したゲームアセット生成',
                'ノーコードでのゲーム制作',
                'コミュニティとの協業',
                'マルチプラットフォーム展開'
            ],
            tips: [
                'AIアセット生成を活用して制作効率を向上',
                'コミュニティの知見を積極的に活用',
                '段階的に機能を追加して改善',
                'ユーザーフィードバックを収集して反映'
            ],
            grPoints: [
                { icon: '🎮', title: 'ノーコード開発', desc: 'プログラミング知識なしでゲーム制作が可能' },
                { icon: '🤖', title: 'AIアセット生成', desc: 'AIによる効率的なゲームアセット生成' },
                { icon: '🌐', title: 'コミュニティ', desc: 'クリエイター同士の協業と知見共有' }
            ]
        },
        mastra: {
            name: 'Mastra',
            icon: '🧠',
            description: 'AIエージェント開発プラットフォーム。カスタムAIエージェントを簡単に構築・運用。',
            categories: ['AI開発', 'エージェント'],
            features: ['エージェント構築', 'API連携', 'カスタマイズ', 'モニタリング'],
            website: 'https://mastra.ai/',
            usage: [
                'カスタムAIエージェントの開発',
                '業務自動化の実現',
                'APIとの連携による機能拡張',
                'エージェントの運用と改善'
            ],
            tips: [
                '目的を明確にしたエージェント設計',
                '段階的な機能追加と改善',
                'API連携で機能を拡張',
                '継続的なモニタリングと改善'
            ],
            grPoints: [
                { icon: '🤖', title: '簡単エージェント開発', desc: 'ノーコードでカスタムAIエージェントを構築' },
                { icon: '🔄', title: '柔軟な拡張', desc: 'API連携で機能を自由に拡張可能' },
                { icon: '📊', title: '運用管理', desc: 'エージェントの動作をモニタリングして改善' }
            ]
        },
        devin: {
            name: 'Devin',
            icon: '🔍',
            description: 'AIを活用したコード開発アシスタント。コード生成・レビュー・最適化をサポート。',
            categories: ['開発ツール', 'AI活用'],
            features: ['コード生成', 'コードレビュー', '最適化提案', 'デバッグ支援'],
            website: 'https://devin.ai/',
            usage: [
                'AIを活用したコード生成',
                'コードレビューと品質改善',
                'パフォーマンス最適化',
                'デバッグとエラー修正'
            ],
            tips: [
                '具体的な要件を明確に伝える',
                '生成されたコードを適切にレビュー',
                '段階的な改善を繰り返す',
                'セキュリティを考慮した実装'
            ],
            grPoints: [
                { icon: '⚡', title: 'AIコード生成', desc: '自然言語から高品質なコードを生成' },
                { icon: '🔍', title: 'コードレビュー', desc: 'AIによるコード品質の改善提案' },
                { icon: '🔄', title: '最適化', desc: 'パフォーマンスと品質の両立を実現' }
            ]
        },
        midjourney: {
            name: 'Midjourney',
            icon: '🖼️',
            description: '高品質な画像生成AI。クリエイティブな表現を実現する画像生成ツール。',
            categories: ['画像生成', 'AIクリエイティブ'],
            features: ['高品質画像生成', 'スタイル制御', 'バリエーション生成', 'コミュニティ機能'],
            website: 'https://www.midjourney.com/',
            usage: [
                'クリエイティブな画像生成',
                'アートワークの制作',
                'デザイン素材の作成',
                'アイデアの可視化'
            ],
            tips: [
                'プロンプトを具体的に記述',
                'スタイル指定を活用',
                'バリエーションを生成して選択',
                'コミュニティの知見を参考に'
            ],
            grPoints: [
                { icon: '🎨', title: '高品質生成', desc: '芸術的な表現力を持つ高品質な画像を生成' },
                { icon: '🔄', title: 'スタイル制御', desc: '様々なスタイルや表現を実現可能' },
                { icon: '🤝', title: 'コミュニティ', desc: 'クリエイター同士の知見共有と学び' }
            ]
        },
        recraft: {
            name: 'Recraft',
            icon: '🎨',
            description: 'AIを活用したデザインツール。画像生成と編集を統合したクリエイティブプラットフォーム。',
            categories: ['デザイン', 'AIクリエイティブ'],
            features: ['AI画像生成', '画像編集', 'スタイル転換', 'バッチ処理'],
            website: 'https://recraft.ai/',
            usage: [
                'AIを活用した画像生成',
                '画像の編集と加工',
                'スタイルの転換と適用',
                '一括処理による効率化'
            ],
            tips: [
                '目的に応じたスタイル選択',
                '編集履歴を活用した改善',
                'バッチ処理で効率化',
                'AIの特性を理解して活用'
            ],
            grPoints: [
                { icon: '🎨', title: 'AIデザイン', desc: 'AIを活用した効率的なデザイン制作' },
                { icon: '🔄', title: '編集機能', desc: '生成した画像を柔軟に編集可能' },
                { icon: '⚡', title: '効率化', desc: 'バッチ処理で大量の画像を効率的に処理' }
            ]
        },
        figma: {
            name: 'Figma',
            icon: '📊',
            description: 'クラウドベースのデザインツール。チームでの協業とプロトタイピングを実現。',
            categories: ['デザイン', 'プロトタイピング'],
            features: ['リアルタイム協業', 'プロトタイピング', 'コンポーネント', 'プラグイン'],
            website: 'https://www.figma.com/',
            usage: [
                'UIデザインの制作',
                'プロトタイプの作成',
                'チームでの協業',
                'デザインシステムの構築'
            ],
            tips: [
                'コンポーネントを活用して効率化',
                'プラグインで機能を拡張',
                'バージョン管理を適切に活用',
                'チームでの共有ルールを設定'
            ],
            grPoints: [
                { icon: '👥', title: 'リアルタイム協業', desc: 'チームで同時に編集可能なクラウドベースのデザインツール' },
                { icon: '🎯', title: 'プロトタイピング', desc: 'インタラクティブなプロトタイプを簡単に作成' },
                { icon: '🧩', title: '拡張性', desc: '豊富なプラグインで機能を自由に拡張' }
            ]
        },
        chatgpt: {
            name: 'ChatGPT',
            icon: '💬',
            description: 'OpenAIが開発した高度な言語モデル。自然な対話と創造的な文章生成が可能。',
            categories: ['AI対話', '文章生成'],
            features: ['自然な対話', '文章生成', 'コード生成', '翻訳'],
            website: 'https://chat.openai.com/',
            usage: [
                'アイデア出しとブレインストーミング',
                '文章作成と編集',
                'コードの生成と説明',
                '翻訳と言語学習'
            ],
            tips: [
                '具体的な指示を心がける',
                '文脈を考慮した対話を維持',
                '生成結果を適切に評価',
                '継続的な改善を意識'
            ],
            grPoints: [
                { icon: '💡', title: '創造的対話', desc: '自然な対話を通じて創造的なアイデアを引き出す' },
                { icon: '📝', title: '文章生成', desc: '様々な形式の文章を高品質に生成' },
                { icon: '🔄', title: '継続的改善', desc: '対話を通じて回答の質を向上' }
            ]
        }
    };
    
    function openToolModal(toolId) {
        const toolData = toolsData[toolId] || {
            name: toolId,
            icon: '❓',
            description: '詳細情報準備中です。',
            categories: ['その他'],
            features: ['情報準備中'],
            usage: ['情報準備中'],
            tips: ['情報準備中'],
            grPoints: [],
            website: '#'
        };

        toolModalContent.innerHTML = `
            <div class="tool-detail">
                <div class="tool-detail-header">
                    <div class="tool-detail-icon">${toolData.icon}</div>
                    <h2 class="tool-detail-name">${toolData.name}</h2>
                    <div class="tool-categories">
                        ${toolData.categories.map(category => `<span class="tool-category">${category}</span>`).join('')}
                    </div>
                </div>
                <div class="tool-detail-tabs">
                    <button class="tool-tab active" data-tab="about">できること</button>
                    <button class="tool-tab" data-tab="usage">使い方</button>
                    <button class="tool-tab" data-tab="tips">コツ・TIPS</button>
                    <button class="tool-tab" data-tab="gr">グラレコ</button>
                </div>
                <div class="tool-tab-content tool-tab-about active">
                    <div class="tool-detail-description">
                        <p>${toolData.description}</p>
                    </div>
                    <div class="tool-features">
                        <h3 class="tool-feature-title">主な特徴</h3>
                        <ul class="tool-feature-list">
                            ${toolData.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                <div class="tool-tab-content tool-tab-usage">
                    <h3>主な使い方</h3>
                    <ul class="tool-usage-list">
                        ${toolData.usage.map(u => `<li>${u}</li>`).join('')}
                    </ul>
                </div>
                <div class="tool-tab-content tool-tab-tips">
                    <h3>使いこなしのコツ・TIPS</h3>
                    <ul class="tool-tips-list">
                        ${toolData.tips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
                <div class="tool-tab-content tool-tab-gr">
                    <h3>グラフィックレコーディング風まとめ</h3>
                    <div class="tool-gr-points">
                        ${toolData.grPoints && toolData.grPoints.length > 0 ? toolData.grPoints.map((pt, i) => `
                            <div class="tool-gr-point">
                                <div class="tool-gr-icon">${pt.icon}</div>
                                <div class="tool-gr-title">${pt.title}</div>
                                <div class="tool-gr-desc">${pt.desc}</div>
                            </div>
                        `).join('') : '<div>情報準備中</div>'}
                    </div>
                </div>
                ${toolData.website ? `<a href="${toolData.website}" target="_blank" class="tool-link">公式サイトを開く</a>` : ''}
            </div>
        `;
        toolModal.classList.add('active');

        // タブ切り替え
        const tabButtons = toolModalContent.querySelectorAll('.tool-tab');
        const tabContents = toolModalContent.querySelectorAll('.tool-tab-content');
        tabButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                toolModalContent.querySelector(`.tool-tab-${this.dataset.tab}`).classList.add('active');
            });
        });
    }

    // ツールグリッドの初期化
    const initialToolsGrid = document.querySelector('.tools-section .tools-grid');
    Object.keys(toolsData).forEach(toolId => {
        const tool = toolsData[toolId];
        const toolItemDiv = document.createElement('div');
        toolItemDiv.className = 'tool-item';
        toolItemDiv.setAttribute('data-tool-id', toolId);
        toolItemDiv.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
        `;
        initialToolsGrid.appendChild(toolItemDiv);
        toolItemDiv.addEventListener('click', () => openToolModal(toolId));
    });

    // タイムテーブルの順序を定義 (必要に応じてscript.js内またはHTMLから読み込む)
    const timetableOrder = [
        'keitaro', 'bunkai', 'morley_superwhisper', 'veco', 'sachikawa', 'yugi', 'rikuo', 'hayashi', 'taiyo',
        'yoshinami', 'akirapapa', 'morley_raycast', 'kawai', 'tonochi', 'kinoshita', 'keito', 'fujita', 'momo',
        'takuya', 'yuki', 'taku', 'yusuke', 'yoshiki'
    ];

    // Day 1 と Day 2 のセッションカードをタイムテーブル順に並び替える
    // function sortSessionCardsByDay(dayId, daySessionsData) { ... }
    // sortSessionCardsByDay('day1', day1SessionsData);
    // sortSessionCardsByDay('day2', day2SessionsData);

});