// ==========================================
// SearchStack - Core Application Logic
// ==========================================

// 初期モックデータ (Value Proposition Canvasの検証用)
const initialTabs = [
    // スタックグループ 1: CSS グラスモルフィズム
    {
        id: 1,
        title: "CSS Glassmorphism Generator - Glassmorphism UI",
        url: "https://glassmorphism.com",
        query: "css グラスモルフィズム ジェネレーター",
        category: "デザイン",
        summary: "グラスモルフィズム（ガラス風デザイン）のCSSコードをブラウザ上で視覚的に調整しながら自動生成できるツール。半透明の背景ぼかし(backdrop-filter)に最適。",
        date: "2026-05-25T16:45:00Z",
        domain: "glassmorphism.com",
        rating: 4,
        isTrusted: false,
        stackKey: "glassmorphism"
    },
    {
        id: 2,
        title: "How to create Glassmorphism effect in CSS (backdrop-filter)",
        url: "https://css-tricks.com/almanac/properties/b/backdrop-filter/",
        query: "グラスモルフィズム css 導入",
        category: "デザイン",
        summary: "CSS Tricksによるbackdrop-filterプロパティの完全ガイド。ブラウザ間の互換性、パフォーマンスの注意点、フォールバックの書き方を詳しく解説している信頼性の高い記事。",
        date: "2026-05-25T15:20:00Z",
        domain: "css-tricks.com",
        rating: 5,
        isTrusted: true,
        stackKey: "glassmorphism"
    },
    {
        id: 3,
        title: "Tailwind CSS Glassmorphism - Components & Examples",
        url: "https://tailwindcss.com/docs/backdrop-blur",
        query: "tailwind css グラスモルフィズム",
        category: "デザイン",
        summary: "Tailwind CSS公式ドキュメント。`bg-white/30`や`backdrop-blur-md`など、ユーティリティクラスを使って素早くグラスモルフィズムを実装する方法を解説。",
        date: "2026-05-25T14:10:00Z",
        domain: "tailwindcss.com",
        rating: 5,
        isTrusted: true,
        stackKey: "glassmorphism"
    },

    // スタックグループ 2: Pythonの非同期処理 (asyncio)
    {
        id: 4,
        title: "asyncio — Asynchronous I/O — Python 3.12.3 documentation",
        url: "https://docs.python.org/3/library/asyncio.html",
        query: "python asyncio 使い方",
        category: "プログラミング",
        summary: "Python公式ドキュメント。async/await構文を使用した並行処理、イベントループの制御、タスクの実行方法について記述された最重要・最正確リファレンス。",
        date: "2026-05-24T11:05:00Z",
        domain: "docs.python.org",
        rating: 5,
        isTrusted: true,
        stackKey: "python-async"
    },
    {
        id: 5,
        title: "Pythonのasync/awaitと非同期並行処理を理解する",
        url: "https://qiita.com/shunsuke/items/async-await",
        query: "python 非同期処理 わかりやすく",
        category: "プログラミング",
        summary: "Qiitaの解説記事。同期処理と非同期処理の違いを、図解とシンプルなコード例で初心者にわかりやすく解説している。概念理解に最適。",
        date: "2026-05-24T09:30:00Z",
        domain: "qiita.com",
        rating: 4,
        isTrusted: false,
        stackKey: "python-async"
    },
    {
        id: 6,
        title: "Python Asyncio basics for beginners",
        url: "https://realpython.com/async-io-python/",
        query: "python asyncio tutorial",
        category: "プログラミング",
        summary: "Real Pythonのチュートリアル。シングルスレッドでの協調的マルチタスクの仕組みから、実際のAPI通信を非同期化する実践的なスクリプトまでを網羅した詳細記事。",
        date: "2026-05-23T18:15:00Z",
        domain: "realpython.com",
        rating: 5,
        isTrusted: true,
        stackKey: "python-async"
    },

    // スタックグループ 3: React 19 のアップデート
    {
        id: 7,
        title: "React 19 RC - New Features & Updates",
        url: "https://react.dev/blog/2024/04/25/react-19",
        query: "react 19 新機能",
        category: "プログラミング",
        summary: "React公式ブログ。React 19で導入されるActions API、useActionState、useOptimistic、およびReact Server Components等の新機能に関する公式発表。",
        date: "2026-05-25T10:00:00Z",
        domain: "react.dev",
        rating: 5,
        isTrusted: true,
        stackKey: "react19"
    },
    {
        id: 8,
        title: "React 18 vs React 19: What's Changing?",
        url: "https://dev.to/react-community/react-18-vs-react-19",
        query: "react 19 変更点",
        category: "プログラミング",
        summary: "Dev.toの記事。React 18からReact 19への移行に伴う破壊的変更点や、新しいフックの使い方、非同期処理のスマートなハンドリングを比較したまとめ記事。",
        date: "2026-05-25T08:50:00Z",
        domain: "dev.to",
        rating: 4,
        isTrusted: false,
        stackKey: "react19"
    },

    // 単体のカード
    {
        id: 9,
        title: "京都 2泊3日 モデルコース - 初心者でも無駄なく回れる観光プラン",
        url: "https://travel-guide.co.jp/kyoto-3days",
        query: "京都 旅行 2泊3日 モデルコース",
        category: "旅行・情報",
        summary: "清水寺、金閣寺、嵐山などの定番スポットを効率よく巡る2泊3日のルート。時間配分、おすすめの移動手段（バス・地下鉄）、ランチ情報も網羅。",
        date: "2026-05-22T14:20:00Z",
        domain: "travel-guide.co.jp",
        rating: 3,
        isTrusted: false,
        stackKey: "kyoto-travel"
    },
    {
        id: 10,
        title: "絶品ハンバーグの黄金比レシピ - 肉汁溢れる作り方",
        url: "https://recipe-kitchen.net/hamburg-gold-ratio",
        query: "ハンバーグ レシピ プロ 黄金比",
        category: "その他",
        summary: "合い挽き肉（牛7:豚3）の黄金比率と、タマネギの炒め方、肉汁を閉じ込める焼き方のコツをプロのシェフが紹介。ソースの作り方も付属。",
        date: "2026-05-21T19:00:00Z",
        domain: "recipe-kitchen.net",
        rating: 4,
        isTrusted: false,
        stackKey: "hamburg-recipe"
    }
];

