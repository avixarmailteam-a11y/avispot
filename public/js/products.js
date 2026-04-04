/* ============================================
   AYGÜL SPOT — products.js
   Ürün Listeleme sayfası mantığı
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const filterForm = document.getElementById('filter-form');
    const productsGrid = document.getElementById('products-list-grid');
    const noProductsState = document.getElementById('no-products');
    const loadingSpinner = document.getElementById('loading');
    const btnClear = document.getElementById('btn-clear');

    // Parse URL parameters for initial load
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category');
    
    if (initialCategory) {
        document.getElementById('category').value = initialCategory;
    }

    async function fetchProducts(params = {}) {
        try {
            productsGrid.style.display = 'none';
            noProductsState.style.display = 'none';
            loadingSpinner.style.display = 'block';

            const queryParams = new URLSearchParams();
            if (params.search) queryParams.append('search', params.search);
            if (params.category) queryParams.append('category', params.category);

            const res = await fetch(`/api/products?${queryParams.toString()}`);
            if (!res.ok) throw new Error('API Hatası: ' + res.status);
            const products = await res.json();

            loadingSpinner.style.display = 'none';

            if (products.length === 0) {
                noProductsState.style.display = 'block';
            } else {
                productsGrid.style.display = 'grid';
                productsGrid.innerHTML = products.map(p => createProductCardHTML(p)).join('');
                productsGrid.classList.add('visible');
            }
        } catch (error) {
            console.error('Ürün yükleme hatası:', error);
            loadingSpinner.style.display = 'none';
            showToast('Ürünler yüklenirken bir hata oluştu.', 'error');
        }
    }

    // Initial Load
    fetchProducts({
        category: initialCategory
    });

    // Form Submit
    filterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const search = document.getElementById('search').value;
        const category = document.getElementById('category').value;

        // Update URL state softly
        const newUrl = new URL(window.location);
        newUrl.searchParams.set('search', search);
        newUrl.searchParams.set('category', category);
        if(!search) newUrl.searchParams.delete('search');
        if(!category) newUrl.searchParams.delete('category');
        window.history.pushState({}, '', newUrl);

        fetchProducts({ search, category });
    });

    // Clear Filters
    btnClear.addEventListener('click', () => {
        document.getElementById('search').value = '';
        document.getElementById('category').value = '';
        
        window.history.pushState({}, '', window.location.pathname);
        fetchProducts();
    });
});
