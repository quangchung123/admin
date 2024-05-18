import {LIST_PRODUCT_NAME} from "./constant";

export const sideBarOptions = [
    {
        key: "dashboard",
        name: "Dashboard",
        route: "/admin",
        icon: '<i class="bi bi-house-fill"></i>',
        children: []
    },
    {
        key: "product",
        name: "Products",
        route: "/admin/product",
        icon: '<i class="bi bi-cart-plus-fill"></i>',
        children: []
    },
    {
        key: "categories",
        name: "Categories",
        route: "/admin/categories",
        icon: '<i class="bi bi-list-ul"></i>',
        children: []
    },
    {
        key: "order",
        name: "Order",
        route: "/admin/order",
        icon: '<i class="bi bi-bag-check-fill"></i>',
        children: []
    },
    {
        key: "users",
        name: "Users",
        route: "/admin/users",
        icon: '<i class="bi bi-person-fill"></i>',
        children: []
    }
]

export const columnProduct = [
    {key: 'index', label: ''},
    {key: 'image', label: 'Image'},
    {key: 'name', label: 'Name'},
    {key: 'price', label: 'Price'},
    {key: 'count', label: 'Count'},
    {key: 'description', label: 'Description'},
    {key: 'action', label: 'Action'}
]
export const columnCategories = [
    {key: 'index', label: ''},
    {key: 'title', label: 'Title'},
    {key: 'description', label: 'Description'},
    {key: 'action', label: 'Action'}
]

export const columnOrder = [
    {key: 'index', label: ''},
    {key: LIST_PRODUCT_NAME, label: 'Tên sản phẩm'},
    {key: 'email', label: 'Email'},
    {key: 'payment', label: 'Thanh toán'},
    {key: 'status', label: 'Trạng thái'},
    {key: 'totalPrice', label: 'Tổng giá'},
    {key: 'action', label: ''}
]
export const columnUser = [
    {key: 'index', label: ''},
    {key: 'name', label: 'Name'},
    {key: 'email', label: 'Email'},
    {key: 'password', label: 'Password'},
    {key: 'action', label: 'Action'}
]

export const columnDetailProduct = [
    {key: 'image', label: 'Image'},
    {key: 'name', label: 'Name'},
    {key: 'price', label: 'Price'},
    {key: 'count', label: 'Count'},
    {key: 'description', label: 'Description'},
    // {key: 'rate', Label: 'Rate'},
    // {key: 'comment', Label: 'Comment'},
]

export const tabsUser = [
    {key: 'Admin', label: 'Admin'},
    {key: 'Customer', label: 'Customer'},
]

export const titleNameList = [
    {
        title: 'Admin'
    },
    {
        title: 'Customer'
    }
]

export const initStateProduct = {
    name: "",
    price: "",
    count: "",
    description: "",
    image: "",
    categories: ""
}

export const initStateCategory = {
    title: "",
    description: "",
}

export const initStateUser = {
    name: "",
    username: "",
    password: ""
}
export const statusOrder = [
    { key: 'Đang xử lý', label: 'Đang xử lý' },
    { key: 'Đang vận chuyển', label: 'Đang vận chuyển' },
    { key: 'Hoàn thành', label: 'Hoàn thành' },
]
export const columnDetailProductOrder = [
    {key: 'image', label: 'Image'},
    {key: 'name', label: 'Name'},
    {key: 'size', label: 'Kích cỡ'},
    {key: 'quantity', label: 'Số lượng'},
    {key: 'totalPrice', label: 'Tổng giá'},
]