export const handleSaveDataToStorage = (key, value) => {
    //handle save data to localStorage
    try {
        const convertState = JSON.stringify(value);
        localStorage.setItem(key, convertState);
    } catch (err) {
        console.log('error', err);
    }
}

export const handleLoadDataFromStorage = (key) => {
    //handle get data from localStorage
    try {
        const dataStore = localStorage.getItem(key);
        if(dataStore === null) {
            return undefined;
        }
        return JSON.parse(dataStore);
    } catch (err) {
        console.log('error', err)
    }
}

export const  getDataOnPage = (currentPage, dataTable, recordsPerPage) => {
    //handle show list data on each Page
    const firstIndex = (currentPage - 1) * recordsPerPage;
    const lastIndex = firstIndex + recordsPerPage;
    return dataTable?.slice(firstIndex, lastIndex).map((item, index) => ({...item, index: index + 1}));
}

export const getNameAddressByCode = (code, address) => {
    //handle get name city or district by code
    const addressFind = address.find(item => item.code === code);
    return addressFind ? addressFind.name : "";
}

export const convertToVietnameseDong = (amount) => {
    //handle convert to viet nam dong
    const parsedAmount  = parseFloat(amount)
    if (!isNaN(amount)) {
        const formattedAmount = parsedAmount .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        return formattedAmount;
    } else {
        return '--';
    }
}