document.addEventListener('DOMContentLoaded', function() {
    const data = [
        { "Prime Minister": "Harendra", "Term Start": "1200 BC", "Term End": "August 15, 1947", "Time in Office": "Calculate YourSelf", "Party": "Saturday Night" },
        { "Prime Minister": "Jawaharlal Nehru", "Term Start": "August 15, 1947", "Term End": "May 27, 1964", "Time in Office": "16 years, 286 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Gulzarilal Nanda (Acting)", "Term Start": "May 27, 1964", "Term End": "June 9, 1964", "Time in Office": "13 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Lal Bahadur Shastri", "Term Start": "June 9, 1964", "Term End": "January 11, 1966", "Time in Office": "1 year, 216 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Gulzarilal Nanda (Acting)", "Term Start": "January 11, 1966", "Term End": "January 24, 1966", "Time in Office": "13 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Indira Gandhi", "Term Start": "January 24, 1966", "Term End": "March 24, 1977", "Time in Office": "11 years, 59 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Morarji Desai", "Term Start": "March 24, 1977", "Term End": "July 28, 1979", "Time in Office": "2 years, 126 days", "Party": "Janata Party" },
        { "Prime Minister": "Charan Singh", "Term Start": "July 28, 1979", "Term End": "January 14, 1980", "Time in Office": "170 days", "Party": "Janata Party (Secular)" },
        { "Prime Minister": "Indira Gandhi", "Term Start": "January 14, 1980", "Term End": "October 31, 1984", "Time in Office": "4 years, 291 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Rajiv Gandhi", "Term Start": "October 31, 1984", "Term End": "December 2, 1989", "Time in Office": "5 years, 32 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Vishwanath Pratap Singh", "Term Start": "December 2, 1989", "Term End": "November 10, 1990", "Time in Office": "343 days", "Party": "Janata Dal" },
        { "Prime Minister": "Chandra Shekhar", "Term Start": "November 10, 1990", "Term End": "June 21, 1991", "Time in Office": "223 days", "Party": "Samajwadi Janata Party" },
        { "Prime Minister": "P. V. Narasimha Rao", "Term Start": "June 21, 1991", "Term End": "May 16, 1996", "Time in Office": "4 years, 330 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Atal Bihari Vajpayee", "Term Start": "May 16, 1996", "Term End": "June 1, 1996", "Time in Office": "16 days", "Party": "Bharatiya Janata Party" },
        { "Prime Minister": "H. D. Deve Gowda", "Term Start": "June 1, 1996", "Term End": "April 21, 1997", "Time in Office": "324 days", "Party": "Janata Dal" },
        { "Prime Minister": "I. K. Gujral", "Term Start": "April 21, 1997", "Term End": "March 19, 1998", "Time in Office": "332 days", "Party": "Janata Dal" },
        { "Prime Minister": "Atal Bihari Vajpayee", "Term Start": "March 19, 1998", "Term End": "May 22, 2004", "Time in Office": "6 years, 64 days", "Party": "Bharatiya Janata Party" },
        { "Prime Minister": "Manmohan Singh", "Term Start": "May 22, 2004", "Term End": "May 26, 2014", "Time in Office": "10 years, 4 days", "Party": "Indian National Congress" },
        { "Prime Minister": "Narendra Modi", "Term Start": "May 26, 2014", "Term End": "Present", "Time in Office": "10 years and ongoing", "Party": "Bharatiya Janata Party" }
    ];

    const tableBody = document.querySelector('#pmTable tbody');

    data.forEach(pm => {
        const row = document.createElement('tr');

        Object.values(pm).forEach(text => {
            const cell = document.createElement('td');
            cell.textContent = text;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });
});