// アプリケーションの状態管理
let tabs = [...initialTabs];
let activeCategory = 'all';
let activeView = 'board'; // 'board' または 'timeline'
let searchQuery = '';
let autoStack = true;
let expandedStacks = new Set(); // 展開されたスタックキー(stackKey)を保存

// DOMの初期化
document.addEventListener("DOMContentLoaded", () => {
    // Lucideアイコンのレンダリング
    lucide.createIcons();

    // UI初期描画
    initCategories();
    render();

    // イベントリスナーの登録
    setupEventListeners();
});

// カテゴリ sidebar の初期化
function initCategories() {
    const categoryList = document.getElementById("category-list");
    
    // 既存の「すべて」以外の動的カテゴリを削除
    const items = categoryList.querySelectorAll(".category-item:not([data-category='all'])");
    items.forEach(el => el.remove());

    // ユニークなカテゴリを取得
    const categories = [...new Set(tabs.map(tab => tab.category))];
    
    categories.forEach(cat => {
        const count = tabs.filter(tab => tab.category === cat).length;
        const li = document.createElement("li");
        li.className = "category-item";
        li.setAttribute("data-category", cat);
        
        // カテゴリ名に応じたアイコンを割り振る
        let iconName = "folder";
        if (cat === "プログラミング") iconName = "code-2";
        else if (cat === "デザイン") iconName = "palette";
        else if (cat === "AI・機械学習") iconName = "cpu";
        else if (cat === "旅行・情報") iconName = "compass";
        else if (cat === "その他") iconName = "more-horizontal";

        li.innerHTML = `
            <i data-lucide="${iconName}"></i>
            <span class="category-name">${cat}</span>
            <span class="category-count" id="count-${cat}">${count}</span>
        `;
        categoryList.appendChild(li);
    });

    // 「すべて」の件数を更新
    document.getElementById("count-all").textContent = tabs.length;

    // カテゴリクリックイベントを再設定
    const catItems = categoryList.querySelectorAll(".category-item");
    catItems.forEach(item => {
        item.addEventListener("click", () => {
            catItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
            activeCategory = item.getAttribute("data-category");
            
            // ジャンルタイトルの更新
            const titleEl = document.getElementById("current-genre-title");
            if (activeCategory === "all") {
                titleEl.textContent = "すべての検索結果";
            } else {
                titleEl.textContent = `${activeCategory} の検索結果`;
            }

            render();
        });
    });

    lucide.createIcons();
}

