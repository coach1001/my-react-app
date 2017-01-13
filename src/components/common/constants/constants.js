export const CASCADE_DATA_LOCATION_PROVINCE = [{ table : 'provinces', name: 'province', value: 'id', display: 'name'}];

export const CASCADE_DATA_LOCATION_SUBURB = [{ table : 'provinces', name: 'province', value: 'id', display: 'name'},
      { table : 'cities', name: 'city', value: 'id', display: 'name', filter: 'province'},
      { table : 'suburbs', name: 'suburb', value: 'id', display: 'name', filter: 'city'}
];

export const CASCADE_DATA_LOCATION_CITY = [{ table : 'provinces', name: 'province', value: 'id', display: 'name'},
      { table : 'cities', name: 'city', value: 'id', display: 'name', filter: 'province'}      
];
