const api = async () =>{
    const results = await fetch('https://raw.githubusercontent.com/jakiichu/data/main/data.json');
    return await results.json();
};
api().then(data =>{
    const object = {
        "Город": data.address.city,
        "Улица": data.address.street,
        "Дом": data.address.house,
        "Статус": `фамилия ${data.person.lastName} имя ${data.person.firstName} купил ${data.productsOrder.count} штук товаров ${data.productsOrder.product.name}`
    };
    console.log(object)
})