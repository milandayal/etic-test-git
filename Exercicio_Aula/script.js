// let container = document.getElementById('container');

// const getUsers = () => {
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(result => {
//         return result.json();
//     })
//     .then(giphies => {
//         console.log(giphies);
//         let pic = giphies;

//         container.innerHTML = pic.map(photos => {
//             return `<ul>
//                 <li>${photos.name}</li>
//                 <li>${photos.email}</li>
//                 <li>${photos.website}</li>
//                 <li>${photos.address.street}</li>
//                 <li>${photos.address.suite}</li>
//                 <li>${photos.address.city}</li>
//             </ul>`;
//         }).join('')

//     })
//     .catch(error => console.log(error));
// }
// getUsers();


let container_post = document.getElementById('container_post');

const getphotos = () => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=BheAETCqyalDCCxIXIhfVj42LzHV4JBm`)
    .then(results => {
        return results.json();
    })
    .then(pics => {
        console.log(pics);
        let pic = pics;

        container.innerHTML = pic.map(photos => {
            return `<ul>
                <li>
                    <video src="${photos.data.fixed_width.url}"></video>
                </li>
            </ul>`;
        }).join('')

    })
    .catch(error => console.log(error));
}
getphotos();










// // Async giphies fetch
// async function getUsers() {
//     try {
//         const result = await fetch(`https://jsonplaceholder.typicode.com/users`);
//         const giphies = await result.json();
//         let pic = giphies;

//         container.innerHTML = pic.map(ppl => {
//             return `<ul>
//                 <li>${ppl.name}</li>
//                 <li>${ppl.email}</li>
//                 <li>${ppl.website}</li>
//             </ul>`;
//         }).join('')
//     } catch(error) {
//         alert(error);
//     }
// }
// getUsers();


// // An other way of doing it
// for (let i = 0; i < giphies.length; i++) {
//     let personEl = document.createElement('ul');
//     personEl.innerHTML = '<li>' + giphies[i].name + '</li>' +
//                         '<li>' + giphies[i].email + '</li>' +
//                         '<li>' + giphies[i].website + '</li>';
//     container.appendChild(personEl);
// }
