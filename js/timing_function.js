// calculation time to display in the article
function formatArticleDate(publishDate) {
    const now = new Date();
    const published = new Date(publishDate);
    const diffInMs = now - published;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInHours < 24) {
        if (diffInMinutes < 60) {
            // less than an hour - display time in minutes
            return diffInMinutes === 1 ? `${diffInMinutes} minute ago` : `${diffInMinutes} minutes ago`;
        } else {
            // one or more than an hour - display in hours
            return diffInHours === 1 ? `${diffInHours} hour ago` : `${diffInHours} hours ago`;
        };
    } else {
        return published.toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }
}

const article1PublishDate = new Date('2025-02-06T22:09:00');
document.getElementById('article1-time').textContent = formatArticleDate(article1PublishDate);

const article2PublishDate = new Date('2025-02-06T22:08:00');
document.getElementById('article2-time').textContent = formatArticleDate(article2PublishDate);

const article3PublishDate = new Date('2025-02-06T20:54:00');
document.getElementById('article3-time').textContent = formatArticleDate(article3PublishDate);

const article4PublishDate = new Date('2025-02-06T19:30:00');
document.getElementById('article4-time').textContent = formatArticleDate(article4PublishDate);

const article5PublishDate = new Date('2024-05-25T10:00:00');
document.getElementById('article5-time').textContent = formatArticleDate(article5PublishDate);

const article6PublishDate = new Date('2024-02-05T10:00:00');
document.getElementById('article6-time').textContent = formatArticleDate(article6PublishDate);

