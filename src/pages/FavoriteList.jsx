import { useState } from 'react';

function FavoritePerson() {
  const [person, setPerson] = useState({ name: 'Spongebob', age: 0, status: 'alive', gender: 'it' });
  const [listPerson, setListPerson] = useState([person]);

  function handleAddPerson() {
    setListPerson((lp) => [...lp, person]);
  }

  function handleNameChange(event) {
    setPerson((p) => ({ ...p, name: event.target.value }));
  }
  function handleAgeChange(event) {
    setPerson((p) => ({ ...p, age: event.target.value }));
  }
  function handleStatusChange(event) {
    setPerson((p) => ({ ...p, status: event.target.value }));
  }
  function handleGenderChange(event) {
    setPerson((p) => ({ ...p, gender: event.target.value }));
  }
  function handleRemovePerson(index) {
    setListPerson((lp) => lp.filter((_, i) => i !== index));
  }

  //Debugging in React is so weird man

  console.clear();
  console.table(listPerson);
  return (
    <div className="text-center bg-slate-900 block w-fit mx-auto p-5 rounded text-white font-quicksand mt-5">
      <h1 className="text-3xl font-bold">My Favorite Person{listPerson.length > 1 && 's'}</h1>
      <ul>
        {listPerson.map((person, index) => (
          <li className="text-sm" key={index}>
            My favorite {person.status} person is {person.name}, and {person.gender === 'it' ? 'it' : person.gender === 'He' ? 'he' : 'she'} is currently {person.age} years old.
            <button className="bg-slate-100 rounded m-1" onClick={() => handleRemovePerson(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex gap-1 text-slate-900">
        <label className="text-white">
          <input onChange={handleStatusChange} type="radio" name="isAlive" value={'alive'} checked={person.status === 'alive'} />
          Alive
        </label>
        <label className="text-white">
          <input onChange={handleStatusChange} type="radio" name="isAlive" value={'dead'} />
          Dead
        </label>
        <input className="w-1/2 rounded p-1" type="text" onChange={handleNameChange} placeholder="Name here..." />
        <label className="text-white">
          <input onChange={handleGenderChange} type="radio" name="Gender" value={'He'} />
          He
        </label>
        <label className="text-white">
          <input onChange={handleGenderChange} type="radio" name="Gender" value={'She'} />
          She
        </label>
        <input className="w-1/6 rounded p-1" type="number" onChange={handleAgeChange} min={0} placeholder="Age here..." />
      </div>
      <button className="p-1 rounded bg-green-600 font-bold mt-2" onClick={() => handleAddPerson()}>
        Add Person
      </button>
    </div>
  );
}

function FavoriteFood() {
  const [listFood, setListFood] = useState(['Banana', 'Orange', 'Melon']);

  function handleAddFood() {
    const newFood = document.getElementById('input-food').value;
    document.getElementById('input-food').value = '';
    setListFood((prevListFood) => [...prevListFood, newFood]);
  }

  function handleRemoveFood(index) {
    setListFood((prevListFood) => prevListFood.filter((_, i) => i !== index));
  }

  return (
    <>
      <FavoritePerson></FavoritePerson>
      <div className="text-center bg-slate-900 block w-fit mx-auto p-5 rounded text-white font-quicksand my-5">
        <h1 className="text-3xl font-bold">My Favorite Foods</h1>
        <p className="text-sm">Munch munch munch!</p>
        <ul className="text-start px-5 py-2">
          <li className="font-bold">My foods</li>
          {listFood.map((food, index) => (
            <li className="flex justify-between" key={food}>
              <p className="inline-block m-1">{food}</p>
              <button className="bg-slate-100 rounded m-1" onClick={() => handleRemoveFood(index)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
        <input className="text-slate-900 p-1 rounded" type="text" placeholder="Add some foods..." id="input-food" />
        <button className="p-1 rounded bg-green-600 font-bold mx-1" onClick={handleAddFood}>
          Add
        </button>
      </div>
    </>
  );
}
export default FavoriteFood;
