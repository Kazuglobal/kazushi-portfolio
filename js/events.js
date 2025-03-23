/**
 * Events Page JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const eventsContainer = document.querySelector('.events-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('event-search');
    const searchBtn = document.getElementById('search-btn');
    const noResultsMessage = document.querySelector('.no-results-message');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const calendarDates = document.getElementById('calendar-dates');
    const currentMonthYearElem = document.getElementById('current-month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    // Variables
    let allEvents = [];
    let displayedEvents = [];
    let currentFilter = 'all';
    let searchQuery = '';
    let visibleEventsCount = 6; // Number of events to show initially
    let currentDate = new Date();
    let selectedDate = null;
    
    // Check if the page is English or Japanese
    const isEnglish = document.documentElement.lang === 'en';

    // Fetch events data
    fetchEvents();

    // Event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            currentFilter = filter;
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            visibleEventsCount = 6; // Reset visible count when filter changes
            filterAndDisplayEvents();
        });
    });

    searchInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            searchEvents();
        }
    });

    searchBtn.addEventListener('click', searchEvents);

    loadMoreBtn.addEventListener('click', function() {
        visibleEventsCount += 6;
        filterAndDisplayEvents();
    });

    prevMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    // Functions
    function fetchEvents() {
        // In a real application, this would be an API call to fetch events
        // For now, we'll use some dummy data
        
        // Japanese events data
        const jaEvents = [
            {
                id: 1,
                title: 'フルスタック開発: フロントエンドからバックエンドまで',
                description: 'モダンなWebアプリケーション開発の全体像を解説。ReactからNode.jsまで実践的なデモを交えて紹介します。',
                category: 'speaking',
                date: '2023-10-15',
                time: '13:30 - 15:30',
                location: 'テックカンファレンス東京',
                organizer: 'DevCommunity Tokyo',
                image: 'images/events/event1.jpg',
                fee: '5,000円',
                url: '#'
            },
            {
                id: 2,
                title: 'クラウドネイティブアプリケーション構築ワークショップ',
                description: 'AWS、GCPを活用したスケーラブルなアプリケーション構築のベストプラクティスを学びます。',
                category: 'organizing',
                date: '2023-11-25',
                time: '10:00 - 17:00',
                location: 'オンライン',
                organizer: '和志',
                image: 'images/events/event2.jpg',
                fee: '無料',
                url: '#'
            },
            {
                id: 3,
                title: 'APIデザイン実践セミナー',
                description: 'RESTful APIとGraphQLの設計パターンとベストプラクティスを解説します。実例を交えた実践的な内容です。',
                category: 'speaking',
                date: '2023-12-05',
                time: '14:00 - 16:00',
                location: 'デベロッパーズハブ大阪',
                organizer: 'APIエキスパートコミュニティ',
                image: 'images/events/event3.jpg',
                fee: '3,000円',
                url: '#'
            },
            {
                id: 4,
                title: 'デベロッパーカンファレンス2023',
                description: '最新の開発トレンドとツールについて学ぶ年次イベント。業界をリードするスピーカーによるセッションが多数。',
                category: 'attending',
                date: '2023-12-15',
                time: '9:00 - 18:00',
                location: '福岡国際会議場',
                organizer: 'テックイノベーション協会',
                image: 'images/events/event4.jpg',
                fee: '10,000円',
                url: '#'
            },
            {
                id: 5,
                title: 'Webパフォーマンス最適化ワークショップ',
                description: 'Webサイトとアプリケーションのパフォーマンスを改善するための実践的なテクニックを紹介します。',
                category: 'organizing',
                date: '2024-01-20',
                time: '13:00 - 17:00',
                location: 'コワーキングスペースTech',
                organizer: '和志',
                image: 'images/events/event5.jpg',
                fee: '3,000円',
                url: '#'
            },
            {
                id: 6,
                title: 'モバイルアプリ開発最新動向',
                description: 'Flutter、React Native、SwiftUIなど、クロスプラットフォーム開発の最新トレンドとベストプラクティス。',
                category: 'speaking',
                date: '2024-02-10',
                time: '15:00 - 17:00',
                location: 'テックハブ渋谷',
                organizer: 'モバイルデベロッパーズ',
                image: 'images/events/event1.jpg',
                fee: '5,000円',
                url: '#'
            },
            {
                id: 7,
                title: 'デザインシステム構築セミナー',
                description: 'スケーラブルなデザインシステムの構築と実装について、実践的なアプローチを解説します。',
                category: 'attending',
                date: '2024-02-25',
                time: '10:00 - 12:00',
                location: 'オンライン',
                organizer: 'UIUXデザイナーズギルド',
                image: 'images/events/event2.jpg',
                fee: '無料',
                url: '#'
            },
            {
                id: 8,
                title: 'テスト駆動開発実践ワークショップ',
                description: 'TDDの基本から応用まで、実践的なワークショップ形式で学びます。自動テスト戦略も解説。',
                category: 'organizing',
                date: '2024-03-15',
                time: '9:30 - 16:30',
                location: 'コワーキングスペース名古屋',
                organizer: '和志',
                image: 'images/events/event3.jpg',
                fee: '8,000円',
                url: '#'
            }
        ];
        
        // English events data
        const enEvents = [
            {
                id: 1,
                title: 'Full-Stack Development: From Frontend to Backend',
                description: 'A comprehensive overview of modern web application development, featuring practical demonstrations from React to Node.js.',
                category: 'speaking',
                date: '2023-10-15',
                time: '13:30 - 15:30',
                location: 'Tech Conference Tokyo',
                organizer: 'DevCommunity Tokyo',
                image: '../images/events/event1.jpg',
                fee: '¥5,000',
                url: '#'
            },
            {
                id: 2,
                title: 'Cloud-Native Application Building Workshop',
                description: 'Learn best practices for building scalable applications using AWS and GCP.',
                category: 'organizing',
                date: '2023-11-25',
                time: '10:00 - 17:00',
                location: 'Online',
                organizer: 'Kazushi',
                image: '../images/events/event2.jpg',
                fee: 'Free',
                url: '#'
            },
            {
                id: 3,
                title: 'API Design in Practice Seminar',
                description: 'An exploration of RESTful API and GraphQL design patterns and best practices with real-world examples.',
                category: 'speaking',
                date: '2023-12-05',
                time: '14:00 - 16:00',
                location: 'Developers Hub Osaka',
                organizer: 'API Expert Community',
                image: '../images/events/event3.jpg',
                fee: '¥3,000',
                url: '#'
            },
            {
                id: 4,
                title: 'Developers Conference 2023',
                description: 'Annual event to learn about the latest development trends and tools, featuring sessions by industry-leading speakers.',
                category: 'attending',
                date: '2023-12-15',
                time: '9:00 - 18:00',
                location: 'Fukuoka International Conference Hall',
                organizer: 'Tech Innovation Association',
                image: '../images/events/event4.jpg',
                fee: '¥10,000',
                url: '#'
            },
            {
                id: 5,
                title: 'Web Performance Optimization Workshop',
                description: 'Practical techniques for improving the performance of websites and applications.',
                category: 'organizing',
                date: '2024-01-20',
                time: '13:00 - 17:00',
                location: 'Coworking Space Tech',
                organizer: 'Kazushi',
                image: '../images/events/event5.jpg',
                fee: '¥3,000',
                url: '#'
            },
            {
                id: 6,
                title: 'Mobile App Development Trends',
                description: 'Latest trends and best practices in cross-platform development including Flutter, React Native, and SwiftUI.',
                category: 'speaking',
                date: '2024-02-10',
                time: '15:00 - 17:00',
                location: 'Tech Hub Shibuya',
                organizer: 'Mobile Developers',
                image: '../images/events/event1.jpg',
                fee: '¥5,000',
                url: '#'
            },
            {
                id: 7,
                title: 'Design System Construction Seminar',
                description: 'Practical approaches to building and implementing scalable design systems.',
                category: 'attending',
                date: '2024-02-25',
                time: '10:00 - 12:00',
                location: 'Online',
                organizer: 'UIUX Designers Guild',
                image: '../images/events/event2.jpg',
                fee: 'Free',
                url: '#'
            },
            {
                id: 8,
                title: 'Test-Driven Development Workshop',
                description: 'Learn TDD from basics to advanced applications in this hands-on workshop, including automated testing strategies.',
                category: 'organizing',
                date: '2024-03-15',
                time: '9:30 - 16:30',
                location: 'Coworking Space Nagoya',
                organizer: 'Kazushi',
                image: '../images/events/event3.jpg',
                fee: '¥8,000',
                url: '#'
            }
        ];
        
        // Choose the appropriate events data based on the language
        allEvents = isEnglish ? enEvents : jaEvents;
        
        displayedEvents = [...allEvents];
        renderEvents();
        renderCalendar();
    }

    function filterAndDisplayEvents() {
        // Filter events by category and search query
        displayedEvents = allEvents.filter(event => {
            const matchesCategory = currentFilter === 'all' || event.category === currentFilter;
            const matchesSearch = !searchQuery || 
                                 event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                 event.location.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });

        // Filter by selected date if there is one
        if (selectedDate) {
            const dateStr = formatDateForComparison(selectedDate);
            displayedEvents = displayedEvents.filter(event => event.date === dateStr);
        }

        renderEvents();
    }

    function searchEvents() {
        searchQuery = searchInput.value.trim();
        visibleEventsCount = 6; // Reset visible count when search changes
        filterAndDisplayEvents();
    }

    function renderEvents() {
        eventsContainer.innerHTML = '';
        
        if (displayedEvents.length === 0) {
            noResultsMessage.style.display = 'block';
            loadMoreBtn.style.display = 'none';
            return;
        }
        
        noResultsMessage.style.display = 'none';
        
        // Display only the number of events based on visibleEventsCount
        const eventsToShow = displayedEvents.slice(0, visibleEventsCount);
        
        eventsToShow.forEach(event => {
            const eventElement = createEventCard(event);
            eventsContainer.appendChild(eventElement);
        });
        
        // Show or hide the load more button
        if (displayedEvents.length > visibleEventsCount) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    function createEventCard(event) {
        const dateObj = new Date(event.date);
        
        // Month format based on language
        let month, detailsText;
        if (isEnglish) {
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            month = monthNames[dateObj.getMonth()];
            detailsText = 'Details & Registration';
        } else {
            const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            month = monthNames[dateObj.getMonth()];
            detailsText = '詳細・申込み';
        }
        
        const day = dateObj.getDate();
        
        const card = document.createElement('div');
        card.className = 'event-card';
        card.setAttribute('data-id', event.id);
        
        card.innerHTML = `
            <div class="event-card-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-date-badge">
                    <span class="month">${month}</span>
                    <span class="day">${day}</span>
                </div>
            </div>
            <div class="event-card-content">
                <span class="event-category ${event.category}">${getCategoryLabel(event.category)}</span>
                <h3>${event.title}</h3>
                <div class="event-card-meta">
                    <div class="event-card-meta-item">
                        <i class="far fa-calendar-alt"></i>
                        <span>${formatDate(event.date)}</span>
                    </div>
                    <div class="event-card-meta-item">
                        <i class="far fa-clock"></i>
                        <span>${event.time}</span>
                    </div>
                    <div class="event-card-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${event.location}</span>
                    </div>
                    <div class="event-card-meta-item">
                        <i class="far fa-user"></i>
                        <span>${event.organizer}</span>
                    </div>
                </div>
                <div class="event-card-description">
                    ${event.description}
                </div>
                <div class="event-card-footer">
                    <div class="event-fee">${event.fee}</div>
                    <div class="event-action">
                        <a href="${event.url}" class="btn register-btn">${detailsText}</a>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }

    function getCategoryLabel(category) {
        const labels = isEnglish ? 
            {
                'speaking': 'Speaking',
                'organizing': 'Organizing',
                'attending': 'Attending'
            } :
            {
                'speaking': '登壇',
                'organizing': '主催',
                'attending': '参加'
            };
        return labels[category] || category;
    }

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        
        if (isEnglish) {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return `${monthNames[month-1]} ${day}, ${year}`;
        } else {
            return `${year}年${month}月${day}日`;
        }
    }

    function formatDateForComparison(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function renderCalendar() {
        // Set the calendar header
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        
        if (isEnglish) {
            const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            currentMonthYearElem.textContent = `${monthNames[month-1]} ${year}`;
        } else {
            currentMonthYearElem.textContent = `${year}年${month}月`;
        }
        
        // Get the first day of the month
        const firstDay = new Date(year, month - 1, 1);
        const firstDayIndex = firstDay.getDay(); // 0 is Sunday, 1 is Monday, etc.
        
        // Get the last day of the month
        const lastDay = new Date(year, month, 0);
        const lastDate = lastDay.getDate();
        
        // Get the last date of the previous month
        const prevLastDay = new Date(year, month - 1, 0);
        const prevLastDate = prevLastDay.getDate();
        
        calendarDates.innerHTML = '';
        
        // Fill in days from previous month
        for (let i = firstDayIndex; i > 0; i--) {
            const dateCell = createDateCell(prevLastDate - i + 1, 'other-month');
            calendarDates.appendChild(dateCell);
        }
        
        // Fill in days of current month
        for (let i = 1; i <= lastDate; i++) {
            // Check if this date has events
            const currentDateObj = new Date(year, month - 1, i);
            const dateStr = formatDateForComparison(currentDateObj);
            
            const hasEvent = allEvents.some(event => event.date === dateStr);
            
            let className = '';
            if (hasEvent) className += ' has-event';
            
            // Check if this is today
            const today = new Date();
            if (i === today.getDate() && 
                month === today.getMonth() + 1 && 
                year === today.getFullYear()) {
                className += ' today';
            }
            
            // Check if this is the selected date
            if (selectedDate && 
                i === selectedDate.getDate() && 
                month === selectedDate.getMonth() + 1 && 
                year === selectedDate.getFullYear()) {
                className += ' selected';
            }
            
            const dateCell = createDateCell(i, className);
            calendarDates.appendChild(dateCell);
        }
        
        // Calculate how many more cells we need to fill
        const totalCells = 42; // 6 rows x 7 days
        const remainingCells = totalCells - (firstDayIndex + lastDate);
        
        // Fill in days from next month
        for (let i = 1; i <= remainingCells; i++) {
            const dateCell = createDateCell(i, 'other-month');
            calendarDates.appendChild(dateCell);
        }
    }

    function createDateCell(day, className) {
        const dateCell = document.createElement('div');
        dateCell.className = `calendar-date ${className || ''}`;
        dateCell.textContent = day;
        
        dateCell.addEventListener('click', function() {
            // Don't do anything for dates from other months
            if (className && className.includes('other-month')) return;
            
            // If the date is already selected, clear the selection
            if (className && className.includes('selected')) {
                selectedDate = null;
                this.classList.remove('selected');
                // Reset to show all events based on current filter and search
                filterAndDisplayEvents();
                return;
            }
            
            // Remove selected class from previous selection
            const prevSelected = document.querySelector('.calendar-date.selected');
            if (prevSelected) prevSelected.classList.remove('selected');
            
            // Mark this date as selected
            this.classList.add('selected');
            
            // Set the selected date
            selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            
            // Filter events by this date
            filterAndDisplayEvents();
        });
        
        return dateCell;
    }
}); 