// 統計情報の更新
function updateStats() {
    document.getElementById("stat-total-tabs").textContent = tabs.length;
    
    // 現在の表示条件におけるスタック数を計算
    const filtered = filterTabs();
    let stackCount = 0;
    if (autoStack) {
        const groups = {};
        filtered.forEach(tab => {
            if (tab.stackKey) {
                groups[tab.stackKey] = (groups[tab.stackKey] || 0) + 1;
            }
        });
        Object.values(groups).forEach(count => {
            if (count > 1) stackCount++;
        });
    }
    document.getElementById("stat-stacked-groups").textContent = stackCount;
}

// データのフィルタリング (検索 & カテゴリ)
function filterTabs() {
    return tabs.filter(tab => {
        // カテゴリフィルタ
        const matchCategory = activeCategory === 'all' || tab.category === activeCategory;
        
        // 検索フィルタ
        const queryLower = searchQuery.toLowerCase();
        const matchSearch = searchQuery === '' || 
            tab.title.toLowerCase().includes(queryLower) ||
            tab.url.toLowerCase().includes(queryLower) ||
            tab.summary.toLowerCase().includes(queryLower) ||
            tab.query.toLowerCase().includes(queryLower);
            
        return matchCategory && matchSearch;
    });
}

// メインの描画制御
function render() {
    updateStats();
    updateSuggestions();

    if (activeView === 'board') {
        document.getElementById("board-view").style.display = "block";
        document.getElementById("timeline-view").style.display = "none";
        renderBoard();
    } else {
        document.getElementById("board-view").style.display = "none";
        document.getElementById("timeline-view").style.display = "block";
        renderTimeline();
    }
}

