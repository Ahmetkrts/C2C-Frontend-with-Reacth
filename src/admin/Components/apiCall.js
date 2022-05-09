import axios from "axios"

//Category Start
export const createCategory = (body) => {
    return axios.post("/api/Categories/add", body);
}

export const getAllCategory = () => {
    return axios.get("/api/Categories/getAll");
}
export const getByCategoryId = (categoryId) => {
    categoryId = parseInt(categoryId);
    return axios.get("/api/Categories/getByCategoryId?categoryId=" + categoryId);
}

export const updateCategory = (body) => {
    return axios.put("/api/Categories/update", body);
}

export const deleteCategory = (categoryId) => {
    return axios.delete("/api/Categories/delete", {
        data: {
            categoryId: categoryId
        }
    });
}
//Category End
//Images Start

export const createImage = (body) => {
    return axios.post("/api/Images/add", body);
}

export const getAllImage = () => {
    return axios.get("/api/Images/getAll");
}
export const getByImageId = (imageId) => {
    imageId = parseInt(imageId);
    return axios.get("/api/Images/getByImageId?imageId=" + imageId);
}

export const updateImage = (body) => {
    return axios.put("/api/Images/update", body);
}

export const deleteImage = (imageId) => {
    return axios.delete("/api/Images/delete", {
        data: {
            imageId: imageId
        }
    });
}
//Images End

//Users Start

export const createUser = (body) => {
    return axios.post("/api/Users/add", body);
}

export const getAllUser = () => {
    return axios.get("/api/Users/getAll");
}
export const getByUserId = (userId) => {
    userId = parseInt(userId);
    return axios.get("/api/Users/getByUserId?userId=" + userId);
}

export const updateUser = (body) => {
    return axios.put("/api/Users/update", body);
}

export const deleteUser = (userId) => {
    return axios.delete("/api/Users/delete", {
        data: {
            userId: userId
        }
    });
}
//Users End

//Colors Start

export const createColor = (body) => {
    return axios.post("/api/Colors/add", body);
}

export const getAllColor = () => {
    return axios.get("/api/Colors/getAll");
}
export const getByColorId = (colorId) => {
    colorId = parseInt(colorId);
    return axios.get("/api/Colors/getByColorId?colorId=" + colorId);
}

export const updateColor = (body) => {
    return axios.put("/api/Colors/update", body);
}

export const deleteColor = (colorId) => {
    return axios.delete("/api/Colors/delete", {
        data: {
            colorId: colorId
        }
    });
}
//Colors End

//Brands Start

export const createBrand = (body) => {
    return axios.post("/api/Brands/add", body);
}

export const getAllBrand = () => {
    return axios.get("/api/Brands/getAll");
}
export const getByBrandId = (brandId) => {
    brandId = parseInt(brandId);
    return axios.get("/api/Brands/getByBrandId?brandId=" + brandId);
}

export const updateBrand = (body) => {
    return axios.put("/api/Brands/update", body);
}

export const deleteBrand = (brandId) => {
    return axios.delete("/api/Brands/delete", {
        data: {
            brandId: brandId
        }
    });
}
//Brands End

//Adresss Start

export const createAdress = (body) => {
    return axios.post("/api/Addresss/add", body);
}

export const getAllAdress = () => {
    return axios.get("/api/Addresss/getAll");
}
export const getByAdressId = (adressId) => {
    adressId = parseInt(adressId);
    return axios.get("/api/Addresss/getByAddressId?addressId=" + adressId);
}

export const updateAdress = (body) => {
    return axios.put("/api/Addresss/update", body);
}

export const deleteAdress = (adressId) => {
    return axios.delete("/api/Addresss/delete", {
        data: {
            addressId: adressId
        }
    });
}
//Adresss End

//Sizes Start

export const createSize = (body) => {
    return axios.post("/api/Sizes/add", body);
}

export const getAllSize = () => {
    return axios.get("/api/Sizes/getAll");
}
export const getBySizeId = (sizeId) => {
    sizeId = parseInt(sizeId);
    return axios.get("/api/Sizes/getBySizeId?sizeId=" + sizeId);
}

export const updateSize = (body) => {
    return axios.put("/api/Sizes/update", body);
}

export const deleteSize = (sizeId) => {
    return axios.delete("/api/Sizes/delete", {
        data: {
            sizeId: sizeId
        }
    });
}
//Sizes End

//Products Start

export const createProduct = (body) => {
    return axios.post("/api/Products/add", body);
}

export const getAllProduct = () => {
    return axios.get("/api/Products/getAll");
}
export const getByProductId = (productId) => {
    productId = parseInt(productId);
    return axios.get("/api/Products/getByProductId?productId=" + productId);
}

export const updateProduct = (body) => {
    return axios.put("/api/Products/update", body);
}

export const deleteProduct = (productId) => {
    return axios.delete("/api/Products/delete", {
        data: {
            productId: productId
        }
    });
}
//Products End
//Comments Start

export const createComment = (body) => {
    return axios.post("/api/Comments/add", body);
}

export const getAllComment = () => {
    return axios.get("/api/Comments/getAll");
}
export const getByCommentId = (commentId) => {
    commentId = parseInt(commentId);
    return axios.get("/api/Comments/getByCommentId?commentId=" + commentId);
}

export const updateComment = (body) => {
    return axios.put("/api/Comments/update", body);
}

export const deleteComment = (commentId) => {
    return axios.delete("/api/Comments/delete", {
        data: {
            commentId: commentId
        }
    });
}
//Comments End


