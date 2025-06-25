/**
 * 多言語対応ユーティリティ
 */

// サポートされている言語
const SUPPORTED_LANGUAGES = ['ja', 'en'];
const DEFAULT_LANGUAGE = 'ja';

// 言語設定の保存キー
const LANGUAGE_STORAGE_KEY = 'preferred_language';

/**
 * 現在のURLから言語コードを取得
 * @returns {string} 言語コード（ja/en）
 */
function getLanguageFromUrl() {
    const urlPath = window.location.pathname;
    
    // /en/ で始まるパスは英語
    if (urlPath.startsWith('/en/') || urlPath === '/en') {
        return 'en';
    }
    
    return DEFAULT_LANGUAGE;
}

/**
 * ブラウザ設定から言語を検出
 * @returns {string} 検出された言語コード
 */
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    
    // 英語系の場合は英語、それ以外はデフォルト言語
    if (browserLang.startsWith('en')) {
        return 'en';
    }
    
    return DEFAULT_LANGUAGE;
}

/**
 * 現在のユーザー設定言語を取得
 * 優先順位: 1.保存された設定 > 2.URL > 3.ブラウザ設定
 * @returns {string} 言語コード
 */
function getCurrentLanguage() {
    // 1. 保存された設定から取得
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && SUPPORTED_LANGUAGES.includes(savedLanguage)) {
        return savedLanguage;
    }
    
    // 2. URLから取得
    const urlLanguage = getLanguageFromUrl();
    if (urlLanguage !== DEFAULT_LANGUAGE) {
        return urlLanguage;
    }
    
    // 3. ブラウザ設定から検出
    return detectBrowserLanguage();
}

/**
 * 言語設定を保存
 * @param {string} langCode 言語コード（ja/en）
 */
function saveLanguagePreference(langCode) {
    if (SUPPORTED_LANGUAGES.includes(langCode)) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, langCode);
    }
}

/**
 * 現在のページの言語版URLを取得
 * @param {string} langCode 言語コード（ja/en）
 * @returns {string} 対応する言語版のURL
 */
function getLanguageVersionUrl(langCode) {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    // 現在の言語を取得
    const currentLang = getLanguageFromUrl();
    
    let newPath = currentPath;
    
    // 現在が英語版で、日本語に切り替える場合
    if (currentLang === 'en' && langCode === 'ja') {
        newPath = currentPath.replace(/^\/en(\/|$)/, '/');
    } 
    // 現在が日本語版で、英語に切り替える場合
    else if (currentLang === 'ja' && langCode === 'en') {
        // URLのパスを /en/～ にする
        if (currentPath === '/') {
            newPath = '/en';
        } else {
            newPath = '/en' + currentPath;
        }
    }
    
    return newPath + currentSearch + currentHash;
}

/**
 * 言語を切り替える
 * @param {string} langCode 切り替え先の言語コード
 */
function switchLanguage(langCode) {
    if (!SUPPORTED_LANGUAGES.includes(langCode)) {
        return;
    }
    
    // 言語設定を保存
    saveLanguagePreference(langCode);
    
    // 対応するURLに遷移
    const newUrl = getLanguageVersionUrl(langCode);
    window.location.href = newUrl;
}

/**
 * HTMLのlang属性を設定
 */
function setHtmlLangAttribute() {
    const currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang;
}

// ページ読み込み時にHTMLのlang属性を設定
document.addEventListener('DOMContentLoaded', setHtmlLangAttribute); 