// ボードビューの描画 (3Dスタック機能)
function renderBoard() {
    const tabGrid = document.getElementById("tab-grid");
    tabGrid.innerHTML = "";

    const filtered = filterTabs();
    document.getElementById("visible-tabs-count").textContent = `${filtered.length} 件`;

    if (filtered.length === 0) {
        tabGrid.innerHTML = `
            <div class="empty-state-sm" style="grid-column: 1/-1; padding: 60px 20px;">
                <i data-lucide="search-code" style="width: 48px; height: 48px; margin-bottom: 16px;"></i>
                <h4>検索結果が見つかりません</h4>
                <p>別のキーワードを入力するか、フィルターをリセットしてください。</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    if (!autoStack) {
        // 重ねない場合 (すべてフラットに表示)
        filtered.forEach(tab => {
            const cardHtml = createCardElement(tab);
            tabGrid.appendChild(cardHtml);
        });
    } else {
        // 重ねる場合 (スタック化)
        // 1. スタックキーごとにグループ化
        const grouped = {};
        const unstacked = [];

        filtered.forEach(tab => {
            if (tab.stackKey) {
                if (!grouped[tab.stackKey]) grouped[tab.stackKey] = [];
                grouped[tab.stackKey].push(tab);
            } else {
                unstacked.push(tab);
            }
        });

        // 2. HTML生成
        // まずグループから処理
        Object.keys(grouped).forEach(key => {
            const groupTabs = grouped[key];
            if (groupTabs.length > 1) {
                // 2つ以上あるのでスタックにする
                const isExpanded = expandedStacks.has(key);
                const stackWrapper = document.createElement("div");
                stackWrapper.className = `tab-stack ${isExpanded ? 'expanded' : 'collapsed'}`;
                stackWrapper.setAttribute("data-stack-key", key);

                // 何枚重なっているかのバッジ (collapsed時のみ)
                if (!isExpanded) {
                    const badge = document.createElement("span");
                    badge.className = "stack-count-badge";
                    badge.textContent = `${groupTabs.length} 重ね`;
                    stackWrapper.appendChild(badge);
                }

                // 日付順(最新が一番上)にソートして配置
                groupTabs.sort((a, b) => new Date(b.date) - new Date(a.date));

                groupTabs.forEach((tab, index) => {
                    const card = createCardElement(tab);
                    // 畳まれている時は、一番上のカードをクリックしたらスタックが展開されるようにする
                    if (!isExpanded) {
                        card.addEventListener("click", (e) => {
                            e.stopPropagation(); // 詳細モーダル起動を防ぐ
                            expandedStacks.add(key);
                            render();
                        });
                    } else {
                        // 展開時は個別にクリックして詳細表示
                        card.addEventListener("click", () => {
                            showDetailModal(tab);
                        });
                    }
                    stackWrapper.appendChild(card);
                });

                // 展開されたスタックの外枠クリックで折りたたむ
                if (isExpanded) {
                    stackWrapper.addEventListener("click", (e) => {
                        // カード自体のクリックでなければ折りたたむ
                        if (e.target === stackWrapper || e.target.classList.contains("tab-stack")) {
                            expandedStacks.delete(key);
                            render();
                        }
                    });
                }

                tabGrid.appendChild(stackWrapper);
            } else if (groupTabs.length === 1) {
                // 1枚だけならフラットカード
                unstacked.push(groupTabs[0]);
            }
        });

        // 単体のカードを追加
        unstacked.forEach(tab => {
            const card = createCardElement(tab);
            card.addEventListener("click", () => {
                showDetailModal(tab);
            });
            tabGrid.appendChild(card);
        });
    }

    lucide.createIcons();
}

// カードDOM要素の生成
function createCardElement(tab) {
    const card = document.createElement("div");
    card.className = "tab-card";
    card.setAttribute("data-tab-id", tab.id);

    // ドメインと星評価
    let ratingStars = "";
    for (let i = 0; i < tab.rating; i++) {
        ratingStars += `<i data-lucide="star"></i>`;
    }

    const isTrustedBadge = tab.isTrusted 
        ? `<span class="card-domain-badge"><i data-lucide="shield-check" style="width: 10px; height: 10px; stroke-width: 3px;"></i>${tab.domain}</span>`
        : `<span class="card-domain-badge" style="color: var(--text-secondary); background: rgba(255,255,255,0.04);">${tab.domain}</span>`;

    // 相対時間またはフォーマット時間
    const dateFormatted = formatDate(tab.date);

    card.innerHTML = `
        <div class="card-header">
            ${isTrustedBadge}
            <span class="card-genre-badge">${tab.category}</span>
        </div>
        <h4 class="card-title">${tab.title}</h4>
        <p class="card-summary">${tab.summary}</p>
        <div class="card-footer">
            <span class="card-query" title="検索ワード: ${tab.query}">
                <i data-lucide="search"></i>
                <span>${tab.query || "直接入力"}</span>
            </span>
            <div class="card-rating">
                ${ratingStars}
            </div>
            <span class="card-date">${dateFormatted}</span>
        </div>
    `;

    return card;
}

// タイムラインビューの描画 (さかのぼり作業の可視化)
function renderTimeline() {
    const timelineList = document.getElementById("timeline-list");
    timelineList.innerHTML = "";

    const filtered = filterTabs();
    document.getElementById("timeline-tabs-count").textContent = `${filtered.length} 件`;

    if (filtered.length === 0) {
        timelineList.innerHTML = `
            <div class="empty-state-sm" style="padding: 60px 20px;">
                <i data-lucide="calendar" style="width: 48px; height: 48px; margin-bottom: 16px;"></i>
                <h4>履歴が見つかりません</h4>
                <p>選択中のカテゴリまたは検索キーワードに一致する履歴はありません。</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    // 日付順にソート
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 日付ごとにグループ化
    const datesGroup = {};
    filtered.forEach(tab => {
        const dateKey = tab.date.substring(0, 10); // YYYY-MM-DD
        if (!datesGroup[dateKey]) datesGroup[dateKey] = [];
        datesGroup[dateKey].push(tab);
    });

    Object.keys(datesGroup).forEach(dateKey => {
        const groupTabs = datesGroup[dateKey];
        const groupWrapper = document.createElement("div");
        groupWrapper.className = "timeline-group";

        const labelDate = new Date(dateKey);
        const dayLabel = `${labelDate.getMonth() + 1}月${labelDate.getDate()}日`;
        
        groupWrapper.innerHTML = `
            <div class="timeline-date-label">${dayLabel}</div>
            <div class="timeline-node"></div>
            <div class="timeline-items"></div>
        `;

        const itemsContainer = groupWrapper.querySelector(".timeline-items");

        groupTabs.forEach(tab => {
            const timeStr = tab.date.substring(11, 16); // HH:MM
            const item = document.createElement("div");
            item.className = "timeline-item";
            item.innerHTML = `
                <div class="timeline-time">${timeStr}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${tab.title}</div>
                    <div class="timeline-summary">${tab.summary}</div>
                    <div class="timeline-meta">
                        <span>ジャンル: ${tab.category}</span>
                        <span>ドメイン: ${tab.domain}</span>
                        <span>検索ワード: "${tab.query || "直接入力"}"</span>
                    </div>
                </div>
            `;
            item.addEventListener("click", () => {
                showDetailModal(tab);
            });
            itemsContainer.appendChild(item);
        });

        timelineList.appendChild(groupWrapper);
    });

    lucide.createIcons();
}

// 動的提案 (AI suggestions & 重複検出)
function updateSuggestions() {
    const trustedContainer = document.getElementById("trusted-suggestion-container");
    const stackRecommendationContainer = document.getElementById("stack-recommendation-container");

    const filtered = filterTabs();

    // 1. 信頼性の高い公式情報の提案
    // 検索語がある、またはアクティブカテゴリがある場合
    const searchActive = searchQuery.trim() !== "";
    
    // 信頼性が高い過去情報 (isTrusted: true) を探す
    let matchingTrusted = [];
    if (searchActive) {
        const queryLower = searchQuery.toLowerCase();
        matchingTrusted = tabs.filter(tab => 
            tab.isTrusted && 
            (tab.title.toLowerCase().includes(queryLower) || 
             tab.query.toLowerCase().includes(queryLower) || 
             tab.summary.toLowerCase().includes(queryLower))
        );
    } else if (activeCategory !== 'all') {
        matchingTrusted = tabs.filter(tab => tab.isTrusted && tab.category === activeCategory);
    } else {
        // デフォルトは全公式情報から最新のいくつか
        matchingTrusted = tabs.filter(tab => tab.isTrusted);
    }

    if (matchingTrusted.length > 0) {
        // 重複を除外して上位2件を表示
        const uniqueTrusted = matchingTrusted.slice(0, 2);
        
        trustedContainer.innerHTML = "";
        uniqueTrusted.forEach(tab => {
            const item = document.createElement("div");
            item.className = "suggestion-item";
            item.innerHTML = `
                <div class="suggestion-item-title">${tab.title}</div>
                <div class="suggestion-item-meta">
                    <span style="color: var(--color-success); font-weight: 600;">
                        <i data-lucide="shield-check" style="width: 10px; height: 10px; display: inline; vertical-align: middle; margin-right: 2px;"></i>公式/高信頼
                    </span>
                    <span>★ ${tab.rating}.0</span>
                </div>
            `;
            item.addEventListener("click", () => {
                showDetailModal(tab);
            });
            trustedContainer.appendChild(item);
        });
    } else {
        trustedContainer.innerHTML = `
            <div class="empty-state-sm">
                <i data-lucide="search"></i>
                <p>関連する高信頼ドキュメントはまだ見つかりません。</p>
            </div>
        `;
    }

    // 2. スタック推奨 (自動スタックがオフの時、または未整理の類似タブがある時)
    const similarMap = {};
    tabs.forEach(tab => {
        if (tab.stackKey) {
            if (!similarMap[tab.stackKey]) similarMap[tab.stackKey] = [];
            similarMap[tab.stackKey].push(tab);
        }
    });

    // 2枚以上あるスタックキーのうち、現在展開されているか、またはautoStack自体がオフのものを検出し提案
    let recommendedKey = null;
    let recommendedTabs = [];
    
    for (const [key, val] of Object.entries(similarMap)) {
        if (val.length > 1) {
            if (!autoStack || expandedStacks.has(key)) {
                recommendedKey = key;
                recommendedTabs = val;
                break;
            }
        }
    }

    if (recommendedKey && recommendedTabs.length > 1) {
        const stackName = recommendedKey === "glassmorphism" ? "CSS グラスモルフィズム" : 
                            recommendedKey === "python-async" ? "Python 非同期処理(asyncio)" : 
                            recommendedKey === "react19" ? "React 19 アップデート" : "関連する検索結果";

        stackRecommendationContainer.innerHTML = `
            <div class="stack-proposal">
                <div class="proposal-subject">「${stackName}」</div>
                <div class="proposal-detail">
                    類似する ${recommendedTabs.length} つのタブが開かれています。重ねてスッキリ整理しますか？
                </div>
                <button class="btn btn-primary btn-sm" id="btn-apply-stack">
                    今すぐ重ねて整理する
                </button>
            </div>
        `;
        
        document.getElementById("btn-apply-stack").addEventListener("click", () => {
            // 自動スタックを有効にする
            autoStack = true;
            document.getElementById("auto-stack-toggle").checked = true;
            // 展開状態を解除
            expandedStacks.delete(recommendedKey);
            
            // アニメーション効果をシミュレートして再描画
            render();
        });
    } else {
        stackRecommendationContainer.innerHTML = `
            <div class="empty-state-sm">
                <i data-lucide="check-circle-2" style="stroke: var(--color-success);"></i>
                <p>すべての類似タブが綺麗にスタック整理されています。</p>
            </div>
        `;
    }

    lucide.createIcons();
}

// 詳細モーダル表示
function showDetailModal(tab) {
    const modal = document.getElementById("tab-detail-modal");
    const content = document.getElementById("modal-content");

    let ratingStars = "";
    for (let i = 0; i < 5; i++) {
        const fill = i < tab.rating ? "#eab308" : "transparent";
        const stroke = i < tab.rating ? "#eab308" : "var(--text-muted)";
        ratingStars += `<i data-lucide="star" style="fill: ${fill}; stroke: ${stroke}; width: 14px; height: 14px;"></i>`;
    }

    const formattedDate = new Date(tab.date).toLocaleString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    content.innerHTML = `
        <div class="modal-detail-header">
            <div class="modal-detail-meta">
                <span class="card-domain-badge">${tab.domain}</span>
                <span class="card-genre-badge">${tab.category}</span>
            </div>
            <h3 class="modal-detail-title">${tab.title}</h3>
        </div>
        
        <div class="modal-detail-summary-box">
            <div class="modal-detail-summary-title">
                <i data-lucide="sparkles" style="width: 12px; height: 12px; display:inline; vertical-align: middle; margin-right: 4px; stroke: var(--color-secondary);"></i>
                ひと目でわかる概要 (AI要約)
            </div>
            <div class="modal-detail-summary-text">${tab.summary}</div>
        </div>

        <div class="modal-detail-info-grid">
            <div class="info-grid-item">
                <div class="info-grid-lbl">検索時のキーワード</div>
                <div class="info-grid-val">"${tab.query || "直接入力"}"</div>
            </div>
            <div class="info-grid-item">
                <div class="info-grid-lbl">保存日時</div>
                <div class="info-grid-val">${formattedDate}</div>
            </div>
            <div class="info-grid-item">
                <div class="info-grid-lbl">情報の信頼性評価</div>
                <div class="card-rating" style="margin-top: 4px;">
                    ${ratingStars}
                </div>
            </div>
            <div class="info-grid-item">
                <div class="info-grid-lbl">スタックステータス</div>
                <div class="info-grid-val" style="color: ${tab.stackKey ? 'var(--color-primary)' : 'var(--text-muted)'}; font-weight: 600;">
                    ${tab.stackKey ? '自動スタック対応' : '単一タブ'}
                </div>
            </div>
        </div>

        <div class="modal-detail-actions">
            <a href="${tab.url}" target="_blank" class="modal-url-link">
                <span>実際のブラウザで開く</span>
                <i data-lucide="external-link"></i>
            </a>
            <button class="btn btn-secondary btn-sm" id="btn-delete-tab" style="color: var(--color-danger); border-color: rgba(239,68,68,0.2);">
                <i data-lucide="trash-2" style="width: 14px; height: 14px;"></i>
                <span>このタブを削除</span>
            </button>
        </div>
    `;

    // 削除ボタンのイベント
    document.getElementById("btn-delete-tab").addEventListener("click", () => {
        if (confirm("この保存済みタブを削除しますか？")) {
            tabs = tabs.filter(t => t.id !== tab.id);
            closeModal();
            initCategories();
            render();
        }
    });

    modal.classList.add("open");
    lucide.createIcons();
}

function closeModal() {
    const modal = document.getElementById("tab-detail-modal");
    modal.classList.remove("open");
}

// イベントリスナー設定
function setupEventListeners() {
    // 表示切替
    const btnBoard = document.getElementById("btn-board-view");
    const btnTimeline = document.getElementById("btn-timeline-view");

    btnBoard.addEventListener("click", () => {
        btnBoard.classList.add("active");
        btnTimeline.classList.remove("active");
        activeView = 'board';
        render();
    });

    btnTimeline.addEventListener("click", () => {
        btnTimeline.classList.add("active");
        btnBoard.classList.remove("active");
        activeView = 'timeline';
        render();
    });

    // 検索入力
    const searchInput = document.getElementById("search-input");
    const clearSearchBtn = document.getElementById("clear-search");

    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        if (searchQuery.trim() !== "") {
            clearSearchBtn.style.display = "flex";
        } else {
            clearSearchBtn.style.display = "none";
        }
        render();
    });

    clearSearchBtn.addEventListener("click", () => {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        render();
    });

    // 自動スタック切替
    const stackToggle = document.getElementById("auto-stack-toggle");
    stackToggle.addEventListener("change", (e) => {
        autoStack = e.target.checked;
        if (!autoStack) {
            expandedStacks.clear();
        }
        render();
    });

    // モーダル閉じる
    document.getElementById("btn-close-modal").addEventListener("click", closeModal);
    document.getElementById("tab-detail-modal").addEventListener("click", (e) => {
        if (e.target.id === "tab-detail-modal") {
            closeModal();
        }
    });

    // 新規タブ登録フォームのトグル
    const addSection = document.getElementById("add-tab-section");
    const btnToggleForm = document.getElementById("btn-toggle-add-form");
    const btnCancelAdd = document.getElementById("btn-cancel-add");

    btnToggleForm.addEventListener("click", () => {
        addSection.classList.toggle("open");
        if (addSection.classList.contains("open")) {
            document.getElementById("input-title").focus();
        }
    });

    btnCancelAdd.addEventListener("click", () => {
        addSection.classList.remove("open");
        document.getElementById("add-tab-form").reset();
    });

    // タブ追加サブミット
    const addForm = document.getElementById("add-tab-form");
    addForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("input-title").value;
        const url = document.getElementById("input-url").value;
        const query = document.getElementById("input-query").value;
        const summary = document.getElementById("input-summary").value;
        let category = document.getElementById("input-category").value;

        // ドメインの自動抽出
        let domain = "unknown.com";
        try {
            const urlObj = new URL(url);
            domain = urlObj.hostname.replace("www.", "");
        } catch(err) {
            domain = "direct-input";
        }

        // カテゴリの自動判定 (AIシミュレーション)
        if (!category) {
            category = autoDetermineCategory(title + " " + summary + " " + query);
        }

        // スタックキーの自動判定 (類似タイトルやキーワードから判定)
        const stackKey = determineStackKey(title + " " + query);

        // 新規タブデータの生成
        const newTab = {
            id: Date.now(),
            title: title,
            url: url,
            query: query || "直接アクセス",
            category: category,
            summary: summary,
            date: new Date().toISOString(),
            domain: domain,
            rating: domain.includes("docs") || domain.includes("developer") || url.includes("official") ? 5 : 4,
            isTrusted: domain.includes("docs") || domain.includes("developer") || url.includes("official") || domain.includes("react.dev") || domain.includes("tailwindcss.com"),
            stackKey: stackKey
        };

        // 配列の先頭に追加
        tabs.unshift(newTab);

        // フォームを閉じてクリア
        addSection.classList.remove("open");
        addForm.reset();

        // UIの再構成と描画
        initCategories();
        render();

        // 成功通知風のコンソール表示/体験
        console.log(`新規タブが保存されました: [${category}] ${title}`);
    });
}

