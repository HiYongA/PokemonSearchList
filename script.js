const pokemons = [
  {
    id: 1,
    name: "삐삐",
    type: "페어리",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003501.png",
  },
  {
    id: 2,
    name: "피카츄",
    type: "전기",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002501.png",
  },
  {
    id: 3,
    name: "라이츄",
    type: "전기",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/002601.png",
  },
  {
    id: 4,
    name: "꼬부기",
    type: "물",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png",
  },
  {
    id: 5,
    name: "파이리",
    type: "불꽃",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png",
  },
  {
    id: 6,
    name: "이상해씨",
    type: "풀, 독",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png",
  },
  {
    id: 7,
    name: "푸린",
    type: "노말, 페어리",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003901.png",
  },
  {
    id: 8,
    name: "고라파덕",
    type: "물",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/005401.png",
  },
  {
    id: 9,
    name: "쥬쥬",
    type: "물",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/008601.png",
  },
  {
    id: 10,
    name: "식스테일",
    type: "얼음",
    url: "https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/003702.png",
  },
];

const list = document.getElementById("list");

function showList(val = "") {
  list.innerHTML = "";
  pokemons.forEach((pokemon) => {
    if (pokemon.name.includes(val)) {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${pokemon.url}" ait="${pokemon.name}">
        <p>이름: ${pokemon.name}</p>
        <p>type: ${pokemon.type}</p>
      `;
      list.appendChild(li);
    }
  }); // end showList
}

showList();

// 검색기능
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const val = searchInput.value;
  console.log(val);
  showList(val); // 초기 리스트 보여주기
});
