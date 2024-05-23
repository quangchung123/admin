import Swal from "sweetalert2";

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
export const notify = (message) => {
    // handle notify message utils
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: message
    });
}

export const notifyConfirm = (message) => {
    // handle notify message primary
    Swal.fire({
        title: 'Thông báo!',
        text: message || "",
        confirmButtonText: 'Đóng',
        customClass: {
            popup: 'text-xs',
        },
        position: 'center',
    })
}
export const notifyConfirmDelete = async(title, action) => {
    // handle notify when action delete
    Swal.fire({
        title: title,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Đồng ý",
        denyButtonText: `Đóng`
    }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            await action()
        }
    });
}