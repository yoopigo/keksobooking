const filterData = (
  data,
  selectedType,
  selectedPrice,
  selectedRoom,
  selectedFeatures,
  selectedGuests
) => {
  let filteredData = data;
  if (selectedType !== 'any') {
    filteredData = filteredData.filter(
      (item) => item.offer.type === selectedType
    );
  }

  if (selectedPrice !== 'any') {
    switch (selectedPrice) {
      case 'low':
        filteredData = filteredData.filter((item) => item.offer.price < 10000);
        break;
      case 'middle':
        filteredData = filteredData.filter(
          (item) => item.offer.price >= 10000 && item.offer.price <= 50000
        );
        break;
      case 'high':
        filteredData = filteredData.filter((item) => item.offer.price > 50000);
        break;
    }
  }

  if (selectedRoom !== 'any') {
    switch (selectedRoom) {
      case '1':
        filteredData = filteredData.filter((item) => item.offer.rooms == 1);
        break;
      case '2':
        filteredData = filteredData.filter((item) => item.offer.rooms == 2);
        break;
      case '3':
        filteredData = filteredData.filter((item) => item.offer.rooms == 3);
        break;
    }
  }

  if (selectedGuests !== 'any') {
    switch (selectedGuests) {
      case '0':
        filteredData = filteredData.filter((item) => item.offer.guests == 0);
        break;
      case '1':
        filteredData = filteredData.filter((item) => item.offer.guests == 1);
        break;
      case '2':
        filteredData = filteredData.filter((item) => item.offer.guests == 2);
        break;
    }
  }

  if (selectedFeatures.length > 0) {
    filteredData = filteredData.filter((item) => {
      const itemFeatures = item.offer.features || [];
      return !selectedFeatures.some((feature) =>
        itemFeatures.includes(feature)
      );
    });
  }

  return filteredData;
};

export { filterData };
