let elMainList = document.querySelector('.pokemon-list')
let elSearchInput = document.querySelector(".search-input")
let elSelected = document.querySelector(".selected-pokemon")

function renderPokemons(arr, list) {
    list.innerHTML = null

    arr.forEach(item => {
        let elListItem = document.createElement("li")
        elListItem.className = `w-[250px] text-center bg-[#E7EFF6] h-[200px] relative pb-[10px] rounded-[50%] pt-[60px] mt-[50px] hover:rounded-[70px] hover:bg-gray-500 duration-200 cursor-pointer`
        elListItem.innerHTML = `
            <img src="${item.img}" alt="${item.name} width="200" height="200" class="mx-auto absolute top-[-50px] left-0 right-0">
            <span>${item.num}</span>
            <h2 class="font-bold text-[22px] my-[10px]">${item.name}</h2>
            <div>
                Type: ${item.type.map(value => `<button class="bg-blue-400 py-[5px] rounded-md px-[5px]">${value}</button>`)}
            </div>
        `
        list.append(elListItem)

        elListItem.addEventListener("click", function(e) {
            elSelected.innerHTML = `
            <img src="${item.img}" alt="${item.name} width="200" height="200" class="mx-auto">
            <div class="text-center">
                <span>${item.num}</span>
            <h2 class="font-bold text-[22px] my-[10px]">${item.name}</h2>
            <div class="text-[25px] font-bold">
                Type: ${item.type.map(value => `<button class="bg-blue-400 py-[5px] rounded-md px-[5px] text-[20px] text-white">${value}</button>`)}
            </div>
            <i class="mt-[30px] block">Pokémon are these super cool creatures that live in their own world, alongside humans. Each one has unique abilities, personalities, and designs—some are inspired by animals, others by myths, and even random objects like ice cream or keys (yep, that's a thing)</i>
            </div>
            `
        })
    })
}
renderPokemons(pokemons, elMainList)

elSearchInput.addEventListener("input", function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const filterData = pokemons.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        String(item.num).includes(searchTerm) 
    );
    renderPokemons(filterData, elMainList);
});