// 簡易カテゴリ自動判定ロジック (AI風)
function autoDetermineCategory(text) {
    const textLower = text.toLowerCase();
    
    // キーワードマッチ
    const programmingKeys = ["python", "javascript", "react", "html", "css", "code", "programming", "api", "git", "github", "async", "django", "next.js", "npm"];
    const designKeys = ["design", "ui", "ux", "figma", "glassmorphism", "color", "font", "css-tricks", "イラスト", "配色", "デザイナー", "グラスモルフィズム"];
    const aiKeys = ["ai", "機械学習", "deep learning", "nlp", "llm", "gpt", "gemini", "model", "dataset", "pytorch", "tensorflow", "画像認識", "物体検出"];
    const travelKeys = ["旅行", "観光", "京都", "ホテル", "旅", "温泉", "フライト", "航空券", "マップ", "route", "trip", "travel"];

    if (aiKeys.some(key => textLower.includes(key))) return "AI・機械学習";
    if (programmingKeys.some(key => textLower.includes(key))) return "プログラミング";
    if (designKeys.some(key => textLower.includes(key))) return "デザイン";
    if (travelKeys.some(key => textLower.includes(key))) return "旅行・情報";
    
    return "その他";
}

// 類似スタックキーの判定 (簡易マッチング)
function determineStackKey(text) {
    const textLower = text.toLowerCase();
    
    if (textLower.includes("glassmorphism") || textLower.includes("グラスモルフィズム")) return "glassmorphism";
    if (textLower.includes("asyncio") || textLower.includes("非同期") || textLower.includes("async")) return "python-async";
    if (textLower.includes("react 19") || textLower.includes("react19")) return "react19";
    if (textLower.includes("京都") || textLower.includes("kyoto")) return "kyoto-travel";
    if (textLower.includes("レシピ") || textLower.includes("ハンバーグ")) return "hamburg-recipe";
    
    return null; // スタックしない
}

// 日付フォーマットヘルパー (相対時間)
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return "たった今";
    if (diffMins < 60) return `${diffMins}分前`;
    if (diffHours < 24) return `${diffHours}時間前`;
    if (diffDays === 1) return "昨日";
    if (diffDays < 7) return `${diffDays}日前`;
    
    return `${date.getMonth() + 1}月${date.getDate()}日`;
}
