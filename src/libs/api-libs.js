/**
 * Mengambil data anime dari API dengan menggunakan resource dan query yang diberikan.
 *
 * @param {string} resource - endpoint API yang akan diakses.
 * @param {string} [query] - parameter query yang akan digunakan untuk mengambil data anime.
 * Contoh: "page=1&limit=10"
 *
 * @returns {Promise<Object>} - Promise yang berisi data anime dalam bentuk JSON.
 * Data ini berisi properti "data" yang berisi array data anime.
 */
export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
};

/**
 * Mengambil data anime yang terdapat dalam properti objectProperty dari response API berdasarkan resource yang diberikan.
 *
 * @param {string} resource - endpoint API yang akan diakses.
 * @param {string} objectProperty - nama properti object yang berisi data anime yang akan diambil.
 *
 * @returns {Promise<Array>} - Promise yang berisi array data anime yang diambil dari properti objectProperty.
 */
export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    return response.data?.flatMap(item => item[objectProperty]);
}

/**
 * Membuat salinan data anime yang dikurangi dengan gap yang diberikan.
 * Fungsi ini digunakan untuk mengurangi jumlah data anime yang diambil dari API
 * agar tidak terlalu banyak.
 *
 * @param {Array} data - data anime yang akan diolah.
 * @param {number} gap - jumlah data anime yang akan dikurangi.
 *
 * @returns {Promise<Object>} - Promise yang berisi data anime yang telah diolah.
 * Data ini berisi properti "data" yang berisi array data anime yang telah dikurangi.
 */
export const reproduce = (data, gap) => {
    const first = ~~(Math.random() * data?.length - gap) + 1
    const last = first + gap
    
    const response = {
        data: data?.slice(first, last)
    }

    return response
};