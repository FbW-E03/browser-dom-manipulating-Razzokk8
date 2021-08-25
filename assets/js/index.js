const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const bigBook = document.querySelector('.book-list')

books.forEach(element=> {
const listItem = document.createElement('li')
listItem.classList.add('book', 'mb-3', 'card')
const bookDiv = document.createElement('div')
bookDiv.classList.add('card-body')
const bookH2 = document.createElement('h2')
bookH2.classList.add('book-title', 'card-title', 'h6')
bookH2.textContent = element.author.split(` `).reverse().join(` `)
const bookP = document.createElement('p')
bookP.textContent = element.title
bookP.classList.add('book-author', 'card-subtitle', 'text-muted', 'small')
const bookFooter = document.createElement('footer')
const bookSpan = document.createElement('span')
const bookImg = document.createElement('img')
bookImg.classList.add(`book-cover`, `card-img-top`, `img-fluid`)
bookImg.src = element.img
const bookLinks = document.createElement('a')
bookLinks.href = element.img
bookSpan.classList = `badge rounded-pill`
bookSpan.style.backgroundColor = `lightgreen`
bookFooter.appendChild(bookSpan)
bookLinks.appendChild(bookImg)
bookDiv.appendChild(bookP)
bookDiv.appendChild(bookH2)
listItem.appendChild(bookLinks)
listItem.appendChild(bookDiv)
listItem.appendChild(bookFooter)
listItem.appendChild(bookImg) 
bookLinks.appendChild(bookImg)
bigBook.appendChild(listItem)
bookFooter.style.display = `flex`
bookFooter.style.justifyContent = `center`
bookFooter.style.padding = `20px`

function readToRead() {
if (element.alreadyRead == true) {
return (bookSpan.innerText = 'Read');
} else {
return (
(bookSpan.innerText = 'To be Read'), (bookSpan.style.backgroundColor = 'red')
)
}
}
readToRead(); 
});






