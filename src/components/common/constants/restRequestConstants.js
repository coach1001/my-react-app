export const CASCADE_DATA_LOCATION_PROVINCE = [{ table : 'provinces', name: 'province', value: 'id', label: 'name'}];

export const CASCADE_DATA_LOCATION_SUBURB = [{ table : 'provinces', name: 'province', value: 'id', label: 'name'},
      { table : 'cities', name: 'city', value: 'id', label: 'name', filter: 'province'},
      { table : 'suburbs', name: 'suburb', value: 'id', label: 'name', filter: 'city'}
];

export const CASCADE_DATA_LOCATION_CITY = [{ table : 'provinces', name: 'province', value: 'id', label: 'name'},
      { table : 'cities', name: 'city', value: 'id', label: 'name', filter: 'province'}      
];
