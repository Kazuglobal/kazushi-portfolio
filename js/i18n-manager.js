/**
 * 多言語対応マネージャー
 * 翻訳データを管理し、表示テキストを動的に置き換える機能を提供
 */

class I18nManager {
    constructor() {
        this.currentLanguage = getCurrentLanguage();
        this.translatedElements = [];
    }
    
    /**
     * 翻訳キーに対応する翻訳テキストを取得
     * @param {string} key 翻訳キー
     * @param {string} lang 言語コード（未指定時は現在の言語）
     * @returns {string} 翻訳テキスト
     */
    getTranslation(key, lang = null) {
        const language = lang || this.currentLanguage;
        
        if (!translations[language] || !translations[language][key]) {
            // 対応する翻訳がない場合はデフォルト言語で取得
            if (language !== DEFAULT_LANGUAGE && translations[DEFAULT_LANGUAGE] && translations[DEFAULT_LANGUAGE][key]) {
                return translations[DEFAULT_LANGUAGE][key];
            }
            
            // デフォルト言語でもない場合はキーをそのまま返す
            return key;
        }
        
        return translations[language][key];
    }
    
    /**
     * ページ内の翻訳対象要素を全て翻訳
     */
    translatePage() {
        // data-i18n属性を持つ要素を全て取得
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            // 翻訳テキストで内容を置換
            element.textContent = translation;
            
            // 翻訳済み要素として記録
            this.translatedElements.push({
                element,
                key
            });
        });
        
        // プレースホルダーの翻訳
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            element.setAttribute('placeholder', translation);
        });
        
        // データ属性に翻訳を反映
        const dataAttrs = document.querySelectorAll('[data-i18n-attr]');
        dataAttrs.forEach(element => {
            const attrData = element.getAttribute('data-i18n-attr').split(':');
            if (attrData.length === 2) {
                const [attr, key] = attrData;
                const translation = this.getTranslation(key);
                element.setAttribute(attr, translation);
            }
        });
    }
    
    /**
     * 言語を切り替え、ページを再翻訳
     * @param {string} langCode 言語コード
     */
    changeLanguage(langCode) {
        if (!SUPPORTED_LANGUAGES.includes(langCode)) {
            return;
        }
        
        // 言語を更新
        this.currentLanguage = langCode;
        
        // 保存済みの翻訳要素を更新
        this.translatedElements.forEach(({ element, key }) => {
            const translation = this.getTranslation(key);
            element.textContent = translation;
        });
        
        // プレースホルダーも更新
        const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        placeholders.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            element.setAttribute('placeholder', translation);
        });
        
        // データ属性も更新
        const dataAttrs = document.querySelectorAll('[data-i18n-attr]');
        dataAttrs.forEach(element => {
            const attrData = element.getAttribute('data-i18n-attr').split(':');
            if (attrData.length === 2) {
                const [attr, key] = attrData;
                const translation = this.getTranslation(key);
                element.setAttribute(attr, translation);
            }
        });
        
        // カスタムイベントを発火
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: langCode }
        }));
    }
    
    /**
     * 指定要素に翻訳テキストを適用
     * @param {HTMLElement} element 要素
     * @param {string} key 翻訳キー
     */
    translateElement(element, key) {
        const translation = this.getTranslation(key);
        element.textContent = translation;
        
        // 翻訳済み要素として追加
        this.translatedElements.push({
            element,
            key
        });
    }
    
    /**
     * 言語切替ボタンのイベントハンドラを設定
     */
    setupLanguageSwitcher() {
        // 言語切替ボタン
        const langSwitchers = document.querySelectorAll('.lang-switch');
        
        langSwitchers.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = button.getAttribute('data-lang');
                
                if (targetLang && SUPPORTED_LANGUAGES.includes(targetLang)) {
                    // 言語設定を保存
                    saveLanguagePreference(targetLang);
                    
                    // 対応するURLに遷移
                    const newUrl = getLanguageVersionUrl(targetLang);
                    window.location.href = newUrl;
                }
            });
        });
    }
    
    /**
     * 現在のアクティブな言語をUIに反映
     */
    updateActiveLanguageUI() {
        const langButtons = document.querySelectorAll('.lang-switch');
        
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            
            if (btnLang === this.currentLanguage) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

// グローバルインスタンスを作成
const i18n = new I18nManager();

// ページ読み込み完了時に初期化
document.addEventListener('DOMContentLoaded', () => {
    // ページ内の翻訳対象要素を翻訳
    i18n.translatePage();
    
    // 言語切替ボタンの初期化
    i18n.setupLanguageSwitcher();
    
    // アクティブな言語をUIに反映
    i18n.updateActiveLanguageUI();
}); 