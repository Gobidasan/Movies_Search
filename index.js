let moves=document.querySelector('.moves');
let search=document.querySelector('button');
let result=document.querySelector('input');


result.addEventListener('keyup',movies)

    async function movies() {
        let cinema=result.value;
        let url=await fetch(`https://www.omdbapi.com/?apikey=95002294&s=${cinema}`)
        let data=await url.json();
       
        console.log(data);
        moves.innerHTML='';
        if(data.Response==='False'){
            moves.innerHTML='<h1>movies not Found</h1>';
            return;
        }
        data.Search.forEach(movie=>{
            let p=document.createElement('p');
            let img=document.createElement('img');
            let div=document.createElement('div');
            let h1=document.createElement('h1');
            let h2=document.createElement('h2');
            p.innerHTML=movie.Title;
            img.src=movie.Poster;
            h1.innerHTML=`Type : ${movie.Type}`;
            h2.innerHTML=`Year : ${movie.Year}`;
            img.src = movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/200x300?text=No+Image";
            div.append(p,img,h1,h2)
            moves.append(div)
        });
    }


