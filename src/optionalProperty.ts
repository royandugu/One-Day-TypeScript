const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name; //basically this is optional property
  console.log(dogName);